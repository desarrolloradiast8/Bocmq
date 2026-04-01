import { ArrowLeft, Star, MapPin, Heart, Share2, Bookmark, Phone, Globe, Clock, Percent } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { useFavorites } from "@/app/components/homepage/FavoritesContext";

interface PostDetailScreenProps {
  postId: number;
  onBack: () => void;
  onViewBusiness: (businessId: number) => void;
  promotionalText?: string;
  isOwnBusiness?: boolean;
}

// Mock data - en producción vendría de una API
const getPostDetails = (id: number) => {
  const posts: Record<number, any> = {
    1: {
      id: 1,
      business: "Restaurante El Sabor Paceño",
      businessId: 1,
      category: "Restaurantes",
      city: "La Paz",
      address: "Calle Comercio #123, Zona Central",
      image: "https://images.unsplash.com/photo-1723672885092-d31ebd5a94b9?w=1080",
      description: "Disfruta de la mejor comida tradicional boliviana. Platos del día con descuento especial. Ofrecemos desayunos, almuerzos y cenas con los mejores ingredientes de la región.",
      rating: 4.8,
      reviews: 234,
      price: "Bs 35-80",
      phone: "+591 2 1234567",
      website: "www.elsaborpaceno.com",
      hours: "Lun-Dom: 7:00 AM - 10:00 PM",
      coordinates: { lat: -16.5000, lng: -68.1193 },
    },
    2: {
      id: 2,
      business: "La Casona Restaurante",
      businessId: 2,
      category: "Restaurantes",
      city: "Santa Cruz",
      address: "Av. San Martín #456, Equipetrol",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1080",
      description: "Cocina internacional y local. Menú ejecutivo de lunes a viernes. Ambiente elegante para reuniones de negocios y cenas familiares. Reserva tu mesa ahora.",
      rating: 4.9,
      reviews: 456,
      price: "Bs 50-120",
      phone: "+591 3 3456789",
      website: "www.lacasonarestaurante.com",
      hours: "Lun-Sab: 12:00 PM - 11:00 PM",
      coordinates: { lat: -17.7833, lng: -63.1821 },
    },
    4: {
      id: 4,
      business: "Boutique Moda & Estilo",
      businessId: 4,
      category: "Moda",
      city: "Cochabamba",
      address: "Av. Heroínas #234, Centro",
      image: "https://images.unsplash.com/photo-1761370571873-5d869310d731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBib3V0aXF1ZXxlbnwxfHx8fDE3Njg5MTU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Las últimas tendencias en moda. Ropa para toda ocasión. ¡Nuevas colecciones cada semana!",
      rating: 4.7,
      reviews: 189,
      price: "Bs 150-400",
      phone: "+591 4 4567890",
      website: "www.boutiquemoda.bo",
      hours: "Lun-Sab: 10:00 AM - 8:00 PM, Dom: 10:00 AM - 6:00 PM",
      coordinates: { lat: -17.3935, lng: -66.1570 },
      promotion: "¡2x1 en toda la colección de verano! Válido hasta fin de mes",
    },
    5: {
      id: 5,
      business: "Café Vida",
      businessId: 5,
      category: "Cafeterías",
      city: "La Paz",
      address: "Calle 21 de Calacoto #789, Zona Sur",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1080",
      description: "El mejor café de especialidad. Ambiente tranquilo ideal para trabajar o estudiar. WiFi gratis. Variedad de pastelería artesanal y snacks saludables.",
      rating: 4.8,
      reviews: 189,
      price: "Bs 15-45",
      phone: "+591 2 2789012",
      website: "www.cafevida.bo",
      hours: "Lun-Vie: 7:00 AM - 9:00 PM, Sab-Dom: 8:00 AM - 8:00 PM",
      coordinates: { lat: -16.5255, lng: -68.0730 },
    },
    10: {
      id: 10,
      business: "Tech Store Bolivia",
      businessId: 10,
      category: "Tecnología",
      city: "Santa Cruz",
      address: "Centro Comercial Las Brisas, Piso 2",
      image: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?w=1080",
      description: "Lo último en tecnología. Laptops, PCs de escritorio y accesorios. Financiamiento disponible. Servicio técnico especializado y garantía oficial.",
      rating: 4.9,
      reviews: 456,
      price: "Bs 1,500 - 15,000",
      phone: "+591 3 3567890",
      website: "www.techstorebo.com",
      hours: "Lun-Sab: 9:00 AM - 8:00 PM, Dom: 10:00 AM - 6:00 PM",
      coordinates: { lat: -17.7892, lng: -63.1975 },
    },
    13: {
      id: 13,
      business: "Mobile Store",
      businessId: 13,
      category: "Celulares",
      city: "Santa Cruz",
      address: "Av. Banzer #234, 3er Anillo",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1080",
      description: "Smartphones de última generación. Garantía oficial de todas las marcas. Planes de financiamiento sin intereses. Accesorios originales.",
      rating: 4.9,
      reviews: 387,
      price: "Bs 800 - 12,000",
      phone: "+591 3 3678901",
      website: "www.mobilestore.bo",
      hours: "Lun-Sab: 9:00 AM - 9:00 PM, Dom: 10:00 AM - 7:00 PM",
      coordinates: { lat: -17.7965, lng: -63.1711 },
    },
    20: {
      id: 20,
      business: "Style Hair Salon",
      businessId: 20,
      category: "Peluquerías",
      city: "La Paz",
      address: "Calle Murillo #567, Centro",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1080",
      description: "Cortes modernos y tratamientos capilares. Estilistas profesionales con años de experiencia. Colorimetría avanzada y productos de alta calidad.",
      rating: 4.9,
      reviews: 298,
      price: "Bs 30 - 250",
      phone: "+591 2 2890123",
      website: "www.stylehair.bo",
      hours: "Lun-Sab: 9:00 AM - 7:00 PM",
      coordinates: { lat: -16.4955, lng: -68.1336 },
    },
    23: {
      id: 23,
      business: "Spa Relax",
      businessId: 23,
      category: "Spas",
      city: "La Paz",
      address: "Av. Arce #890, San Jorge",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1080",
      description: "El mejor spa de La Paz. Masajes terapéuticos, tratamientos faciales y relajación total. Personal certificado. Reserva tu cita ahora.",
      rating: 5.0,
      reviews: 412,
      price: "Bs 80 - 350",
      phone: "+591 2 2901234",
      website: "www.sparelax.bo",
      hours: "Lun-Dom: 10:00 AM - 8:00 PM",
      coordinates: { lat: -16.5007, lng: -68.1244 },
    },
  };

  return posts[id] || {
    id,
    business: "Negocio Local",
    businessId: 1,
    category: "General",
    city: "La Paz",
    address: "Dirección disponible próximamente",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1080",
    description: "Servicio de calidad. Atención personalizada y precios competitivos.",
    rating: 4.7,
    reviews: 156,
    price: "Bs 20-100",
    phone: "+591 2 1234567",
    website: "www.negociolocal.com",
    hours: "Lun-Vie: 9:00 AM - 6:00 PM",
    coordinates: { lat: -16.5000, lng: -68.1193 },
  };
};

