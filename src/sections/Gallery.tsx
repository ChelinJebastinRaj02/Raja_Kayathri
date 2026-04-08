import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X, ZoomIn, Heart } from 'lucide-react';

const galleryImages = [
  { src: 'gallery/our-photo-1.jpg', size: 'large' },
  { src: 'gallery/our-photo-2.jpg', size: 'wide' },
  { src: 'gallery/our-photo-3.jpg', size: 'normal' },
  { src: 'gallery/our-photo-4.jpg', size: 'normal' },
  { src: 'gallery/our-photo-5.jpg', size: 'normal' },
  { src: 'gallery/our-photo-6.jpg', size: 'normal' },
  { src: 'gallery/our-photo-7.jpg', size: 'large' },
  { src: 'gallery/our-photo-8.jpg', size: 'normal' },
  { src: 'gallery/our-photo-9.jpg', size: 'normal' },
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#FFFFF0]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23800020' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-12 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-[#3A2465] italic mb-4">"Where you go I will go" — Ruth 1:16</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-[#FFD700] fill-[#FFD700]" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#3A2465]">My Love</h2>
            <Heart className="w-6 h-6 text-[#FFD700] fill-[#FFD700]" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-6" />
          <p className="font-body text-xl text-[#2D2D2D]/70 italic">Capturing our journey of love</p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-dense">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
                image.size === 'large' ? 'col-span-2 row-span-2' : image.size === 'wide' ? 'col-span-2' : ''
              }`}
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`, opacity: 0 }}
              onClick={() => setLightboxImage(image.src)}
            >
              <img src={image.src} alt={`Love moment ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2465]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <ZoomIn className="w-6 h-6 text-[#3A2465]" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Heart className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
              </div>
            </div>
          ))}
        </div>

        {/* Christian Slogan */}
        <div className="mt-12 text-center">
          <p className="font-heading italic text-2xl text-[#3A2465]">"He has made everything beautiful in its time"</p>
          <p className="font-body text-[#2D2D2D]/60 mt-2">— Ecclesiastes 3:11</p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center hover:scale-110 transition-transform" onClick={() => setLightboxImage(null)}>
            <X className="w-6 h-6 text-[#3A2465]" />
          </button>
          <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
