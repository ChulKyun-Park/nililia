import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import InquiryForm from "@/components/contact/InquiryForm";

export const metadata: Metadata = {
  title: "문의하기",
  description: "Need support or have a localization project? Contact Nililia and receive a response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="문의하기"
        description="프로젝트 문의나 서비스 상담이 필요하시면 언제든지 연락해 주세요. 접수 후 24시간 이내에 답변드립니다."
      />

      <Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <h2 className="text-base font-semibold text-gray-900">Email</h2>
            <p className="mt-2 text-sm text-gray-600">contact@nililia.com</p>
          </Card>
          <Card>
            <h2 className="text-base font-semibold text-gray-900">Phone</h2>
            <p className="mt-2 text-sm text-gray-600">+82-2-1234-5678</p>
          </Card>
          <Card>
            <h2 className="text-base font-semibold text-gray-900">Address</h2>
            <p className="mt-2 text-sm text-gray-600">서울특별시 강남구 테헤란로 123, Nililia Tower</p>
          </Card>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">Project Inquiry</h2>
          <p className="mt-2 text-sm text-gray-600">Tell us about your timeline, scope, and target markets.</p>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-gray-900">Visit Us</h2>
        <p className="mt-2 text-sm text-gray-600">서울특별시 강남구 테헤란로 123, Nililia Tower</p>
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-500">
          Embedded map component placeholder
        </div>
      </Section>
    </>
  );
}
