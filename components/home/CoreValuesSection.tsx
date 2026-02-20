"use client";

import { Target, Zap, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";

interface CoreValueItem {
  icon?: string;
  title: string;
  description: string;
}

interface CoreValuesSectionProps {
  title: string;
  values: CoreValueItem[];
}

const fallbackIcons = [
  <Target key="target" className="h-7 w-7" />,
  <Zap key="zap" className="h-7 w-7" />,
  <ShieldCheck key="shield" className="h-7 w-7" />,
];

export default function CoreValueSection({ title, values }: CoreValuesSectionProps) {
  return (
    <Section className="bg-white">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group w-full rounded-[32px] border border-primary/10 bg-white p-8 transition-all duration-300 hover:border-primary hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] md:w-[380px]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {value.icon ?? fallbackIcons[index % fallbackIcons.length]}
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="break-keep text-[15px] leading-relaxed text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
}
