"use client";

import { Target, Zap, ShieldCheck } from "lucide-react";

export default function CoreValueSection() {
  const values = [
    {
      icon: <Target className="w-7 h-7" />,
      title: "정확도",
      description: "산업별 전문가의 다층 검수로 맥락까지 정확하게 전달합니다.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "속도",
      description: "자동화 워크플로우와 전담 PM으로 프로젝트를 빠르게 완수합니다.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "보안",
      description: "엄격한 보안 프로토콜과 NDA 기반 운영으로 콘텐츠를 안전하게 보호합니다.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight sm:text-4xl">
            글로벌 콘텐츠의 새로운 기준
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[24px] border border-gray-100 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] group w-full md:w-[380px]"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed break-keep">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}