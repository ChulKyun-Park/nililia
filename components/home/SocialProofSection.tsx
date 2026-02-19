import Section from "@/components/ui/Section";

interface SocialProofSectionProps {
  title: string;
  logos: string[];
}

export default function SocialProofSection({ title, logos }: SocialProofSectionProps) {
  const repeatedLogos = [...logos, ...logos];

  return (
    <Section className="bg-gray-50" containerClassName="space-y-8">
      <h2 className="text-center text-2xl font-bold text-gray-900">{title}</h2>
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white py-6">
        <div className="marquee-track flex min-w-max gap-4 px-4">
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-14 w-36 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee-track {
          animation: marquee 24s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Section>
  );
}
