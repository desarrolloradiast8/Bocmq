import { useState } from "react";
import { ArrowLeft, Heart, Star, MapPin, Trash2, ExternalLink, MessageCircle } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { EventDetailModal } from "@/app/components/homepage/EventDetailModal";
import { OfferDetailScreen } from "@/app/components/homepage/OfferDetailScreen";

interface FavoritesScreenProps {
  onBack: () => void;
  onViewPost: (postId: number) => void;
  onViewStore: (storeId: number) => void;
}

// Mock data
const favoriteBusinesses = [
  {
    id: 1,
    name: "Pastelería Dulce Sabor",
    category: "Restaurantes & Comida",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
  },
  {
    id: 2,
    name: "Tech Solutions Bolivia",
    category: "Tecnología",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400"
  },
  {
    id: 3,
    name: "Boutique Fashion",
    category: "Moda & Ropa",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"
  }
];

const favoriteAnnouncements = [
  {
    id: 1,
    title: "iPhone 13 Pro Max",
    description: "En excelente estado, incluye caja y accesorios",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&h=300&fit=crop",
    price: "Bs. 5,500"
  },
  {
    id: 2,
    title: "Laptop Dell Inspiron",
    description: "Core i7, 16GB RAM, 512GB SSD, pantalla 15.6 pulgadas",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
    price: "Bs. 4,200"
  }
];

const favoriteOffers = [
  {
    id: 1,
    name: "Laptop HP 15.6\" Core i5",
    description: "Laptop con 8GB RAM, 256GB SSD",
    oldPrice: 4500,
    newPrice: 3200,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    store: "Tech Solutions"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    description: "Smartphone última generación",
    oldPrice: 7800,
    newPrice: 6500,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    store: "Mobile Store"
  },
  {
    id: 3,
    name: "Zapatillas Nike Air Max",
    description: "Deportivas cómodas y elegantes",
    oldPrice: 850,
    newPrice: 650,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    store: "Sport Fashion"
  }
];

const favoriteProducts = [
  {
    id: 1,
    business: "Boutique Moda & Estilo",
    category: "Moda",
    city: "Cochabamba",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
    description: "Las ltimas tendencias en moda para esta temporada.",
    rating: 4.7,
    type: "normal"
  },
  {
    id: 2,
    business: "Curso de Marketing Digital",
    category: "Educación",
    city: "Online",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Aprende las estrategias más efectivas de marketing digital.",
    rating: 4.9,
    type: "normal"
  }
];

const favoriteEvents = [
  {
    id: 1,
    title: "Feria de Emprendimientos 2025",
    description: "Gran feria de negocios y emprendimientos bolivianos",
    date: "15 de Febrero, 2025",
    time: "09:00 AM",
    location: "Centro de Convenciones, La Paz",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
    rating: 4.8
  },
  {
    id: 2,
    title: "Expo Tecnología Bolivia",
    description: "Lo último en tecnología e innovación",
    date: "22 de Febrero, 2025",
    time: "10:00 AM",
    location: "Fexpocruz, Santa Cruz",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600",
    rating: 4.9
  }
];

const mockStore = {
  name: "Tienda Demo",
  phone: "+59178945612",
  email: "contacto@tienda.com",
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};

