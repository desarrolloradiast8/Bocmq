import React, { useState } from "react";
import { ArrowLeft, Heart, Share2, Bookmark, Calendar, TrendingDown, Store } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface OfferDetailScreenProps {
  post?: any;
  offer?: any;
  onBack: () => void;
}

export const OfferDetailScreen: React.FC<OfferDetailScreenProps> = ({
  post: postProp,
  offer: offerProp,
  onBack,
}) => {
  // Usar offer si está disponible, sino usar post
  const post = offerProp || postProp;
  
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllOffers, setShowAllOffers] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Calcular el porcentaje de ahorro
  const calculateSavings = () => {
    const original = parseFloat(post.originalPrice.replace("Bs ", "").replace(",", ""));
    const current = parseFloat(post.price.replace("Bs ", "").replace(",", ""));
    const savings = ((original - current) / original) * 100;
    return Math.round(savings);
  };

  // Mock de todos los productos de la tienda
  const allStoreProducts = [
    {
      id: 1,
      title: "Laptop HP 15.6 Intel Core i5",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      price: "Bs 3,500",
      originalPrice: "Bs 5,200",
      discount: "-33%",
      isOffer: true,
    },
    {
      id: 2,
      title: "Mouse Inalámbrico Logitech MX Master 3",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      price: "Bs 450",
      originalPrice: "Bs 650",
      discount: "-31%",
      isOffer: true,
    },
    {
      id: 3,
      title: "Teclado Mecánico RGB Gaming",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      price: "Bs 680",
      originalPrice: "Bs 950",
      discount: "-28%",
      isOffer: true,
    },
    {
      id: 4,
      title: "Monitor 24 pulgadas Full HD",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      price: "Bs 1,200",
      originalPrice: "Bs 1,800",
      discount: "-33%",
      isOffer: true,
    },
    {
      id: 5,
      title: "Webcam HD 1080p con micrófono",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400",
      price: "Bs 320",
      originalPrice: "Bs 500",
      discount: "-36%",
      isOffer: true,
    },
    {
      id: 6,
      title: "Auriculares Bluetooth Premium",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      price: "Bs 250",
      originalPrice: "Bs 450",
      discount: "-44%",
      isOffer: true,
    },
    {
      id: 7,
      title: "Tablet 10 pulgadas Android",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
      price: "Bs 900",
      originalPrice: "Bs 1,500",
      discount: "-40%",
      isOffer: true,
    },
    {
      id: 8,
      title: "Smartwatch Deportivo GPS",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      price: "Bs 350",
      originalPrice: "Bs 700",
      discount: "-50%",
      isOffer: true,
    },
    {
      id: 9,
      title: "Cargador Portátil 20000mAh",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
      price: "Bs 180",
      originalPrice: "Bs 300",
      discount: "-40%",
      isOffer: true,
    },
    {
      id: 10,
      title: "Hub USB-C 7 en 1",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400",
      price: "Bs 220",
      originalPrice: "Bs 380",
      discount: "-42%",
      isOffer: true,
    },
    {
      id: 11,
      title: "Smartphone Samsung Galaxy A54 5G",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      price: "Bs 1,800",
      originalPrice: "Bs 3,000",
      discount: "-40%",
      isOffer: true,
    },
    {
      id: 12,
      title: "Funda para Laptop 15.6 pulgadas",
      image: "https://images.unsplash.com/photo-1575909812264-6902b55846ad?w=400",
      price: "Bs 85",
      originalPrice: "Bs 150",
      discount: "-43%",
      isOffer: true,
    },
  ];

  // Mock de ofertas relacionadas
  const relatedOffers = [
    {
      id: 101,
      title: "Smartphone Samsung Galaxy A54 5G",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      price: "Bs 1,800",
      originalPrice: "Bs 3,000",
      discount: "-40%",
    },
    {
      id: 102,
      title: "Auriculares Bluetooth Premium",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      price: "Bs 250",
      originalPrice: "Bs 450",
      discount: "-44%",
    },
    {
      id: 103,
      title: "Tablet 10 pulgadas Android",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
      price: "Bs 900",
      originalPrice: "Bs 1,500",
      discount: "-40%",
    },
    {
      id: 104,
      title: "Smartwatch Deportivo GPS",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      price: "Bs 350",
      originalPrice: "Bs 700",
      discount: "-50%",
    },
    {
      id: 105,
      title: "Cámara Digital Mirrorless 24MP",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
      price: "Bs 4,200",
      originalPrice: "Bs 6,500",
      discount: "-35%",
    },
    {
      id: 106,
      title: "Parlante Portátil Bluetooth Resistente al Agua",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      price: "Bs 380",
      originalPrice: "Bs 650",
      discount: "-42%",
    },
    {
      id: 107,
      title: "Consola de Videojuegos PS5",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      price: "Bs 3,800",
      originalPrice: "Bs 5,500",
      discount: "-31%",
    },
    {
      id: 108,
      title: "Drone con Cámara 4K",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400",
      price: "Bs 2,100",
      originalPrice: "Bs 3,500",
      discount: "-40%",
    },
    {
      id: 109,
      title: "Impresora Multifuncional Láser",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400",
      price: "Bs 850",
      originalPrice: "Bs 1,400",
      discount: "-39%",
    },
    {
      id: 110,
      title: "Router WiFi 6 Mesh Doble Banda",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
      price: "Bs 520",
      originalPrice: "Bs 850",
      discount: "-39%",
    },
    {
      id: 111,
      title: "SSD Externo 1TB USB-C",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
      price: "Bs 420",
      originalPrice: "Bs 750",
      discount: "-44%",
    },
    {
      id: 112,
      title: "Silla Gamer Ergonómica",
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400",
      price: "Bs 1,350",
      originalPrice: "Bs 2,200",
      discount: "-39%",
    },
  ];

  const displayedOffers = showAllOffers ? relatedOffers : relatedOffers.slice(0, 4);

  // Función para calcular ahorros de cualquier producto
  const calculateProductSavings = (originalPrice: string, currentPrice: string) => {
    const original = parseFloat(originalPrice.replace("Bs ", "").replace(",", ""));
    const current = parseFloat(currentPrice.replace("Bs ", "").replace(",", ""));
    const savings = ((original - current) / original) * 100;
    return Math.round(savings);
  };

  // Si hay un producto seleccionado, mostrar su detalle
  if (selectedProduct) {
    const productData = {
      ...selectedProduct,
      description: selectedProduct.title,
      business: post.business,
      category: post.category,
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white sticky top-0 z-20 border-b">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-800" />
              </button>
              <h2 className="font-semibold text-base">Detalle del producto</h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Left Side - Image */}
            <div className="rounded-3xl overflow-hidden bg-white shadow-lg h-[400px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Details */}
            <div className="space-y-4">
              <Card className="rounded-3xl p-4">
                {/* Title */}
                <h1 className="text-base font-bold text-gray-900 mb-2">
                  {selectedProduct.title}
                </h1>

                {/* Dates */}
                <div className="space-y-1 mb-2 pb-2 border-b">
                  <div className="flex items-center gap-2 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span className="text-gray-600">Inicio:</span>
                    <span className="font-semibold text-gray-900">28 Enero 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-red-600" />
                    <span className="text-gray-600">Caducidad:</span>
                    <span className="font-semibold text-gray-900">31 Enero 2026</span>
                  </div>
                </div>

                {/* Prices */}
                <div className="mb-2 pb-2 border-b">
                  <div className="mb-1.5">
                    <span className="text-gray-600 text-xs block mb-0.5">Precio actual</span>
                    <span className="text-xl font-bold text-orange-600">
                      {selectedProduct.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <span className="text-gray-600 text-xs block mb-0.5">Precio anterior</span>
                      <span className="text-base text-gray-400 line-through">
                        {selectedProduct.originalPrice}
                      </span>
                    </div>
                    
                    {/* Savings Badge */}
                    <div className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 px-2.5 py-0.5 rounded-lg mt-3">
                      <TrendingDown className="w-3.5 h-3.5" />
                      <span className="font-bold text-xs">
                        Ahorras {calculateProductSavings(selectedProduct.originalPrice, selectedProduct.price)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Business Info */}
                <div className="mb-2 pb-2 border-b">
                  <div className="flex items-center gap-2 mb-1.5">
                    <img
                      src={post.image}
                      alt={post.business}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-sm text-gray-900">{post.business}</h3>
                      <span className="text-xs text-gray-600">{post.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      setShowAllProducts(true);
                    }}
                    className="flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-semibold text-xs transition-colors"
                  >
                    <Store className="w-3.5 h-3.5" />
                    Ver más productos de esta tienda
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center divide-x divide-gray-200">
                  <button className="flex-1 flex flex-col items-center justify-center gap-0.5 text-gray-900 hover:text-orange-600 transition-colors py-1.5">
                    <Bookmark className="w-4 h-4" />
                    <span className="text-xs font-semibold">Me interesa</span>
                  </button>
                  <button className="flex-1 flex flex-col items-center justify-center gap-0.5 text-gray-900 hover:text-orange-600 transition-colors py-1.5">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-semibold">Favorito</span>
                  </button>
                  <button className="flex-1 flex flex-col items-center justify-center gap-0.5 text-gray-900 hover:text-orange-600 transition-colors py-1.5">
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs font-semibold">Compartir</span>
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* Related Offers - More from this store */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Más productos de {post.business}
              </h2>
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setShowAllProducts(true);
                }}
                className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors flex items-center gap-1"
              >
                Ver más
                <span className="text-lg">›</span>
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {allStoreProducts.slice(0, 4).map((product) => (
                <Card
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="h-32 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {product.isOffer && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {product.discount}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-orange-600 font-bold text-sm block">
                          {product.price}
                        </span>
                        <span className="text-gray-400 line-through text-xs">
                          {product.originalPrice}
                        </span>
                      </div>
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

  // Si se está mostrando todos los productos
  if (showAllProducts) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white sticky top-0 z-20 border-b">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAllProducts(false)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-800" />
              </button>
              <div>
                <h2 className="font-semibold text-base">Productos de {post.business}</h2>
                <p className="text-sm text-gray-600">{allStoreProducts.length} productos disponibles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allStoreProducts.map((product) => (
              <Card
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {product.isOffer && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-orange-600 font-bold text-sm block">
                        {product.price}
                      </span>
                      {product.isOffer && (
                        <span className="text-gray-400 line-through text-xs">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-20 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-800" />
            </button>
            <h2 className="font-semibold text-base">Detalle de la oferta</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Left Side - Image */}
          <div className="rounded-3xl overflow-hidden bg-white shadow-lg h-[400px]">
            <img
              src={post.image}
              alt={post.business}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Details */}
          <div className="space-y-4">
            <Card className="rounded-3xl p-4">
              {/* Title */}
              <h1 className="text-base font-bold text-gray-900 mb-2">
                {post.description || post.business}
              </h1>

              {/* Dates */}
              <div className="space-y-1 mb-2 pb-2 border-b">
                <div className="flex items-center gap-2 text-xs">
                  <Calendar className="w-3.5 h-3.5 text-orange-600" />
                  <span className="text-gray-600">Inicio:</span>
                  <span className="font-semibold text-gray-900">28 Enero 2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Calendar className="w-3.5 h-3.5 text-red-600" />
                  <span className="text-gray-600">Caducidad:</span>
                  <span className="font-semibold text-gray-900">31 Enero 2026</span>
                </div>
              </div>

              {/* Prices */}
              <div className="mb-2 pb-2 border-b">
                <div className="mb-1.5">
                  <span className="text-gray-600 text-xs block mb-0.5">Precio actual</span>
                  <span className="text-xl font-bold text-orange-600">
                    {post.price}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <span className="text-gray-600 text-xs block mb-0.5">Precio anterior</span>
                    <span className="text-base text-gray-400 line-through">
                      {post.originalPrice}
                    </span>
                  </div>
                  
                  {/* Savings Badge - Same line */}
                  <div className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 px-2.5 py-0.5 rounded-lg mt-3">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span className="font-bold text-xs">Ahorras {calculateSavings()}%</span>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="mb-2 pb-2 border-b">
                <div className="flex items-center gap-2 mb-1.5">
                  <img
                    src={post.image}
                    alt={post.business}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">{post.business}</h3>
                    <span className="text-xs text-gray-600">{post.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowAllProducts(true)}
                  className="flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-semibold text-xs transition-colors"
                >
                  <Store className="w-3.5 h-3.5" />
                  Ver más productos de esta tienda
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center divide-x divide-gray-200">
                <button className="flex-1 flex flex-col items-center justify-center gap-0.5 text-gray-900 hover:text-orange-600 transition-colors py-1.5">
                  <Bookmark className="w-4 h-4" />
                  <span className="text-xs font-semibold">Me interesa</span>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center gap-0.5 text-gray-900 hover:text-orange-600 transition-colors py-1.5">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs font-semibold">Favorito</span>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center gap-0.5 text-gray-900 hover:text-orange-600 transition-colors py-1.5">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs font-semibold">Compartir</span>
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Related Offers */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Otras ofertas disponibles
            </h2>
            {relatedOffers.length > 4 && (
              <button
                onClick={() => setShowAllOffers(!showAllOffers)}
                className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors flex items-center gap-1"
              >
                Ver más
                <span className="text-lg">›</span>
              </button>
            )}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedOffers.map((relatedOffer) => (
              <Card
                key={relatedOffer.id}
                className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="h-32 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={relatedOffer.image}
                    alt={relatedOffer.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {relatedOffer.discount}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">
                    {relatedOffer.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-orange-600 font-bold text-sm block">
                        {relatedOffer.price}
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        {relatedOffer.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};