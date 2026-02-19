import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Heart, Lightbulb, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Nililia",
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("About");

  // 타임라인 연도 설정 (ko.json의 키와 일치)
  const journeyYears = ["2016", "2017", "2019", "2022", "2024"] as const;

  return (
    <main className="flex flex-col w-full">
      {/* 1. 상단 블루 배너 */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl">
            {t("hero.headline")}
          </h1>
        </div>
      </section>

      {/* 2. 미션 섹션 (이미지 + 텍스트) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
              {t("mission.tag")}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{t("mission.title")}</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>{t("mission.desc1")}</p>
              <p>{t("mission.desc2")}</p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Mission Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. 핵심 가치 (2x2 그리드) */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">{t("values.title")}</h2>
            <p className="mt-4 text-slate-500">{t("values.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard icon={<Heart />} title={t("values.customer.title")} desc={t("values.customer.desc")} />
            <ValueCard icon={<ShieldCheck />} title={t("values.quality.title")} desc={t("values.quality.desc")} />
            <ValueCard icon={<Lightbulb />} title={t("values.innovation.title")} desc={t("values.innovation.desc")} />
            <ValueCard icon={<Users />} title={t("values.collaboration.title")} desc={t("values.collaboration.desc")} />
          </div>
        </div>
      </section>

      {/* 4. 성장 여정 (타임라인) */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-20">{t("journey.title")}</h2>
          <div className="absolute left-1/2 top-40 h-[70%] w-0.5 bg-blue-100 hidden md:block" />
          <div className="space-y-20">
            {journeyYears.map((year, index) => (
              <div key={year} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-[45%] bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                  <span className="text-blue-600 font-black text-3xl">{year}</span>
                  <h4 className="text-xl font-bold mt-2">{t(`journey.events.${year}.title`)}</h4>
                  <p className="text-slate-500 mt-2">{t(`journey.events.${year}.desc`)}</p>
                </div>
                <div className="hidden md:block w-4 h-4 rounded-full bg-blue-600 border-4 border-white z-10 shadow-sm" />
                <div className="md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}