const mockReviews = [
  { id: 1, user: "Juan Pérez", rating: 5, comment: "Excelente comida y atención. ¡Muy recomendado!", date: "Hace 2 días" },
  { id: 2, user: "María López", rating: 5, comment: "Los mejores platos tradicionales de La Paz. El ambiente es acogedor.", date: "Hace 1 semana" },
  { id: 3, user: "Carlos Mamani", rating: 4, comment: "Buena comida, precios justos. A veces hay mucha gente.", date: "Hace 2 semanas" },
  { id: 4, user: "Ana Quispe", rating: 5, comment: "Me encanta este lugar! La sopa de maní es deliciosa.", date: "Hace 3 semanas" },
];

const mockRecommendations = [
  { id: 10, name: "Restaurante La Casona", rating: 4.7, category: "Restaurantes", city: "La Paz" },
  { id: 11, name: "Sabor Andino", rating: 4.6, category: "Restaurantes", city: "La Paz" },
  { id: 12, name: "Comida Típica Boliviana", rating: 4.9, category: "Restaurantes", city: "La Paz" },
];

// Mock business recommendations (reseñas de clientes del negocio)
const mockBusinessRecommendations = [
  {
    id: 1,
    authorName: "María Fernanda López",
    authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
    rating: 5,
    title: "Excelente lugar para comer",
    description: "La comida es deliciosa y el servicio es excepcional. Siempre vuelvo cuando estoy en la zona. Los platos del día son muy buenos y los precios son justos.",
    visitDate: "15 de Enero, 2025",
  },
  {
    id: 2,
    authorName: "Carlos Mendoza",
    authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
    rating: 5,
    title: "Muy recomendable",
    description: "El ambiente es muy acogedor y la comida tradicional está preparada con mucho cuidado. Es mi restaurante favorito de la zona.",
    visitDate: "10 de Enero, 2025",
  },
  {
    id: 3,
    authorName: "Roberto Paz",
    authorPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
    rating: 4,
    title: "Buena experiencia",
    description: "Comida sabrosa y porciones generosas. El único detalle es que a veces hay que esperar un poco para conseguir mesa.",
    visitDate: "8 de Enero, 2025",
  },
  {
    id: 4,
    authorName: "Lucía Fernández",
    authorPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
    rating: 5,
    title: "Perfecto para la familia",
    description: "Un lugar perfecto para venir con la familia. La atención es muy buena y los niños también tienen opciones en el menú.",
    visitDate: "5 de Enero, 2025",
  },
  {
    id: 5,
    authorName: "Diego Vargas",
    authorPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
    rating: 5,
    title: "Auténtica comida boliviana",
    description: "Si buscas comida tradicional boliviana auténtica, este es el lugar. Todo está preparado como en casa.",
    visitDate: "2 de Enero, 2025",
  },
];

