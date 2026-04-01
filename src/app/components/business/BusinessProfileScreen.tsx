import { useState } from "react";
import { ArrowLeft, Heart, Share2, ShoppingCart, Phone, Mail, Globe, MapPin, Clock, Facebook, Instagram, Tag } from "lucide-react";
import { FaWhatsapp, FaTiktok, FaGooglePlay } from "react-icons/fa";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { useFavorites } from "@/app/components/homepage/FavoritesContext";

interface BusinessProfileScreenProps {
  businessId: number;
  onBack: () => void;
}

// Mock data - en producción vendría de una API
const getBusinessData = (id: number) => {
  const businesses: Record<number, any> = {
    1: {
      id: 1,
      name: "Restaurante El Buen Sabor",
      category: "Gastronomía, Restaurantes",
      coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200",
      website: "www.buensabor.com",
      rating: 4.8,
      totalRatings: 234,
      phone: "+591 71234567",
      email: "contacto@buensabor.com",
      hours: "Lun-Sab: 9:00 AM - 7:00 PM",
      delivery: "Sí - Envío a domicilio disponible",
      socialMedia: {
        facebook: "https://facebook.com/buensabor",
        instagram: "https://instagram.com/buensabor",
        tiktok: "https://tiktok.com/@buensabor",
        playStore: "https://play.google.com/store"
      },
      promotion: {
        title: "Compra 2 y paga únicamente el de mayor valor",
        icon: "tag"
      },
      description: "Restaurante especializado en comida tradicional boliviana con las mejores recetas caseras. Ofrecemos platos de alta calidad para toda ocasión.",
      videoUrl: "https://www.youtube.com/watch?v=example",
      catalogUrl: "https://www.buensabor.com/catalogo",
      recommendations: [
        {
          id: 1,
          authorName: "María González",
          authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
          rating: 5,
          title: "Excelente comida y atención",
          description: "La comida es deliciosa, especialmente el pique macho. El servicio es muy atento y rápido. Totalmente recomendado.",
          visitDate: "15 de Enero, 2025",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600"
        },
        {
          id: 2,
          authorName: "Carlos Pérez",
          authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
          rating: 4,
          title: "Muy buen sabor tradicional",
          description: "Los platos tienen un sabor casero auténtico. Precios justos y porciones generosas.",
          visitDate: "10 de Enero, 2025",
          image: null
        }
      ]
    }
  };

  return businesses[id] || businesses[1];
};

// Mock products
const getProducts = (businessId: number) => {
  return [
    {
      id: 1,
      name: "Pique Macho",
      description: "Plato tradicional con carne, papas fritas, salchicha y ají",
      price: 45,
      image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400"
    },
    {
      id: 2,
      name: "Silpancho",
      description: "Carne apanada con arroz, papa y ensalada",
      price: 35,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400"
    },
    {
      id: 3,
      name: "Sajta de Pollo",
      description: "Pollo en salsa de ají amarillo con papa",
      price: 30,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400"
    },
    {
      id: 4,
      name: "Salteña",
      description: "Empanada boliviana jugosa rellena de carne o pollo",
      price: 8,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"
    }
  ];
};

type TabType = "info" | "announcements" | "events" | "offers" | "store";

