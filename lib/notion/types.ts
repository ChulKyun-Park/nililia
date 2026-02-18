export type NotionContentItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  publishedAt: string;
  locale: string;
};

export type NotionRichTextSpan = {
  plainText: string;
  href?: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
};

export type NotionContentBlock = {
  id: string;
  type: "paragraph" | "heading_1" | "heading_2" | "heading_3" | "bulleted_list_item" | "numbered_list_item" | "quote";
  richText: NotionRichTextSpan[];
};

export type NotionContentDetail = NotionContentItem & {
  blocks: NotionContentBlock[];
};
