import "server-only";
import { listBlockChildren, queryDatabase } from "@/lib/notion/client";
import { mapDetail, mapPageToContentItem } from "@/lib/notion/mappers";
import type { NotionContentDetail, NotionContentItem } from "@/lib/notion/types";

type NotionQueryResponse = {
  results?: Array<Record<string, unknown>>;
};

const NEWS_DATABASE_ID = process.env.NOTION_NEWS_DATABASE_ID ?? "";
const CASE_DATABASE_ID = process.env.NOTION_CASE_DATABASE_ID ?? "";

function ensureDatabaseId(name: string, value: string): string {
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

async function fetchList(databaseId: string, locale: string): Promise<NotionContentItem[]> {
  const response = (await queryDatabase(databaseId, {
    filter: {
      property: "Locale",
      rich_text: { equals: locale },
    },
    sorts: [
      {
        property: "PublishedAt",
        direction: "descending",
      },
    ],
  })) as NotionQueryResponse;

  return (response.results ?? [])
    .map((page) => mapPageToContentItem(page))
    .filter((item) => Boolean(item.id && item.slug && item.title));
}

async function fetchBySlug(databaseId: string, slug: string, locale: string): Promise<NotionContentDetail | null> {
  const response = (await queryDatabase(databaseId, {
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Locale", rich_text: { equals: locale } },
      ],
    },
    page_size: 1,
  })) as NotionQueryResponse;

  const page = response.results?.[0];
  if (!page) {
    return null;
  }

  const pageId = typeof page.id === "string" ? page.id : "";
  if (!pageId) {
    return null;
  }

  const blocks = await listBlockChildren(pageId);
  return mapDetail(page, blocks);
}

export async function fetchNewsList(locale: string): Promise<NotionContentItem[]> {
  return fetchList(ensureDatabaseId("NOTION_NEWS_DATABASE_ID", NEWS_DATABASE_ID), locale);
}

export async function fetchNewsBySlug(slug: string, locale: string): Promise<NotionContentDetail | null> {
  return fetchBySlug(ensureDatabaseId("NOTION_NEWS_DATABASE_ID", NEWS_DATABASE_ID), slug, locale);
}

export async function fetchCaseList(locale: string): Promise<NotionContentItem[]> {
  return fetchList(ensureDatabaseId("NOTION_CASE_DATABASE_ID", CASE_DATABASE_ID), locale);
}

export async function fetchCaseBySlug(slug: string, locale: string): Promise<NotionContentDetail | null> {
  return fetchBySlug(ensureDatabaseId("NOTION_CASE_DATABASE_ID", CASE_DATABASE_ID), slug, locale);
}
