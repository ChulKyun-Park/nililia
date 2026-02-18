import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.intro,
};

const principles = [
  {
    title: aboutContent.mission.heading,
    body: aboutContent.mission.body,
  },
  {
    title: "Our Vision",
    body: "Become the default localization operations partner for enterprise organizations expanding internationally.",
  },
  {
    title: "Our Values",
    body: aboutContent.values.map((value) => value.title).join(" · "),
  },
];

const differentiators = [
  "Enterprise-ready governance with consistent terminology and review controls.",
  "Scalable workflows for multi-market releases and high-volume content streams.",
  "Specialist linguists paired with domain-aware QA and delivery operations.",
  "Flexible collaboration model with clear SLAs and proactive communication.",
];

const snapshots = [
  { label: "Languages Supported", value: "100+" },
  { label: "Enterprise Programs", value: "250+" },
  { label: "On-time Delivery", value: "99%" },
  { label: "Client Retention", value: "95%" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutContent.heading} description={aboutContent.intro} />

      <Section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Mission · Vision · Values</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why nililia</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <li key={item} className="rounded-lg border border-gray-200 bg-white px-5 py-4 text-sm text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Company Snapshot</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {snapshots.map((metric) => (
            <Card key={metric.label}>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-gray-500">{metric.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-blue-50">
        <div className="rounded-xl border border-blue-100 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">Build your next global launch with nililia</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Share your objectives and target markets. We will propose the right delivery model for your team.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Contact</Button>
            <Button href="/company-profile.pdf" variant="outline">
              Company Profile
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