export function FavoritesScreen({ onBack, onViewPost, onViewStore }: FavoritesScreenProps) {
  const [activeTab, setActiveTab] = useState<"negocios" | "anuncios" | "ofertas" | "productos" | "eventos">("negocios");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [selectedOffer, setSelectedOffer] = useState<any>(null);

  // Offer detail modal (usando el mismo componente que OFERTAS)
  if (selectedOffer) {
    // Convertir los datos de la oferta al formato esperado por OfferDetailScreen
    const offerData = {
      business: selectedOffer.store,
      category: "Tecnología",
      image: selectedOffer.image,
      description: selectedOffer.name,
      price: `Bs ${selectedOffer.newPrice.toLocaleString()}`,
      originalPrice: `Bs ${selectedOffer.oldPrice.toLocaleString()}`,
    };
    
    return (
      <OfferDetailScreen 
        offer={offerData}
        onBack={() => setSelectedOffer(null)}
      />
    );
  }

  // Product detail modal
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedProduct(null)}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6">
          <Card className="rounded-3xl overflow-hidden">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-96 object-cover" />
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600 line-through">Bs {selectedProduct.oldPrice}</p>
                  <p className="text-3xl font-bold text-red-600">Bs {selectedProduct.newPrice}</p>
                </div>
                <div className="bg-red-100 text-red-600 px-4 py-2 rounded-2xl font-bold">
                  {Math.round((1 - selectedProduct.newPrice / selectedProduct.oldPrice) * 100)}% OFF
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Cantidad</label>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="w-full p-3 border-2 border-gray-200 rounded-2xl"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Nombre completo</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full p-3 border-2 border-gray-200 rounded-2xl"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full p-3 border-2 border-gray-200 rounded-2xl"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Dirección de entrega</label>
                  <textarea
                    placeholder="Dirección completa"
                    className="w-full p-3 border-2 border-gray-200 rounded-2xl resize-none"
                    rows={3}
                  />
                </div>

                <a
                  href={`https://wa.me/59178945612?text=Hola, quiero ordenar: ${selectedProduct.name} - Bs ${selectedProduct.newPrice}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold"
                >
                  <MessageCircle className="w-6 h-6" />
                  Ordenar por WhatsApp
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Event detail modal
  if (selectedEvent) {
    return (
      <EventDetailModal
        event={selectedEvent}
        store={mockStore}
        onBack={() => setSelectedEvent(null)}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between relative">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>
        <h1 className="text-base font-bold text-gray-900 absolute left-1/2 transform -translate-x-1/2">Mis Favoritos</h1>
        <div className="w-20"></div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b-2 border-gray-200 rounded-2xl overflow-x-auto">
        <div className="max-w-5xl mx-auto flex">
          {[
            { key: "negocios", label: "Negocios" },
            { key: "anuncios", label: "Anuncios" },
            { key: "ofertas", label: "Ofertas" },
            { key: "productos", label: "Productos" },
            { key: "eventos", label: "Eventos" }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 px-3 py-2 text-xs font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-orange-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Negocios Tab */}
        {activeTab === "negocios" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favoriteBusinesses.map((business) => (
              <Card
                key={business.id}
                onClick={() => onViewStore(business.id)}
                className="p-6 rounded-3xl hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex gap-4">
                  <img src={business.image} alt={business.name} className="w-24 h-24 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">{business.name}</h3>
                    <p className="text-sm text-gray-900 font-medium mb-3">{business.category}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(business.rating)
                              ? "fill-orange-500 text-orange-500"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                      <span className="ml-2 font-bold text-gray-900 text-sm">{business.rating}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Anuncios Tab */}
        {activeTab === "anuncios" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {favoriteAnnouncements.map((anuncio) => (
              <div
                key={anuncio.id}
                onClick={() => onViewPost(anuncio.id)}
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
          </div>
        )}

        {/* Ofertas Tab */}
        {activeTab === "ofertas" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {favoriteOffers.map((offer) => (
              <Card
                key={offer.id}
                onClick={() => setSelectedOffer(offer)}
                className="rounded-3xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                <img src={offer.image} alt={offer.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 line-clamp-1">{offer.name}</h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{offer.description}</p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div>
                      <p className="text-xs text-gray-500 line-through">Bs {offer.oldPrice}</p>
                      <p className="text-base font-bold text-red-600">Bs {offer.newPrice}</p>
                    </div>
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded-lg font-bold text-xs">
                      {Math.round((1 - offer.newPrice / offer.oldPrice) * 100)}% OFF
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Productos Tab */}
        {activeTab === "productos" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {favoriteProducts.map((post) => (
              <Card
                key={post.id}
                onClick={() => post.type === "normal" ? onViewStore(post.id) : null}
                className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="relative">
                  <img src={post.image} alt={post.business} className="w-full h-40 object-cover" />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {post.business.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm truncate">{post.business}</h3>
                      <p className="text-xs text-gray-600 truncate">{post.category}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 mb-3 line-clamp-2">{post.description}</p>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(post.rating)
                            ? "fill-orange-500 text-orange-500"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                    <span className="ml-1 font-bold text-gray-900 text-xs">{post.rating}</span>
                  </div>

                  {post.type === "link" && (
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between p-3 bg-orange-50 border-2 border-orange-200 rounded-xl hover:bg-orange-100 transition-colors mb-2"
                    >
                      <span className="text-orange-700 font-medium text-xs truncate">{post.linkTitle}</span>
                      <ExternalLink className="w-4 h-4 text-orange-600 flex-shrink-0 ml-2" />
                    </a>
                  )}

                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{post.city}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Eventos Tab */}
        {activeTab === "eventos" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {favoriteEvents.map((event) => (
              <Card
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
              >
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm truncate">{event.title}</h3>
                      <p className="text-xs text-gray-600 truncate">{event.date}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 mb-3 line-clamp-2">{event.description}</p>

                  <div className="flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3 text-orange-600 flex-shrink-0" />
                    <span className="text-xs text-gray-700 truncate">{event.location}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(event.rating)
                            ? "fill-orange-500 text-orange-500"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                    <span className="ml-1 font-bold text-gray-900 text-xs">{event.rating}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}