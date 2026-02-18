import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { fetchNewsList } from "@/lib/notion";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news updates.",
};

export default async function LocalizedNewsListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const items = await fetchNewsList(locale);

  return (
    <Section>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">News</h1>
      </header>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/${locale}/news/${item.slug}`} aria-label={item.title} className="block">
              <Card>
                <article>
                  <p className="text-xs text-gray-500">{new Date(item.publishedAt).toLocaleDateString()}</p>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="mt-3 text-sm text-gray-600">{item.description}</p>
                </article>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
