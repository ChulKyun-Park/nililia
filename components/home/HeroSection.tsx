import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

type HeroStat = {
  label: string;
  value: string;
};

interface HeroSectionProps {
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  primaryHref: string;
  secondaryHref: string;
  stats: HeroStat[];
}

export default function HeroSection({
  title,
  description,
  primaryCtaLabel,
  secondaryCtaLabel,
  primaryHref,
  secondaryHref,
  stats,
}: HeroSectionProps) {
  return (
    <Section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white" containerClassName="text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-5 text-sm text-blue-100 sm:text-base">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} className="w-full sm:w-auto">
            {primaryCtaLabel}
          </Button>
          <Button href={secondaryHref} variant="outline" className="w-full border-white text-white hover:bg-white/15 sm:w-auto">
            {secondaryCtaLabel}
          </Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 text-left sm:grid-cols-3 sm:text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-blue-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
