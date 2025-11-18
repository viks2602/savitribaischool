import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-blue-100">
              {t('home.hero.subtitle')}
            </p>
            <p className="text-lg mb-8 text-blue-50">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {t('home.hero.ctaAdmissions')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg border-2 border-white hover:bg-blue-600 transition-colors"
              >
                {t('home.hero.ctaContact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('home.highlights.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">{t('home.highlights.students')}</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">{t('home.highlights.teachers')}</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">{t('home.highlights.years')}</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">{t('home.highlights.achievements')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Preview Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              {t('home.news.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.news.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Placeholder news cards - will be populated from database in future */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date().toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('home.news.title')} {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('home.news.subtitle')}
                  </p>
                  <Link
                    href="/news"
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    {t('common.readMore')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('common.viewAllNews')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder testimonial cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Parent {item}</div>
                    <div className="text-sm text-gray-500">{t('school.name')}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{t('home.testimonials.subtitle')}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
