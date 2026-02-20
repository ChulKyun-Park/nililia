import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import NotionThumbnail from "@/components/notion/NotionThumbnail";
import { EmptyState, ErrorState } from "@/components/ui/states";
import { fetchCaseList } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Cases",
  description: "Latest case studies.",
};

export default async function LocalizedCaseListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  let items: Awaited<ReturnType<typeof fetchCaseList>> = [];
  let hasFetchError = false;

  try {
    items = await fetchCaseList(locale);
  } catch {
    hasFetchError = true;
  }

  return (
    <Section spacing="tight">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Cases</h1>
      </header>

      {hasFetchError ? <ErrorState title="Unable to load cases" description="Please check your connection and try again." /> : null}

      {!hasFetchError && !items.length ? <EmptyState title="No case studies yet" description="Case studies will appear here soon." /> : null}

      {!hasFetchError && items.length ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`/${locale}/cases/${item.slug}`} aria-label={item.title} className="block">
                <Card className="h-full overflow-hidden p-0">
                  <NotionThumbnail
                    src={item.thumbnail}
                    alt={item.title}
                    width={600}
                    height={340}
                    className="h-52 w-full rounded-t-[32px] border-b border-gray-200 object-cover"
                  />
                  <article className="p-6">
                    <p className="text-xs text-gray-500">{new Date(item.publishedAt).toLocaleDateString()}</p>
                    <h2 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h2>
                    <p className="mt-3 text-sm text-gray-600">{item.description}</p>
                  </article>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}
