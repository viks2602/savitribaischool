import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import EnquiryForm from '@/app/components/forms/EnquiryForm';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'navigation' });
  const tSchool = await getTranslations({ locale: params.locale, namespace: 'school' });
  
  return {
    title: `${t('contact')} - ${tSchool('name')}`,
    description: tSchool('description'),
  };
}

export default function ContactPage() {
  const t = useTranslations('navigation');
  const tSchool = useTranslations('school');
  const tFooter = useTranslations('footer');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact')}</h1>
          <p className="text-xl text-blue-100">
            {tSchool('name')}
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {tFooter('contactInfo')}
            </h2>
            
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {tFooter('address')}
              </h3>
              <p className="text-gray-700 ml-8">
                {tSchool('address')}
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {tFooter('phone')}
              </h3>
              <p className="text-gray-700 ml-8">
                <a href="tel:+918390791996" className="hover:text-blue-600 transition-colors">
                  +91 8390791996
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {tFooter('email')}
              </h3>
              <p className="text-gray-700 ml-8">
                <a href="mailto:viks.0226@gmail.com" className="hover:text-blue-600 transition-colors">
                  viks.0226@gmail.com
                </a>
              </p>
            </div>

            {/* Google Maps */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Location</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71190.45167843284!2d74.88536055820312!3d21.258555800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf2bf22d424e85%3A0x5a7a16d6e7de986f!2z4KS44KS-4KS14KS_4KSk4KWN4KSw4KWA4KSs4KS-4KSIIOCkq-ClgeCksuClhyDgpK7gpYLgpJXgpKzgpKfgpL_gpLAg4KSo4KS_4KS14KS-4KS44KWAIOCkteCkv-CkpuCljeCkr-CkvuCksuCkryDgpKXgpL7gpLPgpKjgpYfgpLA!5e1!3m2!1sen!2sin!4v1763450004635!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                />
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
