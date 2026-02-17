import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { careersContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: careersContent.intro,
};

export default function CareersPage() {
  const { heading, intro, openRoles, cta } = careersContent;

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">{heading}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">{intro}</p>
        </div>
      </section>

      <Section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Roles</h2>
        <div className="space-y-4">
          {openRoles.map((role) => (
            <Card key={role.title}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                  <p className="text-sm text-gray-500">
                    {role.department} &middot; {role.location} &middot; {role.type}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 shrink-0">
                  {role.type}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-blue-50 p-8">
          <h2 className="text-xl font-semibold text-gray-900">How to Apply</h2>
          <p className="mt-2 text-gray-600">{cta}</p>
        </div>
      </Section>
    </>
  );
}
