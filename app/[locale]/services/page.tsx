"use client";

import { Link } from "@/i18n/navigation";
import { Check, ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

// 이미지 경로 설정
const contentsflyImg = "/images/contentsfly.png";
const contentsflysImg = "/images/contentsflys.png";

export default function ServicesPage() {
  const services = [
    {
      title: '영상 번역',
      slug: 'video-translation',
      subtitle: '자막 & 번역',
      description: '영상 콘텐츠의 자막 제작과 번역을 통해\n글로벌 시청자와 소통합니다.',
      features: ['자막 제작', '타임코드 동기화', '다국어 번역'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=400&fit=crop',
    },
    {
      title: '문서 번역',
      slug: 'document-translation',
      subtitle: '전문 번역',
      description: '기술 문서, 카탈로그, 매뉴얼 등\n다양한 문서를 정확하게 번역합니다.',
      features: ['기술 문서', '카탈로그', '매뉴얼'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
    },
    {
      title: '홈페이지·앱 현지화',
      slug: 'webapp-translation',
      subtitle: '디지털 최적화',
      description: '웹사이트와 모바일 앱의 UI/UX를 고려한\n현지화 서비스를 제공합니다.',
      features: ['UI/UX 번역', '다국어 지원', '반응형 대응'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop',
    },
    {
      title: '게임 번역',
      slug: 'game-translation',
      subtitle: '콘텐츠 현지화',
      description: '게임의 스토리, UI, 대사를\n현지 문화에 맞게 번역합니다.',
      features: ['스토리·대사 번역', 'UI 현지화', 'LQA 테스트'],
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&h=400&fit=crop',
    },
    {
      title: '웹소설·웹툰 현지화',
      slug: 'webfiction-localization',
      subtitle: '콘텐츠 현지화',
      description: '웹소설과 웹툰의 스토리를\n현지 독자에게 자연스럽게 전달합니다.',
      features: ['말풍선 편집', '문화적 적응', '연재 관리'],
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=500&h=400&fit=crop',
    },
    {
      title: 'SDH·배리어프리 자막',
      slug: 'sdh-subtitles',
      subtitle: '접근성 향상',
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
    <div className="min-h-screen bg-white">
      {/* Hero 섹션 */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-primary/5 to-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-gray-900 break-keep">
              콘텐츠 분석 및 자막 제작·번역부터 후처리까지<br />
              모든 과정을 지원하는 원스톱 글로벌 콘텐츠 솔루션
            </h1>
          </div>
        </Container>
      </section>

      {/* 서비스 플랫폼 섹션 */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tighter">서비스 플랫폼</h2>
            <div className="w-12 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CONTENTSFLY (AI) */}
            <div className="rounded-[32px] overflow-hidden border border-primary/10 shadow-sm bg-white transition-all hover:shadow-xl group">
              <div className="flex items-center justify-center py-16 bg-white transition-colors group-hover:bg-primary/5">
                <img src={contentsflyImg} alt="CONTENTSFLY" className="w-[60%] h-auto object-contain" />
              </div>
              <div className="p-10 text-center border-t border-primary/10">
                <p className="text-[16px] text-gray-500 leading-relaxed mb-8 break-keep">
                  AI 기반 자동화 번역 플랫폼으로 빠르고 정확한 콘텐츠 현지화를 제공합니다.<br />
                  실시간 협업과 효율적인 워크플로우를 경험하세요.
                </p>
                <Link href="/contentsfly">
                  <button className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold transition-all hover:bg-primary/90 active:scale-95">
                    자세히 보기 <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* CONTENTSFLYS (Premium) */}
            <div className="rounded-[32px] overflow-hidden border border-gray-800 shadow-sm bg-[#111827] text-white transition-all hover:shadow-xl group">
              <div className="flex items-center justify-center py-16 bg-[#111827] transition-colors group-hover:bg-gray-800/50">
                <img src={contentsflysImg} alt="CONTENTSFLYS" className="w-[60%] h-auto object-contain" />
              </div>
              <div className="p-10 text-center border-t border-gray-800">
                <p className="text-[16px] text-gray-400 leading-relaxed mb-8 break-keep">
                  프리미엄 전문 번역 서비스로 문화적 맥락과 뉘앙스를 완벽히 반영합니다.<br />
                  전문 번역가와 원어민 검수자가 최고 품질을 보장합니다.
                </p>
                <Link href="/contentsflys">
                  <button className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold transition-all hover:bg-primary/90 active:scale-95">
                    자세히 보기 <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 분야별 카드 섹션 (홈 탭과 100% 동일한 그리드 & 디자인) */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tighter">번역·현지화 분야</h2>
            <div className="w-12 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-primary/20 w-full max-w-[380px] flex flex-col"
              >
                {/* 이미지 영역: 홈 탭 h-56 설정 적용 */}
                <div className="relative h-56 overflow-hidden bg-primary/5">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="text-primary w-5 h-5" />
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">{service.subtitle}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed mb-6 break-keep whitespace-pre-line">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-bold text-gray-900">
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
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tighter">작업 프로세스</h2>
            <div className="w-12 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processList.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-[24px] p-8 border border-primary/10 group-hover:border-primary group-hover:shadow-xl transition-all h-full">
                  <div className="text-4xl font-black text-primary/10 mb-4 group-hover:text-primary transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed break-keep">{item.description}</p>
                </div>
                {index < processList.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/20 w-8 h-8 z-10" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA 섹션: 디자인 가이드 반영 */}
      <section className="py-24 bg-[#0097FE]">
        <Container className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter">프로젝트를 시작할 준비가 되셨나요?</h2>
          <Link href="/contact">
            <button className="bg-white text-[#0097FE] px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/90 transition-all shadow-2xl flex items-center mx-auto active:scale-95">
              무료 상담 신청 <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </Link>
        </Container>
      </section>
    </div>
  );
}