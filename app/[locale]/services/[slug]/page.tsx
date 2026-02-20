import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Check, MessageSquare, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { UNSPLASH_IMAGES } from "@/lib/imageMap";

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  image: string;
}> = {
  "video-translation": {
    title: "영상 자막 제작 및 번역",
    subtitle: "자막 & 번역",
    description: [
      "정확한 타이밍과 가독성을 고려한 전문 자막 서비스를 제공합니다.",
      "다국어 자막 제작부터 타이밍 동기화, 스타일 커스터마이징까지 모든 과정을 지원합니다.",
      "전문 번역가와 네이티브 검수자가 문화적 맥락을 고려한 자연스러운 번역을 제공하며 최종 품질 검수를 통해 완벽한 결과물을 보장합니다.",
    ],
    features: ["다국어 자막 제작", "타이밍 동기화", "스타일 커스터마이징", "품질 검수", "문화적 맥락 반영", "네이티브 검수"],
    image: UNSPLASH_IMAGES.serviceVideo,
  },
  "document-translation": {
    title: "문서·카탈로그 번역",
    subtitle: "전문 번역",
    description: [
      "기술 문서, 제품 카탈로그, 매뉴얼 등 전문 분야별 정확한 번역을 제공합니다.",
      "전문 용어집 관리와 스타일 가이드 준수를 통해 일관성 있는 번역 품질을 유지합니다.",
    ],
    features: ["전문 분야별 번역", "용어집 관리", "스타일 가이드 준수", "원어민 검수"],
    image: UNSPLASH_IMAGES.serviceDocument,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return {
      title: "Service not found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.title,
    description: service.description[0],
    openGraph: {
      title: service.title,
      description: service.description[0],
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Container className="text-center">
          <h1 className="text-3xl font-bold mb-6">서비스를 찾을 수 없습니다</h1>
          <Link href="/services" className="mx-auto inline-flex items-center rounded-xl bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90">
            <ArrowLeft className="mr-2 h-5 w-5" /> 서비스 목록으로 돌아가기
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden pb-24 pt-40">
        <div className="absolute inset-0 z-0">
          <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">{service.subtitle}</span>
            <h1 className="mb-8 text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-6xl">{service.title}</h1>
            <p className="text-xl font-medium leading-relaxed text-white/80 break-keep md:text-2xl">{service.description[0]}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              {service.description.map((paragraph) => (
                <p key={paragraph} className="text-xl leading-loose text-muted-foreground break-keep">{paragraph}</p>
              ))}
            </div>

            <div className="rounded-[32px] border border-border bg-card p-8 shadow-sm lg:col-span-5">
              <h3 className="mb-8 text-2xl font-bold tracking-tight">주요 제공 항목</h3>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 text-lg font-semibold">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="h-5 w-5 stroke-[3]" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-24">
        <Container className="text-center">
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-primary-foreground">전문가와 지금 바로 상담하세요</h2>
          <Link href="/contact" className="group mx-auto inline-flex items-center rounded-xl bg-background px-12 py-5 text-xl font-bold text-primary shadow-2xl transition-all hover:bg-background/90">
            <MessageSquare className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
            무료 상담 신청하기
          </Link>
        </Container>
      </section>
    </div>
  );
}
