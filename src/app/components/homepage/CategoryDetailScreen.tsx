import { ArrowLeft, MapPin, Star } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface CategoryDetailScreenProps {
  category: string;
  onBack: () => void;
}

// Mock posts for category
const mockPosts = [
  { id: 1, business: "Restaurante El Sabor", city: "La Paz", rating: 4.8, reviews: 234 },
  { id: 2, business: "Tech Store Pro", city: "Santa Cruz", rating: 4.9, reviews: 189 },
  { id: 3, business: "Boutique Fashion", city: "Cochabamba", rating: 4.7, reviews: 156 },
  { id: 4, business: "Gimnasio Fitness Plus", city: "La Paz", rating: 4.6, reviews: 298 },
  { id: 5, business: "Spa & Belleza", city: "Santa Cruz", rating: 4.9, reviews: 412 },
  { id: 6, business: "Librería Cultural", city: "Sucre", rating: 4.5, reviews: 87 },
];

export function CategoryDetailScreen({ category, onBack }: CategoryDetailScreenProps) {
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
              {category}
            </h1>
            <p className="text-sm text-gray-600">{mockPosts.length} resultados</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPosts.map((post) => (
            <Card
              key={post.id}
              className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <span className="text-6xl">🏪</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {post.business}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  {post.city}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{post.rating}</span>
                    <span className="text-sm text-gray-500">({post.reviews})</span>
                  </div>

                  <button className="text-orange-600 font-semibold hover:text-orange-700 text-sm">
                    Ver más →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
