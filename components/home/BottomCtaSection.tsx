import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

interface BottomCtaSectionProps {
  title: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref: string;
  secondaryHref: string;
}

export default function BottomCtaSection({
  title,
  primaryLabel,
  secondaryLabel,
  primaryHref,
  secondaryHref,
}: BottomCtaSectionProps) {
  return (
    <Section className="bg-blue-50" containerClassName="text-center">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href={primaryHref} className="w-full sm:w-auto">
          {primaryLabel}
        </Button>
        <Button href={secondaryHref} variant="outline" className="w-full sm:w-auto">
          {secondaryLabel}
        </Button>
      </div>
    </Section>
  );
}
