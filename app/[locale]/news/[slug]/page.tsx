import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import { fetchNewsBySlug } from "@/lib/notion";
import type { NotionContentBlock } from "@/lib/notion/types";

async function getNewsDetail(locale: string, slug: string) {
  return fetchNewsBySlug(slug, locale);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = await getNewsDetail(locale, slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: item.thumbnail ? [item.thumbnail] : [],
    },
  };
}

function renderRichText(block: NotionContentBlock) {
  return block.richText.map((span, index) => {
    const className = [
      span.bold ? "font-semibold" : "",
      span.italic ? "italic" : "",
      span.underline ? "underline" : "",
      span.strikethrough ? "line-through" : "",
      span.code ? "rounded bg-gray-100 px-1 py-0.5 font-mono text-sm" : "",
    ]
      .filter(Boolean)
      .join(" ");

    if (span.href) {
      return (
        <a key={`${block.id}-${index}`} href={span.href} className={`text-blue-600 hover:underline ${className}`.trim()}>
          {span.plainText}
        </a>
      );
    }

    return (
      <span key={`${block.id}-${index}`} className={className}>
        {span.plainText}
      </span>
    );
  });
}

function renderBlock(block: NotionContentBlock) {
  const content = renderRichText(block);

  switch (block.type) {
    case "heading_1":
      return <h1 className="text-3xl font-bold text-gray-900">{content}</h1>;
    case "heading_2":
      return <h2 className="text-2xl font-bold text-gray-900">{content}</h2>;
    case "heading_3":
      return <h3 className="text-xl font-semibold text-gray-900">{content}</h3>;
    case "quote":
      return <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-700">{content}</blockquote>;
    case "bulleted_list_item":
    case "numbered_list_item":
      return null;
    default:
      return <p className="text-gray-700 leading-relaxed">{content}</p>;
  }
}

function renderContentBlocks(blocks: NotionContentBlock[]) {
  const elements: React.ReactElement[] = [];
  let index = 0;

  while (index < blocks.length) {
    const current = blocks[index];

    if (current.type === "bulleted_list_item" || current.type === "numbered_list_item") {
      const listType = current.type;
      const listItems: React.ReactElement[] = [];

      while (index < blocks.length && blocks[index].type === listType) {
        const item = blocks[index];
        listItems.push(
          <li key={item.id} className="text-gray-700">
            {renderRichText(item)}
          </li>,
        );
        index += 1;
      }

      const ListTag = listType === "bulleted_list_item" ? "ul" : "ol";
      const listClassName = listType === "bulleted_list_item" ? "ml-5 list-disc space-y-2" : "ml-5 list-decimal space-y-2";
      elements.push(
        <ListTag key={`list-${current.id}`} className={listClassName}>
          {listItems}
        </ListTag>,
      );
      continue;
    }

    elements.push(<div key={current.id}>{renderBlock(current)}</div>);
    index += 1;
  }

  return elements;
}

export default async function LocalizedNewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = await getNewsDetail(locale, slug);

  if (!item) {
    notFound();
  }

  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <header>
          <p className="text-sm text-gray-500">{new Date(item.publishedAt).toLocaleDateString()}</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">{item.title}</h1>
          <p className="mt-4 text-gray-600">{item.description}</p>
          {item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={1200}
              height={675}
              unoptimized
              className="mt-8 h-auto w-full rounded-xl border border-gray-200"
            />
          ) : null}
        </header>

        <section className="mt-10 space-y-4">{renderContentBlocks(item.blocks)}</section>
      </article>
    </Section>
  );
}
