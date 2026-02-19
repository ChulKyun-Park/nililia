"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";

export type LanguageOption = {
  code: (typeof routing.locales)[number];
  iso: string;
};

const languageOptions: LanguageOption[] = [
  { code: "ko", iso: "kr" },
  { code: "en", iso: "us" },
  { code: "zh", iso: "cn" },
  { code: "tw", iso: "tw" },
  { code: "jp", iso: "jp" },
  { code: "vi", iso: "vn" },
  { code: "es", iso: "es" },
  { code: "id", iso: "id" },
  { code: "th", iso: "th" },
  { code: "ru", iso: "ru" },
];

function LanguageBadge({ option }: { option: LanguageOption }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-md shadow-sm ring-1 ring-slate-100 shrink-0">
        <span className={`fi fi-${option.iso} !block text-[14px] scale-150`} />
      </span>
      <span className="text-[13px] font-bold uppercase tracking-tight text-slate-700 leading-none">
        {option.code}
      </span>
    </span>
  );
}

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<globalThis.HTMLDivElement | null>(null);
  const pathname = usePathname();
  const currentLocale = useLocale() as LanguageOption["code"];

  const activeOption =
    languageOptions.find((option) => option.code === currentLocale) ??
    languageOptions[0];

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const container = containerRef.current;
    if (!container) return;

    const onFocusOut = (event: globalThis.FocusEvent) => {
      if (!container.contains(event.relatedTarget as globalThis.Node)) {
        closeMenu();
      }
    };

    container.addEventListener("focusout", onFocusOut);
    return () => container.removeEventListener("focusout", onFocusOut);
  }, [open, closeMenu]);

  return (
    <div ref={containerRef} className="relative inline-block w-[105px]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 transition-all hover:border-blue-300 ${
          open ? "border-blue-400 ring-2 ring-blue-50" : ""
        }`}
      >
        <LanguageBadge option={activeOption} />
        <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="absolute left-0 right-0 z-[100] mt-1.5 max-h-60 overflow-y-auto rounded-xl border border-slate-100 bg-white p-1 shadow-2xl backdrop-blur-sm scrollbar-hide">
          {languageOptions.map((option) => (
            <li key={option.code}>
              <Link
                href={pathname}
                locale={option.code}
                onClick={closeMenu}
                className={`flex w-full items-center rounded-lg px-2 py-2.5 transition-colors ${
                  currentLocale === option.code 
                    ? "bg-blue-50 text-blue-600 font-bold" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <LanguageBadge option={option} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}