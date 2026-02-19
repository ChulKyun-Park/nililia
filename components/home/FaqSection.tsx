"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/Container";

/**
 * FAQSection: 6개의 핵심 카테고리 통합 버전
 * 디자인 가이드 준수: Primary Blue (#0097FE), Rounded-XL (12px)
 * 데이터 원본: 컴포넌트 내부 상수로 관리
 */
export default function FAQSection() {
  // 사용자님이 요청하신 6개의 핵심 카테고리 데이터입니다.
  const faqs = [
    { 
      question: "지원하는 언어는 무엇인가요?", 
      answer: "영어, 중국어(간체/번체), 일본어, 베트남어, 스페인어, 인도네시아어, 태국어, 러시아어, 독일어, 프랑스어, 아랍어 등 10개 이상의 주요 언어를 지원하며, 특수 언어 맞춤 솔루션도 제공합니다." 
    },
    { 
      question: "프로젝트 소요 기간 및 작업 기간은 얼마나 걸리나요?", 
      answer: "프로젝트 규모에 따라 소규모는 3~5일, 중규모는 1~2주, 대규모는 3~4주 정도 소요됩니다. 긴급 건의 경우 협의를 통해 일정을 최대한 단축해 드립니다." 
    },
    { 
      question: "어떤 파일 형식을 지원하나요?", 
      answer: "DOCX, PPTX, SRT, JSON, XLIFF 등 일반 문서부터 개발용 리소스 파일까지 모든 비즈니스 형식을 지원하여 기술적 제약 없이 즉시 작업이 가능합니다." 
    },
    { 
      question: "품질 보장과 보안 유지는 어떻게 이루어지나요?", 
      answer: "산업별 전문가의 다단계 검수 시스템과 NDA(비밀유지계약) 체결을 기본으로 합니다. 엄격한 접근 권한 통제를 통해 최상의 품질과 보안을 동시에 보장합니다." 
    },
    { 
      question: "수정 요청 및 사후 관리가 가능한가요?", 
      answer: "최종 납품 후 2회까지 무료 수정을 제공합니다. 고객님의 피드백을 즉각 반영하여 현지 문화와 맥락에 완벽하게 부합하는 결과물을 만들어 드립니다." 
    },
    { 
      question: "샘플 번역 제공과 가격 책정 기준이 궁금합니다.", 
      answer: "작업 난이도와 분량에 따른 투명한 견적을 제공합니다. 대규모 프로젝트의 경우 사전에 샘플 번역을 통해 품질을 직접 확인하신 후 진행하실 수 있습니다." 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* 헤더 섹션: 디자인 가이드 반영 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tighter uppercase">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-gray-500 mb-6">궁금하신 점을 빠르게 확인하세요</p>
            <div className="w-12 h-1.5 bg-[#0097FE] mx-auto rounded-full"></div>
          </div>

          {/* 아코디언 리스트: 12px 둥근 네모 스타일 적용 */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-white transition-all hover:border-[#0097FE]/50 shadow-sm"
              >
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-[#0097FE] transition-colors no-underline hover:no-underline break-keep leading-snug">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-gray-500 pb-6 leading-relaxed whitespace-pre-line break-keep border-t border-border/50 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}