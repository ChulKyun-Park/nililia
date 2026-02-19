"use client";

import { useState, useEffect, useRef } from "react";
import { UNSPLASH_IMAGES } from "@/lib/imageMap";

interface WhyItem {
  title: string;
  description: string;
}

interface WhyNililiaSectionProps {
  title: string;
  items: WhyItem[];
}

export default function WhyNililiaSection({ title, items }: WhyNililiaSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const reasons = [
    {
      number: '01',
      title: items[0]?.title ?? '압도적인 기술력으로',
      description: items[0]?.description ?? '닐리리아의 독자 기술은 단순히 번역을 효율화 하는 것에서 그치지 않습니다. 일하는 방식 전체를 혁신합니다.',
      image: UNSPLASH_IMAGES.whyTech,
      tags: ['표준·자동화된 워크플로', '생산율을 높이는 에디터', '자동화 품질 관리']
    },
    {
      number: '02',
      title: items[1]?.title ?? '콘텐츠 세계화 과정 전반 지원',
      description: items[1]?.description ?? '번역, 자막 처리, 더빙 등 현지화 전 과정을 지원합니다. 더 적은 리소스로 더 많은 콘텐츠를 세계화해 보세요.',
      image: UNSPLASH_IMAGES.whyGlobal,
      tags: ['웹툰 디자인', '영상 디자인', '보이스오버 / 더빙']
    },
    {
      number: '03',
      title: items[2]?.title ?? '원스톱으로 손쉬운 콘텐츠 유통',
      description: items[2]?.description ?? '작품 선정부터 라이선싱 협상, 수익 정산까지 전 과정을 지원하는 닐리리아는 믿을 수 있는 유통 파트너입니다.',
      image: UNSPLASH_IMAGES.whyDistribution,
      tags: ['번거로움 없는 수출', '수준 높은 번역·현지화']
    }
  ];

  // 무한 루프를 위해 데이터 복제
  const extendedReasons = [...reasons, reasons[0]];

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  useEffect(() => {
    timerRef.current = setInterval(handleNext, 3500); // 3.5초 대기
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (activeIndex === reasons.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500); // 0.5초 애니메이션 후 순간이동
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, reasons.length]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        
        <div className="relative min-h-[600px] flex flex-col justify-center">
          {/* 상단 레이블은 고정 */}
          <div className="absolute top-0 left-0 w-full z-10 border-b border-primary/10 pb-4">
            <span className="text-primary font-bold text-2xl tracking-tight">{title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-20">
            
            {/* 좌측: 숫자 + 텍스트 통합 수직 슬라이드 (통합 트랙) */}
            <div className="lg:col-span-5 relative h-[400px] overflow-hidden order-2 lg:order-1">
              <div 
                className={isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}
                style={{ transform: `translateY(-${activeIndex * 400}px)` }}
              >
                {extendedReasons.map((reason, idx) => (
                  <div key={idx} className="h-[400px] flex flex-col justify-center">
                    {/* 숫자를 타이틀 바로 위로 배치하여 한 번에 같이 슬라이드되게 함 */}
                    <div className="text-4xl font-black text-primary/20 mb-4">
                      {reason.number}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.2] break-keep">
                      {reason.title}
                    </h2>
                    <p className="text-xl text-gray-500 mb-8 leading-relaxed break-keep">
                      {reason.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {reason.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-primary/5 rounded-lg text-xs font-bold text-gray-500 border border-primary/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 우측: 이미지 수직 슬라이드 + 세로 인디케이터 */}
            <div className="lg:col-span-7 flex items-center gap-8 order-1 lg:order-2">
              <div className="relative flex-1 h-[450px] overflow-hidden rounded-[48px] shadow-2xl">
                <div 
                  className={isTransitioning ? "transition-transform duration-500 ease-in-out h-full" : "h-full"}
                  style={{ transform: `translateY(-${activeIndex * 450}px)` }}
                >
                  {extendedReasons.map((reason, idx) => (
                    <div key={idx} className="h-[450px] w-full relative shrink-0">
                      <img 
                        src={reason.image} 
                        alt={reason.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 세로형 점(Dot) 인디케이터 */}
              <div className="flex flex-col gap-4 py-4">
                {reasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-xl transition-all duration-300 ${
                      (activeIndex % reasons.length) === index ? "bg-primary" : "bg-primary/20 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
