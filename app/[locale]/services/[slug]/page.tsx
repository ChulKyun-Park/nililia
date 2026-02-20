"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Check, MessageSquare, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { UNSPLASH_IMAGES } from "@/lib/imageMap";

// 사용자님이 주신 상세 데이터를 이곳에서 관리합니다. (나중에는 백엔드 API로 대체됩니다)
const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  image: string;
}> = {
  'video-translation': {
    title: '영상 자막 제작 및 번역',
    subtitle: '자막 & 번역',
    description: [
      '정확한 타이밍과 가독성을 고려한 전문 자막 서비스를 제공합니다.',
      '다국어 자막 제작부터 타이밍 동기화, 스타일 커스터마이징까지 모든 과정을 지원합니다.',
      '전문 번역가와 네이티브 검수자가 문화적 맥락을 고려한 자연스러운 번역을 제공하며 최종 품질 검수를 통해 완벽한 결과물을 보장합니다.',
    ],
    features: ['다국어 자막 제작', '타이밍 동기화', '스타일 커스터마이징', '품질 검수', '문화적 맥락 반영', '네이티브 검수'],
    image: UNSPLASH_IMAGES.serviceVideo,
  },
  'document-translation': {
    title: '문서·카탈로그 번역',
    subtitle: '전문 번역',
    description: [
      '기술 문서, 제품 카탈로그, 매뉴얼 등 전문 분야별 정확한 번역을 제공합니다.',
      '전문 용어집 관리와 스타일 가이드 준수를 통해 일관성 있는 번역 품질을 유지합니다.'
    ],
    features: ['전문 분야별 번역', '용어집 관리', '스타일 가이드 준수', '원어민 검수'],
    image: UNSPLASH_IMAGES.serviceDocument,
  },
  // 나머지 서비스 데이터(game-translation 등)도 동일한 방식으로 추가 가능합니다.
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string; // URL에서 video-translation 같은 값을 읽어옴
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Container className="text-center">
          <h1 className="text-3xl font-bold mb-6">서비스를 찾을 수 없습니다</h1>
          <Link href="/services">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold flex items-center mx-auto transition-all hover:bg-primary/90">
              <ArrowLeft className="mr-2 w-5 h-5" /> 서비스 목록으로 돌아가기
            </button>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero 섹션: 상단 이미지와 제목 */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-6">
              {service.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium break-keep">
              {service.description[0]}
            </p>
          </div>
        </Container>
      </section>

      {/* 상세 설명 섹션 */}
      <section className="py-24 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              {service.description.map((paragraph, index) => (
                <p key={index} className="text-xl text-muted-foreground leading-loose break-keep">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 특징 리스트 카드 */}
            <div className="lg:col-span-5 bg-card rounded-xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">주요 제공 항목</h3>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 text-lg font-semibold">
                    <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 하단 CTA 섹션 */}
      <section className="py-24 bg-primary">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-12 tracking-tight">
            전문가와 지금 바로 상담하세요
          </h2>
          <Link href="/contact">
            <button className="bg-background text-primary px-12 py-5 rounded-xl font-bold text-xl hover:bg-background/90 transition-all shadow-2xl flex items-center mx-auto group">
              <MessageSquare className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" /> 
              무료 상담 신청하기
            </button>
          </Link>
        </Container>
      </section>
    </div>
  );
}