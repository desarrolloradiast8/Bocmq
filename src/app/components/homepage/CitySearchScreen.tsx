import { useState } from "react";
import { Search, X, ArrowLeft, MapPin } from "lucide-react";
import { Input } from "@/app/components/ui/input";

interface CitySearchScreenProps {
  onBack: () => void;
  onSelectCity: (city: string) => void;
  currentCity?: string;
}

interface City {
  name: string;
  department: string;
  isDepartment?: boolean;
}

const bolivianCities: City[] = [
  { name: "Achocalla", department: "Departamento de La Paz" },
  { name: "Aiquile", department: "Departamento de Cochabamba" },
  { name: "Ardamarca", department: "Departamento de Oruro" },
  { name: "Ascención", department: "Departamento de Santa Cruz" },
  { name: "Ascención de Guarayos", department: "Departamento de Santa Cruz" },
  { name: "Bermejo", department: "Departamento de Tarija" },
  { name: "Boyuibe", department: "Departamento de Santa Cruz" },
  { name: "Buena Vista", department: "Departamento de Santa Cruz" },
  { name: "Cabezas", department: "Departamento de Santa Cruz" },
  { name: "Camargo", department: "Departamento de Chuquisaca" },
  { name: "Camiri", department: "Departamento de Santa Cruz" },
  { name: "Caracollo", department: "Departamento de Oruro" },
  { name: "Caranavi", department: "Departamento de La Paz" },
  { name: "Cercado", department: "Departamento de Tarija" },
  { name: "Charagua", department: "Departamento de Santa Cruz" },
  { name: "Cobija", department: "Departamento de Pando" },
  { name: "Cochabamba", department: "Departamento de Cochabamba" },
  { name: "Colcapirhua", department: "Departamento de Cochabamba" },
  { name: "Comarapa", department: "Departamento de Santa Cruz" },
  { name: "Concepción", department: "Departamento de Santa Cruz" },
  // Departamentos - solo aparecen cuando se buscan
  { name: "La Paz", department: "Departamento", isDepartment: true },
  { name: "Santa Cruz", department: "Departamento", isDepartment: true },
  { name: "Cochabamba", department: "Departamento", isDepartment: true },
  { name: "Chuquisaca", department: "Departamento", isDepartment: true },
  { name: "Tarija", department: "Departamento", isDepartment: true },
  { name: "Oruro", department: "Departamento", isDepartment: true },
  { name: "Potosí", department: "Departamento", isDepartment: true },
  { name: "Beni", department: "Departamento", isDepartment: true },
  { name: "Pando", department: "Departamento", isDepartment: true },
];

const departments = [
  "Departamento de La Paz",
  "Departamento de Santa Cruz",
  "Departamento de Cochabamba",
  "Departamento de Oruro",
  "Departamento de Tarija",
  "Departamento de Chuquisaca",
  "Departamento de Pando",
  "Departamento de Beni",
  "Departamento de Potosí",
];

export function CitySearchScreen({ onBack, onSelectCity, currentCity }: CitySearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCity = (cityName: string) => {
    onSelectCity(cityName);
    onBack();
  };

  // Filter cities based on search query
  const filteredCities = bolivianCities.filter((city) => {
    // Si no hay búsqueda, solo mostrar ciudades (no departamentos)
    if (searchQuery === "") {
      return !city.isDepartment;
    }

    const searchLower = searchQuery.toLowerCase();
    const cityMatch = city.name.toLowerCase().includes(searchLower);
    const departmentMatch = city.department.toLowerCase().includes(searchLower);
    
    return cityMatch || departmentMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Buscar por Ciudad</h1>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar ciudad o departamento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 sm:py-5 rounded-2xl border-2 border-gray-300 focus:border-orange-500 text-sm sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Cities List */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        {filteredCities.length > 0 ? (
          <div className="space-y-2">
            {filteredCities.map((city) => (
              <button
                key={city.name}
                onClick={() => handleSelectCity(city.name)}
                className={`w-full p-4 sm:p-5 rounded-2xl border-2 transition-all text-left hover:shadow-md ${
                  currentCity === city.name
                    ? "bg-orange-50 border-orange-500"
                    : "bg-white border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <MapPin className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 ${
                    currentCity === city.name ? "text-orange-600" : "text-gray-400"
                  }`} />
                  <div>
                    <div className={`font-semibold text-base sm:text-lg ${
                      currentCity === city.name ? "text-orange-600" : "text-gray-900"
                    }`}>
                      {city.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      {city.department}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-sm sm:text-base">
              No se encontraron ciudades que coincidan con "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}