import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

type CoreValue = {
  icon: string;
  title: string;
  description: string;
};

interface CoreValuesSectionProps {
  title: string;
  values: CoreValue[];
}

export default function CoreValuesSection({ title, values }: CoreValuesSectionProps) {
  return (
    <Section>
      <h2 className="text-center text-2xl font-bold text-gray-900">{title}</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title} className="h-full">
            <p className="text-2xl" aria-hidden="true">
              {value.icon}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{value.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{value.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
