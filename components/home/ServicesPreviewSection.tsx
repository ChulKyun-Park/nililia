import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

type ServiceItem = {
  title: string;
  description: string;
};

interface ServicesPreviewSectionProps {
  title: string;
  items: ServiceItem[];
}

export default function ServicesPreviewSection({ title, items }: ServicesPreviewSectionProps) {
  return (
    <Section className="bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-gray-900">{title}</h2>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="h-full">
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
