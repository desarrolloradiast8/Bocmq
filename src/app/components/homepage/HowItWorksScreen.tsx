import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface HowItWorksScreenProps {
  onBack: () => void;
}

interface Slide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export function HowItWorksScreen({ onBack }: HowItWorksScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Conecta oferta y demanda",
      description: "Forma parte de la red social de negocios y comercio de Bolivia y deja que quien necesite lo que ofreces te encuentre rápidamente",
      imageUrl: "https://images.unsplash.com/photo-1652795385719-3164c3dd8d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlYXJjaCUyMG1hZ25pZnlpbmclMjBnbGFzc3xlbnwxfHx8fDE3Njk3ODg1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Genera clientes para tu negocio",
      description: "Genera clientes tanto a tu negocio físico como a tu negocio digital de manera efectiva y sostenible",
      imageUrl: "https://images.unsplash.com/photo-1690484815697-61a5d4068e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHNob3BwaW5nJTIwQm9saXZpYXxlbnwxfHx8fDE3Njk3ODg1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Expande tu presencia",
      description: "Abre sucursales en cada rincón de Bolivia y haz crecer tu marca, tus clientes y tus ganancias sin límites",
      imageUrl: "https://images.unsplash.com/photo-1705234384679-119488a72a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGV4cGFuc2lvbiUyMGJyYW5jaGVzfGVufDF8fHx8MTc2OTc4ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Vende sin comisiones",
      description: "Vende sin pagar comisiones y maximiza tus ganancias. Todo el beneficio es para ti",
      imageUrl: "https://images.unsplash.com/photo-1737569943524-8edf753c4e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxubyUyMGNvbW1pc3Npb24lMjBmcmVlJTIwaGFuZHNoYWkufGVufDF8fHx8MTc2OTc4ODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      title: "Sucursales digitales ilimitadas",
      description: "Abre sucursales digitales en las diversas categorías de acuerdo a los productos y servicios que ofreces",
      imageUrl: "https://images.unsplash.com/photo-1674027392842-29f8354e236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc3RvcmUlMjBvbmxpbmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njk3ODg1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleRate = () => {
    window.open("https://play.google.com/store", "_blank");
  };

  return (
    <div className="pb-8">
      {/* Header - Compacto */}
      <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-800" />
          </button>
          <h1 className="text-gray-900 font-semibold text-sm">¿Cómo funciona Bolivia en un clic?</h1>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto relative">
        {/* Navigation Arrows - Desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-orange-50 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-orange-600" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-orange-50 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-orange-600" />
        </button>

        {/* Slide Container */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
          {/* Mobile Navigation Arrows - Inside Card */}
          <button
            onClick={prevSlide}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5 text-orange-600" />
          </button>

          <button
            onClick={nextSlide}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5 text-orange-600" />
          </button>

          {/* Slide Content */}
          <div className="flex flex-col md:grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-64 sm:h-72 md:h-96">
              <ImageWithFallback
                src={slides[currentSlide].imageUrl}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Text Section */}
            <div className="p-6 sm:p-8 flex flex-col justify-center min-h-[350px] md:min-h-96">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-lg mb-4 shadow-lg">
                {slides[currentSlide].id}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                {slides[currentSlide].title}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                {slides[currentSlide].description}
              </p>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2 mb-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${ 
                      index === currentSlide 
                        ? "w-8 bg-gradient-to-r from-orange-500 to-red-600" 
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows - Disimuladas */}
              <div className="flex items-center justify-center gap-8 mb-6">
                <button
                  onClick={prevSlide}
                  className="text-3xl text-gray-400 hover:text-orange-600 transition-colors"
                  title="Anterior"
                >
                  ‹
                </button>
                
                <button
                  onClick={nextSlide}
                  className="text-3xl text-gray-400 hover:text-orange-600 transition-colors"
                  title="Siguiente"
                >
                  ›
                </button>
              </div>

              {/* Rate Button */}
              <div className="flex justify-start">
                <Button
                  onClick={handleRate}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white rounded-xl px-5 py-2.5 font-semibold shadow-md flex items-center gap-2 text-sm"
                >
                  <Star className="w-4 h-4 fill-white" />
                  Calificar Bolivia en un clic
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-4">
          <p className="text-xs text-gray-500">
            ← Desliza para ver más →
          </p>
        </div>

        {/* Mobile Touch Swipe Support */}
        <div
          className="md:hidden absolute inset-0 touch-pan-x"
          onTouchStart={(e) => {
            const touchStart = e.touches[0].clientX;
            const handleTouchEnd = (endEvent: TouchEvent) => {
              const touchEnd = endEvent.changedTouches[0].clientX;
              const diff = touchStart - touchEnd;
              if (Math.abs(diff) > 50) {
                if (diff > 0) {
                  nextSlide();
                } else {
                  prevSlide();
                }
              }
              document.removeEventListener('touchend', handleTouchEnd);
            };
            document.addEventListener('touchend', handleTouchEnd);
          }}
        />
      </div>
    </div>
  );
}