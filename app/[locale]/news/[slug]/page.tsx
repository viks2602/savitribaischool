import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Mock news data - in production this would come from database
const mockNewsData: Record<string, any> = {
  'annual-day-celebration-2024': {
    id: '1',
    slug: 'annual-day-celebration-2024',
    title: 'Annual Day Celebration 2024',
    titleMr: 'वार्षिक दिन साजरा 2024',
    content: `Our school celebrated its annual day with great enthusiasm and joy. The event was attended by parents, teachers, and students who came together to celebrate the achievements of the past year.

The program began with a welcome speech by our principal, followed by various cultural performances by our talented students. The performances included sign language poetry, dance performances, and drama presentations that showcased the incredible abilities of our deaf and mute students.

Special awards were given to students who excelled in academics, sports, and extracurricular activities. The event concluded with a vote of thanks and refreshments for all attendees.

This annual day celebration was a testament to the hard work and dedication of our students and teachers, and it reinforced our commitment to providing quality education to all our students.`,
    contentMr: `आमच्या शाळेने मोठ्या उत्साहाने आणि आनंदाने वार्षिक दिन साजरा केला. या कार्यक्रमाला पालक, शिक्षक आणि विद्यार्थी उपस्थित होते जे मागील वर्षाच्या उपलब्धी साजरे करण्यासाठी एकत्र आले होते.

कार्यक्रमाची सुरुवात आमच्या मुख्याध्यापकांच्या स्वागत भाषणाने झाली, त्यानंतर आमच्या प्रतिभावान विद्यार्थ्यांनी विविध सांस्कृतिक कार्यक्रम सादर केले. कार्यक्रमांमध्ये सांकेतिक भाषा कविता, नृत्य सादरीकरण आणि नाटक सादरीकरण समाविष्ट होते ज्याने आमच्या बधिर आणि मूकबधिर विद्यार्थ्यांची अविश्वसनीय क्षमता दाखवली.

शैक्षणिक, क्रीडा आणि अभ्यासेतर क्रियाकलापांमध्ये उत्कृष्ट कामगिरी करणाऱ्या विद्यार्थ्यांना विशेष पुरस्कार देण्यात आले. कार्यक्रमाचा समारोप आभार मानून आणि सर्व उपस्थितांसाठी जलपान देऊन झाला.

हा वार्षिक दिन साजरा आमच्या विद्यार्थ्यांच्या आणि शिक्षकांच्या कठोर परिश्रम आणि समर्पणाचा पुरावा होता, आणि त्याने आमच्या सर्व विद्यार्थ्यांना दर्जेदार शिक्षण प्रदान करण्याच्या आमच्या वचनबद्धतेला बळकटी दिली.`,
    image: '/placeholder-news.jpg',
    createdAt: new Date('2024-01-15'),
  },
  'sports-day-achievements': {
    id: '2',
    slug: 'sports-day-achievements',
    title: 'Sports Day Achievements',
    titleMr: 'क्रीडा दिन उपलब्धी',
    content: `Our students participated in the inter-school sports competition and brought home multiple medals, making us incredibly proud of their achievements.

The competition included various events such as running, long jump, shot put, and relay races. Our students competed with determination and sportsmanship, showcasing their athletic abilities and team spirit.

Special mention goes to our students who won gold medals in their respective categories. Their dedication to training and their never-give-up attitude inspired everyone at the school.

This achievement highlights the importance of physical education and sports in our curriculum. We believe that sports help develop confidence, teamwork, and physical fitness, which are essential for the overall development of our students.`,
    contentMr: `आमच्या विद्यार्थ्यांनी आंतर-शालेय क्रीडा स्पर्धेत भाग घेतला आणि अनेक पदके घरी आणली, ज्यामुळे आम्हाला त्यांच्या उपलब्धींचा अविश्वसनीय अभिमान वाटतो.

स्पर्धेमध्ये धावणे, लांब उडी, गोळा फेक आणि रिले शर्यती यासारखे विविध कार्यक्रम समाविष्ट होते. आमच्या विद्यार्थ्यांनी दृढनिश्चय आणि क्रीडा भावनेने स्पर्धा केली, त्यांची क्रीडा क्षमता आणि सांघिक भावना दाखवली.

त्यांच्या संबंधित श्रेणींमध्ये सुवर्णपदके जिंकणाऱ्या आमच्या विद्यार्थ्यांचा विशेष उल्लेख. त्यांच्या प्रशिक्षणाप्रती समर्पण आणि त्यांच्या कधीही हार न मानण्याच्या वृत्तीने शाळेतील प्रत्येकाला प्रेरणा दिली.

ही उपलब्धी आमच्या अभ्यासक्रमात शारीरिक शिक्षण आणि क्रीडांचे महत्त्व अधोरेखित करते. आमचा विश्वास आहे की खेळ आत्मविश्वास, सांघिक कार्य आणि शारीरिक तंदुरुस्ती विकसित करण्यास मदत करतात, जे आमच्या विद्यार्थ्यांच्या सर्वांगीण विकासासाठी आवश्यक आहेत.`,
    image: '/placeholder-news.jpg',
    createdAt: new Date('2024-01-10'),
  },
  'new-assistive-technology-lab': {
    id: '3',
    slug: 'new-assistive-technology-lab',
    title: 'New Assistive Technology Lab Inaugurated',
    titleMr: 'नवीन सहाय्यक तंत्रज्ञान प्रयोगशाळा उद्घाटन',
    content: `We are excited to announce the inauguration of our new state-of-the-art assistive technology lab, designed specifically to enhance the learning experiences of our deaf and mute students.

The lab is equipped with the latest assistive technology devices including hearing aids, FM systems, visual alert systems, and specialized educational software. These tools will help our students participate more fully in their learning experience and communicate more effectively.

The inauguration ceremony was attended by education officials, parents, and well-wishers who appreciated our commitment to providing the best possible education to our students. The lab will be used for both classroom instruction and individual therapy sessions.

This new facility represents a significant milestone in our journey to provide inclusive and accessible education. We are grateful to all the donors and supporters who made this project possible.`,
    contentMr: `आम्ही आमच्या नवीन अत्याधुनिक सहाय्यक तंत्रज्ञान प्रयोगशाळेच्या उद्घाटनाची घोषणा करण्यास उत्सुक आहोत, जी विशेषतः आमच्या बधिर आणि मूकबधिर विद्यार्थ्यांच्या शिक्षण अनुभव वाढविण्यासाठी डिझाइन केलेली आहे.

प्रयोगशाळा नवीनतम सहाय्यक तंत्रज्ञान उपकरणांनी सुसज्ज आहे ज्यात श्रवण यंत्रे, FM प्रणाली, व्हिज्युअल अलर्ट सिस्टम आणि विशेष शैक्षणिक सॉफ्टवेअर समाविष्ट आहे. ही साधने आमच्या विद्यार्थ्यांना त्यांच्या शिक्षण अनुभवात अधिक पूर्णपणे सहभागी होण्यास आणि अधिक प्रभावीपणे संवाद साधण्यास मदत करतील.

उद्घाटन समारंभाला शिक्षण अधिकारी, पालक आणि शुभचिंतक उपस्थित होते ज्यांनी आमच्या विद्यार्थ्यांना सर्वोत्तम शिक्षण प्रदान करण्याच्या आमच्या वचनबद्धतेची प्रशंसा केली. प्रयोगशाळा वर्ग शिक्षण आणि वैयक्तिक थेरपी सत्र दोन्हीसाठी वापरली जाईल.

ही नवीन सुविधा समावेशक आणि प्रवेशयोग्य शिक्षण प्रदान करण्याच्या आमच्या प्रवासातील एक महत्त्वपूर्ण टप्पा दर्शवते. या प्रकल्पाला शक्य केलेल्या सर्व देणगीदारांचे आणि समर्थकांचे आम्ही आभारी आहोत.`,
    image: '/placeholder-news.jpg',
    createdAt: new Date('2024-01-05'),
  },
};

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string; slug: string } 
}) {
  const news = mockNewsData[params.slug];
  
  if (!news) {
    return {
      title: 'News Not Found',
    };
  }

  const t = await getTranslations({ locale: params.locale });
  const isMarathi = params.locale === 'mr';
  const title = isMarathi ? news.titleMr : news.title;
  
  return {
    title: `${title} - ${t('school.name')}`,
    description: isMarathi ? news.contentMr.substring(0, 160) : news.content.substring(0, 160),
  };
}

export default function NewsDetailPage({ 
  params 
}: { 
  params: { locale: string; slug: string } 
}) {
  const t = useTranslations();
  const isMarathi = params.locale === 'mr';
  const news = mockNewsData[params.slug];

  // Handle 404 for non-existent articles
  if (!news) {
    notFound();
  }

  const title = isMarathi ? news.titleMr : news.title;
  const content = isMarathi ? news.contentMr : news.content;

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href={`/${params.locale}/news`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          ← {isMarathi ? 'बातम्यांकडे परत' : 'Back to News'}
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image */}
          {news.image && (
            <div className="relative h-96 bg-gray-200">
              <Image
                src={news.image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div className="p-8">
            <div className="text-sm text-gray-500 mb-4">
              {news.createdAt.toLocaleDateString(isMarathi ? 'mr-IN' : 'en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              {title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              {content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Back Link (Bottom) */}
        <div className="mt-8">
          <Link
            href={`/${params.locale}/news`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            ← {isMarathi ? 'बातम्यांकडे परत' : 'Back to News'}
          </Link>
        </div>
      </div>
    </div>
  );
}
