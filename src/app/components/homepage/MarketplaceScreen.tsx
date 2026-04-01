import { ArrowLeft, Tag } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface MarketplaceScreenProps {
  onBack: () => void;
  onCategorySelect: (category: string) => void;
}

const marketplaceCategories = [
  { id: 1, name: "Antigüedades", icon: "🏺", promos: 12 },
  { id: 2, name: "Ropa y Moda", icon: "👕", promos: 45 },
  { id: 3, name: "Viajes y Turismo", icon: "✈️", promos: 23 },
  { id: 4, name: "Maquillaje y Belleza", icon: "💄", promos: 38 },
  { id: 5, name: "Tecnología", icon: "💻", promos: 56 },
  { id: 6, name: "Restaurantes", icon: "🍽️", promos: 67 },
  { id: 7, name: "Deportes", icon: "⚽", promos: 29 },
  { id: 8, name: "Hogar y Decoración", icon: "🏠", promos: 41 },
  { id: 9, name: "Salud y Fitness", icon: "💪", promos: 33 },
  { id: 10, name: "Automotriz", icon: "🚗", promos: 18 },
  { id: 11, name: "Mascotas", icon: "🐕", promos: 25 },
  { id: 12, name: "Educación", icon: "📚", promos: 31 },
];

export function MarketplaceScreen({ onBack, onCategorySelect }: MarketplaceScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Marketplace
            </h1>
            <p className="text-sm text-gray-600">Ofertas y descuentos exclusivos</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Featured Banner */}
        <Card className="mb-6 p-8 rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">¡Descuentos Increíbles!</h2>
              <p className="text-lg opacity-90">Encuentra las mejores ofertas de Bolivia</p>
            </div>
            <Tag className="w-20 h-20 opacity-20" />
          </div>
        </Card>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {marketplaceCategories.map((category) => (
            <Card
              key={category.id}
              onClick={() => onCategorySelect(category.name)}
              className="p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="text-center space-y-3">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {category.promos} ofertas
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Popular Offers */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ofertas Populares</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <span className="text-4xl">🎁</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -50%
                    </span>
                    <span className="text-gray-500 text-sm">La Paz</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Oferta Especial #{i}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Aprovecha este descuento exclusivo en productos seleccionados.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-orange-600">Bs 150</span>
                    <span className="text-gray-400 line-through">Bs 300</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
