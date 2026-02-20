"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, Rocket, Users, Globe, ArrowRight } from "lucide-react";
import { UNSPLASH_IMAGES } from "@/lib/imageMap";

export default function CompanyPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: '고객 중심',
      description: '고객의 성공이 우리의 성공입니다. 모든 결정의 중심에 고객을 둡니다.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: '품질 보증',
      description: '최고 수준의 번역 품질과 정확성을 보장합니다.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: '혁신 추구',
      description: '최신 기술과 프로세스로 지속적인 혁신을 추구합니다.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '협업 문화',
      description: '전문가들의 긴밀한 협업으로 최상의 결과를 만듭니다.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '글로벌 네트워크',
      description: '전 세계 언어 전문가와 함께 합니다.',
    },
  ];

  const milestones = [
    { year: '2016', title: '회사 설립', description: '챗봇 서비스 시작', extra: 'AI를 도입한 챗봇 첫 서비스를 시작하였습니다.\n베트남 시장을 타깃으로 번역 서비스 첫 발을 디뎠습니다.\n작은 팀이었지만 기준은 글로벌이었습니다.', position: 'left' },
    { year: '2017', title: '사업 확장', description: '번역 서비스 론칭', extra: '번역을 넘어 영상 콘텐츠 영역으로 확장했습니다.\n고객 경험을 완성하는 서비스로 진화했습니다.\n새로운 시장에서 우리의 가능성을 증명했습니다.', position: 'right' },
    { year: '2019', title: '기술 혁신', description: 'TMS 플랫폼 개발', extra: '자체 TMS 플랫폼을 개발하며 기술 기반을 구축했습니다.\n데이터 중심 운영으로 품질과 속도 모두 향상시켰습니다.\n기술이 곧 경쟁력이 되는 구조를 만들었습니다.', position: 'left' },
    { year: '2022', title: '글로벌 진출', description: '해외 파트너쉽 확대', extra: '해외 파트너십을 통해 글로벌 네트워크를 확장했습니다.\n다양한 문화와 시장을 연결하는 허브로 성장했습니다.\n협업을 통해 국제 경쟁력을 강화했습니다.', position: 'right' },
    { year: '2024', title: '업계 선도', description: '번역 지원 언어 증가', extra: '기본 10+ 언어를 지원하는 플랫폼으로 자리 잡았습니다.\n품질과 신뢰를 기반으로 업계를 선도하고 있습니다.\n지속적인 혁신으로 새로운 기준을 만들어가고 있습니다.', position: 'left' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 히어로 섹션 */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight break-keep">
              닐리리아는 글로벌 콘텐츠 현지화를 선도하는
              <br />
              <span className="text-primary">AI 기반 번역 및 현지화 전문 기업</span>입니다.
            </h1>
          </div>
        </div>
      </section>

      {/* 미션 섹션 */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight break-keep">
                언어의 경계를 넘어<br />
                세계를 연결합니다
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 break-keep">
                닐리리아는 2016년 설립 이후, 전문 번역가와 최신 기술을 결합하여 고품질 현지화 서비스를 제공해왔습니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed break-keep">
                영상 자막 제작, 문서·카탈로그 번역, 게임 번역, 웹툰 현지화 등 다양한 분야에서 글로벌 기업들의 신뢰받는 파트너로 성장하고 있습니다.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-border">
                <Image
                  src={UNSPLASH_IMAGES.aboutTeam}
                  alt="Company Mission"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              Core Values
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">우리의 핵심 가치</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              닐리리아를 움직이는 원칙과 철학입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-[32px] p-8 border border-border hover:border-primary hover:shadow-xl transition-all group text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 성장의 여정 (Timeline) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">성장의 여정</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* 중앙 라인 */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-primary/10" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const isLeft = milestone.position === 'left';
                return (
                  <div key={index} className="relative">
                    {/* 중앙 점 */}
                    <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                    </div>

                    <div className={`grid grid-cols-2 gap-8 ${isLeft ? "text-right" : "text-left"}`}>
                      {/* 왼쪽 내용 */}
                      <div className={isLeft ? "pr-12" : "invisible h-0 md:visible md:h-auto"}>
                        {isLeft && (
                          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                            <div className="shrink-0 bg-card rounded-[32px] p-6 border border-border hover:border-primary transition-all shadow-sm w-full md:w-40 text-center">
                              <div className="text-3xl font-black text-primary mb-1">{milestone.year}</div>
                              <h3 className="text-lg font-bold text-foreground">{milestone.title}</h3>
                            </div>
                            <div className="bg-card rounded-[32px] p-5 border border-border shadow-sm text-right hidden md:block">
                              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                                {milestone.extra}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 오른쪽 내용 */}
                      <div className={!isLeft ? "pl-12" : "invisible h-0 md:visible md:h-auto"}>
                        {!isLeft && (
                          <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="shrink-0 bg-card rounded-[32px] p-6 border border-border hover:border-primary transition-all shadow-sm w-full md:w-40 text-center">
                              <div className="text-3xl font-black text-primary mb-1">{milestone.year}</div>
                              <h3 className="text-lg font-bold text-foreground">{milestone.title}</h3>
                            </div>
                            <div className="bg-card rounded-[32px] p-5 border border-border shadow-sm text-left hidden md:block">
                              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                                {milestone.extra}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            함께 성장할 인재를 찾습니다
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90">
            글로벌 콘텐츠 현지화의 미래를 함께 만들어갈 동료를 기다립니다
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-background text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-background/90 transition-all shadow-xl"
          >
            채용 정보 보기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}