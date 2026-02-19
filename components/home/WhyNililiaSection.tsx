import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

type FeatureItem = {
  title: string;
  description: string;
};

interface WhyNililiaSectionProps {
  title: string;
  items: FeatureItem[];
}

export default function WhyNililiaSection({ title, items }: WhyNililiaSectionProps) {
  return (
    <Section>
      <h2 className="text-center text-2xl font-bold text-gray-900">{title}</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title} className="h-full border-l-4 border-l-blue-600">
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
