"use client";

interface SocialProofSectionProps {
  title: string;
  logos?: string[];
}

export default function SocialProofSection({ title, logos = [] }: SocialProofSectionProps) {
  // 1. 컴퍼니 데이터 20개 생성 (A Company ~ T Company)
  const companies = logos.length ? logos : Array.from({ length: 20 }, (_, i) => `${String.fromCharCode(65 + i)} Company`);
  
  // 2. 채널 데이터 20개 생성 (Channel 1 ~ Channel 20)
  const creators = Array.from({ length: 20 }, (_, i) => `Channel ${i + 1}`);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <p className="text-sm font-bold text-primary mb-3 tracking-widest uppercase">Trusted Partners</p>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>

      <style>{`
        @keyframes marquee-infinite-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-infinite-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 2.5rem;
          will-change: transform;
        }
      `}</style>

      {/* 첫 번째 줄: 컴퍼니 (우 -> 좌) - 20s 고속 무한 루프 */}
      <div className="flex overflow-hidden mb-24">
        <div className="marquee-track animate-[marquee-infinite-left_20s_linear_infinite]">
          {/* 심리스 루프를 위해 데이터를 2번 반복 (데이터셋 20개 + 20개) */}
          {[...companies, ...companies].map((item, i) => (
            <div key={`comp-${i}`} className="flex-none bg-primary/5 px-12 py-6 rounded-xl border border-primary/10 text-gray-500 font-bold min-w-[200px] text-center shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">500명 이상의 크리에이터와 함께합니다</h2>
      </div>

      {/* 두 번째 줄: 채널 (좌 -> 우) - 22s 고속 무한 루프 */}
      <div className="flex overflow-hidden">
        <div className="marquee-track animate-[marquee-infinite-right_22s_linear_infinite]">
          {/* 심리스 루프를 위해 데이터를 2번 반복 (데이터셋 20개 + 20개) */}
          {[...creators, ...creators].map((item, i) => (
            <div key={`cre-${i}`} className="flex-none flex flex-col items-center gap-4 min-w-[160px]">
              <div className="w-20 h-20 bg-primary/5 rounded-xl flex items-center justify-center text-gray-500 border border-primary/10 shadow-inner">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-500">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}