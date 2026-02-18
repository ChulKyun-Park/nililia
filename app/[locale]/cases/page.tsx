import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { fetchCaseList } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Cases",
  description: "Latest case studies.",
};

export default async function LocalizedCaseListPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const items = await fetchCaseList(locale);

  return (
    <Section>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Cases</h1>
      </header>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/${locale}/cases/${item.slug}`} aria-label={item.title} className="block">
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
