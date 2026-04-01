import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { mainCategoriesData } from "@/app/components/categories/newCategoriesData";

interface CategoriesMainProps {
  onBack: () => void;
  onViewCategories: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoriesMain({ onBack, onViewCategories, onSelectCategory }: CategoriesMainProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Buscando:", searchQuery);
  };

  const handleCategoryClick = (category: any) => {
    if (category.isAllCategories) {
      // Es la card de "Categorías" - mostrar todas las categorías originales
      onViewCategories();
    } else {
      // Es una nueva categoría específica
      onSelectCategory(category.id);
    }
  };

  const filteredCategories = searchQuery
    ? mainCategoriesData.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mainCategoriesData;

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
              placeholder="Buscar categorías..."
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

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          Explora nuestras categorías
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {filteredCategories.map((category) => (
            <Card
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gray-50 flex items-center justify-center p-2 sm:p-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className={`max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-300 ${
                    category.id === 'categorias' ? 'brightness-0 saturate-100' : ''
                  }`}
                  style={category.id === 'categorias' ? {
                    filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(98%) contrast(97%)'
                  } : {}}
                />
              </div>
              <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                  {category.name}
                </h3>
                {category.subcategories.length > 0 && (
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                    {category.subcategories.length} subcategorías
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No se encontraron categorías con ese nombre
            </p>
          </div>
        )}
      </div>
    </div>
  );
}