import Link from "next/link";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import type { NotionContentItem } from "@/lib/notion/types";
import { EmptyState, ErrorState } from "@/components/ui/states";

interface LatestCasesSectionProps {
  title: string;
  locale: string;
  cases: NotionContentItem[];
  emptyLabel: string;
  fallbackLabel: string;
}

export default function LatestCasesSection({
  title,
  locale,
  cases,
  emptyLabel,
  fallbackLabel,
}: LatestCasesSectionProps) {
  return (
    <Section className="bg-primary/5">
      <h2 className="text-center text-2xl font-bold text-gray-900">{title}</h2>

      {!cases.length ? (
        fallbackLabel ? (
          <ErrorState className="mt-8" title="Unable to load cases" description={fallbackLabel} />
        ) : (
          <EmptyState className="mt-8" title="No case studies yet" description={emptyLabel} />
        )
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cases.map((item) => (
            <li key={item.id}>
              <Link href={`/${locale}/cases/${item.slug}`} aria-label={item.title} className="block h-full">
                <Card className="h-full">
                  <p className="text-xs text-gray-500">{new Date(item.publishedAt).toLocaleDateString()}</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
