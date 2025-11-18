'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

// Mock gallery data - in production this would come from database
const mockGalleryImages = [
  {
    id: '1',
    title: 'Annual Day Celebration',
    titleMr: 'वार्षिक दिन साजरा',
    description: 'Students performing at the annual day celebration',
    descriptionMr: 'वार्षिक दिन साजरा येथे विद्यार्थी सादरीकरण करत आहेत',
    imageUrl: '/placeholder-gallery.jpg',
    category: 'Events',
    order: 1,
  },
  {
    id: '2',
    title: 'Science Lab',
    titleMr: 'विज्ञान प्रयोगशाळा',
    description: 'Students conducting experiments in the science lab',
    descriptionMr: 'विद्यार्थी विज्ञान प्रयोगशाळेत प्रयोग करत आहेत',
    imageUrl: '/placeholder-gallery.jpg',
    category: 'Facilities',
    order: 2,
  },
  {
    id: '3',
    title: 'Sports Day',
    titleMr: 'क्रीडा दिन',
    description: 'Students participating in sports activities',
    descriptionMr: 'विद्यार्थी क्रीडा क्रियाकलापांमध्ये सहभागी होत आहेत',
    imageUrl: '/placeholder-gallery.jpg',
    category: 'Events',
    order: 3,
  },
  {
    id: '4',
    title: 'Sign Language Class',
    titleMr: 'सांकेतिक भाषा वर्ग',
    description: 'Students learning sign language',
    descriptionMr: 'विद्यार्थी सांकेतिक भाषा शिकत आहेत',
    imageUrl: '/placeholder-gallery.jpg',
    category: 'Academics',
    order: 4,
  },
  {
    id: '5',
    title: 'Library',
    titleMr: 'ग्रंथालय',
    description: 'Students reading in the school library',
    descriptionMr: 'विद्यार्थी शाळेच्या ग्रंथालयात वाचत आहेत',
    imageUrl: '/placeholder-gallery.jpg',
    category: 'Facilities',
    order: 5,
  },
  {
    id: '6',
    title: 'Computer Lab',
    titleMr: 'संगणक प्रयोगशाळा',
    description: 'Students learning computer skills',
    descriptionMr: 'विद्यार्थी संगणक कौशल्ये शिकत आहेत',
    imageUrl: '/placeholder-gallery.jpg',
    category: 'Facilities',
    order: 6,
  },
];

export default function GalleryPage({ params }: { params: { locale: string } }) {
  const t = useTranslations();
  const isMarathi = params.locale === 'mr';
  const [selectedImage, setSelectedImage] = useState<typeof mockGalleryImages[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(mockGalleryImages.map(img => img.category)))];

  // Filter images by category
  const filteredImages = selectedCategory === 'All' 
    ? mockGalleryImages 
    : mockGalleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {t('navigation.gallery')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isMarathi 
              ? 'आमच्या शाळेच्या क्रियाकलाप आणि सुविधांच्या फोटो पहा' 
              : 'Explore photos of our school activities and facilities'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={image.imageUrl}
                  alt={isMarathi ? image.titleMr : image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {isMarathi ? image.titleMr : image.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {isMarathi ? image.descriptionMr : image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {isMarathi 
                ? 'या श्रेणीमध्ये कोणतेही फोटो उपलब्ध नाहीत.' 
                : 'No images available in this category.'}
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
              aria-label={t('common.close')}
            >
              ×
            </button>
            <div className="max-w-5xl w-full">
              <div className="relative h-[70vh] mb-4">
                <Image
                  src={selectedImage.imageUrl}
                  alt={isMarathi ? selectedImage.titleMr : selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {isMarathi ? selectedImage.titleMr : selectedImage.title}
                </h3>
                <p className="text-gray-300">
                  {isMarathi ? selectedImage.descriptionMr : selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
