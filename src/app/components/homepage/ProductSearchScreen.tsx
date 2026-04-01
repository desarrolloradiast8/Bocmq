import { useState } from "react";
import { Search, ArrowLeft, MapPin, X } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { CitySearchScreen } from "@/app/components/homepage/CitySearchScreen";

interface ProductSearchScreenProps {
  onBack: () => void;
  onSearch: (query: string, city: string) => void;
}

export function ProductSearchScreen({ onBack, onSearch }: ProductSearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showCitySearch, setShowCitySearch] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery, selectedCity);
    }
  };

  const handleClearCity = () => {
    setSelectedCity("");
  };

  // Show city search screen
  if (showCitySearch) {
    return (
      <CitySearchScreen
        onBack={() => setShowCitySearch(false)}
        onSelectCity={(city) => setSelectedCity(city)}
        currentCity={selectedCity}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Buscar Productos</h1>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border-2 border-gray-100 space-y-6">
          {/* Campo 1: ¿Qué estás buscando? */}
          <div>
            <label className="block text-gray-900 font-bold text-base sm:text-lg mb-3">
              1. ¿Qué estás buscando?
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Busca productos, servicios, negocios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-4 sm:py-5 rounded-2xl border-2 border-gray-300 focus:border-orange-500 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Campo 2: Introduce tu ciudad */}
          <div>
            <label className="block text-gray-900 font-bold text-base sm:text-lg mb-3">
              2. Introduce tu ciudad
            </label>
            <div className="relative">
              {selectedCity ? (
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-4 py-4 sm:py-5 bg-orange-50 border-2 border-orange-300 rounded-2xl text-gray-900 font-medium text-sm sm:text-base flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    {selectedCity}
                  </div>
                  <button
                    onClick={handleClearCity}
                    className="p-4 sm:p-5 bg-red-100 hover:bg-red-200 rounded-2xl transition-colors"
                    title="Quitar ciudad"
                  >
                    <X className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowCitySearch(true)}
                  className="w-full px-4 py-4 sm:py-5 bg-gray-50 rounded-2xl text-left flex items-center justify-between hover:bg-gray-100 transition-colors border-2 border-gray-200"
                >
                  <span className="text-gray-500 text-sm sm:text-base flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    Selecciona una ciudad
                  </span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Botón Buscar */}
          <Button
            onClick={handleSearch}
            disabled={!searchQuery.trim()}
            className="w-full py-5 sm:py-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-2xl text-base sm:text-lg font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-2" />
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
}