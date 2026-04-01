import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card } from "@/app/components/ui/card";
import logoImage from "figma:asset/5bd1390b600814efd35c7824f6d4aa947cc9bd64.png";
import logoWhite from "figma:asset/ea44a9b543b826e2a7781a569848e9f69ff315f2.png";
import imagenCrearNegocio from "figma:asset/e2c47da7549e771482222395f9ef937d4ac18b98.png";
import imagenPublicarPromo from "figma:asset/acc2000219f3b39a2416ebe4d65b679bf1b6f560.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { HeroCarousel } from "@/app/components/homepage/HeroCarousel";

interface LandingPageProps {
  onLoginClick: () => void;
  onRegisterClick?: () => void;
  onCityClick?: (city: string) => void;
  onActionClick?: (action: 'crear-negocio' | 'promociones' | 'anuncios' | 'eventos') => void;
}

const benefits = [
  {
    title: "Máxima visibilidad",
    image: "https://images.unsplash.com/photo-1682253579228-3ba275cc5986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJpbm9jdWxhcnMlMjBsb29raW5nfGVufDF8fHx8MTc2ODgzOTAwOHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Nuevos clientes",
    image: "https://images.unsplash.com/photo-1592780319783-9ac6388bc9a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB1c2luZyUyMHNtYXJ0cGhvbmVzJTIwZ3JvdXB8ZW58MXx8fHwxNzY4ODM5MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Aumenta tus ventas",
    image: "https://images.unsplash.com/photo-1586177684553-28619f27ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHNob3BwaW5nJTIwdHNoaXJ0JTIwb25saW5lfGVufDF8fHx8MTc2ODgzOTAwOXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Fideliza a tus clientes",
    image: "https://images.unsplash.com/photo-1764576441006-093d5879e44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBjZWxlYnJhdGluZyUyMHBob25lJTIwaGFwcHl8ZW58MXx8fHwxNzY4ODM5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const testimonials = [
  {
    name: "María González",
    avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2ODg1OTk2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    comment: "Bolivia en un clic transformó mi negocio. Ahora tengo clientes de todo el país y mis ventas aumentaron un 300%. Es la mejor inversión que he hecho."
  },
  {
    name: "Carlos Pérez",
    avatar: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3Njg4OTUxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    comment: "La plataforma es súper fácil de usar y me ha permitido conectar con clientes que nunca hubiera alcanzado. Recomendado al 100%."
  },
  {
    name: "Ana Rodríguez",
    avatar: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBlcnNvbnxlbnwxfHx8fDE3Njg5MTQzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    comment: "Excelente red de negocios. He encontrado proveedores, clientes y hasta socios comerciales. Es una herramienta indispensable para cualquier emprendedor."
  },
  {
    name: "Luis Fernández",
    avatar: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2ODg2NzI1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    comment: "Desde que me uní a Bolivia en un clic, mi negocio creció exponencialmente. La visibilidad que obtienes es increíble y el soporte es excelente."
  },
  {
    name: "Patricia Silva",
    avatar: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODgxNDkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    comment: "Una plataforma que realmente funciona. Conseguí nuevos clientes en mi primera semana. La recomiendo a todos los emprendedores bolivianos."
  },
  {
    name: "Roberto Méndez",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4ODk4NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    comment: "Bolivia en un clic me ayudó a digitalizar mi negocio y llegar a clientes que antes era imposible. Es una inversión que vale cada centavo."
  }
];

const carouselImages = [
  {
    title: "Descubre negocios en toda Bolivia",
    description: "Una plataforma que conecta a emprendedores y clientes en cada rincón del país",
    image: "https://images.unsplash.com/photo-1689584674448-02a2f9d8db2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVpbGRpbmdzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODgxMTAyNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Impulsa tu emprendimiento",
    description: "Herramientas profesionales para hacer crecer tu negocio de forma efectiva",
    image: "https://images.unsplash.com/photo-1740156248740-746aadebd01d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHNlYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4MzkwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Experiencia única",
    description: "Navega fácilmente y encuentra exactamente lo que buscas",
    image: "https://images.unsplash.com/photo-1689258460261-647ae090249e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwdHJhY2tzJTIwdHJhaW58ZW58MXx8fHwxNzY4ODM5MDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function LandingPage({ onLoginClick, onRegisterClick, onCityClick, onActionClick }: LandingPageProps) {
  const [email, setEmail] = useState("");
  const [finalEmail, setFinalEmail] = useState("");
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  const benefitScrollRef = useRef<HTMLDivElement>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);

  const handleEmailSubmit = () => {
    if (email) {
      alert(`Email registrado: ${email}`);
      setEmail("");
    }
  };

  const handleFinalEmailSubmit = () => {
    if (finalEmail) {
      alert(`Email registrado: ${finalEmail}`);
      setFinalEmail("");
    }
  };

  // Benefits carousel for mobile
  const handlePrevBenefit = () => {
    setCurrentBenefitIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
    if (benefitScrollRef.current) {
      const scrollAmount = benefitScrollRef.current.offsetWidth;
      benefitScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNextBenefit = () => {
    setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
    if (benefitScrollRef.current) {
      const scrollAmount = benefitScrollRef.current.offsetWidth;
      benefitScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Testimonials carousel for mobile
  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    if (testimonialScrollRef.current) {
      const scrollAmount = testimonialScrollRef.current.offsetWidth;
      testimonialScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    if (testimonialScrollRef.current) {
      const scrollAmount = testimonialScrollRef.current.offsetWidth;
      testimonialScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleImageChange = (setter: (value: string) => void) => {
    const newUrl = prompt("Ingresa la URL de la nueva imagen:");
    if (newUrl) {
      setter(newUrl);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Carousel */}
      <section className="relative overflow-hidden">
        {/* Hero Carousel - Full width banner with header overlay */}
        <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
          <HeroCarousel onLoginClick={onLoginClick} />
          
          {/* Header Overlay */}
          <header className="absolute top-0 left-0 right-0 py-4 px-4 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo - Left Side */}
              <div className="flex items-center gap-3">
                <img 
                  src={logoWhite} 
                  alt="Bolivia en un clic" 
                  className="w-10 h-10 object-contain"
                />
                <span className="font-bold text-base sm:text-lg text-white">
                  Bolivia en un clic
                </span>
              </div>
              
              {/* Desktop Navigation - Right Side */}
              <div className="hidden md:flex items-center gap-6">
                <button 
                  onClick={onRegisterClick || onLoginClick} 
                  className="text-white font-semibold hover:text-orange-200 transition-colors"
                >
                  Regístrate
                </button>
                <button 
                  onClick={onLoginClick} 
                  className="text-white font-semibold hover:text-orange-200 transition-colors"
                >
                  Iniciar sesión
                </button>
              </div>

              {/* Mobile Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 py-4 bg-black/80 backdrop-blur-md rounded-2xl">
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={() => {
                      (onRegisterClick || onLoginClick)();
                      setIsMobileMenuOpen(false);
                    }} 
                    className="text-white font-semibold hover:text-orange-200 text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Regístrate
                  </button>
                  <button 
                    onClick={() => {
                      onLoginClick();
                      setIsMobileMenuOpen(false);
                    }} 
                    className="text-white font-semibold hover:text-orange-200 text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </div>
            )}
          </header>
        </div>
        
        {/* Sección ¿Cómo funciona Bolivia en un clic? */}
        <section className="py-12 sm:py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Título */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Cómo funciona Bolivia en un clic?
            </h2>

            {/* 4 Botones de acciones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Botón 1: Crea tu negocio */}
              <div 
                onClick={() => onActionClick?.('crear-negocio')}
                className="bg-white rounded-3xl p-8 shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 transition-all cursor-pointer group transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-orange-500">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Crea tu negocio
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Registra tu empresa y comienza a vender
                  </p>
                </div>
              </div>

              {/* Botón 2: Publica promociones */}
              <div 
                onClick={() => onActionClick?.('promociones')}
                className="bg-white rounded-3xl p-8 shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 transition-all cursor-pointer group transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-orange-500">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Publica promociones
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Atrae más clientes con ofertas especiales
                  </p>
                </div>
              </div>

              {/* Botón 3: Publica anuncios */}
              <div 
                onClick={() => onActionClick?.('anuncios')}
                className="bg-white rounded-3xl p-8 shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 transition-all cursor-pointer group transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-orange-500">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Publica anuncios
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Da visibilidad a tus productos
                  </p>
                </div>
              </div>

              {/* Botón 4: Publica eventos */}
              <div 
                onClick={() => onActionClick?.('eventos')}
                className="bg-white rounded-3xl p-8 shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 transition-all cursor-pointer group transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-orange-500">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Publica eventos
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Organiza y promociona tus eventos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Beneficios de anunciarte */}
        <section className="py-12 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Título y Subtítulo */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Beneficios de anunciarte <span className="text-orange-500">en Bolivia en un Clic</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Todo lo que necesitas para ganar visibilidad, clientes y crecimiento digital.
              </p>
            </div>

            {/* Grid de 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Card 1: Máxima visibilidad */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-300 shadow-md shadow-gray-400/50 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Máxima visibilidad</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Aparece en búsquedas por ciudad y categoría y haz que más personas encuentren tu negocio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Nuevos clientes */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-300 shadow-md shadow-gray-400/50 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nuevos clientes</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Conecta con personas interesadas en tus productos y recibe consultas directas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Aumenta tus ventas */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-300 shadow-md shadow-gray-400/50 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Aumenta tus ventas</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Publica ofertas y promociones que generen ventas en ventas reales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Analiza y mejora */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-300 shadow-md shadow-gray-400/50 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Analiza y mejora</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mide visitas, clics e interacciones para tomar mejores decisiones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón */}
            <div className="flex flex-col items-center">
              <button 
                onClick={onLoginClick}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Crear mi negocio gratis
              </button>
            </div>
          </div>
        </section>
        

      </section>



      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s backwards;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          10% { transform: translateX(-10px); }
          20% { transform: translateX(10px); }
          30% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          50% { transform: translateX(-10px); }
          60% { transform: translateX(10px); }
          70% { transform: translateX(-10px); }
          80% { transform: translateX(10px); }
          90% { transform: translateX(-10px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>

      {/* Sección: Haz crecer tu negocio con herramientas exclusivas */}
      <section className="py-8 sm:py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div>
            {/* Título y Subtítulo */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Haz crecer tu negocio con <span className="text-orange-500">herramientas exclusivas</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Consejos, recursos y datos seleccionados para potenciar el éxito de tu negocio
              </p>
            </div>

            {/* 4 Cards en una línea */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Llega a miles de clientes potenciales */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all border border-gray-200 flex flex-col h-full">
                <div className="h-52 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                  <img 
                    src="https://images.unsplash.com/photo-1758522484797-49f88e04809c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHVzaW5nJTIwbW9iaWxlJTIwcGhvbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzA3NjE4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Llega a miles de clientes"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] leading-tight">
                    Llega a miles de clientes potenciales
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    Segmenta tu audiencia y promociona tus ofertas y eventos en tu ciudad
                  </p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 mt-auto">
                    Descubrir más
                  </button>
                </div>
              </div>

              {/* Card 2: Soluciona tus problemas */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all border border-gray-200 flex flex-col h-full">
                <div className="h-52 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                  <img 
                    src="https://images.unsplash.com/photo-1724120932030-d8210a77deed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWVzdGlvbiUyMG1hcmtzJTIwaGVscCUyMHN1cHBvcnQlMjBpY29uc3xlbnwxfHx8fDE3NzA3NjE4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Centro de ayuda"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] leading-tight">
                    Soluciona tus problemas y resuelve tus dudas rápidamente
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    Accede a nuestro centro de ayuda con respuestas instantáneas y soporte dedicado
                  </p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 mt-auto">
                    Descubrir más
                  </button>
                </div>
              </div>

              {/* Card 3: Estadísticas detalladas */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all border border-gray-200 flex flex-col h-full">
                <div className="h-52 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBwaG9uZSUyMHN0YXRpc3RpY3MlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcwNzYxODExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Estadísticas en tiempo real"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] leading-tight">
                    Estadísticas detalladas en tiempo real
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    Accede a informes claros que te ayudan a crecer basado en datos reales
                  </p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 mt-auto">
                    Descubrir más
                  </button>
                </div>
              </div>

              {/* Card 4: Anuncia como un profesional */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-300/50 hover:shadow-xl hover:shadow-gray-400/50 transition-all border border-gray-200 flex flex-col h-full">
                <div className="h-52 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                  <img 
                    src="https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYnViYmxlcyUyMG1lc3NhZ2VzJTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NzA3NjE4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Campañas profesionales"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem] leading-tight">
                    Anuncia como un profesional
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    Consejos y tutoriales para crear campañas efectivas y atraer clientes
                  </p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 mt-auto">
                    Descubrir más
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sección: Bolivia en un clic conecta - Ciudades */}
          <div className="mt-20">
            {/* Título */}
            <div className="text-center mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
                Bolivia en un clic conecta.
              </h2>
            </div>

            {/* Subtítulo centrado */}
            <div className="text-center mb-8">
              <p className="text-gray-600 text-base">
                Explora empresas por ciudad y categoría de establecimientos. Busca negocios al lado en salud
              </p>
            </div>

            {/* Grid de 6 ciudades (3x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Santa Cruz */}
              <div 
                onClick={() => onCityClick?.('Santa Cruz')}
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1636490136197-783e537b0d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGxhemElMjBtb251bWVudCUyMGxhbmRtYXJrfGVufDF8fHx8MTc3MDc2MjQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Santa Cruz"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-4xl font-bold text-white mb-1">Santa Cruz</h3>
                  <p className="text-white text-sm">238+ negocios</p>
                </div>
              </div>

              {/* La Paz */}
              <div 
                onClick={() => onCityClick?.('La Paz')}
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1648055611406-ca3bfc331204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYSUyMFBheiUyMEJvbGl2aWElMjB0ZWxlZiVDMyVBOXJpY28lMjBjYWJsZSUyMGNhcnxlbnwxfHx8fDE3NzA3NjI0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="La Paz"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-4xl font-bold text-white mb-1">La Paz</h3>
                  <p className="text-white text-sm">401+ negocios</p>
                </div>
              </div>

              {/* Cochabamba */}
              <div 
                onClick={() => onCityClick?.('Cochabamba')}
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1570516046283-30fd9ad010a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2NoYWJhbWJhJTIwQm9saXZpYSUyMENyaXN0byUyMHN0YXR1ZXxlbnwxfHx8fDE3NzA3NjI0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cochabamba"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-4xl font-bold text-white mb-1">Cochabamba</h3>
                  <p className="text-white text-sm">141+ negocios</p>
                </div>
              </div>

              {/* Tarija */}
              <div 
                onClick={() => onCityClick?.('Tarija')}
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1761067673447-77c9a6849def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHdpbmUlMjBncmFwZXMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwNzYyNDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Tarija"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-4xl font-bold text-white mb-1">Tarija</h3>
                  <p className="text-white text-sm">180+ negocios</p>
                </div>
              </div>

              {/* Sucre */}
              <div 
                onClick={() => onCityClick?.('Sucre')}
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1711126261008-6610d7647466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWNyZSUyMEJvbGl2aWElMjB3aGl0ZSUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwNzYyNDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sucre"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-4xl font-bold text-white mb-1">Sucre</h3>
                  <p className="text-white text-sm">108+ negocios</p>
                </div>
              </div>

              {/* Oruro */}
              <div 
                onClick={() => onCityClick?.('Oruro')}
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1703944601077-013e088c8006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPcnVybyUyMEJvbGl2aWElMjBjYXJuaXZhbCUyMG1hc2slMjBjdWx0dXJlfGVufDF8fHx8MTc3MDc2MjQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Oruro"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-4xl font-bold text-white mb-1">Oruro</h3>
                  <p className="text-white text-sm">108+ negocios</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section - Responsive with Carousel */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Recomendaciones
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mb-8 sm:mb-16"></div>

          {/* Desktop View - Grid */}
          <div className="hidden lg:block relative">
            <button
              onClick={handlePrevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl hover:bg-orange-50 transition-all border-2 border-orange-200"
            >
              <ChevronLeft className="w-6 h-6 text-orange-600" />
            </button>

            <button
              onClick={handleNextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl hover:bg-orange-50 transition-all border-2 border-orange-200"
            >
              <ChevronRight className="w-6 h-6 text-orange-600" />
            </button>

            <div className="grid md:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonialIndex + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <Card key={index} className="pt-16 pb-8 px-8 rounded-3xl border-2 border-orange-100 bg-white shadow-lg hover:shadow-xl transition-all relative">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 p-1">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center space-y-4 mt-4">
                      <h3 className="font-bold text-xl text-gray-900">{testimonial.name}</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet View - Carousel */}
          <div className="lg:hidden relative pt-20">
            <div 
              ref={testimonialScrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85%] sm:w-[70%] snap-center"
                >
                  <Card className="pt-20 pb-8 px-6 rounded-3xl border-2 border-orange-100 bg-white shadow-lg relative h-full mt-12">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 p-1">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center space-y-4 mt-4">
                      <h3 className="font-bold text-xl text-gray-900">{testimonial.name}</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white rounded-full p-2 shadow-xl hover:shadow-2xl hover:bg-orange-50 transition-all border-2 border-orange-200"
            >
              <ChevronLeft className="w-5 h-5 text-orange-600" />
            </button>

            <button
              onClick={handleNextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white rounded-full p-2 shadow-xl hover:shadow-2xl hover:bg-orange-50 transition-all border-2 border-orange-200"
            >
              <ChevronRight className="w-5 h-5 text-orange-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Redefine Section - Responsive */}
      <section className="py-12 sm:py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
            {/* Título izquierda */}
            <div className="flex items-center justify-center lg:justify-start h-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center lg:text-left leading-tight">
                Redefine tu forma de vender<br />con Bolivia en un clic
              </h2>
            </div>

            {/* Formulario derecha */}
            <div className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-gray-300 space-y-4">
              <p className="text-base sm:text-lg text-gray-800 font-bold">Para empezar añade tu correo electrónico:</p>
              <Input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={finalEmail}
                onChange={(e) => setFinalEmail(e.target.value)}
                className="w-full py-4 sm:py-6 text-sm sm:text-base rounded-2xl border-2 border-orange-300 focus:border-orange-500"
              />
              <div className="flex justify-center">
                <Button
                  onClick={handleFinalEmailSubmit}
                  className="w-auto px-6 sm:px-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Agregar correo electrónico
                </Button>
              </div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base">
                ¿Deseas ganar dinero extra?{" "}
                <a href="#ganar-dinero" className="text-orange-600 font-bold hover:underline">
                  +info
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">SOBRE NOSOTROS</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li><a href="#" className="hover:text-orange-600">Como funciona Bolivia en un Clic</a></li>
                <li><a href="#" className="hover:text-orange-600">Únete</a></li>
                <li><a href="#" className="hover:text-orange-600">Registra tu negocio o servicio</a></li>
                <li><a href="#" className="hover:text-orange-600">Prensa</a></li>
                <li><a href="#" className="hover:text-orange-600">Recomendaciones</a></li>
                <li><a href="#" className="hover:text-orange-600">Categorías</a></li>
                <li><a href="#" className="hover:text-orange-600">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">ALIADOS PARA POTENCIARTE</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li><a href="#" className="hover:text-orange-600">Currier a nivel nacional</a></li>
                <li><a href="#" className="hover:text-orange-600">Deliveries</a></li>
                <li><a href="#" className="hover:text-orange-600">Cámaras de comercio</a></li>
                <li><a href="#" className="hover:text-orange-600">Pasarelas de pago</a></li>
                <li><a href="#" className="hover:text-orange-600">Otras empresas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">AYUDA</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li><a href="#" className="hover:text-orange-600">Contáctanos</a></li>
                <li><a href="#" className="hover:text-orange-600">Destaca tu empresa o servicio</a></li>
                <li><a href="#" className="hover:text-orange-600">Cómo impulsar mis recomendaciones</a></li>
                <li><a href="#" className="hover:text-orange-600">Cómo publicar</a></li>
                <li><a href="#" className="hover:text-orange-600">Cómo crear mi tienda</a></li>
                <li><a href="#" className="hover:text-orange-600">Cómo potenciar mi negocio o mis servicios</a></li>
                <li><a href="#" className="hover:text-orange-600">¿Qué es un perfil comercial?</a></li>
                <li><a href="#" className="hover:text-orange-600">Cómo viralizar mi negocio o servicio</a></li>
                <li><a href="#" className="hover:text-orange-600">Cómo generar recomendaciones</a></li>
                <li><a href="#" className="hover:text-orange-600">Tutorial de registro</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">EXPERIENCIAS</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li><a href="#" className="hover:text-orange-600">Viajes</a></li>
                <li><a href="#" className="hover:text-orange-600">Gastronomía</a></li>
                <li><a href="#" className="hover:text-orange-600">Hospedaje</a></li>
                <li><a href="#" className="hover:text-orange-600">Turismo</a></li>
                <li><a href="#" className="hover:text-orange-600">Museos</a></li>
                <li><a href="#" className="hover:text-orange-600">Lugares emblemáticos</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 sm:pt-8 text-left text-xs sm:text-sm text-gray-600">
            <p>&copy; 2026 Bolivia en un clic. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}