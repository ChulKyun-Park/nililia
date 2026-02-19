import "server-only";
import { NOTION_API_BASE_URL, NOTION_API_VERSION, NOTION_REVALIDATE_SECONDS } from "@/lib/notion/constants";

type NotionRequestInit = {
  method?: "GET" | "POST";
  body?: string;
};

function getNotionToken(): string {
  const token = process.env.NOTION_API_KEY?.trim();
  console.log("DEBUG: Notion Token detected:", !!token);

  if (!token) {
    throw new Error("NOTION_API_KEY is not configured");
  }

  return token;
}

async function notionFetch(path: string, init: NotionRequestInit = {}) {
  const response = await fetch(`${NOTION_API_BASE_URL}${path}`, {
    method: init.method ?? "GET",
    headers: {
      Authorization: `Bearer ${getNotionToken()}`,
      "Notion-Version": NOTION_API_VERSION,
      "Content-Type": "application/json",
    },
    body: init.body,
    next: { revalidate: NOTION_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Notion API request failed (${response.status}): ${message}`);
  }

  return response.json();
}

export async function queryDatabase(databaseId: string, payload: Record<string, unknown>) {
  return notionFetch(`/databases/${databaseId}/query`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function listBlockChildren(pageId: string) {
  let cursor: string | undefined;
  const allResults: unknown[] = [];

  do {
    const query = cursor ? `?start_cursor=${encodeURIComponent(cursor)}` : "";
    const result = (await notionFetch(`/blocks/${pageId}/children${query}`)) as {
      results?: unknown[];
      has_more?: boolean;
      next_cursor?: string | null;
    };

    allResults.push(...(result.results ?? []));
    cursor = result.has_more ? result.next_cursor ?? undefined : undefined;
  } while (cursor);

  return allResults;
}
