import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { contentsflyContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contentsfly",
  description: contentsflyContent.subheading,
};

export default function ContentsflyPage() {
  const { heading, subheading, body, features } = contentsflyContent;

  return (
    <>
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">{heading}</h1>
          <p className="mt-3 text-xl text-blue-100">{subheading}</p>
          <p className="mt-4 text-blue-200 max-w-2xl">{body}</p>
          <div className="mt-8">
            <Button href="/services" variant="secondary">Back to Service</Button>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
