import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(ko|en|zh|tw|jp|vi|es|id|th|ru)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
