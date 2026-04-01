import { useState, useRef } from "react";
import { ArrowLeft, Search, Zap, HandCoins, Home as HomeIcon, BookOpen, Heart, Activity, ShoppingBag, UtensilsCrossed, HeartHandshake, Gift, Sofa, Plane, Briefcase, Music, DollarSign, MapPin, ChevronLeft, ChevronRight, Star, Bell, BellOff, X } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { PromocionesPublicacionesScreen } from "@/app/components/homepage/PromocionesPublicacionesScreen";
import { OfertasCategoriasPublicacionesScreen } from "@/app/components/homepage/OfertasCategoriasPublicacionesScreen";
import { SeleccionarPerfilScreen } from "@/app/components/homepage/SeleccionarPerfilScreen";
import { CrearProductoScreen } from "@/app/components/homepage/CrearProductoScreen";
import { OfferDetailScreen } from "@/app/components/homepage/OfferDetailScreen";
import { useFavorites } from "@/app/components/homepage/FavoritesContext";

interface PromocionesScreenProps {
  onBack: () => void;
  selectedCity?: string;
}

const promocionesCategories = [
  { 
    id: "ofertas-relampago", 
    name: "Ofertas Relámpago", 
    icon: Zap,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "segunda-mano", 
    name: "Segunda Mano", 
    icon: HandCoins,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "bienes-raices", 
    name: "Bienes y Raíces", 
    icon: HomeIcon,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "cursos-talleres", 
    name: "Cursos y Talleres", 
    icon: BookOpen,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "bienestar", 
    name: "Bienestar", 
    icon: Heart,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "salud", 
    name: "Salud", 
    icon: Activity,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "compras", 
    name: "Compras", 
    icon: ShoppingBag,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "comida", 
    name: "Comida", 
    icon: UtensilsCrossed,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "romance", 
    name: "Romance", 
    icon: HeartHandshake,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "regalos", 
    name: "Regalos", 
    icon: Gift,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "hogar", 
    name: "Hogar", 
    icon: Sofa,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "viajes", 
    name: "Viajes y Turismo", 
    icon: Plane,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "servicios-negocios", 
    name: "Servicios para Negocios", 
    icon: Briefcase,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "entretenimiento", 
    name: "Entretenimiento", 
    icon: Music,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
  { 
    id: "servicios-financieros", 
    name: "Servicios Financieros", 
    icon: DollarSign,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200"
  },
];

const allOfertasCategories = [
  "Antigüedades",
  "Arte",
  "Belleza y Bienestar",
  "Bienes Raíces",
  "Boliches",
  "Cirugía Estética y Tratamientos Estéticos",
  "Comida",
  "Compras",
  "Culturas",
  "Cursos y Talleres",
  "Decoración",
  "Deliveries",
  "Electrodomésticos",
  "Emprendimientos",
  "Entretenimiento",
  "Eventos",
  "Fotógrafos",
  "Gimnasios",
  "Hogar",
  "Hoteles",
  "Joyería y Relojes",
  "Mascotas",
  "Moda",
  "Ofertas Relámpago",
  "Oficina",
  "Productos Alimenticios",
  "Regalos",
  "Remate",
  "Restaurantes",
  "Romance",
  "Salud",
  "Segunda Mano",
  "Servicios Financieros",
  "Servicios de Marketing y Publicidad",
  "Servicios Digitales",
  "Servicios Empresariales",
  "Servicios Generales",
  "Servicios para Eventos",
  "Servicios para Negocios",
  "Servicios Profesionales",
  "Servicios Técnicos",
  "Tecnología",
  "Teléfonos y Accesorios para Teléfonos",
  "Vehículos",
  "Viajes y Turismo",
];

// Publicaciones destacadas mock
const featuredPublicaciones = [
  {
    id: 1,
    business: "Tech Store Flash",
    category: "Ofertas Relámpago",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?w=400",
    description: "¡Solo por hoy! Laptop HP con 50% de descuento. Stock limitado.",
    rating: 4.9,
    reviews: 234,
    price: "Bs 2,500",
    originalPrice: "Bs 5,000",
    discount: "-50%"
  },
  {
    id: 2,
    business: "Restaurant Gourmet",
    category: "Comida",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
    description: "Menú del día 2x1. La mejor comida tradicional boliviana.",
    rating: 4.9,
    reviews: 890,
    price: "Bs 45",
    originalPrice: "Bs 90",
    discount: "-50%"
  },
  {
    id: 3,
    business: "Spa & Wellness Center",
    category: "Bienestar",
    city: "Cochabamba",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400",
    description: "Paquete de masajes relajantes. 3 sesiones por el precio de 2.",
    rating: 4.8,
    reviews: 298,
    price: "Bs 300",
    originalPrice: "Bs 450",
    discount: "-33%"
  },
  {
    id: 4,
    business: "Moda & Estilo",
    category: "Compras",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    description: "Nueva colección con 40% OFF toda esta semana.",
    rating: 4.6,
    reviews: 345,
    price: "Bs 180",
    originalPrice: "Bs 300",
    discount: "-40%"
  },
  {
    id: 5,
    business: "Gym Total Fitness",
    category: "Salud",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
    description: "Inscripción gratuita + 1 mes gratis. Válido esta semana.",
    rating: 4.8,
    reviews: 567,
    price: "Bs 200/mes",
    originalPrice: "Bs 350/mes",
    discount: "-43%"
  },
  {
    id: 6,
    business: "Agencia de Viajes Bolivia",
    category: "Viajes",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400",
    description: "Paquetes turísticos al Salar de Uyuni. Todo incluido.",
    rating: 4.9,
    reviews: 678,
    price: "Bs 1,200",
    originalPrice: "Bs 1,800",
    discount: "-33%"
  },
  {
    id: 7,
    business: "Hogar & Estilo",
    category: "Hogar",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400",
    description: "Decoración moderna para tu hogar. Colección nueva con 25% OFF.",
    rating: 4.8,
    reviews: 456,
    price: "Bs 500",
    originalPrice: "Bs 650",
    discount: "-25%"
  },
  {
    id: 8,
    business: "Academia Digital Pro",
    category: "Cursos y Talleres",
    city: "Cochabamba",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400",
    description: "Curso de Marketing Digital. Certificado incluido. Modalidad online.",
    rating: 4.9,
    reviews: 412,
    price: "Bs 800",
    originalPrice: "Bs 1,200",
    discount: "-33%"
  },
];

export function PromocionesScreen({ onBack, selectedCity = "" }: PromocionesScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<string | null>(null);
  const [selectedOfertaCategory, setSelectedOfertaCategory] = useState<string | null>(null);
  const [showSeleccionarPerfil, setShowSeleccionarPerfil] = useState(false);
  const [showCrearProducto, setShowCrearProducto] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
  const [showAllPublicaciones, setShowAllPublicaciones] = useState(false);
  const [visiblePostsCount, setVisiblePostsCount] = useState(4);
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const categoriesScrollRef = useRef<HTMLDivElement>(null);

  const handleCategoriesScroll = () => {
    if (categoriesScrollRef.current) {
      const scrollLeft = categoriesScrollRef.current.scrollLeft;
      setShowLeftArrow(scrollLeft > 0);
    }
  };

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoriesScrollRef.current) {
      const scrollAmount = 300;
      categoriesScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSearch = () => {
    console.log("Buscando promociones:", searchQuery);
  };

  const handleCategoryClick = (categoryId: string) => {
    // Si la categoría ya está seleccionada, la deseleccionamos
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const handleBackToPromociones = () => {
    setSelectedCategory(null);
    setSelectedTimeFilter(null);
    setSelectedOfertaCategory(null);
    setShowSeleccionarPerfil(false);
    setShowCrearProducto(false);
  };

  const handleTimeFilterClick = (filter: string) => {
    // Si el filtro ya está seleccionado, lo deseleccionamos
    if (selectedTimeFilter === filter) {
      setSelectedTimeFilter(null);
    } else {
      setSelectedTimeFilter(filter);
    }
  };

  const handleOfertaCategoryClick = (category: string) => {
    // Si la categoría ya está seleccionada, la deseleccionamos
    if (selectedOfertaCategory === category) {
      setSelectedOfertaCategory(null);
    } else {
      setSelectedOfertaCategory(category);
    }
  };

  const handlePublicarClick = () => {
    setShowSeleccionarPerfil(true);
  };

  const handleSelectProfile = () => {
    setShowSeleccionarPerfil(false);
    setShowCrearProducto(true);
  };

  const handleCrearProductoSuccess = () => {
    setShowCrearProducto(false);
    // Volver a la pantalla principal
  };

  // Si estamos en la pantalla de crear producto
  if (showCrearProducto) {
    return (
      <CrearProductoScreen
        onBack={() => setShowCrearProducto(false)}
        onSuccess={handleCrearProductoSuccess}
      />
    );
  }

  // Si estamos en la pantalla de seleccionar perfil
  if (showSeleccionarPerfil) {
    return (
      <SeleccionarPerfilScreen
        onBack={() => setShowSeleccionarPerfil(false)}
        onSelectProfile={handleSelectProfile}
      />
    );
  }

  // Si hay un post seleccionado, mostrar detalle
  if (selectedPost) {
    return (
      <OfferDetailScreen
        onBack={() => {
          setSelectedPost(null);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
        offer={selectedPost}
      />
    );
  }

  // Si se clickeó "Ver más ofertas", mostrar todas las publicaciones con PromocionesPublicacionesScreen
  if (showAllPublicaciones) {
    return (
      <PromocionesPublicacionesScreen
        onBack={() => setShowAllPublicaciones(false)}
        categoryName="Todas las ofertas"
        selectedCity={selectedCity}
      />
    );
  }

  // Si hay una categoría seleccionada, mostrar pantalla de publicaciones
  if (selectedCategory) {
    const category = promocionesCategories.find(cat => cat.id === selectedCategory);
    return (
      <PromocionesPublicacionesScreen
        onBack={handleBackToPromociones}
        categoryName={category?.name || ""}
        selectedCity={selectedCity}
      />
    );
  }

  const filteredCategories = searchQuery
    ? promocionesCategories.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : promocionesCategories;

  // Filtrar publicaciones según la categoría seleccionada
  const filteredPublicaciones = (() => {
    if (selectedOfertaCategory && selectedOfertaCategory !== "Todas") {
      return featuredPublicaciones.filter(pub => pub.category === selectedOfertaCategory);
    }
    if (selectedTimeFilter) {
      // Aquí podrías filtrar por tiempo si tuvieras datos de fecha
      return featuredPublicaciones;
    }
    return featuredPublicaciones;
  })();

  return (
    <div className="space-y-6 pt-6 px-4">
      {/* Title and Search Bar */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Promociones
          </h1>
          <p className="text-sm text-gray-600">Descubre ofertas increíbles cerca de ti</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar promociones..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="w-96 pl-10 pr-3 py-2 text-sm rounded-full border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* NUEVO ORDEN: Filtros arriba */}
        <div className="space-y-4">
          {/* Time Filters - EN BLANCO, MINÚSCULAS Y A LA IZQUIERDA CON LÍNEAS + BOTÓN PUBLICAR */}
          <div className="border-t border-b border-gray-200 py-2">
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-2 flex-wrap">
                {[
                  { id: "hoy", label: "Hoy" },
                  { id: "esta-semana", label: "Esta semana" },
                  { id: "este-fin-de-semana", label: "Este fin de semana" },
                  { id: "proxima-semana", label: "Próxima semana" },
                  { id: "este-mes", label: "Este mes" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleTimeFilterClick(filter.id)}
                    className={`px-3 py-1.5 font-medium rounded-lg whitespace-nowrap transition-all shadow-sm text-sm border flex items-center gap-1.5 ${
                      selectedTimeFilter === filter.id 
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500'
                    }`}
                  >
                    {filter.label}
                    {selectedTimeFilter === filter.id && (
                      <X className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Botón Publicar - más pequeño y a la derecha */}
              <Button 
                onClick={handlePublicarClick}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow-sm text-sm transition-all whitespace-nowrap"
              >
                Publica tus ofertas
              </Button>
            </div>
          </div>

          {/* All Categories with Arrows - CON FLECHITAS Y LÍNEAS */}
          <div className="border-t border-b border-gray-200 py-2">
            <div className="relative flex items-center gap-3">
              {/* Texto "Categorías:" */}
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Categorías:</span>
              
              {/* Botón izquierdo solo visible si hay scroll */}
              {showLeftArrow && (
                <button
                  onClick={() => scrollCategories('left')}
                  className="bg-white hover:bg-gray-100 text-gray-700 rounded-full p-1.5 shadow-md border border-gray-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
              
              <div 
                className="overflow-x-auto pb-2 scrollbar-hide flex-1" 
                ref={categoriesScrollRef} 
                onScroll={handleCategoriesScroll}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-2 min-w-max">
                  {/* Botón "Todas" */}
                  <button
                    onClick={() => {
                      if (selectedOfertaCategory === "Todas") {
                        setSelectedOfertaCategory(null);
                      } else {
                        handleOfertaCategoryClick("Todas");
                      }
                    }}
                    className={`px-3 py-1.5 font-medium rounded-lg whitespace-nowrap transition-all shadow-sm text-sm border flex items-center gap-1.5 ${
                      selectedOfertaCategory === "Todas"
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500'
                    }`}
                  >
                    Todas
                    {selectedOfertaCategory === "Todas" && (
                      <X className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>
                  
                  {allOfertasCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        if (selectedOfertaCategory === category) {
                          setSelectedOfertaCategory(null);
                        } else {
                          handleOfertaCategoryClick(category);
                        }
                      }}
                      className={`px-3 py-1.5 font-medium rounded-lg whitespace-nowrap transition-all shadow-sm text-sm border flex items-center gap-1.5 ${
                        selectedOfertaCategory === category
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700' 
                          : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500'
                      }`}
                    >
                      {category}
                      {selectedOfertaCategory === category && (
                        <X className="w-3.5 h-3.5 text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollCategories('right')}
                className="bg-white hover:bg-gray-100 text-gray-700 rounded-full p-1.5 shadow-md border border-gray-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Show filtered publicaciones if a category or time filter is selected */}
        {(selectedOfertaCategory || selectedTimeFilter) ? (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-700">
                {selectedTimeFilter === "hoy" && "Promociones de hoy"}
                {selectedTimeFilter === "esta-semana" && "Promociones de esta semana"}
                {selectedTimeFilter === "este-fin-de-semana" && "Promociones de este fin de semana"}
                {selectedTimeFilter === "proxima-semana" && "Promociones de la próxima semana"}
                {selectedTimeFilter === "este-mes" && "Promociones de este mes"}
                {selectedOfertaCategory && !selectedTimeFilter && `Promociones: ${selectedOfertaCategory}`}
              </h2>
            </div>
            {filteredPublicaciones.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500 font-semibold">No existen datos para mostrar</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredPublicaciones.map((post) => (
                  <Card
                    key={post.id}
                    onClick={() => {
                      setSelectedPost(post);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="rounded-xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
                  >
                    {/* Business Header */}
                    <div className="p-2 flex items-center justify-between border-b border-gray-100">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        <img
                          src={post.image}
                          alt={post.business}
                          className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-xs truncate">{post.business}</h3>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-gray-500 flex-shrink-0" />
                            <span className="text-xs text-gray-600 truncate">{post.city}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-32 bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.business}
                        className="w-full h-full object-cover"
                      />
                      {post.discount && (
                        <div className="absolute top-1.5 right-1.5 bg-red-600 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
                          {post.discount}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-2.5">
                      {/* Category Badge */}
                      <div className="mb-1.5">
                        <span className="inline-block bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-700 mb-2 line-clamp-2 min-h-[2rem]">
                        {post.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-3 h-3 fill-orange-400 text-orange-400 flex-shrink-0" />
                        <span className="text-xs font-semibold text-gray-900">{post.rating}</span>
                        <span className="text-xs text-gray-500">({post.reviews})</span>
                      </div>

                      {/* Price and Ver más Button */}
                      {post.price && (
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 flex-1 min-w-0">
                            <span className="text-sm font-bold text-orange-600 truncate">{post.price}</span>
                            {post.originalPrice && (
                              <span className="text-xs text-gray-400 line-through truncate">{post.originalPrice}</span>
                            )}
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPost(post);
                              window.scrollTo({ top: 0, behavior: 'instant' });
                            }}
                            className="px-2.5 py-1 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
                          >
                            Ver más
                          </button>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Categories Grid - Solo se muestra cuando NO hay filtro activo */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6">
              {filteredCategories.map((category) => {
                const IconComponent = category.icon;
                const isSelected = selectedCategory === category.id;
                return (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="flex flex-col items-center gap-3 cursor-pointer group relative"
                  >
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${isSelected ? 'bg-gradient-to-br from-orange-500 to-red-600' : category.bgColor} border-4 ${isSelected ? 'border-orange-300' : 'border-white'} shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                      <div className={`bg-gradient-to-br ${isSelected ? 'from-orange-600 to-red-700' : category.color} rounded-full p-4 sm:p-5`}>
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>
                    {/* X button cuando está seleccionada */}
                    {isSelected && (
                      <div className="absolute top-0 right-0 sm:top-1 sm:right-1 bg-white rounded-full p-1 shadow-md border-2 border-orange-500">
                        <X className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                      </div>
                    )}
                    <p className={`text-xs sm:text-sm font-semibold text-center leading-tight max-w-[100px] ${isSelected ? 'text-orange-600' : 'text-gray-900'}`}>
                      {category.name}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* No results message */}
            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">
                  No se encontraron categorías con ese nombre
                </p>
              </div>
            )}

            {/* Featured Publicaciones Section - Solo se muestra cuando NO hay filtro activo */}
            {filteredCategories.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Ofertas destacadas</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredPublicaciones.slice(0, visiblePostsCount).map((post) => (
                    <Card
                      key={post.id}
                      onClick={() => {
                        setSelectedPost(post);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="rounded-xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
                    >
                      {/* Business Header */}
                      <div className="p-2 flex items-center justify-between border-b border-gray-100">
                        <div className="flex items-center gap-1.5 min-w-0 flex-1">
                          <img
                            src={post.image}
                            alt={post.business}
                            className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-xs truncate">{post.business}</h3>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-2.5 h-2.5 text-gray-500 flex-shrink-0" />
                              <span className="text-xs text-gray-600 truncate">{post.city}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative h-32 bg-gray-100">
                        <img
                          src={post.image}
                          alt={post.business}
                          className="w-full h-full object-cover"
                        />
                        {post.discount && (
                          <div className="absolute top-1.5 right-1.5 bg-red-600 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
                            {post.discount}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-2.5">
                        {/* Category Badge */}
                        <div className="mb-1.5">
                          <span className="inline-block bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-700 mb-2 line-clamp-2 min-h-[2rem]">
                          {post.description}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-3 h-3 fill-orange-400 text-orange-400 flex-shrink-0" />
                          <span className="text-xs font-semibold text-gray-900">{post.rating}</span>
                          <span className="text-xs text-gray-500">({post.reviews})</span>
                        </div>

                        {/* Price and Ver más Button */}
                        {post.price && (
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 flex-1 min-w-0">
                              <span className="text-sm font-bold text-orange-600 truncate">{post.price}</span>
                              {post.originalPrice && (
                                <span className="text-xs text-gray-400 line-through truncate">{post.originalPrice}</span>
                              )}
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPost(post);
                                window.scrollTo({ top: 0, behavior: 'instant' });
                              }}
                              className="px-2.5 py-1 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
                            >
                              Ver más
                            </button>
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Ver más button */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setShowAllPublicaciones(true)}
                    className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}