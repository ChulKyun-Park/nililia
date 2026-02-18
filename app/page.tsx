import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { homeContent, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function HomePage() {
  const { hero, features } = homeContent;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {hero.heading}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            {hero.subheading}
          </p>
          <div className="mt-10">
            <Button href={hero.cta.href} variant="secondary">
              {hero.cta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
          Why Nililia
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Ready to expand your reach?</h2>
          <p className="mt-3 text-gray-600">
            Explore our services or read about how we have helped other businesses.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/service">Our Service</Button>
            <Button href="/news/stories" variant="outline">Customer Stories</Button>
          </div>
        </div>
      </section>
    </>
  );
}
