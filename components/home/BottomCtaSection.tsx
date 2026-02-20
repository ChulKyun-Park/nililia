"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

interface BottomCtaSectionProps {
  title?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export default function BottomCtaSection({
  title = "글로벌 시장으로의 첫 걸음, 지금 시작하세요",
  primaryLabel = "무료 상담 신청",
  secondaryLabel = "성공 사례 보기",
  primaryHref = "/contact",
  secondaryHref = "/cases",
}: BottomCtaSectionProps) {
  return (
    <section className="bg-primary py-24">
      <Container className="text-center">
        <h2 className="mb-6 text-3xl font-black tracking-tighter text-white break-keep md:text-5xl">{title}</h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-white/80 break-keep md:text-xl">
          전문가와 상의하고 당신의 콘텐츠에 가장 알맞은 솔루션을 받아 보세요. <br className="hidden md:block" />
          이미 1,300여 개 이상의 기업이 닐리리아와 함께하고 있습니다.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href={primaryHref} className="flex items-center rounded-xl bg-background px-10 py-5 text-xl font-bold text-primary shadow-2xl transition-all active:scale-95 hover:bg-background/90">
            {primaryLabel} <ArrowRight className="ml-2 h-6 w-6" />
          </Link>

          <Link href={secondaryHref} className="rounded-xl border-2 border-white/30 bg-white/10 px-10 py-5 text-xl font-bold text-white transition-all active:scale-95 hover:bg-white/20">
            {secondaryLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
