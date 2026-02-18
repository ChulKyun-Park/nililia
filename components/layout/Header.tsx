"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageDropdown from "@/components/layout/LanguageDropdown";

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
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            locale={locale}
            className="text-xl font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded"
          >
            Nililia
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                locale={locale}
                className={`text-sm font-medium px-1 py-2 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
                  isLinkActive(item.href) ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LanguageDropdown />
            <Button href="/contact" variant="primary" className="px-4 py-2">
              Contact
            </Button>
            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              Company Profile
            </a>
          </div>

          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-100">
          <Container>
            <div className="py-4 space-y-3">
              <nav aria-label="Mobile navigation" className="space-y-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    locale={locale}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 text-base font-medium ${
                      isLinkActive(item.href) ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-2 pt-2">
                <LanguageDropdown />
                <Button href="/contact" variant="primary" className="w-full" onClick={() => setMobileOpen(false)}>
                  Contact
                </Button>
                <a
                  href="/company-profile.pdf"
                  download
                  className="inline-flex w-full items-center justify-center rounded-md border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
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
