import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Accordion from '@/app/components/ui/Accordion';
import Button from '@/app/components/ui/Button';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'academics' });
  
  return {
    title: `${t('title')} | ${await getTranslations({ locale: params.locale, namespace: 'school' }).then(t => t('name'))}`,
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
    },
  };
}

export default function AcademicsPage() {
  const t = useTranslations('academics');
  const common = useTranslations('common');

  const gradeItems = [
    {
      id: 'primary',
      title: t('grades.primary.title'),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">{t('grades.primary.description')}</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">{t('methodology.title')}:</h4>
            <p className="text-gray-700">{t('grades.primary.focus')}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'middle',
      title: t('grades.middle.title'),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">{t('grades.middle.description')}</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">{t('methodology.title')}:</h4>
            <p className="text-gray-700">{t('grades.middle.focus')}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'secondary',
      title: t('grades.secondary.title'),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">{t('grades.secondary.description')}</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">{t('methodology.title')}:</h4>
            <p className="text-gray-700">{t('grades.secondary.focus')}</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Curriculum Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('curriculum.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            {t('curriculum.description')}
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('curriculum.subjects')}
            </h3>
            <p className="text-lg text-gray-700">
              {t('curriculum.subjectsList')}
            </p>
          </div>
        </div>
      </section>

      {/* Grade-wise Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t('grades.title')}
          </h2>
          <Accordion items={gradeItems} />
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('methodology.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            {t('methodology.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sign Language Instruction */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                  ✋
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('methodology.signLanguage.title')}
                </h3>
              </div>
              <p className="text-gray-700">
                {t('methodology.signLanguage.description')}
              </p>
            </div>

            {/* Visual Learning */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                  👁️
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('methodology.visualLearning.title')}
                </h3>
              </div>
              <p className="text-gray-700">
                {t('methodology.visualLearning.description')}
              </p>
            </div>

            {/* Assistive Technology */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                  💻
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('methodology.assistiveTech.title')}
                </h3>
              </div>
              <p className="text-gray-700">
                {t('methodology.assistiveTech.description')}
              </p>
            </div>

            {/* Individualized Attention */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                  👤
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('methodology.individualized.title')}
                </h3>
              </div>
              <p className="text-gray-700">
                {t('methodology.individualized.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('calendar.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('calendar.description')}
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/pdfs/academic-calendar.pdf"
              className="inline-flex items-center"
            >
              <span className="mr-2">📅</span>
              {t('calendar.download')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
