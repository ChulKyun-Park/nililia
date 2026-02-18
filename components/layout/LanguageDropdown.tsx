"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export type LanguageOption = {
  code: (typeof routing.locales)[number];
  flag: string;
};

const languageOptions: LanguageOption[] = [
  { code: "ko", flag: "🇰🇷" },
  { code: "en", flag: "🇺🇸" },
  { code: "zh", flag: "🇨🇳" },
  { code: "tw", flag: "🇹🇼" },
  { code: "jp", flag: "🇯🇵" },
  { code: "vi", flag: "🇻🇳" },
  { code: "es", flag: "🇪🇸" },
  { code: "id", flag: "🇮🇩" },
  { code: "th", flag: "🇹🇭" },
  { code: "ru", flag: "🇷🇺" },
];

function LanguageBadge({ option }: { option: LanguageOption }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm">
        {option.flag}
      </span>
      <span className="text-sm font-semibold uppercase">{option.code}</span>
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
    if (!open) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const onFocusOut = (event: globalThis.FocusEvent) => {
      if (!container.contains(event.relatedTarget as globalThis.Node)) {
        closeMenu();
      }
    };

    container.addEventListener("focusout", onFocusOut);
    return () => container.removeEventListener("focusout", onFocusOut);
  }, [open, closeMenu]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <LanguageBadge option={activeOption} />
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
        >
          {languageOptions.map((option) => (
            <li key={option.code}>
              <Link
                href={pathname}
                locale={option.code}
                onClick={closeMenu}
                className="flex w-full items-center rounded-md px-2 py-2 text-gray-700 hover:bg-gray-50"
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
