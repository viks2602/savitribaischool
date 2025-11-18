import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Configure locale prefix as 'as-needed' to hide /mr from URLs
  localePrefix: 'as-needed',
});

export const config = {
  // Matcher to exclude API routes, static files, and Next.js internals
  matcher: [
    // Match all pathnames except for
    // - API routes (/api/*)
    // - Static files (/_next/*, /favicon.ico, etc.)
    // - Files with extensions (e.g., .svg, .png, .jpg, etc.)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
