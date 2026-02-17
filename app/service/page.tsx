import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { serviceContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Service",
  description: serviceContent.hero.body,
};

export default function ServicePage() {
  const { hero, products, localization } = serviceContent;

  return (
    <>
      {/* A) Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {hero.heading}
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl">
            {hero.body}
          </p>
          <div className="mt-10">
            <Button href={hero.cta.href} variant="secondary">
              {hero.cta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* B) Our Products */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{products.heading}</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Choose the product that best fits your content volume and workflow requirements.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {products.items.map((product) => (
            <Card key={product.title} href={product.href} className="group">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <svg
                  className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="mt-3 text-gray-600">{product.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* C) Translation & Localization — 6-card grid */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{localization.heading}</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Comprehensive language services tailored to your industry and content type.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {localization.cards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
