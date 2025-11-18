import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'facilities' });
  
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function FacilitiesPage() {
  const t = useTranslations('facilities');
  const common = useTranslations('common');

  const facilities = [
    {
      key: 'library',
      icon: '📚',
      image: '/images/library.jpg',
    },
    {
      key: 'labs',
      icon: '🔬',
      image: '/images/labs.jpg',
    },
    {
      key: 'visualLearning',
      icon: '🖥️',
      image: '/images/visual-learning.jpg',
    },
    {
      key: 'assistiveTech',
      icon: '🎧',
      image: '/images/assistive-tech.jpg',
    },
    {
      key: 'classrooms',
      icon: '🏫',
      image: '/images/classrooms.jpg',
    },
    {
      key: 'sports',
      icon: '⚽',
      image: '/images/sports.jpg',
    },
    {
      key: 'transport',
      icon: '🚌',
      image: '/images/transport.jpg',
    },
    {
      key: 'cctv',
      icon: '📹',
      image: '/images/cctv.jpg',
    },
    {
      key: 'communicationSupport',
      icon: '🤝',
      image: '/images/communication.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl md:text-2xl opacity-90">{t('subtitle')}</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div
                key={facility.key}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Facility Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-6xl">{facility.icon}</span>
                </div>

                {/* Facility Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {t(`${facility.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${facility.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {common('learnMore')}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Visit our campus to see these facilities in person
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            {useTranslations('navigation')('contact')}
          </a>
        </div>
      </section>
    </div>
  );
}