export function BusinessProfileScreen({ businessId, onBack }: BusinessProfileScreenProps) {
  const business = getBusinessData(businessId);
  const products = getProducts(businessId);
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const [activeTab, setActiveTab] = useState<TabType>("info");
  const [showDiscountForm, setShowDiscountForm] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState<number | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showBusinessProposal, setShowBusinessProposal] = useState(false);
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, quantity: number, image: string}>>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showRecommendForm, setShowRecommendForm] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedVisitType, setSelectedVisitType] = useState("");
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showVisitTypeDropdown, setShowVisitTypeDropdown] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

  const handleAddToCart = (product: any) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1}
          : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId ? {...item, quantity} : item
      ));
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Cart View
  if (showCart) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-100 rounded-xl">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold">Mi Pedido</h1>
            <div className="w-10"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Business Info */}
          <Card className="p-4 rounded-3xl">
            <div className="flex items-center gap-3 mb-2">
              <img src={business.logo} alt={business.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-gray-900">{business.name}</h3>
                <p className="text-sm text-gray-600">{business.category}</p>
              </div>
            </div>
          </Card>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <Card className="p-12 rounded-3xl text-center">
              <p className="text-gray-500">Tu carrito está vacío</p>
            </Card>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map(item => (
                  <Card key={item.id} className="p-4 rounded-3xl">
                    <div className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-red-600 font-bold">Bs {item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="p-2 hover:bg-red-50 rounded-xl h-fit"
                      >
                        🗑️
                      </button>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 rounded-3xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Subtotal:</span>
                  <span className="text-2xl font-bold text-orange-600">Bs {subtotal}</span>
                </div>
                <Button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 rounded-2xl text-lg font-bold"
                >
                  Continuar
                </Button>
              </Card>
            </>
          )}
        </div>
      </div>
    );
  }

  // Checkout View
  if (showCheckout) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button onClick={() => setShowCheckout(false)} className="p-2 hover:bg-gray-100 rounded-xl">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold">Detalles del Pedido</h1>
            <div className="w-10"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          <Card className="p-6 rounded-3xl">
            <h3 className="font-bold text-lg mb-4">Resumen del Pedido</h3>
            <div className="space-y-2 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>Bs {item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-orange-600">Bs {subtotal}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl">
            <h3 className="font-bold text-lg mb-4">Completa tus datos</h3>
            <div className="space-y-4">
              <Input placeholder="Nombre y Apellido" className="py-6 rounded-2xl" />
              <Input placeholder="Dirección" className="py-6 rounded-2xl" />
              <Input placeholder="Ciudad" className="py-6 rounded-2xl" />
              <textarea 
                placeholder="Comentario adicional sobre su pedido" 
                className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 outline-none min-h-24"
              />
              <select className="w-full p-4 rounded-2xl border-2 border-gray-200">
                <option value="">Tipo de entrega (Opcional)</option>
                <option value="pickup">Paso a retirar</option>
                <option value="delivery">Envío a domicilio</option>
              </select>
            </div>
          </Card>

          <Button 
            onClick={() => {
              const phone = business.phone.replace(/[^0-9]/g, '');
              const message = `Hola, quiero hacer un pedido:\n${cart.map(item => `${item.name} x${item.quantity}`).join('\n')}\nTotal: Bs ${subtotal}`;
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-6 rounded-2xl text-lg font-bold flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-6 h-6" />
            Enviar pedido por WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  // Product Detail View
  if (showProductDetail !== null) {
    const product = products.find(p => p.id === showProductDetail)!;
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button onClick={() => setShowProductDetail(null)} className="p-2 hover:bg-gray-100 rounded-xl">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold">Producto</h1>
            <div className="w-10"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Product Image */}
          <Card className="overflow-hidden rounded-3xl">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
          </Card>

          {/* Product Info */}
          <Card className="p-6 rounded-3xl space-y-4">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                <Phone className="w-5 h-5" />
              </Button>
            </div>
            
            <p className="text-2xl font-bold text-red-600">Bs {product.price}</p>
            
            <Button 
              onClick={() => {
                handleAddToCart(product);
                const phone = business.phone.replace(/[^0-9]/g, '');
                window.open(`https://wa.me/${phone}?text=Quiero pedir: ${product.name}`, '_blank');
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 rounded-2xl text-lg font-bold"
            >
              Pedir Ahora
            </Button>

            <Button 
              onClick={() => {
                handleAddToCart(product);
                alert('Producto agregado al pedido');
              }}
              className="w-full bg-gray-900 text-white py-6 rounded-2xl text-lg font-bold"
            >
              Agregar a Pedido
            </Button>

            <div>
              <h3 className="font-bold text-lg mb-2">Descripción</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <Button 
              onClick={() => {
                const phone = business.phone.replace(/[^0-9]/g, '');
                window.open(`https://wa.me/${phone}`, '_blank');
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-2xl flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-6 h-6" />
              Mensaje
            </Button>
          </Card>

          {/* Business Info */}
          <Card className="p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
              <img src={business.logo} alt={business.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-gray-900">{business.name}</h3>
                <p className="text-sm text-gray-600">{business.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{business.hours}</span>
            </div>

            <div className="text-gray-600">{business.delivery}</div>

            <div className="flex items-center justify-center gap-4">
              <button className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200">
                <FaGooglePlay className="w-6 h-6 text-blue-600" />
              </button>
              <button className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200">
                <Facebook className="w-6 h-6 text-blue-600" />
              </button>
              <button className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200">
                <Instagram className="w-6 h-6 text-pink-600" />
              </button>
              <button className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800">
                <FaTiktok className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 border-2 border-orange-500 text-orange-600 bg-white hover:bg-orange-50 rounded-2xl">
                Me interesa
              </Button>
              <Button 
                onClick={() => toggleFavorite(businessId)}
                className={`flex-1 rounded-2xl ${isFavorite(businessId) ? 'bg-red-500 text-white' : 'border-2 border-gray-300 text-gray-600 bg-white hover:bg-gray-50'}`}
              >
                <Heart className={`w-5 h-5 ${isFavorite(businessId) ? 'fill-white' : ''}`} />
                Favorito
              </Button>
              <Button className="flex-1 border-2 border-gray-300 text-gray-600 bg-white hover:bg-gray-50 rounded-2xl">
                <Share2 className="w-5 h-5" />
                Compartir
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Store View
  if (showStore) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button onClick={() => setShowStore(false)} className="p-2 hover:bg-gray-100 rounded-xl">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold">Tienda</h1>
            <div className="w-10"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Search */}
          <Input 
            placeholder="Buscar productos..." 
            className="py-6 rounded-2xl"
          />

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4">
            {products.map(product => (
              <Card 
                key={product.id}
                onClick={() => setShowProductDetail(product.id)}
                className="rounded-3xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold text-red-600">Bs {product.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Discount Form
  if (showDiscountForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button onClick={() => setShowDiscountForm(false)} className="p-2 hover:bg-gray-100 rounded-xl">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold">Formulario de Descuento</h1>
            <div className="w-10"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Card className="p-6 rounded-3xl">
            <div className="space-y-4">
              <Input placeholder="Nombre y Apellido" className="py-6 rounded-2xl" />
              <Input placeholder="Teléfono" className="py-6 rounded-2xl" />
              <Input placeholder="Ciudad" className="py-6 rounded-2xl" />
              <Input placeholder="Correo Electrónico" className="py-6 rounded-2xl" />
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 rounded-2xl text-lg font-bold">
                Enviar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Business Proposal Form
  if (showBusinessProposal) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button onClick={() => setShowBusinessProposal(false)} className="p-2 hover:bg-gray-100 rounded-xl">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold">Propuesta de Negocio</h1>
            <div className="w-10"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Card className="p-6 rounded-3xl">
            <p className="text-gray-600 mb-6">Si deseas hacernos llegar tu propuesta de negocio, te pedimos llenes el siguiente formulario:</p>
            <div className="space-y-4">
              <Input placeholder="Nombre y Apellido" className="py-6 rounded-2xl" />
              <Input placeholder="Ciudad en la que vives" className="py-6 rounded-2xl" />
              <Input placeholder="Empresa en la que trabajas" className="py-6 rounded-2xl" />
              <Input placeholder="Servicio que ofreces" className="py-6 rounded-2xl" />
              <Input placeholder="Cargo que ocupas en la empresa" className="py-6 rounded-2xl" />
              <Input placeholder="Correo Electrónico" className="py-6 rounded-2xl" />
              <Input placeholder="Teléfono" className="py-6 rounded-2xl" />
              <textarea 
                placeholder="Describe tu propuesta" 
                className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 outline-none min-h-32"
              />
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 rounded-2xl text-lg font-bold">
                Enviar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Recommend Form
  if (showRecommendForm) {
    const months = [
      "Enero 2026", "Febrero 2026", "Marzo 2026", "Abril 2026", "Mayo 2026", "Junio 2026",
      "Julio 2026", "Agosto 2026", "Septiembre 2026", "Octubre 2026", "Noviembre 2026", "Diciembre 2026"
    ];

    const visitTypes = ["Negocios", "Parejas", "Familia", "Amigos", "En solitario"];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button onClick={() => setShowRecommendForm(false)} className="p-2 hover:bg-gray-100 rounded-xl">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold">Recomiéndanos</h1>
            <div className="w-10"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Card className="p-6 rounded-3xl space-y-6">
            {/* Rating Selection */}
            <div>
              <h3 className="font-bold text-lg mb-3">Puntuación</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star}
                    onClick={() => setSelectedRating(star)}
                    className={`w-12 h-12 rounded-full transition-all ${
                      selectedRating >= star 
                        ? 'bg-gradient-to-br from-orange-400 to-red-500' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Month of Visit */}
            <div className="relative">
              <h3 className="font-bold text-lg mb-3">Mes de visita</h3>
              <button
                onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                className="w-full p-4 rounded-2xl border-2 border-gray-200 text-left flex items-center justify-between hover:border-orange-500"
              >
                <span className={selectedMonth ? "text-gray-900" : "text-gray-400"}>
                  {selectedMonth || "Selecciona un mes"}
                </span>
                <span className="text-gray-400">▼</span>
              </button>
              {showMonthDropdown && (
                <div className="absolute z-20 w-full mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-lg max-h-60 overflow-y-auto">
                  {months.map((month) => (
                    <button
                      key={month}
                      onClick={() => {
                        setSelectedMonth(month);
                        setShowMonthDropdown(false);
                      }}
                      className="w-full p-4 text-left hover:bg-orange-50 transition-colors"
                    >
                      {month}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Visit Type */}
            <div className="relative">
              <h3 className="font-bold text-lg mb-3">Tipo de visita</h3>
              <button
                onClick={() => setShowVisitTypeDropdown(!showVisitTypeDropdown)}
                className="w-full p-4 rounded-2xl border-2 border-gray-200 text-left flex items-center justify-between hover:border-orange-500"
              >
                <span className={selectedVisitType ? "text-gray-900" : "text-gray-400"}>
                  {selectedVisitType || "Selecciona el tipo de visita"}
                </span>
                <span className="text-gray-400">▼</span>
              </button>
              {showVisitTypeDropdown && (
                <div className="absolute z-20 w-full mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
                  {visitTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedVisitType(type);
                        setShowVisitTypeDropdown(false);
                      }}
                      className="w-full p-4 text-left hover:bg-orange-50 transition-colors"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <h3 className="font-bold text-lg mb-3">Título</h3>
              <Input placeholder="Escribe un título" className="py-6 rounded-2xl" />
            </div>

            {/* Recommendation Text */}
            <div>
              <h3 className="font-bold text-lg mb-3">Recomendación</h3>
              <textarea 
                placeholder="Escribe una recomendación" 
                className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 outline-none min-h-32"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <button className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center hover:border-orange-500 transition-colors">
                <span className="text-4xl text-gray-400">+</span>
              </button>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 rounded-2xl text-lg font-bold">
              Enviar
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  // Main Business Profile View
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Cover Image */}
      <div className="relative">
        <img 
          src={business.coverImage} 
          alt={business.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <button 
            onClick={onBack}
            className="p-2 bg-white/90 backdrop-blur rounded-xl hover:bg-white"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowCart(true)}
              className="p-2 bg-white/90 backdrop-blur rounded-xl hover:bg-white relative"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button className="p-2 bg-white/90 backdrop-blur rounded-xl hover:bg-white">
              <Share2 className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-6">
        {/* Business Header */}
        <div className="flex items-start gap-4 mt-4 mb-6">
          <img 
            src={business.logo} 
            alt={business.name}
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <div className="flex-1 mt-4">
            <h1 className="text-2xl font-bold text-gray-900">{business.name}</h1>
            <p className="text-gray-600">{business.category}</p>
          </div>
        </div>

        {/* Website */}
        <Card className="p-4 rounded-3xl mb-4">
          <div className="flex items-center gap-2 text-orange-600">
            <Globe className="w-5 h-5" />
            <span className="font-medium">{business.website}</span>
          </div>
        </Card>

        {/* Rating & Favorite */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < Math.floor(business.rating) ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">({business.totalRatings})</span>
          </div>
          <button 
            onClick={() => toggleFavorite(businessId)}
            className="p-2 hover:bg-gray-100 rounded-xl"
          >
            <Heart className={`w-6 h-6 ${isFavorite(businessId) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>
        </div>

        {/* Promotion Card */}
        <Card className="p-6 rounded-3xl mb-6 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-orange-500 rounded-2xl">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900 mb-3">{business.promotion.title}</p>
              <Button 
                onClick={() => setShowDiscountForm(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-2xl font-bold"
              >
                Formulario para acceder al descuento o promoción
              </Button>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Button 
            onClick={() => setShowStore(true)}
            className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent py-6 rounded-2xl font-bold transition-all"
          >
            Ver Tienda
          </Button>
          <Button 
            onClick={() => {
              const phone = business.phone.replace(/[^0-9]/g, '');
              window.open(`https://wa.me/${phone}`, '_blank');
            }}
            className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent py-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
          >
            <FaWhatsapp className="w-5 h-5" />
            Mensaje
          </Button>
          <Button 
            onClick={() => setShowContactModal(true)}
            className="border-2 border-gray-300 text-gray-900 bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent py-6 rounded-2xl font-bold transition-all"
          >
            Contacto
          </Button>
        </div>

        {/* Tabs - Text Style */}
        <div className="flex gap-6 mb-6 overflow-x-auto pb-2 border-b border-gray-200">
          {[
            { id: "info", label: "Información" },
            { id: "announcements", label: "Anuncios" },
            { id: "events", label: "Eventos" },
            { id: "offers", label: "Ofertas" },
            { id: "store", label: "Tienda" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`pb-3 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-orange-600 font-bold border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "info" && (
          <div className="space-y-6">
            {/* Description */}
            <Card className="p-6 rounded-3xl">
              <p className="text-gray-700">{business.description}</p>
            </Card>

            {/* Store Preview */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6" />
                  Tienda
                </h3>
                <Button 
                  onClick={() => setShowStore(true)}
                  className="text-orange-600 hover:text-orange-700 font-bold"
                >
                  Ver todo
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {products.slice(0, 3).map(product => (
                  <img 
                    key={product.id}
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-2xl cursor-pointer hover:opacity-90"
                    onClick={() => setShowStore(true)}
                  />
                ))}
              </div>
            </div>

            {/* Video & Links */}
            <div className="grid grid-cols-2 gap-3">
              <Button className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent py-6 rounded-2xl font-bold transition-all">
                ▶ Play Video
              </Button>
              <Button className="border-2 border-gray-300 text-gray-900 bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent py-6 rounded-2xl font-bold transition-all">
                Ofertas y Promociones
              </Button>
            </div>

            <Button className="w-full border-2 border-gray-300 text-gray-900 bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent py-6 rounded-2xl font-bold transition-all">
              Ver Catálogo
            </Button>

            {/* Hours & Delivery */}
            <Card className="p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-bold">Horarios de atención</p>
                  <p className="text-gray-600">{business.hours}</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Servicio a domicilio</p>
                <p className="text-gray-600">{business.delivery}</p>
              </div>
            </Card>

            {/* Social Media */}
            <div className="flex items-center justify-center gap-4">
              <button className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200">
                <FaGooglePlay className="w-8 h-8 text-blue-600" />
              </button>
              <button className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200">
                <Facebook className="w-8 h-8 text-blue-600" />
              </button>
              <button className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200">
                <Instagram className="w-8 h-8 text-pink-600" />
              </button>
              <button className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800">
                <FaTiktok className="w-8 h-8 text-white" />
              </button>
            </div>

            {/* Business Proposal */}
            <Button 
              onClick={() => setShowBusinessProposal(true)}
              className="w-full border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 py-6 rounded-2xl font-bold"
            >
              Propuesta de Negocio
            </Button>

            {/* Recommendations Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Recomendaciones</h3>
                {business.recommendations.length > 2 && (
                  <button 
                    onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    {showAllRecommendations ? "Ver menos" : "Ver más"}
                  </button>
                )}
              </div>
              {business.recommendations.slice(0, showAllRecommendations ? business.recommendations.length : 2).map((rec: any) => (
                <Card key={rec.id} className="p-5 rounded-3xl border-2 border-gray-100">
                  <div className="flex items-start gap-3 mb-3">
                    <img src={rec.authorPhoto} alt={rec.authorName} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{rec.authorName}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${
                              i < rec.rating
                                ? 'bg-gradient-to-br from-orange-400 to-red-500'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <h5 className="font-bold mb-2">{rec.title}</h5>
                  <p className="text-gray-700 text-sm mb-2">{rec.description}</p>
                  <p className="text-sm text-gray-500 mb-2">Fecha de visita: {rec.visitDate}</p>
                  {rec.image && (
                    <img src={rec.image} alt="Recomendación" className="w-full h-48 object-cover rounded-2xl" />
                  )}
                </Card>
              ))}
              
              <Button 
                onClick={() => setShowRecommendForm(true)}
                className="w-full py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-white" />
                Recomiéndanos
              </Button>
            </div>
          </div>
        )}

        {activeTab === "announcements" && (
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                id: 1,
                title: "Promoción Especial",
                description: "50% de descuento en productos seleccionados durante todo el mes",
                image: "https://images.unsplash.com/photo-1768839721483-c4501b5d6eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsJTIwb2ZmZXIlMjBkaXNjb3VudCUyMHNhbGV8ZW58MXx8fHwxNzcwMjUwMzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                date: "Válido hasta el 28 de Febrero"
              },
              {
                id: 2,
                title: "Nuevo Lanzamiento",
                description: "Descubre nuestra nueva línea de productos premium disponibles ahora",
                image: "https://images.unsplash.com/photo-1765533220769-9fd90a9f458f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBwcm9kdWN0JTIwbGF1bmNofGVufDF8fHx8MTc3MDI1MDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                date: "Desde el 5 de Febrero"
              },
              {
                id: 3,
                title: "Evento Especial",
                description: "Gran inauguración de nuestra nueva sucursal con actividades y premios",
                image: "https://images.unsplash.com/photo-1769798643655-e0f10f62c3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV2ZW50JTIwcHJvbW90aW9ufGVufDF8fHx8MTc3MDI1MDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                date: "15 de Febrero - 10:00 AM"
              },
              {
                id: 4,
                title: "Anuncio Importante",
                description: "Nuevos horarios de atención extendidos para servir mejor a nuestros clientes",
                image: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFubm91bmNlbWVudCUyMHByb21vdGlvbnxlbnwxfHx8fDE3NzAyNTAzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                date: "A partir del 1 de Febrero"
              }
            ].map(announcement => (
              <Card 
                key={announcement.id}
                className="rounded-3xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={announcement.image} 
                  alt={announcement.title} 
                  className="w-full h-40 object-cover" 
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{announcement.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{announcement.description}</p>
                  <p className="text-xs text-orange-600 font-semibold">{announcement.date}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "events" && (
          <Card className="p-12 rounded-3xl text-center">
            <p className="text-gray-500">Aún no existen datos para mostrar</p>
          </Card>
        )}

        {activeTab === "offers" && (
          <Card className="p-12 rounded-3xl text-center">
            <p className="text-gray-500">Aún no existen datos para mostrar</p>
          </Card>
        )}

        {activeTab === "store" && (
          <div className="grid grid-cols-2 gap-4">
            {products.map(product => (
              <Card 
                key={product.id}
                onClick={() => setShowProductDetail(product.id)}
                className="rounded-3xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold text-red-600">Bs {product.price}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:flex md:items-center md:justify-center"
            onClick={() => setShowContactModal(false)}
          >
            {/* Modal Content */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="fixed bottom-0 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto bg-white rounded-t-3xl md:rounded-3xl p-6 z-50 animate-slide-up md:max-w-md md:w-full md:mx-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Contacto</h2>
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-xl"
                >
                  ✕
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="p-3 bg-orange-500 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-medium">Teléfono</p>
                    <a 
                      href={`tel:${business.phone}`}
                      className="text-lg font-bold text-gray-900 hover:text-orange-600"
                    >
                      {business.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="p-3 bg-orange-500 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-medium">Correo electrónico</p>
                    <a 
                      href={`mailto:${business.email}`}
                      className="text-lg font-bold text-gray-900 hover:text-orange-600 break-all"
                    >
                      {business.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button
                  onClick={() => {
                    window.location.href = `tel:${business.phone}`;
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-2xl font-bold"
                >
                  Llamar
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = `mailto:${business.email}`;
                  }}
                  className="border-2 border-orange-500 text-orange-600 bg-white hover:bg-orange-50 py-4 rounded-2xl font-bold"
                >
                  Email
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}