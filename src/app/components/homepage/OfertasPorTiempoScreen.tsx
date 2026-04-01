import { useState } from "react";
import { ArrowLeft, Search, Bell, MapPin, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card } from "@/app/components/ui/card";
import { OfertasCategoriasPublicacionesScreen } from "@/app/components/homepage/OfertasCategoriasPublicacionesScreen";
import { OfferDetailScreen } from "@/app/components/homepage/OfferDetailScreen";

interface OfertasPorTiempoScreenProps {
  onBack: () => void;
  timeFilter: string;
  selectedCity?: string;
}

const allOfertasCategories = [
  "Antigüedades",
  "Arte",
  "Belleza y Bienestar",
  "Bienes Raíces",
  "Boliches",
  "Cirugía Estética y Tratamientos Estéticos",
  "Comida",
  "Compras",
  "Culturas",
  "Cursos y Talleres",
  "Decoración",
  "Deliveries",
  "Electrodomésticos",
  "Emprendimientos",
  "Entretenimiento",
  "Eventos",
  "Fotógrafos",
  "Gimnasios",
  "Hogar",
  "Hoteles",
  "Joyería y Relojes",
  "Mascotas",
  "Moda",
  "Ofertas Relámpago",
  "Oficina",
  "Productos Alimenticios",
  "Regalos",
  "Remate",
  "Restaurantes",
  "Romance",
  "Salud",
  "Segunda Mano",
  "Servicios Financieros",
  "Servicios de Marketing y Publicidad",
  "Servicios Digitales",
  "Servicios Empresariales",
  "Servicios Generales",
  "Servicios para Eventos",
  "Servicios para Negocios",
  "Servicios Profesionales",
  "Servicios Técnicos",
  "Tecnología",
  "Teléfonos y Accesorios para Teléfonos",
  "Vehículos",
  "Viajes y Turismo",
];

const timeFilterLabels: Record<string, string> = {
  "hoy": "HOY",
  "esta-semana": "ESTA SEMANA",
  "este-fin-de-semana": "ESTE FIN DE SEMANA",
  "proxima-semana": "PRÓXIMA SEMANA",
  "este-mes": "ESTE MES",
};

// Mock data de todas las ofertas
const allOffers = [
  {
    id: 1,
    title: "Laptop HP Pavilion 15",
    business: "Tech Store Bolivia",
    category: "Tecnología",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?w=400",
    price: "Bs 2,500",
    originalPrice: "Bs 4,200",
    discount: "-40%"
  },
  {
    id: 2,
    title: "Menú ejecutivo 2x1",
    business: "Restaurant Gourmet",
    category: "Restaurantes",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1723672885092-d31ebd5a94b9?w=400",
    price: "Bs 45",
    originalPrice: "Bs 90",
    discount: "-50%"
  },
  {
    id: 3,
    title: "Smartphone Samsung Galaxy",
    business: "Digital World",
    category: "Tecnología",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    price: "Bs 1,850",
    originalPrice: "Bs 3,364",
    discount: "-45%"
  },
  {
    id: 4,
    title: "Auriculares Bluetooth Premium",
    business: "Electro Oferta",
    category: "Tecnología",
    city: "Cochabamba",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    price: "Bs 280",
    originalPrice: "Bs 560",
    discount: "-50%"
  },
  {
    id: 5,
    title: "Platos típicos bolivianos",
    business: "Sabor Paceño",
    category: "Restaurantes",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400",
    price: "Bs 39",
    originalPrice: "Bs 60",
    discount: "-35%"
  },
  {
    id: 6,
    title: "Buffet libre fin de semana",
    business: "El Buen Gusto",
    category: "Restaurantes",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
    price: "Bs 65",
    originalPrice: "Bs 100",
    discount: "-35%"
  },
  {
    id: 7,
    title: "Ropa de temporada",
    business: "Fashion Store",
    category: "Moda",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    price: "Bs 120",
    originalPrice: "Bs 300",
    discount: "-60%"
  },
  {
    id: 8,
    title: "Vestidos elegantes",
    business: "Boutique Elegance",
    category: "Moda",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
    price: "Bs 220",
    originalPrice: "Bs 400",
    discount: "-45%"
  },
  {
    id: 9,
    title: "Calzado deportivo de marca",
    business: "Urban Style",
    category: "Moda",
    city: "Cochabamba",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    price: "Bs 350",
    originalPrice: "Bs 700",
    discount: "-50%"
  },
  {
    id: 10,
    title: "Paquete spa con masajes",
    business: "Beauty Spa",
    category: "Belleza y Bienestar",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
    price: "Bs 180",
    originalPrice: "Bs 300",
    discount: "-40%"
  },
  {
    id: 11,
    title: "Cortes y tratamientos capilares",
    business: "Salón Premium",
    category: "Belleza y Bienestar",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
    price: "Bs 85",
    originalPrice: "Bs 150",
    discount: "-43%"
  },
  {
    id: 12,
    title: "Membresía mensual gimnasio",
    business: "PowerFit Gym",
    category: "Gimnasios",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
    price: "Bs 150",
    originalPrice: "Bs 300",
    discount: "-50%"
  },
];

