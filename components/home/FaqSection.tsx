"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/Container";

/**
 * FAQSection: 6개의 카테고리로 통합된 최종 버전
 * 디자인 가이드 준수: Primary Blue (#0097FE), Rounded-XL (12px)
 */
export default function FAQSection() {
  const t = useTranslations("Home.faq");
  
  // 중요: 질문이 6개이므로 q1부터 q6까지 모두 포함해야 합니다.
  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* 헤더 영역: 생략되었던 제목과 디자인 요소 복구 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tighter uppercase">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              닐리리아 서비스에 대해 가장 궁금해하시는 6가지 핵심 사항입니다.
            </p>
            <div className="w-12 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* 아코디언 영역: rounded-xl 및 애니메이션 최적화 */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqKeys.map((key) => (
              <AccordionItem 
                key={key} 
                value={key} 
                className="border border-border rounded-xl px-6 bg-card transition-all hover:border-primary/50 shadow-sm"
              >
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors no-underline hover:no-underline break-keep leading-snug">
                  {t(`items.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-muted-foreground pb-6 leading-relaxed whitespace-pre-line break-keep border-t border-border/50 pt-4">
                  {t(`items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}