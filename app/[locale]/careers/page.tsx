import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "닐리리아 채용 정보와 글로벌 프로젝트 참여 기회를 확인해 보세요.",
};

export default function CareersPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Career
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
            글로벌 시장을 움직이는 콘텐츠,
            <br />
            그 변화를 함께 만들 동료를 찾습니다.
            <br />
            닐리리아에서 시작하세요.
          </h1>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <div className="flex h-[320px] items-center justify-center text-sm text-gray-500 sm:h-[460px]">
            Career hero image placeholder
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-bold text-gray-900">닐리리아와 함께 세상을 연결하세요!</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900">정규직 채용</h3>
            <p className="mt-3 text-gray-600">닐리리아의 글로벌화에 합류하세요.</p>
            <div className="mt-6">
              <Button href="https://nililia.ninehire.site/" target="_blank" rel="noopener noreferrer">
                지금 지원하기
              </Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-gray-900">프리랜서 채용</h3>
            <p className="mt-3 text-gray-600">글로벌 프로젝트에 참여해 보세요.</p>
            <div className="mt-6">
              <Button href="/careers/freelance-pilot">지금 지원하기</Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