export function OfertasPorTiempoScreen({ 
  onBack, 
  timeFilter, 
  selectedCity = "" 
}: OfertasPorTiempoScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDetailScreen, setShowDetailScreen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToOfertas = () => {
    setSelectedCategory(null);
  };

  const handleOfferClick = (offer: any) => {
    setSelectedOffer(offer);
    setShowDetailScreen(true);
  };

  const handleSearch = () => {
    // Aquí se implementaría la lógica de búsqueda
    console.log("Buscando:", searchQuery, "en", searchCity);
    setShowSearchModal(false);
  };

  // Si hay una categoría seleccionada, mostrar pantalla de publicaciones
  if (selectedCategory) {
    return (
      <OfertasCategoriasPublicacionesScreen
        onBack={handleBackToOfertas}
        categoryName={selectedCategory}
        timeFilter={timeFilter}
        selectedCity={selectedCity}
      />
    );
  }

  // Si estamos en la pantalla de detalle
  if (showDetailScreen && selectedOffer) {
    return (
      <OfferDetailScreen
        onBack={() => setShowDetailScreen(false)}
        post={selectedOffer}
      />
    );
  }

  // Filtrar ofertas por ciudad si está seleccionada
  const filteredOffers = selectedCity 
    ? allOffers.filter(offer => offer.city === selectedCity)
    : allOffers;

  const displayCity = selectedCity || "Todo Bolivia";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3 flex-1">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
              <div className="flex-1">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Ofertas - {timeFilterLabels[timeFilter]}
                </h1>
              </div>
            </div>
            
            {/* Search Icon */}
            <button
              onClick={() => setShowSearchModal(true)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Search className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          {/* Ciudad Display */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-red-600" />
            <span className={`text-sm font-medium ${selectedCity ? 'text-gray-900' : 'text-red-600'}`}>
              {displayCity}
            </span>
          </div>

          {/* Publish Button */}
          <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-2xl font-semibold shadow-md">
            Publica tus ofertas y descuentos
          </Button>
        </div>
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="bg-white border-b border-gray-200 py-4 sticky top-[180px] z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-3 min-w-max">
              {allOfertasCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="px-5 py-2.5 bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 text-gray-900 font-medium rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area - Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-gray-600 mb-6">
          Mostrando {filteredOffers.length} {filteredOffers.length === 1 ? 'oferta' : 'ofertas'}
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredOffers.map((offer) => (
            <Card
              key={offer.id}
              onClick={() => handleOfferClick(offer)}
              className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="h-40 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center overflow-hidden relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {offer.discount}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">
                  {offer.title}
                </h3>
                
                {/* Prices */}
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold text-base">
                    {offer.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    {offer.originalPrice}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-6 relative">
            <button
              onClick={() => setShowSearchModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900">Buscar Ofertas</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Qué estás buscando?
                </label>
                <Input
                  type="text"
                  placeholder="Buscar productos, servicios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudad
                </label>
                <Input
                  type="text"
                  placeholder="Introduce ciudad..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500"
                />
              </div>
            </div>
            
            <Button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold"
            >
              Buscar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}