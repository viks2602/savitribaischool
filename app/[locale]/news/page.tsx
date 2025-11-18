import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';

// Mock news data - in production this would come from database
const mockNews = [
  {
    id: '1',
    slug: 'annual-day-celebration-2024',
    title: 'Annual Day Celebration 2024',
    titleMr: 'वार्षिक दिन साजरा 2024',
    excerpt: 'Our school celebrated its annual day with great enthusiasm. Students showcased their talents through various performances.',
    excerptMr: 'आमच्या शाळेने मोठ्या उत्साहाने वार्षिक दिन साजरा केला. विद्यार्थ्यांनी विविध कार्यक्रमांद्वारे त्यांची प्रतिभा दाखवली.',
    image: '/placeholder-news.jpg',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    slug: 'sports-day-achievements',
    title: 'Sports Day Achievements',
    titleMr: 'क्रीडा दिन उपलब्धी',
    excerpt: 'Our students won multiple medals in the inter-school sports competition, showcasing their athletic abilities.',
    excerptMr: 'आमच्या विद्यार्थ्यांनी आंतर-शालेय क्रीडा स्पर्धेत अनेक पदके जिंकली, त्यांची क्रीडा क्षमता दाखवली.',
    image: '/placeholder-news.jpg',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '3',
    slug: 'new-assistive-technology-lab',
    title: 'New Assistive Technology Lab Inaugurated',
    titleMr: 'नवीन सहाय्यक तंत्रज्ञान प्रयोगशाळा उद्घाटन',
    excerpt: 'A state-of-the-art assistive technology lab was inaugurated to enhance learning experiences for our students.',
    excerptMr: 'आमच्या विद्यार्थ्यांच्या शिक्षण अनुभव वाढविण्यासाठी अत्याधुनिक सहाय्यक तंत्रज्ञान प्रयोगशाळेचे उद्घाटन करण्यात आले.',
    image: '/placeholder-news.jpg',
    createdAt: new Date('2024-01-05'),
  },
];

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale });
  
  return {
    title: `${t('navigation.news')} - ${t('school.name')}`,
    description: t('home.news.subtitle'),
  };
}

export default function NewsPage({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const isMarathi = params.locale === 'mr';

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {t('navigation.news')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('home.news.subtitle')}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* News Image */}
              <div className="relative h-48 bg-gray-200">
                {news.image && (
                  <Image
                    src={news.image}
                    alt={isMarathi ? news.titleMr : news.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                )}
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {news.createdAt.toLocaleDateString(isMarathi ? 'mr-IN' : 'en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">
                  {isMarathi ? news.titleMr : news.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {isMarathi ? news.excerptMr : news.excerpt}
                </p>
                <Link
                  href={`/${params.locale}/news/${news.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  {t('common.readMore')} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State (if no news) */}
        {mockNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {isMarathi ? 'सध्या कोणत्याही बातम्या उपलब्ध नाहीत.' : 'No news available at the moment.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
