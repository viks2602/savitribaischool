import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

// Mock notices data - in production this would come from database
const mockNotices = [
  {
    id: '1',
    title: 'Admission Notice for Academic Year 2024-25',
    titleMr: 'शैक्षणिक वर्ष 2024-25 साठी प्रवेश सूचना',
    pdfUrl: '/notices/admission-2024-25.pdf',
    fileSize: 245000, // in bytes
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '2',
    title: 'Annual Examination Schedule',
    titleMr: 'वार्षिक परीक्षा वेळापत्रक',
    pdfUrl: '/notices/exam-schedule.pdf',
    fileSize: 180000,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting Notice',
    titleMr: 'पालक-शिक्षक बैठक सूचना',
    pdfUrl: '/notices/ptm-notice.pdf',
    fileSize: 120000,
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '4',
    title: 'School Holiday List 2024',
    titleMr: 'शाळा सुट्टी यादी 2024',
    pdfUrl: '/notices/holiday-list-2024.pdf',
    fileSize: 150000,
    createdAt: new Date('2024-01-05'),
  },
  {
    id: '5',
    title: 'Fee Structure for Academic Year 2024-25',
    titleMr: 'शैक्षणिक वर्ष 2024-25 साठी फी रचना',
    pdfUrl: '/notices/fee-structure-2024-25.pdf',
    fileSize: 200000,
    createdAt: new Date('2023-12-28'),
  },
];

// Helper function to format file size
function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale });
  
  return {
    title: `${t('navigation.notices')} - ${t('school.name')}`,
    description: params.locale === 'mr' 
      ? 'शाळेच्या सूचना आणि घोषणा पहा' 
      : 'View school notices and announcements',
  };
}

export default function NoticesPage({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const isMarathi = params.locale === 'mr';

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {t('navigation.notices')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isMarathi 
              ? 'शाळेच्या महत्त्वाच्या सूचना आणि घोषणा येथे पहा' 
              : 'View important school notices and announcements here'}
          </p>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {mockNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {isMarathi ? notice.titleMr || notice.title : notice.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {notice.createdAt.toLocaleDateString(isMarathi ? 'mr-IN' : 'en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    {notice.fileSize && (
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        {formatFileSize(notice.fileSize)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={notice.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {isMarathi ? 'पहा' : 'View'}
                  </Link>
                  <Link
                    href={notice.pdfUrl}
                    download
                    className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    {t('common.download')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {mockNotices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {isMarathi 
                ? 'सध्या कोणत्याही सूचना उपलब्ध नाहीत.' 
                : 'No notices available at the moment.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
