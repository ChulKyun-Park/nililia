import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { newsContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Customer Stories",
  description: newsContent.stories.intro,
};

export default function StoriesPage() {
  const { heading, intro, items } = newsContent.stories;

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">{heading}</h1>
          <p className="mt-4 text-lg text-gray-600">{intro}</p>
        </div>
      </section>

      <Section>
        <div className="space-y-6">
          {items.map((item) => (
            <Card key={item.title}>
              <p className="text-xs text-gray-400 mb-1">{item.date}</p>
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="mt-2 text-gray-600">{item.excerpt}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
