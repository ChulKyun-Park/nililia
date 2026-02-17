import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.intro,
};

export default function AboutPage() {
  const { heading, intro, mission, values } = aboutContent;

  return (
    <>
      {/* Page hero */}
      <section className="bg-gray-50 border-b border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">{heading}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">{intro}</p>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">{mission.heading}</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{mission.body}</p>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
