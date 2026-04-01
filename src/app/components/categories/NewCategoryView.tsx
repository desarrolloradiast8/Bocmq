import { useState } from "react";
import { ArrowLeft, Search, Star, MapPin } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { mainCategoriesData } from "@/app/components/categories/newCategoriesData";
import { gastronomiaSubcategories, SubcategoryWithImage } from "@/app/components/categories/gastronomiaSubcategories";
import { hotelesSubcategories } from "@/app/components/categories/hotelesSubcategories";
import { turismoSubcategories } from "@/app/components/categories/turismoSubcategories";
import { culturaSubcategories } from "@/app/components/categories/culturaSubcategories";
import { bellezaBienestarSubcategories } from "@/app/components/categories/bellezaBienestarSubcategories";
import { saludSubcategories } from "@/app/components/categories/saludSubcategories";
import { tecnologiaSubcategories } from "@/app/components/categories/tecnologiaSubcategories";
import { serviciosIndependientesSubcategories } from "@/app/components/categories/serviciosIndependientesSubcategories";
import { serviciosProfesionalesSubcategories } from "@/app/components/categories/serviciosProfesionalesSubcategories";
import { serviciosGeneralesSubcategories } from "@/app/components/categories/serviciosGeneralesSubcategories";
import { deportesSubcategories } from "@/app/components/categories/deportesSubcategories";
import { entretenimientoSubcategories } from "@/app/components/categories/entretenimientoSubcategories";
import { entretenimientoInfantilSubcategories } from "@/app/components/categories/entretenimientoInfantilSubcategories";
import { educacionSubcategories } from "@/app/components/categories/educacionSubcategories";
import { entrenamientoInfantilSubcategories } from "@/app/components/categories/entrenamientoInfantilSubcategories";

