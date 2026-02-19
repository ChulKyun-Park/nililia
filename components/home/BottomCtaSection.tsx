"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

/**
 * BottomCtaSection: 홈 탭 하단 CTA
 * - '성공 사례 보기' 버튼을 Cases 페이지(/cases)로 연결하도록 업데이트했습니다.
 */
export default function BottomCtaSection() {
  return (
    <section className="py-24 bg-primary">
      <Container className="text-center">
        {/* 타이틀: 시스템 규격 폰트 사이즈 적용 */}
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter break-keep">
          글로벌 시장으로의 첫 걸음, 지금 시작하세요
        </h2>

        {/* 설명 문구: 텍스트 대비 최적화 */}
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed break-keep font-medium">
          전문가와 상의하고 당신의 콘텐츠에 가장 알맞은 솔루션을 받아 보세요. <br className="hidden md:block" />
          이미 1,300여 개 이상의 기업이 닐리리아와 함께하고 있습니다.
        </p>

        {/* 버튼 그룹: 목적지 /cases로 변경 완료 */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <button className="bg-background text-primary px-10 py-5 rounded-xl font-bold text-xl hover:bg-background/90 transition-all shadow-2xl flex items-center active:scale-95">
              무료 상담 신청 <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </Link>
          
          {/* ⭐ 수정 포인트: '서비스 보기' -> '성공 사례 보기', /services -> /cases ⭐ */}
          <Link href="/cases">
            <button className="border-2 border-white/30 bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all active:scale-95">
              성공 사례 보기
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}