import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Button from '@/app/components/ui/Button';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'admissions' });
  
  return {
    title: `${t('title')} | ${await getTranslations({ locale: params.locale, namespace: 'school' }).then(t => t('name'))}`,
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
    },
  };
}

export default function AdmissionsPage() {
  const t = useTranslations('admissions');
  const common = useTranslations('common');

  const processSteps = [
    {
      number: '1',
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: '📝',
    },
    {
      number: '2',
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: '🏫',
    },
    {
      number: '3',
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: '📄',
    },
    {
      number: '4',
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      icon: '✍️',
    },
    {
      number: '5',
      title: t('process.step5.title'),
      description: t('process.step5.description'),
      icon: '✅',
    },
  ];

  const eligibilityCriteria = [
    t('eligibility.criteria1'),
    t('eligibility.criteria2'),
    t('eligibility.criteria3'),
    t('eligibility.criteria4'),
    t('eligibility.criteria5'),
  ];

  const requiredDocuments = [
    t('documents.doc1'),
    t('documents.doc2'),
    t('documents.doc3'),
    t('documents.doc4'),
    t('documents.doc5'),
    t('documents.doc6'),
    t('documents.doc7'),
    t('documents.doc8'),
    t('documents.doc9'),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('process.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl mr-4 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('eligibility.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            {t('eligibility.description')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {eligibilityCriteria.map((criteria, index) => (
              <div
                key={index}
                className="flex items-start bg-white rounded-lg p-6 shadow-md"
              >
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-gray-700 flex-1">
                  {criteria}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('documents.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            {t('documents.description')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
            {requiredDocuments.map((doc, index) => (
              <div
                key={index}
                className="flex items-start bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 shadow-sm"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm flex-1">
                  {doc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('form.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('form.description')}
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/pdfs/admission-form.pdf"
              className="inline-flex items-center"
            >
              <span className="mr-2">📥</span>
              {t('form.download')}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-green-100 mb-8">
              {t('cta.description')}
            </p>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="inline-flex items-center bg-white text-green-700 hover:bg-green-50"
            >
              <span className="mr-2">✉️</span>
              {t('cta.button')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