// Featured businesses mock data by subcategory
const getFeaturedBusinesses = (subcategory: string) => {
  const featuredMap: Record<string, any[]> = {
    // Gastronomía
    "Restaurantes": [
      { id: 1, name: "El Sabor Paceño", logo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200", rating: 4.9, city: "La Paz" },
      { id: 2, name: "La Casona", logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200", rating: 4.8, city: "Santa Cruz" },
      { id: 3, name: "Gustu", logo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=200", rating: 5.0, city: "La Paz" },
      { id: 4, name: "Pueblito", logo: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=200", rating: 4.7, city: "Cochabamba" },
    ],
    "Cafeterías": [
      { id: 5, name: "Café Vida", logo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200", rating: 4.8, city: "La Paz" },
      { id: 6, name: "Brew Coffee", logo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=200", rating: 4.7, city: "Santa Cruz" },
      { id: 7, name: "Mokha", logo: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=200", rating: 4.9, city: "Cochabamba" },
    ],
    // Tecnología
    "Computadoras": [
      { id: 10, name: "Tech Store BO", logo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200", rating: 4.8, city: "Santa Cruz" },
      { id: 11, name: "PC World", logo: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=200", rating: 4.7, city: "La Paz" },
      { id: 12, name: "Digital Zone", logo: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200", rating: 4.9, city: "Cochabamba" },
    ],
    "Celulares": [
      { id: 13, name: "Mobile Store", logo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200", rating: 4.9, city: "Santa Cruz" },
      { id: 14, name: "Phone Master", logo: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200", rating: 4.8, city: "La Paz" },
    ],
    // Belleza
    "Peluquerías": [
      { id: 20, name: "Style Hair", logo: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200", rating: 4.9, city: "La Paz" },
      { id: 21, name: "Corte Fino", logo: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200", rating: 4.7, city: "Santa Cruz" },
      { id: 22, name: "Hair Studio", logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200", rating: 4.8, city: "Cochabamba" },
    ],
    "Spas": [
      { id: 23, name: "Spa Relax", logo: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200", rating: 5.0, city: "La Paz" },
      { id: 24, name: "Zen Wellness", logo: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200", rating: 4.9, city: "Santa Cruz" },
    ],
  };

  return featuredMap[subcategory] || [
    { id: 100, name: "Negocio Destacado 1", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200", rating: 4.8, city: "La Paz" },
    { id: 101, name: "Negocio Destacado 2", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200", rating: 4.7, city: "Santa Cruz" },
    { id: 102, name: "Negocio Destacado 3", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200", rating: 4.9, city: "Cochabamba" },
  ];
};

// Publications mock data by subcategory
const getPublicationsBySubcategory = (subcategory: string) => {
  const publicationsMap: Record<string, any[]> = {
    // Gastronomía
    "Restaurantes": [
      {
        id: 1,
        business: "Restaurante El Sabor Paceño",
        category: "Restaurantes",
        city: "La Paz",
        logo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200",
        image: "https://images.unsplash.com/photo-1723672885092-d31ebd5a94b9?w=1080",
        description: "Disfruta de la mejor comida tradicional boliviana. Platos del día con descuento especial. Ambiente familiar y acogedor.",
        rating: 4.8,
        reviews: 234,
      },
      {
        id: 2,
        business: "La Casona Restaurante",
        category: "Restaurantes",
        city: "Santa Cruz",
        logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1080",
        description: "Cocina internacional y local. Menú ejecutivo de lunes a viernes. Reserva tu mesa ahora.",
        rating: 4.9,
        reviews: 456,
      },
    ],
    "Cafeterías": [
      {
        id: 5,
        business: "Café Vida",
        category: "Cafeterías",
        city: "La Paz",
        logo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1080",
        description: "El mejor café de especialidad. Ambiente tranquilo ideal para trabajar o estudiar. WiFi gratis.",
        rating: 4.8,
        reviews: 189,
      },
    ],
    // Tecnología
    "Computadoras": [
      {
        id: 10,
        business: "Tech Store Bolivia",
        category: "Tecnología",
        city: "Santa Cruz",
        logo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200",
        image: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?w=1080",
        description: "Lo último en tecnología. Laptops, PCs de escritorio y accesorios. Financiamiento disponible.",
        rating: 4.9,
        reviews: 456,
      },
    ],
    "Celulares": [
      {
        id: 13,
        business: "Mobile Store",
        category: "Celulares",
        city: "Santa Cruz",
        logo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1080",
        description: "Smartphones de última generación. Garantía oficial. Planes de financiamiento sin intereses.",
        rating: 4.9,
        reviews: 387,
      },
    ],
    // Belleza
    "Peluquerías": [
      {
        id: 20,
        business: "Style Hair Salon",
        category: "Peluquerías",
        city: "La Paz",
        logo: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1080",
        description: "Cortes modernos y tratamientos capilares. Estilistas profesionales con años de experiencia.",
        rating: 4.9,
        reviews: 298,
      },
    ],
  };

  return publicationsMap[subcategory] || [
    {
      id: 100,
      business: "Negocio Local",
      category: subcategory,
      city: "La Paz",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1080",
      description: `Servicio de calidad en ${subcategory}. Atención personalizada y precios competitivos.`,
      rating: 4.7,
      reviews: 156,
    },
  ];
};

interface NewCategoryViewProps {
  categoryId: string;
  onBack: () => void;
  selectedCity?: string;
  onViewBusiness?: (businessId: number) => void;
}

export function NewCategoryView({ categoryId, onBack, selectedCity, onViewBusiness }: NewCategoryViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [view, setView] = useState<"subcategories" | "publications">("subcategories");

  const category = mainCategoriesData.find((cat) => cat.id === categoryId);

  if (!category) {
    return null;
  }

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setView("publications");
  };

  const handleBackClick = () => {
    if (view === "publications") {
      setView("subcategories");
      setSelectedSubcategory(null);
    } else {
      onBack();
    }
  };

  const handleSearch = () => {
    console.log("Buscando:", searchQuery);
  };

  // Obtener subcategorías con imágenes si es gastronomía
  const getSubcategoriesWithImages = (): SubcategoryWithImage[] => {
    if (categoryId === "gastronomia") {
      return gastronomiaSubcategories;
    } else if (categoryId === "hoteles") {
      return hotelesSubcategories;
    } else if (categoryId === "turismo") {
      return turismoSubcategories;
    } else if (categoryId === "cultura") {
      return culturaSubcategories;
    } else if (categoryId === "belleza-bienestar") {
      return bellezaBienestarSubcategories;
    } else if (categoryId === "salud") {
      return saludSubcategories;
    } else if (categoryId === "tecnologia") {
      return tecnologiaSubcategories;
    } else if (categoryId === "servicios-independientes") {
      return serviciosIndependientesSubcategories;
    } else if (categoryId === "servicios-profesionales") {
      return serviciosProfesionalesSubcategories;
    } else if (categoryId === "servicios-generales") {
      return serviciosGeneralesSubcategories;
    } else if (categoryId === "deportes") {
      return deportesSubcategories;
    } else if (categoryId === "entretenimiento") {
      return entretenimientoSubcategories;
    } else if (categoryId === "entretenimiento-infantil") {
      return entretenimientoInfantilSubcategories;
    } else if (categoryId === "educacion") {
      return educacionSubcategories;
    } else if (categoryId === "entrenamiento-infantil") {
      return entrenamientoInfantilSubcategories;
    }
    // Para otras categorías, convertir strings a objetos SubcategoryWithImage
    return category.subcategories.map((sub) => ({ name: sub }));
  };

  const subcategoriesWithImages = getSubcategoriesWithImages();

  const filteredSubcategories = searchQuery
    ? subcategoriesWithImages.filter((sub) =>
        sub.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : subcategoriesWithImages;

  // Mock publications data para categorías sin subcategorías
  const mockPublications: any[] = [];

  // Si no tiene subcategorías, mostrar publicaciones directamente
  if (category.subcategories.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>

          {/* Search Bar */}
          <Card className="p-4 sm:p-6 rounded-3xl shadow-md border-2 border-orange-100 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Search className="w-6 h-6 text-orange-600" />
              <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                Encuentra lo que buscas
              </h3>
            </div>
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Buscar publicaciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 py-5 sm:py-6 rounded-2xl border-2 border-gray-200 focus:border-orange-500"
              />
              <Button
                onClick={handleSearch}
                className="px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-2xl shadow-md"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Publications */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-6">Publicaciones disponibles</p>

            {mockPublications.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl sm:text-2xl text-gray-500 font-semibold">
                  No existen publicaciones para mostrar
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {mockPublications.map((pub) => (
                  <Card
                    key={pub.id}
                    className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <img
                      src={pub.image}
                      alt={pub.business}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                    <div className="p-4 sm:p-6">
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                        {pub.business}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{pub.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          {pub.city}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-gray-900">{pub.rating}</span>
                          <span className="text-sm text-gray-500">({pub.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        {/* Search Bar */}
        <Card className="p-4 sm:p-6 rounded-3xl shadow-md border-2 border-orange-100 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Search className="w-6 h-6 text-orange-600" />
            <h3 className="font-semibold text-base sm:text-lg text-gray-900">
              Encuentra lo que buscas
            </h3>
          </div>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder={
                view === "subcategories"
                  ? "Buscar subcategorías..."
                  : "Buscar publicaciones..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 py-5 sm:py-6 rounded-2xl border-2 border-gray-200 focus:border-orange-500"
            />
            <Button
              onClick={handleSearch}
              className="px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-2xl shadow-md"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </Card>

        {/* Subcategories View */}
        {view === "subcategories" && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-6">Selecciona una subcategoría</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
              {filteredSubcategories.map((subcategory: SubcategoryWithImage, index: number) => (
                <Card
                  key={index}
                  onClick={() => handleSubcategoryClick(subcategory.name)}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group flex flex-col"
                >
                  {subcategory.image ? (
                    <>
                      <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                        <img
                          src={subcategory.image}
                          alt={subcategory.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100 flex-shrink-0">
                        <h3 className="font-bold text-xs sm:text-sm text-gray-900 line-clamp-2 leading-tight">
                          {subcategory.name}
                        </h3>
                      </div>
                    </>
                  ) : (
                    <div className="p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-gray-900">{subcategory.name}</h3>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Publications View */}
        {view === "publications" && selectedSubcategory && (
          <div>
            {/* Header with City Badge */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {selectedSubcategory}
                </h2>
                <p className="text-gray-600">Publicaciones disponibles</p>
              </div>
              
              {/* City Badge - Top Right */}
              <div className="flex-shrink-0">
                <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="font-bold text-white text-sm">
                      {selectedCity || "Todo Bolivia"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Businesses - Horizontal Scroll */}
            {(() => {
              const featured = getFeaturedBusinesses(selectedSubcategory);
              const filteredFeatured = selectedCity 
                ? featured.filter(b => b.city === selectedCity)
                : featured;
              
              if (filteredFeatured.length > 0) {
                return (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Destacados</h3>
                    <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100">
                      <div className="flex gap-4 min-w-max">
                        {filteredFeatured.map((business) => (
                          <Card
                            key={business.id}
                            onClick={() => onViewBusiness && onViewBusiness(business.id)}
                            className="w-32 sm:w-36 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-400 hover:shadow-xl transition-all cursor-pointer group"
                          >
                            <div className="aspect-square overflow-hidden bg-gray-50">
                              <img
                                src={business.logo}
                                alt={business.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-3 text-center">
                              <h4 className="font-bold text-xs text-gray-900 mb-1 line-clamp-2 leading-tight">
                                {business.name}
                              </h4>
                              <div className="flex items-center justify-center gap-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${
                                      i < Math.floor(business.rating)
                                        ? 'bg-yellow-400'
                                        : 'bg-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })()}

            {/* All Publications */}
            {(() => {
              const publications = getPublicationsBySubcategory(selectedSubcategory);
              const filteredPublications = selectedCity
                ? publications.filter(p => p.city === selectedCity)
                : publications;

              if (filteredPublications.length === 0) {
                return (
                  <div className="text-center py-20">
                    <p className="text-xl sm:text-2xl text-gray-500 font-semibold">
                      No existen publicaciones para mostrar{selectedCity ? ` en ${selectedCity}` : ''}
                    </p>
                  </div>
                );
              }

              return (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Todas las Publicaciones</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredPublications.map((pub) => (
                      <Card
                        key={pub.id}
                        onClick={() => onViewBusiness && onViewBusiness(pub.id)}
                        className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                      >
                        <img
                          src={pub.image}
                          alt={pub.business}
                          className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 sm:p-6">
                          <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                            {pub.business}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{pub.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="w-4 h-4" />
                              {pub.city}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold text-gray-900">{pub.rating}</span>
                              <span className="text-sm text-gray-500">({pub.reviews})</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}