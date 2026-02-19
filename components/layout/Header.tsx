"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageDropdown from "@/components/layout/LanguageDropdown";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Cases", href: "/cases" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
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
    // 가이드 준수: bg-background, border-border
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

          {/* 데스크탑 내비게이션: text-primary 변수 활용 */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                locale={locale}
                className={cn(
                  "text-sm font-bold px-1 py-2 transition-colors relative",
                  isLinkActive(item.href) 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 버튼 그룹: primary 토큰 및 rounded-xl(12px) 적용 */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageDropdown />
            <Button 
              href="/contact" 
              variant="primary" 
              className="px-6 py-2.5 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
            >
              Contact
            </Button>
            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-2 text-sm font-bold text-primary transition-all hover:bg-primary/5 focus-visible:outline-primary"
            >
              Company Profile
            </a>
          </div>

          {/* 모바일 햄버거 메뉴 */}
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex md:hidden items-center justify-center rounded-xl p-2 text-muted-foreground hover:bg-primary/5 focus-visible:outline-primary"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </Container>

      {/* 모바일 메뉴 레이아웃 */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background animate-in slide-in-from-top duration-300">
          <Container>
            <div className="py-8 space-y-6">
              <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    locale={locale}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-xl font-bold transition-colors",
                      isLinkActive(item.href) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <LanguageDropdown />
                <Button 
                  href="/contact" 
                  variant="primary" 
                  className="w-full py-4 rounded-xl font-bold bg-primary text-primary-foreground" 
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Button>
                <a
                  href="/company-profile.pdf"
                  download
                  className="inline-flex w-full items-center justify-center rounded-xl border-2 border-primary px-5 py-4 text-base font-bold text-primary"
                >
                  Company Profile
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}