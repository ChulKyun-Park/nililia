"use client";

import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  primaryHref: string;
  secondaryHref: string;
  stats: { label: string; value: string }[];
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
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <style>{`
        @keyframes floating-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 좌측 텍스트 영역 */}
          <div className="lg:col-span-6 z-10">
            {/* 1. 메인 타이틀 줄간격 대폭 수정 (leading-[1.6]) */}
            <h1 className="text-4xl font-bold leading-[1.6] text-gray-900 sm:text-6xl break-keep whitespace-pre-line">
              {/* 타이틀 글씨가 위아래로 넉넉하게 배치되도록 1.6 수치를 부여했습니다. */}
              {title}
            </h1>

            {/* 2. 설명 문구 줄간격 (기존 대비 소폭 조정) */}
            <p className="mt-10 text-lg text-gray-500 leading-[1.8] break-keep max-w-xl">
              {description}
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href={primaryHref} className="rounded-xl bg-primary px-8 py-4 text-primary-foreground font-bold shadow-lg hover:bg-primary/90 transition-all active:scale-95">
                {primaryCtaLabel}
              </Link>
              <Link href={secondaryHref} className="rounded-xl border border-primary/20 bg-white px-8 py-4 font-bold text-primary hover:bg-primary/5 transition-all active:scale-95">
                {secondaryCtaLabel}
              </Link>
            </div>

            <div className="mt-20 flex gap-12 border-t border-primary/10 pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-primary tracking-tight">{stat.value}</p>
                  <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 우측 카드 영역 */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[540px] aspect-[540/430] bg-white rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-primary/10 p-10 grid grid-cols-2 gap-8">
              <ServiceCard icon="▶" title="영상 번역" desc="자막 & 번역" />
              <ServiceCard icon="📄" title="문서·카탈로그" desc="전문 번역" />
              <ServiceCard icon="📖" title="웹소설" desc="현지화" />
              <ServiceCard icon="📱" title="홈페이지·앱" desc="디지털 최적화" />

              <FloatingTag text="¡Hola!" pos="top-[-30px] right-[40px]" delay="0s" />
              <FloatingTag text="Thank you" pos="top-[50%] right-[-50px]" delay="0.5s" />
              <FloatingTag text="こんにちは" pos="bottom-[40px] left-[-60px]" delay="1s" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-[32px] p-8 flex flex-col justify-center items-start border border-primary/10 transition-transform hover:scale-[1.02]">
      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mb-5 shadow-xl text-xl">{icon}</div>
      <p className="font-bold text-gray-900 text-xl">{title}</p>
      <p className="text-sm text-gray-500 mt-2 leading-normal">{desc}</p>
    </div>
  );
}

function FloatingTag({ text, pos, delay }: { text: string; pos: string; delay: string }) {
  return (
    <div 
      className={`absolute ${pos} bg-white px-6 py-3 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-primary/10 text-sm font-bold text-gray-500 z-30`}
      style={{ animation: `floating-soft 4s ease-in-out infinite ${delay}` }}
    >
      {text}
    </div>
  );
}
