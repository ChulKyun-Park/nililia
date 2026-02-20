"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import CardShell from "@/components/ui/CardShell";

interface ServicePreviewItem {
  title: string;
  description: string;
}

interface ServicesPreviewSectionProps {
  title: string;
  items: ServicePreviewItem[];
}

export default function ServicesPreviewSection({ title, items }: ServicesPreviewSectionProps) {
  const businessCards = [
    { title: "영상 번역", subtitle: "자막 & 번역", description: "유튜브, OTT, 영화 등 모든 영상 콘텐츠의 자막 및 번역 제작", image: "/images/영상번역.jpeg", link: "/services#video" },
    { title: "문서·카탈로그 번역", subtitle: "전문 번역", description: "기술 문서, 법률, 의료 등 전문 분야별 정확한 번역 서비스", image: "/images/문서번역.jpeg", link: "/services#document" },
    { title: "웹소설 ·웹툰 현지화", subtitle: "콘텐츠 현지화", description: "문화적 맥락을 고려한 창의적인 웹소설 번역", image: "/images/웹픽션번역.jpeg", link: "/services#webtoon" },
    { title: "SDH/배리어프리 자막", subtitle: "접근성 향상", description: "모든 시청자를 위한 상세한 음향 정보 포함 자막 제작", image: "/images/SDH.jpeg", link: "/services#sdh" },
    { title: "홈페이지·앱", subtitle: "디지털 환경 최적화", description: "UI 구조와 사용자 경험을 고려한 번역 서비스", image: "/images/웹앱.jpeg", link: "/services#tms" },
    { title: "게임 번역", subtitle: "콘텐츠 현지화", description: "몰입감과 생동감을 살린 자연스러운 현지화", image: "/images/글로벌OTT.jpg", link: "/services#post" },
  ];

  return (
    <Section className="bg-gradient-to-b from-primary/5 to-white">
      <div className="mb-16 text-center">
        <span className="mb-6 inline-block rounded-xl bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">Our Business</span>
        <h2 className="mb-6 text-3xl font-bold leading-[1.4] text-gray-900 break-keep md:text-4xl">{title}</h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 break-keep">
          콘텐츠 분석에 따른 맞춤형 자막 제작·번역부터 후처리까지<br />
          글로벌 확장을 위한 모든 현지화 과정을 지원합니다
        </p>
        <Link href="/services" className="inline-flex items-center rounded-xl border-2 border-primary bg-white px-7 py-3.5 font-bold text-primary shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-md">
          비즈니스 전체 보기
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {businessCards.map((card, index) => {
          const item = items[index];
          return (
            <Link key={card.link} href={card.link} className="block h-full w-full max-w-[380px]">
              <CardShell className="group h-full overflow-hidden border-primary/10 p-0 hover:border-primary/20 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden bg-primary/5">
                  <Image
                    src={card.image}
                    alt={item?.title ?? card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-xl bg-white/90 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="p-7">
                  <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">{card.subtitle}</span>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">{item?.title ?? card.title}</h3>
                  <p className="text-[15px] leading-relaxed text-gray-500 break-keep">{item?.description ?? card.description}</p>
                </div>
              </CardShell>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
