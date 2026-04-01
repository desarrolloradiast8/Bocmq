import { useState } from "react";
import { ArrowLeft, Search, MapPin } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { CitySearchScreen } from "@/app/components/homepage/CitySearchScreen";

interface PromocionesSearchScreenProps {
  onBack: () => void;
  onSearch: (query: string, city: string) => void;
  initialCity?: string;
}

export function PromocionesSearchScreen({ onBack, onSearch, initialCity = "" }: PromocionesSearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [showCitySearch, setShowCitySearch] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() || selectedCity) {
      onSearch(searchQuery, selectedCity);
    }
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setShowCitySearch(false);
  };

  if (showCitySearch) {
    return (
      <CitySearchScreen
        onBack={() => setShowCitySearch(false)}
        onSelectCity={handleCitySelect}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <Button
            onClick={handleSearch}
            disabled={!searchQuery.trim() && !selectedCity}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl text-sm font-semibold disabled:opacity-50"
          >
            Buscar
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
          ¿Qué estás buscando?
        </h2>

        {/* Search Input */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar promociones, ofertas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="w-full pl-12 pr-4 py-6 rounded-2xl border-2 border-gray-200 focus:border-orange-500 text-base"
            />
          </div>
        </div>

        {/* City Selection */}
        <div className="space-y-2">
          <label className="text-base font-semibold text-gray-900">
            Introduce tu ciudad
          </label>
          <button
            onClick={() => setShowCitySearch(true)}
            className="w-full flex items-center gap-3 px-4 py-6 bg-white border-2 border-gray-200 hover:border-orange-500 rounded-2xl transition-colors text-left"
          >
            <MapPin className="w-5 h-5 text-orange-600" />
            <span className={`text-base ${selectedCity ? 'text-gray-900' : 'text-gray-400'}`}>
              {selectedCity || "Selecciona tu ciudad"}
            </span>
          </button>
        </div>

        {/* Helper Text */}
        <p className="text-sm text-gray-500 text-center">
          Puedes buscar por categoría, producto o servicio
        </p>
      </div>
    </div>
  );
}