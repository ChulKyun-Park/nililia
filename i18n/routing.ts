import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ko", "en", "zh", "tw", "jp", "vi", "es", "id", "th", "ru"],
  defaultLocale: "ko",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
