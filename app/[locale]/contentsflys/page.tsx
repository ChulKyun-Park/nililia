import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { contentsflysContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contentsflys",
  description: contentsflysContent.subheading,
};

export default function ContentsflysPage() {
  const { heading, subheading, body, features } = contentsflysContent;

  return (
    <>
      <section className="bg-gradient-to-br from-indigo-800 to-indigo-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">{heading}</h1>
          <p className="mt-3 text-xl text-indigo-100">{subheading}</p>
          <p className="mt-4 text-indigo-200 max-w-2xl">{body}</p>
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
