import type { NotionContentBlock, NotionContentDetail, NotionContentItem, NotionRichTextSpan } from "@/lib/notion/types";

type NotionRichText = {
  plain_text?: string;
  href?: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
  };
};

type NotionProperty = {
  type?: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  url?: string | null;
  files?: Array<{ file?: { url?: string }; external?: { url?: string } }>;
  date?: { start?: string | null } | null;
  select?: { name?: string | null } | null;
};

type NotionPage = {
  id?: string;
  properties?: Record<string, NotionProperty>;
};

type NotionBlock = {
  id?: string;
  type?: string;
  paragraph?: { rich_text?: NotionRichText[] };
  heading_1?: { rich_text?: NotionRichText[] };
  heading_2?: { rich_text?: NotionRichText[] };
  heading_3?: { rich_text?: NotionRichText[] };
  bulleted_list_item?: { rich_text?: NotionRichText[] };
  numbered_list_item?: { rich_text?: NotionRichText[] };
  quote?: { rich_text?: NotionRichText[] };
};

function readRichTextText(value?: NotionRichText[]): string {
  return (value ?? []).map((entry) => entry.plain_text ?? "").join("").trim();
}

function propertyText(properties: Record<string, NotionProperty>, keys: string[], fieldType: "title" | "rich_text"): string {
  for (const key of keys) {
    const prop = properties[key];
    if (!prop) {
      continue;
    }

    const value = fieldType === "title" ? readRichTextText(prop.title) : readRichTextText(prop.rich_text);
    if (value) {
      return value;
    }
  }
  return "";
}

function propertyDate(properties: Record<string, NotionProperty>, keys: string[]): string {
  for (const key of keys) {
    const date = properties[key]?.date?.start;
    if (date) {
      return date;
    }
  }
  return new Date(0).toISOString();
}

function propertyThumbnail(properties: Record<string, NotionProperty>, keys: string[]): string | undefined {
  for (const key of keys) {
    const prop = properties[key];
    if (!prop) {
      continue;
    }

    if (prop.url) {
      return prop.url;
    }

    const fileUrl = prop.files?.[0]?.file?.url ?? prop.files?.[0]?.external?.url;
    if (fileUrl) {
      return fileUrl;
    }
  }
  return undefined;
}

function propertyLocale(properties: Record<string, NotionProperty>, keys: string[]): string {
  for (const key of keys) {
    const prop = properties[key];
    if (!prop) {
      continue;
    }

    const fromSelect = prop.select?.name?.trim();
    if (fromSelect) {
      return fromSelect;
    }

    const fromText = readRichTextText(prop.rich_text);
    if (fromText) {
      return fromText;
    }
  }
  return "ko";
}

export function mapPageToContentItem(page: NotionPage): NotionContentItem {
  const properties = page.properties ?? {};

  return {
    id: page.id ?? "",
    slug: propertyText(properties, ["Slug", "slug"], "rich_text") || propertyText(properties, ["Slug", "slug"], "title"),
    title: propertyText(properties, ["Title", "title", "Name", "name"], "title") || propertyText(properties, ["Title", "title"], "rich_text"),
    description: propertyText(properties, ["Description", "description", "Summary", "summary"], "rich_text"),
    thumbnail: propertyThumbnail(properties, ["Thumbnail", "thumbnail", "Image", "image"]),
    publishedAt: propertyDate(properties, ["PublishedAt", "publishedAt", "Published", "published"]),
    locale: propertyLocale(properties, ["Locale", "locale", "Lang", "lang"]),
  };
}

export function mapRichText(value?: NotionRichText[]): NotionRichTextSpan[] {
  return (value ?? []).map((item) => ({
    plainText: item.plain_text ?? "",
    href: item.href ?? undefined,
    bold: item.annotations?.bold ?? false,
    italic: item.annotations?.italic ?? false,
    code: item.annotations?.code ?? false,
    strikethrough: item.annotations?.strikethrough ?? false,
    underline: item.annotations?.underline ?? false,
  }));
}

export function mapBlocks(blocks: unknown[]): NotionContentBlock[] {
  const acceptedTypes: NotionContentBlock["type"][] = [
    "paragraph",
    "heading_1",
    "heading_2",
    "heading_3",
    "bulleted_list_item",
    "numbered_list_item",
    "quote",
  ];

  return (blocks as NotionBlock[])
    .filter((block): block is NotionBlock & { type: NotionContentBlock["type"]; id: string } => {
      return Boolean(block.id && block.type && acceptedTypes.includes(block.type as NotionContentBlock["type"]));
    })
    .map((block) => {
      const richText = mapRichText(block[block.type]?.rich_text);
      return {
        id: block.id,
        type: block.type as NotionContentBlock["type"],
        richText,
      };
    });
}

export function mapDetail(page: NotionPage, blocks: unknown[]): NotionContentDetail {
  return {
    ...mapPageToContentItem(page),
    blocks: mapBlocks(blocks),
  };
}
