"use client";

import { useState, useRef, useEffect, useCallback } from "react";
// import Link from "next/link"; // 사용되지 않으면 삭제
import { usePathname } from "next/navigation";
import { navConfig, siteConfig } from "@/lib/content";
import Container from "@/components/ui/Container";

type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: { label: string; href: string }[] };

function DropdownMenu({
  item,
  isMobile = false,
}: {
  item: NavItem & { children: { label: string; href: string }[] };
  isMobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  // Close when focus leaves the container
  useEffect(() => {
    if (isMobile) return;
    const el = containerRef.current;
    if (!el) return;
    const handleFocusOut = (e: FocusEvent) => {
      if (!el.contains(e.relatedTarget as Node)) {
        close();
      }
    };
    el.addEventListener("focusout", handleFocusOut);
    return () => el.removeEventListener("focusout", handleFocusOut);
  }, [isMobile, close]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        containerRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, close]);

  if (isMobile) {
    return (
      <div>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-700 hover:text-gray-900"
        >
          {item.label}
          <svg
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <ul className="mt-1 space-y-1 pl-4">
            {item.children.map((child) => (
              <li key={child.href}>
                <a
                  href={child.href}
                  className={`block py-2 text-sm ${
                    pathname === child.href ? "font-semibold text-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded px-1 py-2"
      >
        {item.label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 min-w-[180px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
        >
          {item.children.map((child) => (
            <li key={child.href} role="none">
              <a
                href={child.href}
                role="menuitem"
                onClick={close}
                className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${
                  pathname === child.href ? "font-semibold text-blue-600" : "text-gray-700"
                }`}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const items = navConfig.links as NavItem[];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded"
          >
            {siteConfig.name}
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {items.map((item) => {
              if (item.children) {
                return (
                  <DropdownMenu
                    key={item.label}
                    item={item as NavItem & { children: { label: string; href: string }[] }}
                  />
                );
              }
              return (
                <a
                  key={item.href}
                  href={item.href!}
                  className={`text-sm font-medium px-1 py-2 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
                    pathname === item.href
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-100">
          <Container>
            <nav aria-label="Mobile navigation" className="py-4 space-y-1">
              {items.map((item) => {
                if (item.children) {
                  return (
                    <DropdownMenu
                      key={item.label}
                      item={item as NavItem & { children: { label: string; href: string }[] }}
                      isMobile
                    />
                  );
                }
                return (
                  <a
                    key={item.href}
                    href={item.href!}
                    className={`block py-2 text-base font-medium ${
                      pathname === item.href
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}