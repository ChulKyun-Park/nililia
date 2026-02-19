import Section from "@/components/ui/Section";

type FaqItem = {
  question: string;
  answer: string;
};

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
}

export default function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <Section>
      <h2 className="text-center text-2xl font-bold text-gray-900">{title}</h2>
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer text-left font-semibold text-gray-900">{item.question}</summary>
            <p className="mt-3 text-sm text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
