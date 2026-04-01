import { useState } from "react";
import { ArrowLeft, Bell, BellOff, MapPin, Star, Heart, MessageCircle, Share2, Bookmark, Search } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { useFavorites } from "@/app/components/homepage/FavoritesContext";
import { PromocionesSearchScreen } from "@/app/components/homepage/PromocionesSearchScreen";
import { OfferDetailScreen } from "@/app/components/homepage/OfferDetailScreen";
import logoImage from "figma:asset/f58efc42583d85ef3e6430ddedc27357443a0c3b.png";

interface OfertasCategoriasPublicacionesScreenProps {
  onBack: () => void;
  categoryName: string;
  timeFilter: string;
  selectedCity?: string;
}

// Mock data - en producción vendría del servidor filtrado por categoría y tiempo
const mockPublicaciones: Record<string, any[]> = {
  "Tecnología": [
    {
      id: 1,
      business: "Tech Store Bolivia",
      category: "Tecnología",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4ODMwMDI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Laptops con 40% de descuento solo por hoy. Stock limitado.",
      rating: 4.8,
      reviews: 234,
      price: "Bs 2,500",
      originalPrice: "Bs 4,200",
      discount: "-40%"
    },
    {
      id: 5,
      business: "Digital World",
      category: "Tecnología",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      description: "Smartphones última generación con hasta 45% de descuento",
      rating: 4.7,
      reviews: 189,
      price: "Bs 1,850",
      originalPrice: "Bs 3,364",
      discount: "-45%"
    },
    {
      id: 6,
      business: "Electro Oferta",
      category: "Tecnología",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      description: "Auriculares inalámbricos premium con cancelación de ruido",
      rating: 4.9,
      reviews: 421,
      price: "Bs 280",
      originalPrice: "Bs 560",
      discount: "-50%"
    },
  ],
  "Restaurantes": [
    {
      id: 2,
      business: "Restaurant Gourmet",
      category: "Restaurantes",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1723672885092-d31ebd5a94b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJvbGl2aWFufGVufDF8fHx8MTc2ODkxNTk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Menú ejecutivo 2x1 esta semana. La mejor comida boliviana.",
      rating: 4.9,
      reviews: 567,
      price: "Bs 45",
      originalPrice: "Bs 90",
      discount: "-50%"
    },
    {
      id: 7,
      business: "Sabor Paceño",
      category: "Restaurantes",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400",
      description: "Platos típicos bolivianos con 35% de descuento todo el mes",
      rating: 4.8,
      reviews: 392,
      price: "Bs 39",
      originalPrice: "Bs 60",
      discount: "-35%"
    },
    {
      id: 8,
      business: "El Buen Gusto",
      category: "Restaurantes",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
      description: "Buffet libre los fines de semana con precio especial",
      rating: 4.6,
      reviews: 278,
      price: "Bs 65",
      originalPrice: "Bs 100",
      discount: "-35%"
    },
  ],
  "Moda": [
    {
      id: 9,
      business: "Fashion Store",
      category: "Moda",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
      description: "Ropa de temporada con descuentos de hasta 60%",
      rating: 4.7,
      reviews: 312,
      price: "Bs 120",
      originalPrice: "Bs 300",
      discount: "-60%"
    },
    {
      id: 10,
      business: "Boutique Elegance",
      category: "Moda",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
      description: "Vestidos elegantes con 45% de descuento esta semana",
      rating: 4.9,
      reviews: 456,
      price: "Bs 220",
      originalPrice: "Bs 400",
      discount: "-45%"
    },
    {
      id: 11,
      business: "Urban Style",
      category: "Moda",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      description: "Calzado deportivo de marca con ofertas increíbles",
      rating: 4.8,
      reviews: 389,
      price: "Bs 350",
      originalPrice: "Bs 700",
      discount: "-50%"
    },
  ],
  "Belleza y Bienestar": [
    {
      id: 12,
      business: "Beauty Spa",
      category: "Belleza y Bienestar",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
      description: "Paquetes de spa con 40% de descuento. Incluye masajes",
      rating: 4.9,
      reviews: 523,
      price: "Bs 180",
      originalPrice: "Bs 300",
      discount: "-40%"
    },
    {
      id: 13,
      business: "Salón de Belleza Premium",
      category: "Belleza y Bienestar",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      description: "Cortes y tratamientos capilares con descuento especial",
      rating: 4.7,
      reviews: 267,
      price: "Bs 85",
      originalPrice: "Bs 150",
      discount: "-43%"
    },
  ],
  "Gimnasios": [
    {
      id: 14,
      business: "PowerFit Gym",
      category: "Gimnasios",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
      description: "Membresías mensuales con 50% de descuento. No pierdas esta oportunidad",
      rating: 4.8,
      reviews: 445,
      price: "Bs 150",
      originalPrice: "Bs 300",
      discount: "-50%"
    },
    {
      id: 15,
      business: "FitZone",
      category: "Gimnasios",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400",
      description: "Plan trimestral con clases grupales incluidas. Oferta limitada",
      rating: 4.9,
      reviews: 378,
      price: "Bs 400",
      originalPrice: "Bs 750",
      discount: "-47%"
    },
  ],
};