export function PostDetailScreen({ postId, onBack, onViewBusiness, promotionalText, isOwnBusiness }: PostDetailScreenProps) {
  const post = getPostDetails(postId);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

  const displayedReviews = showAllReviews ? mockReviews : mockReviews.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Top Bar with Back and Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFavorite(post.id)}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <Bookmark
              className={`w-6 h-6 ${
                isFavorite(post.id)
                  ? "fill-orange-600 text-orange-600"
                  : "text-gray-700"
              }`}
            />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Share2 className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Main Image */}
      <Card className="overflow-hidden rounded-3xl">
          <div className="h-80 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
            <img src={post.image} alt={post.business} className="w-full h-full object-cover" />
          </div>
        </Card>

        {/* Business Info */}
        <Card className="p-6 rounded-3xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.business}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-lg font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {post.city}
                </div>
              </div>
            </div>
            <Button
              onClick={() => onViewBusiness(post.businessId)}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-2xl"
            >
              Ver Perfil
            </Button>
          </div>

          {/* Promotional Card - Always visible for all posts */}
          <div className="mb-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="relative w-14 h-14 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-sm opacity-30"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Percent className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 font-semibold mb-1 line-clamp-2">
                    {isOwnBusiness ? (promotionalText || "¡Configura tu primera promoción!") : (post.promotion || "¡Configura tu primera promoción!")}
                  </p>
                  <p className="text-xs text-orange-600 font-bold">
                    Accede al descuento o promoción vigente
                  </p>
                </div>

                {/* Button */}
                <button 
                  onClick={() => alert('Formulario de descuento')}
                  className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg flex-shrink-0"
                >
                  Descuento
                </button>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(post.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">{post.rating}</span>
            <span className="text-gray-600">({post.reviews} opiniones)</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">{post.description}</p>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
              <Phone className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-sm text-gray-600">Teléfono</div>
                <div className="font-semibold text-gray-900">{post.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
              <Globe className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-sm text-gray-600">Sitio web</div>
                <div className="font-semibold text-gray-900">{post.website}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
              <Clock className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-sm text-gray-600">Horario</div>
                <div className="font-semibold text-gray-900">{post.hours}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
              <MapPin className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-sm text-gray-600">Dirección</div>
                <div className="font-semibold text-gray-900 text-sm">{post.address}</div>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="text-center py-4 bg-orange-50 rounded-2xl">
            <div className="text-sm text-gray-600 mb-1">Rango de precios</div>
            <div className="text-2xl font-bold text-orange-600">{post.price}</div>
          </div>
        </Card>

        {/* Tabs Section - From Store Profile */}
        <Card className="p-0 rounded-3xl overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex gap-6 overflow-x-auto px-6 pt-4 scrollbar-hide">
              <button className="pb-3 text-sm font-semibold text-orange-600 border-b-2 border-orange-600 whitespace-nowrap">
                Información
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 space-y-6">
            {/* Horarios de atención */}
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Horarios de atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Lunes - Viernes</span>
                  <span className="text-sm font-medium text-gray-900">{post.hours}</span>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Servicios</h3>
              <p className="text-gray-700 text-sm">Servicio a domicilio disponible</p>
            </div>
          </div>
        </Card>

        {/* Google Maps */}
        <Card className="p-6 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ubicación</h2>
          <p className="text-gray-600 mb-4">{post.address}</p>
          <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3844438090887!2d${post.coordinates.lng}!3d${post.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzAwLjAiUyA2OMKwMDcnMDkuNSJX!5e0!3m2!1sen!2sbo!4v1234567890123!5m2!1sen!2sbo`}
              allowFullScreen
            />
          </div>
        </Card>

        {/* Reviews */}
        <Card className="p-6 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Opiniones ({post.reviews})</h2>
          <div className="space-y-4">
            {displayedReviews.map((review) => (
              <div key={review.id} className="p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.user}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
          {!showAllReviews && mockReviews.length > 3 && (
            <Button
              onClick={() => setShowAllReviews(true)}
              variant="outline"
              className="w-full mt-4 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 py-3 rounded-2xl"
            >
              Ver todas las opiniones
            </Button>
          )}
        </Card>

        {/* Recommendations */}
        <Card className="p-6 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Negocios similares</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {mockRecommendations.map((rec) => (
              <div
                key={rec.id}
                className="p-4 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{rec.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  {rec.city}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900">{rec.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Business Recommendations */}
        <Card className="p-6 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recomendaciones de clientes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {mockBusinessRecommendations
              .slice(0, showAllRecommendations ? mockBusinessRecommendations.length : 2)
              .map((rec) => (
              <div
                key={rec.id}
                className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={rec.authorPhoto}
                    alt={rec.authorName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{rec.authorName}</div>
                    <div className="text-xs text-gray-500">escribió una recomendación</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < rec.rating
                          ? "bg-gradient-to-br from-orange-400 to-red-500"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">{rec.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{rec.description}</p>
                <p className="text-xs text-gray-500">Fecha de visita: {rec.visitDate}</p>
              </div>
            ))}
          </div>
          {mockBusinessRecommendations.length > 2 && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                className="text-orange-600 font-semibold hover:underline text-sm"
              >
                {showAllRecommendations ? "Ver menos" : "Ver más"}
              </button>
            </div>
          )}
        </Card>
    </div>
  );
}