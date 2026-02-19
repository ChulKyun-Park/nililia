import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import ServicesPreviewSection from "@/components/home/ServicesPreviewSection";
import WhyNililiaSection from "@/components/home/WhyNililiaSection";
import LatestCasesSection from "@/components/home/LatestCasesSection";
import FaqSection from "@/components/home/FaqSection";
import BottomCtaSection from "@/components/home/BottomCtaSection";
import { siteConfig } from "@/lib/content";
import { fetchCaseList } from "@/lib/notion";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("Home");

  let latestCases: Awaited<ReturnType<typeof fetchCaseList>> = [];
  let caseFetchFallback = "";

  try {
    latestCases = (await fetchCaseList(locale)).slice(0, 3);
  } catch {
    caseFetchFallback = t("cases.fetchError");
  }

  return (
    <>
      {/* 최적화된 애니메이션 스타일 정의 */}
      <style>{`
        @keyframes home-marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes home-marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee {
          will-change: transform;
        }
      `}</style>

      <HeroSection
        title={t("hero.title")}
        description={t("hero.description")}
        primaryCtaLabel={t("hero.primaryCta")}
        secondaryCtaLabel={t("hero.secondaryCta")}
        primaryHref={`/${locale}/contact`}
        secondaryHref={`/${locale}/services`}
        stats={[
          { value: t("hero.stats.languages.value"), label: t("hero.stats.languages.label") },
          { value: t("hero.stats.customers.value"), label: t("hero.stats.customers.label") },
          { value: t("hero.stats.turnaround.value"), label: t("hero.stats.turnaround.label") },
        ]}
      />

      <SocialProofSection
        title={t("socialProof.title")}
        logos={[
          "client 01", "client 02", "client 03", "client 04",
          "client 05", "client 06", "client 07", "client 08",
        ]}
      />

      <CoreValuesSection
        title={t("coreValues.title")}
        values={[
          {
            icon: "🎯",
            title: t("coreValues.items.accuracy.title"),
            description: t("coreValues.items.accuracy.description"),
          },
          {
            icon: "⚡",
            title: t("coreValues.items.speed.title"),
            description: t("coreValues.items.speed.description"),
          },
          {
            icon: "🔒",
            title: t("coreValues.items.security.title"),
            description: t("coreValues.items.security.description"),
          },
        ]}
      />

      <ServicesPreviewSection
        title={t("services.title")}
        items={[
          { title: t("services.items.video.title"), description: t("services.items.video.description") },
          { title: t("services.items.document.title"), description: t("services.items.document.description") },
          { title: t("services.items.webtoon.title"), description: t("services.items.webtoon.description") },
          { title: t("services.items.marketing.title"), description: t("services.items.marketing.description") },
          { title: t("services.items.uiux.title"), description: t("services.items.uiux.description") },
          { title: t("services.items.localizationQa.title"), description: t("services.items.localizationQa.description") },
        ]}
      />

      <WhyNililiaSection
        title={t("whyNililia.title")}
        items={[
          {
            title: t("whyNililia.items.technicalExpertise.title"),
            description: t("whyNililia.items.technicalExpertise.description"),
          },
          {
            title: t("whyNililia.items.oneStopProcess.title"),
            description: t("whyNililia.items.oneStopProcess.description"),
          },
          {
            title: t("whyNililia.items.domainSpecialists.title"),
            description: t("whyNililia.items.domainSpecialists.description"),
          },
          {
            title: t("whyNililia.items.scalableOperations.title"),
            description: t("whyNililia.items.scalableOperations.description"),
          },
        ]}
      />

      <LatestCasesSection
        title={t("cases.title")}
        locale={locale}
        cases={latestCases}
        emptyLabel={t("cases.empty")}
        fallbackLabel={caseFetchFallback}
      />

      <FaqSection
        title={t("faq.title")}
        items={[
          { question: t("faq.items.q1.question"), answer: t("faq.items.q1.answer") },
          { question: t("faq.items.q2.question"), answer: t("faq.items.q2.answer") },
          { question: t("faq.items.q3.question"), answer: t("faq.items.q3.answer") },
          { question: t("faq.items.q4.question"), answer: t("faq.items.q4.answer") },
        ]}
      />

      <BottomCtaSection
        title={t("bottomCta.title")}
        primaryLabel={t("bottomCta.primaryCta")}
        secondaryLabel={t("bottomCta.secondaryCta")}
        primaryHref={`/${locale}/contact`}
        secondaryHref={`/${locale}/services`}
      />
    </>
  );
}