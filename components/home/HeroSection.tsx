"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Home");

  // Marquee 애니메이션에 사용될 텍스트 데이터
  const marqueeLeftTexts = [
    t("services.items.video.title"),
    t("services.items.marketing.title"),
    "HOLA",
    "THANK YOU"
  ];

  const marqueeRightTexts = [
    "COMPANY",
    "CREATOR",
    t("services.items.uiux.title"),
    t("services.items.webtoon.title")
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      {/* 1. GPU 가속 애니메이션 정의 */}
      <style>{`
        @keyframes home-floating-updown {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -15px, 0); }
        }
        @keyframes home-marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes home-marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 2. 좌측: 텍스트 및 버튼 섹션 */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={primaryHref}
                className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-blue-700 transition-all"
              >
                {primaryCtaLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-600 hover:bg-blue-50 transition-all"
              >
                {secondaryCtaLabel}
              </Link>
            </div>

            {/* 통계 섹션 */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-blue-600">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 우측: 애니메이션 카드 섹션 (디자인의 핵심) */}
          <div className="lg:col-span-5 relative h-[450px] flex flex-col justify-center gap-6">
            
            {/* Hola/Thank You - 위아래 둥둥 */}
            <div 
              className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 w-64 self-end mr-10 z-20"
              style={{ animation: "home-floating-updown 3.5s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Hola</p>
                  <p className="text-xs text-slate-500 italic">Thank you</p>
                </div>
              </div>
            </div>

            {/* Company - 우에서 좌로 무한 이동 (Marquee) */}
            <div className="overflow-hidden py-2">
              <div 
                className="flex w-max gap-4" 
                style={{ animation: "home-marquee-left 20s linear infinite" }}
              >
                {[...marqueeLeftTexts, ...marqueeLeftTexts].map((text, i) => (
                  <div key={i} className="bg-white px-8 py-4 rounded-2xl shadow-md border border-slate-50 text-sm font-bold text-slate-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" /> {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Creator - 좌에서 우로 무한 이동 (Marquee) */}
            <div className="overflow-hidden py-2">
              <div 
                className="flex w-max gap-4" 
                style={{ animation: "home-marquee-right 25s linear infinite" }}
              >
                {[...marqueeRightTexts, ...marqueeRightTexts].map((text, i) => (
                  <div key={i} className="bg-white px-8 py-4 rounded-2xl shadow-md border border-slate-50 text-sm font-bold text-blue-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" /> {text}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}