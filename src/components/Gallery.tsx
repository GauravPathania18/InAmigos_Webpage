import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface GalleryItem {
  id: number;
  url: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908391.jpg' },
  { id: 2, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738048982.jpg' },
  { id: 3, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738054440.jpg' },
  { id: 4, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738054458.jpg' },
  { id: 5, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738054473.jpg' },
  { id: 6, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738238755.JPG' },
  { id: 7, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908380.jpg' },
  { id: 8, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908369.jpg' },
  { id: 9, url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908359.jpg' }
];

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  }, [lightboxIndex]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, handlePrevious, handleNext]);

  return (
    <section id="gallery" className="py-10 sm:py-14 bg-transparent transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#4CAF50] font-heading font-bold text-sm tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Visual Impact
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#1B5E20] dark:text-[#C8E6C9] tracking-tight">
              Our Impact Gallery
            </h2>
            <div className="w-20 h-1.5 bg-[#4CAF50] mx-auto rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Clean 3-Column Image Grid (No Text, No Categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={0.08 * ((index % 3) + 1)}>
              <div
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-2xl border border-[#4CAF50]/30 dark:border-green-800/60 cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={item.url}
                  alt="Impact gallery"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Subtle Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-[#1a2e1e]/90 text-[#2E7D32] dark:text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Clean Lightbox Modal (No Text, No Captions) */}
      {lightboxIndex !== null && GALLERY_ITEMS[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Image Only */}
          <div
            className="max-w-6xl max-h-[90vh] flex items-center justify-center relative select-none animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[lightboxIndex].url}
              alt="Impact gallery preview"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

