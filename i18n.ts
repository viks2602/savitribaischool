import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define supported locales
export const locales = ['mr', 'en'] as const;
export type Locale = (typeof locales)[number];

// Set Marathi as default locale
export const defaultLocale: Locale = 'mr';

// Define locale names in both languages
export const localeNames: Record<Locale, { mr: string; en: string }> = {
  mr: {
    mr: 'मराठी',
    en: 'Marathi',
  },
  en: {
    mr: 'इंग्रजी',
    en: 'English',
  },
};

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
