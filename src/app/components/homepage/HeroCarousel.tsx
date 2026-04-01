import { useState, useEffect } from 'react';
import image1 from 'figma:asset/f9399da976451fbe2e6e1e133cf053fec1781bbf.png';
import image2 from 'figma:asset/0bbfb0513a3a014c4bb5ee8a4d65456aebd067d3.png';
import image3 from 'figma:asset/c953949fdf9728a54e0a8ce7ba2bdefcdf593d64.png';

const carouselImages = [
  { 
    id: 1, 
    src: image1, 
    alt: 'Genera clientes',
    title: 'Genera clientes tanto a tu negocio físico como a tu negocio digital',
  },
  { 
    id: 2, 
    src: image2, 
    alt: 'Vende sin comisiones',
    title: 'Vende sin pagar comisiones',
  },
  { 
    id: 3, 
    src: image3, 
    alt: 'Sucursales digitales',
    title: 'Abre sucursales digitales en las diversas categorías',
  },
];

interface HeroCarouselProps {
  onLoginClick?: () => void;
}

export function HeroCarousel({ onLoginClick }: HeroCarouselProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const DURATION = 5000; // 5 segundos

  useEffect(() => {
    // Reset progress when changing image
    setProgress(0);
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / (DURATION / 50)); // Update every 50ms
      });
    }, 50);

    // Auto advance to next image
    const imageTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(imageTimer);
    };
  }, [currentIndex]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Images Container */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            
            {/* Text Content - Only visible for current image */}
            {index === currentIndex && (
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl ml-12 sm:ml-16 md:ml-20 lg:ml-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight animate-fade-in">
                      {image.title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-slide-in mb-6" />
                    {onLoginClick && (
                      <button
                        onClick={onLoginClick}
                        className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 animate-fade-in"
                      >
                        Comienza gratis
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Bars - Left Side */}
      <div className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className="relative group"
            aria-label={`Ir a imagen ${index + 1}`}
          >
            {/* Bar Container */}
            <div className="relative w-1.5 sm:w-2 h-16 sm:h-20 md:h-24 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Progress Fill - only for active indicator */}
              {index === currentIndex && (
                <div
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange-500 to-red-600 rounded-full transition-all duration-100 ease-linear shadow-lg shadow-orange-500/50"
                  style={{ height: `${progress}%` }}
                />
              )}
              
              {/* Static Fill for inactive bars */}
              {index !== currentIndex && index < currentIndex && (
                <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-orange-500 to-red-600 rounded-full opacity-50" />
              )}
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            
            {/* Active indicator glow */}
            {index === currentIndex && (
              <div className="absolute inset-0 rounded-full animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-red-600/30 rounded-full blur-md" />
              </div>
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes hero-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-slide-in {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        .animate-fade-in {
          animation: hero-fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in {
          animation: hero-slide-in 0.6s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  );
}