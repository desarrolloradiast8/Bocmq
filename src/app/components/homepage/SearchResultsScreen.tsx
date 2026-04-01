import { useState } from "react";
import { ArrowLeft, MapPin } from "lucide-react";

interface SearchResultsScreenProps {
  searchQuery: string;
  selectedCity: string;
  onBack: () => void;
  onViewPost?: (postId: number) => void;
  onViewBusiness?: (businessId: number) => void;
}

type FilterTab = "negocios" | "anuncios" | "ofertas";

export function SearchResultsScreen({
  searchQuery,
  selectedCity,
  onBack,
  onViewPost,
  onViewBusiness,
}: SearchResultsScreenProps) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("negocios");

  // Mock data - in real app, this would come from API based on searchQuery and selectedCity
  const mockNegocios = [
    {
      id: 1,
      title: "Restaurante El Fogón",
      description: "Comida típica boliviana",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Tienda de Electrónica Tech Store",
      description: "Venta de productos electrónicos",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      rating: 4.8,
    },
  ];

  const mockAnuncios = [
    {
      id: 1,
      title: "iPhone 13 Pro Max",
      description: "En excelente estado, incluye caja y accesorios",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&h=300&fit=crop",
      price: "Bs. 5,500",
    },
    {
      id: 2,
      title: "Laptop Dell XPS 15",
      description: "Core i7, 16GB RAM, 512GB SSD",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
      price: "Bs. 8,900",
    },
  ];

  const mockOfertas = [
    {
      id: 1,
      title: "50% de descuento en pizzas",
      description: "Todos los días de 5pm a 7pm",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      discount: "50%",
    },
  ];

  // Filter results based on searchQuery and selectedCity
  const filterResults = (items: any[]) => {
    return items.filter((item) => {
      const matchesSearch = searchQuery
        ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesCity = selectedCity ? item.city === selectedCity : true;
      return matchesSearch && matchesCity;
    });
  };

  const filteredNegocios = filterResults(mockNegocios);
  const filteredAnuncios = filterResults(mockAnuncios);
  const filteredOfertas = filterResults(mockOfertas);

  const getCurrentResults = () => {
    switch (activeFilter) {
      case "negocios":
        return filteredNegocios;
      case "anuncios":
        return filteredAnuncios;
      case "ofertas":
        return filteredOfertas;
    }
  };

  const currentResults = getCurrentResults();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onBack}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
            
            {/* Title Section */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-lg font-bold text-gray-900 truncate">
                  Resultados de búsqueda
                </h1>
                {searchQuery && (
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    "{searchQuery}"
                    {selectedCity && (
                      <span className="ml-1 sm:ml-2 inline-flex items-center gap-0.5 sm:gap-1">
                        <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {selectedCity}
                      </span>
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 sm:gap-2 border-b border-gray-200 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto">
            <button
              onClick={() => setActiveFilter("negocios")}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeFilter === "negocios"
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Negocios
            </button>
            <button
              onClick={() => setActiveFilter("anuncios")}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeFilter === "anuncios"
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Anuncios
            </button>
            <button
              onClick={() => setActiveFilter("ofertas")}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeFilter === "ofertas"
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Ofertas
            </button>
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {currentResults.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-20">
            <p className="text-gray-500 text-sm sm:text-lg text-center px-4">
              Aún no existen datos para mostrar
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {activeFilter === "negocios" &&
              filteredNegocios.map((negocio) => (
                <div
                  key={negocio.id}
                  onClick={() => onViewBusiness?.(negocio.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer active:scale-98"
                >
                  <img
                    src={negocio.image}
                    alt={negocio.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base line-clamp-1">
                      {negocio.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                      {negocio.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="truncate">{negocio.city}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <span className="text-yellow-500">★</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">
                          {negocio.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {activeFilter === "anuncios" &&
              filteredAnuncios.map((anuncio) => (
                <div
                  key={anuncio.id}
                  onClick={() => onViewPost?.(anuncio.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer active:scale-98"
                >
                  <img
                    src={anuncio.image}
                    alt={anuncio.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base line-clamp-1">
                      {anuncio.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                      {anuncio.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 min-w-0 flex-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="truncate">{anuncio.city}</span>
                      </div>
                      <span className="text-base sm:text-lg font-bold text-orange-600 flex-shrink-0 ml-2">
                        {anuncio.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

            {activeFilter === "ofertas" &&
              filteredOfertas.map((oferta) => (
                <div
                  key={oferta.id}
                  onClick={() => onViewPost?.(oferta.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer active:scale-98 relative"
                >
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold text-xs sm:text-sm z-10 shadow-lg">
                    {oferta.discount}
                  </div>
                  <img
                    src={oferta.image}
                    alt={oferta.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base line-clamp-1">
                      {oferta.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                      {oferta.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{oferta.city}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
}