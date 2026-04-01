import { useState } from "react";
import { Check } from "lucide-react";

interface SelectInterestsProps {
  onComplete: (selectedCategories: string[]) => void;
}

const categories = [
  { id: "restaurantes", name: "Restaurantes" },
  { id: "tecnologia", name: "Tecnología" },
  { id: "moda", name: "Moda" },
  { id: "salud", name: "Salud" },
  { id: "belleza", name: "Belleza" },
  { id: "educacion", name: "Educación" },
  { id: "deportes", name: "Deportes" },
  { id: "hogar", name: "Hogar y Decoración" },
  { id: "mascotas", name: "Mascotas" },
  { id: "vehiculos", name: "Vehículos" },
  { id: "construccion", name: "Construcción" },
  { id: "gastronomia", name: "Gastronomía" },
  { id: "entretenimiento", name: "Entretenimiento" },
  { id: "turismo", name: "Turismo" },
  { id: "finanzas", name: "Finanzas" },
  { id: "servicios", name: "Servicios Profesionales" },
];

export function SelectInterests({ onComplete }: SelectInterestsProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleSkip = () => {
    onComplete([]);
  };

  const handleContinue = () => {
    onComplete(selectedCategories);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-3">
            Recibe notificaciones de ofertas y descuentos de tus categorías favoritas
          </h1>
          <p className="text-lg text-gray-600">
            Selecciona tus intereses
          </p>
        </div>

        {/* Categories Grid */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-orange-100 p-6 sm:p-8 mb-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`relative p-3 rounded-xl border-2 transition-all transform hover:scale-105 h-20 flex items-center justify-center ${
                    isSelected
                      ? "bg-gradient-to-br from-orange-500 to-red-600 border-orange-500 shadow-lg"
                      : "bg-white border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Check icon */}
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                  )}

                  {/* Category content */}
                  <span className={`text-xs sm:text-sm font-semibold text-center leading-tight ${
                    isSelected ? "text-white" : "text-gray-900"
                  }`}>
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected count */}
          {selectedCategories.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {selectedCategories.length} {selectedCategories.length === 1 ? "categoría seleccionada" : "categorías seleccionadas"}
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleSkip}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl text-sm"
          >
            Omitir
          </button>
          
          <button
            onClick={handleContinue}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl text-sm"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}