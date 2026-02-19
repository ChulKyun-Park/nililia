"use client";

import { Link } from "@/i18n/navigation";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

// 이미지 경로 설정 (public/images 폴더에 위치 권장)
const contentsflyImg = "/images/contentsfly.png";
const contentsflysImg = "/images/contentsflys.png";

export default function ServicesPage() {
  const services = [
    {
      title: '영상 번역',
      slug: 'video-translation',
      description: '영상 콘텐츠의 자막 제작과 번역을 통해\n글로벌 시청자와 소통합니다.',
      features: ['자막 제작', '타임코드 동기화', '다국어 번역'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=400&fit=crop',
    },
    {
      title: '문서 번역',
      slug: 'document-translation',
      description: '기술 문서, 카탈로그, 매뉴얼 등\n다양한 문서를 정확하게 번역합니다.',
      features: ['기술 문서', '카탈로그', '매뉴얼'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
    },
    {
      title: '홈페이지·앱 현지화',
      slug: 'webapp-translation',
      description: '웹사이트와 모바일 앱의 UI/UX를 고려한\n현지화 서비스를 제공합니다.',
      features: ['UI/UX 번역', '다국어 지원', '반응형 대응'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop',
    },
    {
      title: '게임 번역',
      slug: 'game-translation',
      description: '게임의 스토리, UI, 대사를\n현지 문화에 맞게 번역합니다.',
      features: ['스토리·대사 번역', 'UI 현지화', 'LQA 테스트'],
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&h=400&fit=crop',
    },
    {
      title: '웹소설·웹툰 현지화',
      slug: 'webfiction-localization',
      description: '웹소설과 웹툰의 스토리를\n현지 독자에게 자연스럽게 전달합니다.',
      features: ['말풍선 편집', '문화적 적응', '연재 관리'],
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=500&h=400&fit=crop',
    },
    {
      title: 'SDH·배리어프리 자막',
      slug: 'sdh-subtitles',
      description: '모든 사람들을 위한 접근성 자막과\n음향 효과 설명을 제공합니다.',
      features: ['음향 효과 표기', '화자 구분', '접근성 준수'],
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=400&fit=crop',
    },
  ];

  const processList = [
    { step: '01', title: '상담 및 분석', description: '프로젝트 요구사항을 상세히 파악하고 최적의 솔루션을 제안합니다.' },
    { step: '02', title: '견적 및 계약', description: '투명한 견적과 명확한 일정을 제시하고 계약을 진행합니다.' },
    { step: '03', title: '작업 진행', description: '전문가 팀이 체계적인 프로세스로 작업을 진행합니다.' },
    { step: '04', title: '검수 및 수정', description: '다단계 품질 검수와 고객 피드백 반영을 진행합니다.' },
    { step: '05', title: '최종 납품', description: '완벽한 품질의 결과물을 약속된 일정에 맞춰 납품합니다.' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero 섹션 */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter break-keep">
              콘텐츠 분석 및 자막 제작·번역부터 후처리까지<br />
              모든 과정을 지원하는 원스톱 글로벌 콘텐츠 솔루션
            </h1>
          </div>
        </Container>
      </section>

      {/* 서비스 플랫폼 섹션 */}
      <section className="py-16 bg-background">
        <div className="max-w-[990px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">서비스 플랫폼</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CONTENTSFLY (AI) */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-card transition-all hover:shadow-md">
              <div className="flex items-center justify-center py-10 bg-white">
                <img src={contentsflyImg} alt="CONTENTSFLY" className="w-[60%] h-auto object-contain" />
              </div>
              <div className="mx-auto w-[80%] h-px bg-border" />
              <div className="p-8 text-center">
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 break-keep">
                  AI 기반 자동화 번역 플랫폼으로 빠르고 정확한 콘텐츠 현지화를 제공합니다.<br />
                  실시간 협업과 효율적인 워크플로우를 경험하세요.
                </p>
                <Link href="/contentsfly">
                  <button className="inline-flex items-center bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-bold transition-all hover:bg-primary/90">
                    자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* CONTENTSFLYS (Premium) */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-sm bg-zinc-950 text-white transition-all hover:shadow-md">
              <div className="flex items-center justify-center py-10 bg-zinc-950">
                <img src={contentsflysImg} alt="CONTENTSFLYS" className="w-[60%] h-auto object-contain" />
              </div>
              <div className="mx-auto w-[80%] h-px bg-zinc-800" />
              <div className="p-8 text-center">
                <p className="text-[15px] text-zinc-400 leading-relaxed mb-6 break-keep">
                  프리미엄 전문 번역 서비스로 문화적 맥락과 뉘앙스를 완벽히 반영합니다.<br />
                  전문 번역가와 원어민 검수자가 최고 품질을 보장합니다.
                </p>
                <Link href="/contentsflys">
                  <button className="inline-flex items-center bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-bold transition-all hover:bg-primary/90">
                    자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 분야별 카드 섹션 (동적 라우팅 연결) */}
      <section className="py-24 bg-background border-t border-border">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">번역·현지화 분야</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 whitespace-pre-line break-keep">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-bold text-foreground">
                        <Check className="w-4 h-4 text-primary mr-2 stroke-[3]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 프로세스 섹션 */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">작업 프로세스</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processList.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-xl p-6 border border-border group-hover:border-primary group-hover:shadow-lg transition-all h-full">
                  <div className="text-4xl font-black text-primary/10 mb-4 group-hover:text-primary transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-keep">{item.description}</p>
                </div>
                {index < processList.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30 w-8 h-8" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-primary">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-8 tracking-tight">프로젝트를 시작할 준비가 되셨나요?</h2>
          <Link href="/contact">
            <button className="bg-background text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-background/90 transition-all shadow-2xl flex items-center mx-auto">
              무료 상담 신청 <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </Container>
      </section>
    </div>
  );
}