'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n';
import { useEffect, useState, useTransition } from 'react';

export default function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isClient, setIsClient] = useState(false);

  // Ensure component is mounted on client
  useEffect(() => {
    setIsClient(true);
    
    // Load language preference from localStorage on mount
    const savedLocale = localStorage.getItem('preferredLocale');
    if (savedLocale && savedLocale !== currentLocale && locales.includes(savedLocale as Locale)) {
      switchLanguage(savedLocale as Locale);
    }
  }, []);

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Persist language preference in localStorage
    localStorage.setItem('preferredLocale', newLocale);

    // Update URL with new locale
    startTransition(() => {
      // Remove current locale from pathname if it exists
      const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '').replace(/^\//, '');
      
      // Build new path with locale
      const newPath = newLocale === 'mr' 
        ? `/${pathnameWithoutLocale}` // Default locale (mr) doesn't show in URL
        : `/${newLocale}/${pathnameWithoutLocale}`;

      router.push(newPath);
      router.refresh();
    });
  };

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'mr' ? 'en' : 'mr';
    switchLanguage(newLocale);
  };

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
        <span className="text-sm font-medium text-gray-700">मराठी</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
      aria-label={`Switch to ${currentLocale === 'mr' ? 'English' : 'Marathi'}`}
    >
      {/* Current Language Display */}
      <span className="text-sm font-medium text-gray-700 transition-opacity duration-300">
        {localeNames[currentLocale][currentLocale]}
      </span>

      {/* Visual Indicator - Toggle Icon */}
      <div className="relative w-10 h-5 bg-gray-300 rounded-full transition-colors duration-300 group-hover:bg-gray-400">
        <div
          className={`absolute top-0.5 w-4 h-4 bg-blue-600 rounded-full transition-all duration-300 ${
            currentLocale === 'en' ? 'left-5' : 'left-0.5'
          }`}
        />
      </div>

      {/* Next Language Hint */}
      <span className="text-xs text-gray-500 transition-opacity duration-300">
        {currentLocale === 'mr' ? 'EN' : 'मर'}
      </span>

      {/* Loading Indicator */}
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
}
