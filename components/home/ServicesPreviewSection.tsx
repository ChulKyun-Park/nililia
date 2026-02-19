"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
    {
      title: '영상 번역',
      subtitle: '자막 & 번역',
      description: '유튜브, OTT, 영화 등 모든 영상 콘텐츠의 자막 및 번역 제작',
      image: 'https://static.readdy.ai/image/1247e62f0f9aacf91e63316ef6300fa9/a0e30dfc7117d2f8f399833e5ed131ad.jpeg',
      link: '/services#video',
    },
    {
      title: '문서·카탈로그 번역',
      subtitle: '전문 번역',
      description: '기술 문서, 법률, 의료 등 전문 분야별 정확한 번역 서비스',
      image: 'https://static.readdy.ai/image/1247e62f0f9aacf91e63316ef6300fa9/b4e6c772974cdb756b8ef9405b7aca94.jpeg',
      link: '/services#document',
    },
    {
      title: '웹소설 ·웹툰 현지화',
      subtitle: '콘텐츠 현지화',
      description: '문화적 맥락을 고려한 창의적인 웹소설 번역',
      image: 'https://static.readdy.ai/image/1247e62f0f9aacf91e63316ef6300fa9/bc6daa4a022c962862dfdf3edbe30ad7.jpeg',
      link: '/services#webtoon',
    },
    {
      title: 'SDH/배리어프리 자막',
      subtitle: '접근성 향상',
      description: '모든 시청자를 위한 상세한 음향 정보 포함 자막 제작',
      image: 'https://static.readdy.ai/image/1247e62f0f9aacf91e63316ef6300fa9/780c9a7a327be2cd861bb915d95911fb.jpeg',
      link: '/services#sdh',
    },
    {
      title: '홈페이지·앱',
      subtitle: '디지털 환경 최적화',
      description: 'UI 구조와 사용자 경험을 고려한 번역 서비스',
      image: 'https://static.readdy.ai/image/1247e62f0f9aacf91e63316ef6300fa9/24dd642727b655cb070a4590f72da1b9.jpeg',
      link: '/services#tms',
    },
    {
      title: '게임 번역',
      subtitle: '콘텐츠 현지화',
      description: '몰입감과 생동감을 살린 자연스러운 현지화',
      image: 'https://static.readdy.ai/image/1247e62f0f9aacf91e63316ef6300fa9/8300a42c023fe27865f821d2b48e7e5f.jpeg',
      link: '/services#post',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤더 영역 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-xl mb-6 uppercase tracking-wider">
            Our Business
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-[1.4] break-keep">{title}</h2>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed break-keep">
            콘텐츠 분석에 따른 맞춤형 자막 제작·번역부터 후처리까지<br />
            글로벌 확장을 위한 모든 현지화 과정을 지원합니다
          </p>
          <Link 
            href="/services" 
            className="inline-flex items-center bg-white border-2 border-primary text-primary px-7 py-3.5 rounded-xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-md"
          >
            비즈니스 전체 보기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* 6단 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {businessCards.map((card, index) => {
            const item = items[index];
            return (
            <Link
              key={index}
              href={card.link}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-primary/20 w-full max-w-[380px]"
            >
              {/* 이미지 영역 */}
              <div className="relative h-56 overflow-hidden bg-primary/5">
                <img
                  src={card.image}
                  alt={item?.title ?? card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                {/* 호버 시 나타나는 화살표 */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="text-primary w-5 h-5" />
                </div>
              </div>
              
              {/* 텍스트 내용 영역 */}
              <div className="p-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                  {card.subtitle}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {item?.title ?? card.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed break-keep">
                  {item?.description ?? card.description}
                </p>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}