export function OfertasCategoriasPublicacionesScreen({ 
  onBack, 
  categoryName,
  timeFilter,
  selectedCity = "" 
}: OfertasCategoriasPublicacionesScreenProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [showSearchScreen, setShowSearchScreen] = useState(false);
  const [showDetailScreen, setShowDetailScreen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleSearch = (query: string, city: string) => {
    console.log("Buscando:", query, "en", city);
    setShowSearchScreen(false);
  };

  const handleDetail = (post: any) => {
    setSelectedPost(post);
    setShowDetailScreen(true);
  };

  // Si estamos en la pantalla de búsqueda
  if (showSearchScreen) {
    return (
      <PromocionesSearchScreen
        onBack={() => setShowSearchScreen(false)}
        onSearch={handleSearch}
        initialCity={selectedCity}
      />
    );
  }

  // Si estamos en la pantalla de detalle de oferta
  if (showDetailScreen && selectedPost) {
    return (
      <OfferDetailScreen
        onBack={() => setShowDetailScreen(false)}
        post={selectedPost}
      />
    );
  }

  // Obtener publicaciones de la categoría
  const allPosts = mockPublicaciones[categoryName] || [];
  
  // Filtrar por ciudad si está seleccionada
  const filteredPosts = selectedCity 
    ? allPosts.filter(post => post.city === selectedCity)
    : allPosts;

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
                  {categoryName}
                </h1>
              </div>
            </div>
            
            {/* Search Icon */}
            <button
              onClick={() => setShowSearchScreen(true)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Search className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          {/* Ciudad y Notificaciones */}
          <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-600" />
              <span className={`font-semibold ${selectedCity ? 'text-gray-900' : 'text-red-600 text-sm'}`}>
                {displayCity}
              </span>
            </div>
            <button
              onClick={toggleNotifications}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                notificationsEnabled
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300"
              }`}
            >
              {notificationsEnabled ? (
                <>
                  <Bell className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">Notificaciones activadas</span>
                </>
              ) : (
                <>
                  <BellOff className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium">Recibir notificaciones</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content - Publicaciones */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 space-y-6">
            <img 
              src={logoImage} 
              alt="No hay datos"
              className="w-32 h-32 mx-auto opacity-60"
            />
            <p className="text-xl text-gray-600 font-medium">
              Aún no existen datos para mostrar
            </p>
            <p className="text-gray-500">
              No hay publicaciones disponibles en {displayCity} para esta categoría
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Mostrando {filteredPosts.length} {filteredPosts.length === 1 ? 'oferta' : 'ofertas'}
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.business}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {post.discount && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {post.discount}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-3">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {post.business}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-lg font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {post.city}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900">{post.rating}</span>
                        <span className="text-sm text-gray-500">({post.reviews})</span>
                      </div>
                      <div className="text-right">
                        <span className="text-orange-600 font-bold block">{post.price}</span>
                        {post.originalPrice && (
                          <span className="text-gray-400 line-through text-sm">{post.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <Heart
                          className={`w-5 h-5 transition-colors ${
                            likedPosts.has(post.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }`}
                        />
                      </button>

                      <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors">
                        <MessageCircle className="w-5 h-5 text-gray-600" />
                      </button>

                      <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors">
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>

                      <button
                        onClick={() => toggleFavorite(post.id)}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <Bookmark
                          className={`w-5 h-5 transition-colors ${
                            isFavorite(post.id)
                              ? "fill-orange-600 text-orange-600"
                              : "text-gray-600"
                          }`}
                        />
                      </button>

                      <Button
                        onClick={() => handleDetail(post)}
                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-xl text-sm font-semibold"
                      >
                        Ver más
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}