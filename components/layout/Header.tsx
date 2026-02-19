"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageDropdown from "@/components/layout/LanguageDropdown";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

// ⭐ 핵심 수정: 모든 객체가 동일한 구조를 갖도록 'isHome'을 명시적으로 추가 ⭐
const navLinks = [
  { label: "Home", href: "/", isHome: true },
  { label: "회사소개", href: "/about", isHome: false },
  { label: "서비스", href: "/services", isHome: false },
  { label: "고객사례", href: "/cases", isHome: false },
  { label: "소식", href: "/news", isHome: false },
  { label: "채용", href: "/careers", isHome: false },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            locale={locale}
            className="text-2xl font-black tracking-tighter text-foreground focus-visible:outline-primary rounded-lg transition-transform hover:scale-105"
          >
            Nililia
          </Link>

          {/* 데스크탑 내비게이션: Home 아이콘 적용 */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                locale={locale}
                className={cn(
                  "text-sm font-bold px-1 py-2 transition-colors relative flex items-center",
                  isLinkActive(item.href) 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {/* isHome이 true일 때만 아이콘 출력 */}
                {item.isHome ? (
                  <Home className="w-5 h-5" />
                ) : (
                  item.label
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageDropdown />
            <Button 
              href="/contact" 
              variant="primary" 
              className="px-6 py-2.5 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
            >
              문의하기
            </Button>
            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-2 text-sm font-bold text-primary transition-all hover:bg-primary/5 focus-visible:outline-primary"
            >
              소개서 다운로드
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex md:hidden items-center justify-center rounded-xl p-2 text-muted-foreground hover:bg-primary/5 focus-visible:outline-primary"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </Container>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background animate-in slide-in-from-top duration-300">
          <Container>
            <div className="py-8 space-y-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    locale={locale}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-xl font-bold transition-colors flex items-center gap-2",
                      isLinkActive(item.href) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.isHome && <Home className="w-6 h-6" />}
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}