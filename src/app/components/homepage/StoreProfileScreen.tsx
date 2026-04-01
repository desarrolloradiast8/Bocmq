import React, { useState, useMemo, useEffect } from "react";
import { ArrowLeft, Phone, MessageCircle, Heart, MapPin, Star, Clock, Play, Facebook, Instagram, Share2, ShoppingCart, Trash2, Plus, Minus, Briefcase, ChevronRight, Camera, Mail, Bookmark, BarChart3, Youtube, Linkedin, Globe, Download, Twitter, Tag, BookOpen, Menu, Percent } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { OrderReviewScreen } from "@/app/components/homepage/OrderReviewScreen";
import { OrderCheckoutScreen } from "@/app/components/homepage/OrderCheckoutScreen";
import { AllReviewsScreen } from "@/app/components/homepage/AllReviewsScreen";
import { OfferDetailScreen } from "@/app/components/homepage/OfferDetailScreen";
import { EditStoreModal } from "@/app/components/homepage/EditStoreModal";
import { CreateAnnouncementScreen } from "@/app/components/homepage/CreateAnnouncementScreen";
import { CreateEventScreen } from "@/app/components/homepage/CreateEventScreen";
import { CreateOfferScreen } from "@/app/components/homepage/CreateOfferScreen";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface Offer {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  title: string;
  description: string;
  visitDate: string;
  image?: string;
}

interface Event {
  id: string;
  title: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
  time: string;
  description: string;
  phone: string;
  email: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
}

interface Announcement {
  id: string;
  logo: string;
  businessName: string;
  location: string;
  rating: number;
  image: string;
  whatsapp: string;
}

interface StoreProfileScreenProps {
  businessId: number;
  onBack: () => void;
  onViewAllReviews?: (reviews: Review[]) => void;
  isOwnProfile?: boolean;
  promotionalText?: string;
}

export const StoreProfileScreen: React.FC<StoreProfileScreenProps> = ({ businessId, onBack, onViewAllReviews, isOwnProfile = false, promotionalText: promotionalTextProp = "" }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartItems, setCartItems] = useState<{product: Product, quantity: number}[]>([]);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showDiscountForm, setShowDiscountForm] = useState(false);
  const [showStoreCatalog, setShowStoreCatalog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showOrderReview, setShowOrderReview] = useState(false);
  const [showOrderCheckout, setShowOrderCheckout] = useState(false);
  const [activeTab, setActiveTab] = useState<"informacion" | "anuncios" | "eventos" | "ofertas" | "tienda">("informacion");
  const [showBusinessProposal, setShowBusinessProposal] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showEditStoreModal, setShowEditStoreModal] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showVisitTypeModal, setShowVisitTypeModal] = useState(false);
  const [showCreateAnnouncement, setShowCreateAnnouncement] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showCreateOffer, setShowCreateOffer] = useState(false);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);
  const [reviewFormData, setReviewFormData] = useState({
    rating: 0,
    visitMonth: "",
    visitType: "",
    title: "",
    description: "",
    hasImage: false
  });
  const [orderData, setOrderData] = useState({
    name: "",
    address: "",
    city: "",
    comment: "",
    deliveryType: "delivery" // "delivery" or "pickup"
  });
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [eventFavorites, setEventFavorites] = useState<Set<string>>(new Set());
  const [eventInterested, setEventInterested] = useState<Set<string>>(new Set());
  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const [showProviderModal, setShowProviderModal] = useState(false);
  const [announcementFavorites, setAnnouncementFavorites] = useState<Set<string>>(new Set());
  const [announcementSaved, setAnnouncementSaved] = useState<Set<string>>(new Set());
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [showStatistics, setShowStatistics] = useState(false);
  // Use promotional text from props
  const promotionalText = promotionalTextProp;

  // Scroll to top when opening statistics
  useEffect(() => {
    if (showStatistics) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [showStatistics]);

  // Generate store data based on businessId
  const store = useMemo(() => {
    const stores = {
      1: {
        id: "1",
        name: "Restaurante El Sabor Paceño",
        logo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400",
        coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        rating: 4.7,
        reviewCount: 234,
        categories: ["Restaurante", "Comida Típica"],
        website: "www.sabor-paceno.com",
        phone: "+59171234567",
        city: "La Paz",
        location: "Av. Mariscal Santa Cruz #1234, entre calles Colón y Ayacucho, Edificio Illimani - Piso 2",
        schedule: "Lun-Dom 11:00-23:00",
        weeklySchedule: {
          monday: { open: "08:00", close: "22:00", isOpen: true },
          tuesday: { open: "08:00", close: "22:00", isOpen: true },
          wednesday: { open: "08:00", close: "22:00", isOpen: true },
          thursday: { open: "08:00", close: "22:00", isOpen: true },
          friday: { open: "08:00", close: "23:00", isOpen: true },
          saturday: { open: "09:00", close: "23:00", isOpen: true },
          sunday: { open: "09:00", close: "21:00", isOpen: true }
        },
        delivery: "Delivery y Take Away",
        infoMessage: "Bienvenido a Restaurante El Sabor Paceño. Ofrecemos la mejor comida típica boliviana con recetas tradicionales transmitidas de generación en generación. Nuestro compromiso es brindarte una experiencia gastronómica única y auténtica.",
        socialMedia: {
          playStore: "https://play.google.com",
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          tiktok: "https://tiktok.com"
        },
        products: [
          {
            id: "p1",
            name: "Pique Macho",
            price: 65,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
            description: "Delicioso pique macho con carne de res, salchicha y papas fritas."
          },
          {
            id: "p2",
            name: "Sajta de Pollo",
            price: 45,
            image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
            description: "Tradicional sajta de pollo boliviana con papas y chuño."
          }
        ],
        offers: [
          {
            id: "o1",
            title: "Menú ejecutivo 2x1",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
            price: 45,
            originalPrice: 90,
            discount: "-50%",
            startDate: "28 Enero 2026",
            endDate: "31 Enero 2026",
            description: "Aprovecha nuestra promoción especial de menú ejecutivo 2x1. Incluye entrada, plato de fondo y bebida."
          },
          {
            id: "o2",
            title: "Pique Macho Familiar con descuento",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
            price: 85,
            originalPrice: 120,
            discount: "-29%",
            startDate: "28 Enero 2026",
            endDate: "5 Febrero 2026",
            description: "Porción familiar de pique macho con descuento especial. Ideal para compartir en familia."
          },
          {
            id: "o3",
            title: "Combo almuerzo económico",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
            price: 35,
            originalPrice: 55,
            discount: "-36%",
            startDate: "28 Enero 2026",
            endDate: "28 Febrero 2026",
            description: "Combo especial de almuerzo con sopa, segundo y refresco natural."
          },
          {
            id: "o4",
            title: "Sajta de Pollo + Refresco",
            image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
            price: 50,
            originalPrice: 65,
            discount: "-23%",
            startDate: "28 Enero 2026",
            endDate: "15 Febrero 2026",
            description: "Deliciosa sajta de pollo acompañada de refresco natural. Oferta por tiempo limitado."
          }
        ],
        reviews: [
          {
            id: "r1",
            userName: "María González",
            userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
            rating: 5,
            title: "Excelente comida y atención",
            description: "La comida es deliciosa, el ambiente muy acogedor y la atención es excepcional. Totalmente recomendado para probar la comida típica boliviana.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400"
          },
          {
            id: "r2",
            userName: "Carlos Pérez",
            userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            rating: 4,
            title: "Muy buen sabor",
            description: "Los platos tienen un sabor auténtico y las porciones son generosas. El lugar es limpio y ordenado.",
            visitDate: "Diciembre 2024"
          },
          {
            id: "r3",
            userName: "Ana López",
            userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
            rating: 5,
            title: "¡Increíble experiencia!",
            description: "Sin duda el mejor restaurante de comida típica en La Paz. El pique macho está para chuparse los dedos.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400"
          },
          {
            id: "r4",
            userName: "Roberto Mamani",
            userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
            rating: 5,
            title: "Sabor auténtico",
            description: "Me encanta este lugar. La sopa de maní y el silpancho son espectaculares. Siempre vuelvo cuando tengo antojo de comida casera.",
            visitDate: "Noviembre 2024"
          },
          {
            id: "r5",
            userName: "Patricia Ríos",
            userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
            rating: 4,
            title: "Muy recomendable",
            description: "El servicio es rápido y la comida muy rica. Los precios son justos por la calidad y cantidad que ofrecen.",
            visitDate: "Octubre 2024",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400"
          },
          {
            id: "r6",
            userName: "José Fernández",
            userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
            rating: 5,
            title: "El mejor pique macho",
            description: "He probado pique macho en muchos lugares, pero este es definitivamente el mejor. La carne está perfectamente cocida y la combinación de sabores es increíble.",
            visitDate: "Enero 2025"
          },
          {
            id: "r7",
            userName: "Daniela Castro",
            userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
            rating: 4,
            title: "Buena experiencia familiar",
            description: "Fuimos en familia y todos quedamos contentos. El ambiente es acogedor y perfecto para ir con niños.",
            visitDate: "Diciembre 2024",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"
          },
          {
            id: "r8",
            userName: "Miguel Torrez",
            userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
            rating: 5,
            title: "Comida casera de calidad",
            description: "Me recuerda a la comida de mi abuela. Todo fresco y preparado con mucho cariño. Los recomiendo al 100%.",
            visitDate: "Noviembre 2024"
          },
          {
            id: "r9",
            userName: "Silvia Vargas",
            userAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
            rating: 4,
            title: "Gran variedad de platos",
            description: "Tienen un menú extenso con muchas opciones típicas. El chicharrón es delicioso y las salteñas son de las mejores que he probado.",
            visitDate: "Octubre 2024",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
          },
          {
            id: "r10",
            userName: "Fernando Gutiérrez",
            userAvatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100",
            rating: 5,
            title: "Siempre vale la pena",
            description: "Es mi restaurante favorito en La Paz. La atención es impecable y la comida siempre está deliciosa. No cambien nunca!",
            visitDate: "Enero 2025"
          },
          {
            id: "r11",
            userName: "Laura Mendoza",
            userAvatar: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=100",
            rating: 5,
            title: "Ambiente acogedor",
            description: "Perfecto para compartir con amigos. La decoración es hermosa y la música ambiental crea un ambiente muy agradable.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400"
          },
          {
            id: "r12",
            userName: "Ricardo Morales",
            userAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100",
            rating: 4,
            title: "Buenos precios",
            description: "Relación calidad-precio excelente. Las porciones son muy generosas y todo está delicioso.",
            visitDate: "Diciembre 2024"
          },
          {
            id: "r13",
            userName: "Carla Ramírez",
            userAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
            rating: 5,
            title: "Tradición y sabor",
            description: "Se nota el amor con el que preparan cada plato. La sajta de pollo es espectacular, igual que la que hacía mi mamá.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400"
          },
          {
            id: "r14",
            userName: "Andrés Sánchez",
            userAvatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100",
            rating: 5,
            title: "¡Volveré sin duda!",
            description: "Primera vez que vengo y quedé encantado. El personal es muy atento y la comida está riquísima. Probé el fricasé y estaba increíble.",
            visitDate: "Enero 2025"
          },
          {
            id: "r15",
            userName: "Verónica Flores",
            userAvatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100",
            rating: 4,
            title: "Recomendado 100%",
            description: "Todo muy rico y bien presentado. El lugar está muy limpio y el servicio es rápido. Los postres también son deliciosos.",
            visitDate: "Diciembre 2024",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400"
          },
          {
            id: "r16",
            userName: "Luis Montaño",
            userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
            rating: 5,
            title: "Excelente para celebraciones",
            description: "Celebramos un cumpleaños familiar y nos trataron de maravilla. Tienen un salón privado muy cómodo y la comida fue abundante.",
            visitDate: "Noviembre 2024"
          },
          {
            id: "r17",
            userName: "Gabriela Ortiz",
            userAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100",
            rating: 5,
            title: "La mejor chaironada",
            description: "He probado chaironada en muchos lugares de La Paz, pero esta es sin duda la mejor. El punto de la papa y el sabor del caldo están perfectos.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400"
          },
          {
            id: "r18",
            userName: "Pablo Herrera",
            userAvatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100",
            rating: 4,
            title: "Muy buena opción",
            description: "Siempre que tengo visitas de fuera los traigo aquí para que prueben la verdadera comida paceña. Nunca decepciona.",
            visitDate: "Diciembre 2024"
          },
          {
            id: "r19",
            userName: "Mariana Silva",
            userAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100",
            rating: 5,
            title: "Exquisito sabor casero",
            description: "La mejor experiencia culinaria que he tenido. El sillpancho es espectacular y te sirven en platos grandes. Los jugos naturales son fresquísimos.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400"
          },
          {
            id: "r20",
            userName: "Eduardo Quiroga",
            userAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100",
            rating: 5,
            title: "Atención de primera",
            description: "El personal es súper amable y atento. Te explican cada plato con detalle y te recomiendan según tus gustos. La comida llega caliente y bien presentada.",
            visitDate: "Enero 2025"
          },
          {
            id: "r21",
            userName: "Sofía Bellido",
            userAvatar: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=100",
            rating: 4,
            title: "Lugar familiar",
            description: "Ideal para ir en familia. Tienen sillas para bebés y el menú tiene opciones para todos. La atención a los niños es muy buena.",
            visitDate: "Diciembre 2024",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400"
          },
          {
            id: "r22",
            userName: "Héctor Camacho",
            userAvatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100",
            rating: 5,
            title: "Variedad impresionante",
            description: "Tienen un menú súper variado. Probé el plato paceño y estaba delicioso. Las porciones son abundantes y los precios muy accesibles.",
            visitDate: "Noviembre 2024"
          },
          {
            id: "r23",
            userName: "Daniela Rojas",
            userAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100",
            rating: 5,
            title: "Mi lugar favorito",
            description: "Vengo cada semana sin falta. La calidad nunca baja y el sabor siempre es consistente. El personal ya me conoce y eso hace la experiencia aún mejor.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400"
          },
          {
            id: "r24",
            userName: "Marcelo Vega",
            userAvatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100",
            rating: 4,
            title: "Buena ubicación",
            description: "Muy bien ubicado en pleno centro. Fácil de llegar y hay parqueo cerca. El lugar es amplio y cómodo. Recomiendo el ají de lengua.",
            visitDate: "Diciembre 2024"
          },
          {
            id: "r25",
            userName: "Valentina Cruz",
            userAvatar: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=100",
            rating: 5,
            title: "Postres deliciosos",
            description: "No solo la comida principal es buena, los postres también son increíbles. El helado de canela y el budín de quinua son mis favoritos. Todo casero.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"
          },
          {
            id: "r26",
            userName: "Rodrigo Mendez",
            userAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100",
            rating: 5,
            title: "Precio justo",
            description: "Por la calidad y cantidad que te dan, los precios son más que justos. Puedes comer muy bien sin gastar mucho. Definitivamente vuelvo.",
            visitDate: "Noviembre 2024"
          },
          {
            id: "r27",
            userName: "Camila Quispe",
            userAvatar: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=100",
            rating: 4,
            title: "Comida reconfortante",
            description: "Cuando quiero comer algo que me recuerde a casa, vengo aquí. Los platos tienen ese toque casero que tanto extraño. La sopa de maní es divina.",
            visitDate: "Diciembre 2024",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400"
          },
          {
            id: "r28",
            userName: "Gonzalo Ramos",
            userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            rating: 5,
            title: "Higiene impecable",
            description: "Se nota que tienen mucho cuidado con la limpieza. La cocina está a la vista y todo se ve muy higiénico. Eso me da mucha confianza para seguir viniendo.",
            visitDate: "Enero 2025"
          },
          {
            id: "r29",
            userName: "Isabella Moreno",
            userAvatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100",
            rating: 5,
            title: "Atención rápida",
            description: "Aunque siempre está lleno, la atención es súper rápida. No he tenido que esperar mucho por mi comida en ninguna ocasión. Muy eficientes.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400"
          },
          {
            id: "r30",
            userName: "Álvaro Paredes",
            userAvatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100",
            rating: 4,
            title: "Gran descubrimiento",
            description: "Un amigo me recomendó este lugar y quedé fascinado. Ahora lo recomiendo a todos. El plato paceño es enorme y delicioso. Volveré pronto.",
            visitDate: "Diciembre 2024"
          }
        ]
      },
      4: {
        id: "4",
        name: "Boutique Moda & Estilo",
        logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400",
        coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
        rating: 4.7,
        reviewCount: 189,
        categories: ["Moda", "Ropa", "Accesorios"],
        website: "www.boutique-modaestilo.com",
        phone: "+59178901234",
        city: "Cochabamba",
        location: "Av. San Aurelio, Cuarto Anillo entre Av. Alemana y Av. Roca y Coronado, Local #45",
        schedule: "Lun-Sáb 9:00-20:00",
        weeklySchedule: {
          monday: { open: "09:00", close: "20:00", isOpen: true },
          tuesday: { open: "09:00", close: "20:00", isOpen: true },
          wednesday: { open: "09:00", close: "20:00", isOpen: true },
          thursday: { open: "09:00", close: "20:00", isOpen: true },
          friday: { open: "09:00", close: "20:00", isOpen: true },
          saturday: { open: "09:00", close: "20:00", isOpen: true },
          sunday: { open: "00:00", close: "00:00", isOpen: false }
        },
        delivery: "Delivery disponible",
        infoMessage: "En Boutique Moda & Estilo encontrarás las últimas tendencias en moda femenina. Nos especializamos en prendas elegantes y de alta calidad que resaltan tu estilo único. Ven y descubre nuestra exclusiva colección.",
        socialMedia: {
          playStore: "https://play.google.com",
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          tiktok: "https://tiktok.com"
        },
        products: [
          {
            id: "p1",
            name: "Vestido Elegante Floral",
            price: 450,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
            description: "Hermoso vestido con estampado floral, perfecto para cualquier ocasión especial. Material de alta calidad."
          },
          {
            id: "p2",
            name: "Blusa de Seda Premium",
            price: 320,
            image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400",
            description: "Blusa elegante de seda natural, diseño moderno y sofisticado."
          },
          {
            id: "p3",
            name: "Pantalón de Vestir",
            price: 380,
            image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400",
            description: "Pantalón de vestir de corte perfecto, ideal para el trabajo o eventos formales."
          },
          {
            id: "p4",
            name: "Chaqueta de Cuero",
            price: 890,
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            description: "Chaqueta de cuero genuino, estilo moderno y atemporal."
          },
          {
            id: "p5",
            name: "Falda Midi Elegante",
            price: 280,
            image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400",
            description: "Falda midi de corte A, perfecta para looks sofisticados."
          },
          {
            id: "p6",
            name: "Conjunto Deportivo",
            price: 420,
            image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
            description: "Conjunto deportivo de alta calidad, cómodo y con estilo."
          }
        ],
        offers: [
          {
            id: "o1",
            title: "Vestidos elegantes con descuento",
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
            price: 220,
            originalPrice: 400,
            discount: "-45%",
            startDate: "28 Enero 2026",
            endDate: "10 Febrero 2026",
            description: "Aprovecha nuestra gran liquidación de vestidos elegantes. Variedad de modelos y tallas."
          },
          {
            id: "o2",
            title: "Ropa de temporada 60% off",
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
            price: 120,
            originalPrice: 300,
            discount: "-60%",
            startDate: "28 Enero 2026",
            endDate: "28 Febrero 2026",
            description: "Descuentos increíbles en ropa de temporada. No te pierdas esta oportunidad única."
          },
          {
            id: "o3",
            title: "Chaquetas de cuero en oferta",
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            price: 600,
            originalPrice: 890,
            discount: "-33%",
            startDate: "28 Enero 2026",
            endDate: "15 Febrero 2026",
            description: "Chaquetas de cuero genuino con descuento especial. Estilo y calidad garantizada."
          },
          {
            id: "o4",
            title: "Blusas premium 2x1",
            image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400",
            price: 320,
            originalPrice: 640,
            discount: "-50%",
            startDate: "28 Enero 2026",
            endDate: "5 Febrero 2026",
            description: "Promoción especial 2x1 en blusas de seda premium. Lleva dos por el precio de una."
          },
          {
            id: "o5",
            title: "Calzado deportivo rebajado",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
            price: 350,
            originalPrice: 700,
            discount: "-50%",
            startDate: "28 Enero 2026",
            endDate: "20 Febrero 2026",
            description: "Calzado deportivo de marca con 50% de descuento. Stock limitado."
          }
        ],
        reviews: [
          {
            id: "r1",
            userName: "Lucía Morales",
            userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
            rating: 5,
            title: "Ropa de excelente calidad",
            description: "Me encanta esta boutique. La ropa es de muy buena calidad y los precios son justos. El servicio al cliente es excepcional.",
            visitDate: "Enero 2025",
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400"
          },
          {
            id: "r2",
            userName: "Patricia Silva",
            userAvatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100",
            rating: 4,
            title: "Muy buenas opciones",
            description: "Tienen una gran variedad de estilos y siempre encuentro algo que me gusta. Recomendado 100%.",
            visitDate: "Diciembre 2024"
          },
          {
            id: "r3",
            userName: "Sandra Vargas",
            userAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
            rating: 5,
            title: "Mi boutique favorita",
            description: "Es mi lugar preferido para comprar ropa. Siempre tienen las últimas tendencias y el personal es muy amable.",
            visitDate: "Enero 2025"
          }
        ]
      }
    };
    
    return stores[businessId as keyof typeof stores] || stores[1];
  }, [businessId]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filter products based on search
  const filteredProducts = store.products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sample events data
  const events: Event[] = [
    {
      id: "e1",
      title: "Feria Gastronómica Boliviana 2025",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
      startDate: "15 de Febrero 2025",
      endDate: "17 de Febrero 2025",
      location: "Plaza Murillo, La Paz",
      time: "10:00 - 20:00",
      description: "La feria gastronómica más grande de Bolivia con más de 100 expositores presentando lo mejor de nuestra cocina tradicional y contemporánea.",
      phone: "+59171234567",
      email: "info@feriagastronomica.com",
      whatsapp: "+59171234567",
      facebook: "https://facebook.com/feriagastronomica",
      instagram: "https://instagram.com/feriagastronomica"
    },
    {
      id: "e2",
      title: "Expo Moda & Estilo 2025",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600",
      startDate: "1 de Marzo 2025",
      endDate: "3 de Marzo 2025",
      location: "Centro de Convenciones, Santa Cruz",
      time: "14:00 - 22:00",
      description: "Evento dedicado a la moda boliviana e internacional con pasarelas, talleres y exposiciones de las últimas tendencias.",
      phone: "+59178912345",
      email: "contacto@expomoda.com",
      whatsapp: "+59178912345",
      facebook: "https://facebook.com/expomoda",
      instagram: "https://instagram.com/expomoda"
    },
    {
      id: "e3",
      title: "Festival de Emprendimiento Cochabamba",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      startDate: "20 de Marzo 2025",
      endDate: "22 de Marzo 2025",
      location: "Parque Lincoln, Cochabamba",
      time: "09:00 - 18:00",
      description: "Encuentro de emprendedores, inversores y mentores para impulsar nuevos negocios en Bolivia.",
      phone: "+59144567890",
      email: "hola@festivalemprendimiento.com",
      whatsapp: "+59144567890",
      facebook: "https://facebook.com/festivalemprendimiento",
      instagram: "https://instagram.com/festivalemprendimiento"
    },
    {
      id: "e4",
      title: "Expo Tecnología Digital Bolivia",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600",
      startDate: "10 de Abril 2025",
      endDate: "12 de Abril 2025",
      location: "Feria Exposición, La Paz",
      time: "10:00 - 19:00",
      description: "La exposición más importante de tecnología, innovación y transformación digital en Bolivia.",
      phone: "+59172345678",
      email: "info@expotecnologia.com",
      whatsapp: "+59172345678",
      facebook: "https://facebook.com/expotecnologia",
      instagram: "https://instagram.com/expotecnologia"
    }
  ];

  // Sample announcements data
  const announcements: Announcement[] = [
    {
      id: "a1",
      logo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=100",
      businessName: "Restaurante El Sabor Paceño",
      location: "Av. Mariscal Santa Cruz #1234, Centro",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      whatsapp: "+59171234567"
    },
    {
      id: "a2",
      logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100",
      businessName: "Boutique Moda y Estilo",
      location: "Av. Montenegro #3456, Zona Sur - Calacoto",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
      whatsapp: "+59178912345"
    },
    {
      id: "a3",
      logo: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100",
      businessName: "Café Aroma Boliviano",
      location: "Calle Pinilla #789, esq. Av. 20 de Octubre - Sopocachi",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600",
      whatsapp: "+59144567890"
    },
    {
      id: "a4",
      logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100",
      businessName: "TechStore Bolivia",
      location: "Av. Ballivián #567, Megacenter - Local 203, Calacoto",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      whatsapp: "+59172345678"
    }
  ];

  // Order Checkout Screen
  if (showOrderCheckout) {
    return (
      <OrderCheckoutScreen
        cartItems={cartItems}
        storePhone={store.phone}
        storeName={store.name}
        onBack={() => setShowOrderCheckout(false)}
      />
    );
  }

  // Create Announcement Screen
  if (showCreateAnnouncement) {
    return (
      <CreateAnnouncementScreen
        onBack={() => setShowCreateAnnouncement(false)}
        profileName={store.name}
        profilePhoto={store.logo}
        onPublish={(announcement) => {
          console.log("Anuncio publicado:", announcement);
          setShowCreateAnnouncement(false);
        }}
      />
    );
  }

  // Create Event Screen
  if (showCreateEvent) {
    return (
      <CreateEventScreen
        onBack={() => setShowCreateEvent(false)}
        profileName={store.name}
        profilePhoto={store.logo}
        onPublish={(event) => {
          console.log("Evento publicado:", event);
          setShowCreateEvent(false);
        }}
      />
    );
  }

  // Create Offer Screen
  if (showCreateOffer) {
    return (
      <CreateOfferScreen
        onBack={() => setShowCreateOffer(false)}
        profileName={store.name}
        profilePhoto={store.logo}
        onPublish={(offer) => {
          console.log("Oferta publicada:", offer);
          setShowCreateOffer(false);
        }}
      />
    );
  }

  // Statistics Screen
  if (showStatistics) {
    const AnimatedCounter = ({ target }: { target: number }) => {
      const [count, setCount] = useState(0);

      useEffect(() => {
        const duration = 1000; // 1 second
        const steps = 50;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }, [target]);

      return <p className="text-2xl font-bold text-gray-900">{count}</p>;
    };

    const StatRow = ({ icon: Icon, label, count }: { icon: any; label: string; count: number }) => (
      <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <Icon className="w-4 h-4 text-gray-600" />
          </div>
          <span className="text-sm text-gray-700">{label}</span>
        </div>
        <span className="font-semibold text-sm text-gray-900">{count}</span>
      </div>
    );

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
          <div className="px-3 py-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowStatistics(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-white" />
              </button>
              <h2 className="text-white font-bold text-sm">Estadísticas</h2>
            </div>
          </div>
        </div>

        <div className="px-3 py-2 space-y-2">
          {/* Intro Message */}
          <Card className="p-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50">
            <p className="text-center text-xs text-gray-900 font-medium">
              Conoce cómo interactúan tus clientes en tu perfil comercial
            </p>
          </Card>

          {/* Total Recommendations Card */}
          <Card className="p-3 rounded-xl">
            <div className="text-center space-y-0.5 pb-2 border-b border-gray-200">
              <AnimatedCounter target={12} />
              <p className="text-xs text-gray-600">Total recomendaciones</p>
              <p className="text-[10px] text-gray-500">Duración total</p>
            </div>
          </Card>

          {/* Highlighted Stats Title */}
          <div className="pt-0.5">
            <h3 className="text-sm font-bold text-gray-900">Estadísticas destacadas de tu perfil</h3>
          </div>

          {/* Profile Views */}
          <Card className="p-3 rounded-xl">
            <p className="text-xs text-gray-700 text-center">
              Tu perfil tuvo <span className="font-bold text-orange-600">120</span> visitas
            </p>
          </Card>

          {/* Interaction Statistics Card */}
          <Card className="p-3 rounded-xl">
            <div className="space-y-0.5">
              <StatRow icon={ShoppingCart} label="Clicks en comercio electrónico" count={45} />
              <StatRow icon={Youtube} label="Clicks en YouTube" count={32} />
              <StatRow icon={MessageCircle} label="Clicks en WhatsApp" count={78} />
              <StatRow icon={Mail} label="Clicks en correo electrónico" count={23} />
              <StatRow icon={Linkedin} label="Clicks en LinkedIn" count={15} />
              <StatRow icon={Globe} label="Clicks en página web" count={56} />
              <StatRow icon={Download} label="Clicks en descarga de aplicaciones" count={12} />
              <StatRow icon={Facebook} label="Clicks en Facebook" count={34} />
              <StatRow icon={Instagram} label="Clicks en Instagram" count={89} />
              <StatRow icon={Twitter} label="Clicks en Twitter" count={21} />
              <StatRow icon={Tag} label="Clicks en páginas de ofertas" count={67} />
              <StatRow icon={BookOpen} label="Clicks en catálogo" count={43} />
              <StatRow icon={Menu} label="Clicks en menú" count={38} />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Order Review Screen
  if (showOrderReview) {
    return (
      <OrderReviewScreen
        cartItems={cartItems}
        store={{
          logo: store.logo,
          name: store.name,
          categories: store.categories
        }}
        onBack={() => setShowOrderReview(false)}
        onContinue={() => {
          setShowOrderReview(false);
          setShowOrderCheckout(true);
        }}
        onUpdateQuantity={(productId, delta) => {
          setCartItems(prev => prev.map(item => 
            item.product.id === productId
              ? {...item, quantity: Math.max(1, item.quantity + delta)}
              : item
          ));
        }}
        onRemoveItem={(productId) => {
          setCartItems(prev => prev.filter(item => item.product.id !== productId));
          if (cartItems.length === 1) {
            setShowOrderReview(false);
          }
        }}
      />
    );
  }

  // Store Catalog View (Ver tienda)
  if (showStoreCatalog) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header with Back Button */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowStoreCatalog(false)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-800" />
              </button>
              <h2 className="text-gray-900 font-semibold text-sm">Catálogo de productos</h2>
            </div>
          </div>
        </div>

        {/* Search Bar - Small */}
        <div className="max-w-5xl mx-auto px-4 py-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Products List - Horizontal Layout */}
        <div className="max-w-5xl mx-auto px-4 pb-6">
          <div className="space-y-3 mb-20">
            {filteredProducts.slice(0, 2).map((product) => (
              <Card
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setShowStoreCatalog(false);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all border-2 border-gray-100 hover:border-orange-300"
              >
                <div className="flex gap-3 p-3">
                  {/* Product Image - Left Side */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0" 
                  />
                  
                  {/* Product Info - Right Side */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-sm mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2 mb-2">{product.description}</p>
                    </div>
                    <p className="text-red-600 font-bold text-base">Bs {product.price}</p>
                  </div>
                </div>
              </Card>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No se encontraron productos</p>
              </div>
            )}
          </div>

          {/* Floating Cart Button - View Order */}
          {totalCartItems > 0 && (
            <div className="fixed bottom-4 left-0 right-0 z-30">
              <div className="max-w-5xl mx-auto px-4 flex justify-center">
                <Button
                  onClick={() => {
                    setShowStoreCatalog(false);
                    setShowOrderReview(true);
                  }}
                  className="py-3 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-2xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Ver mi pedido ({totalCartItems} {totalCartItems === 1 ? 'producto' : 'productos'})
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Product detail view
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="sticky top-0 z-20 bg-transparent">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <button
              onClick={() => {
                setSelectedProduct(null);
                setShowStoreCatalog(true);
              }}
              className="p-2 bg-white/90 hover:bg-white rounded-xl transition-colors shadow-lg"
            >
              <ArrowLeft className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6">
          <Card className="rounded-3xl overflow-hidden">
            <div className="p-4">
              {/* Product Image and Basic Info - Horizontal Layout */}
              <div className="flex gap-4 mb-4">
                {/* Product Image - Left Side - LARGER */}
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-64 h-64 object-cover rounded-2xl flex-shrink-0" 
                />
                
                {/* Product Info - Right Side */}
                <div className="flex-1 min-w-0 flex flex-col">
                  <h2 className="font-bold text-xl mb-2">{selectedProduct.name}</h2>
                  <p className="text-red-600 font-bold text-2xl mb-3">Bs {selectedProduct.price}</p>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <h3 className="font-bold mb-2">Descripción</h3>
                    <p className="text-gray-700 text-sm">{selectedProduct.description}</p>
                  </div>
                  
                  {/* Call and WhatsApp Icons */}
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      onClick={() => setShowPhoneModal(true)}
                      className="p-2.5 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={() => {
                        const message = `Hola! Quiero hacer un pedido:\n\n${selectedProduct.name}\nPrecio: Bs ${selectedProduct.price}\n\nGracias!`;
                        window.open(`https://wa.me/${store.phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="p-2.5 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Action Buttons - Right Side of Image */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => {
                        handleAddToCart(selectedProduct, 1);
                        setSelectedProduct(null);
                        setShowOrderReview(true);
                      }}
                      className="py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-semibold text-sm"
                    >
                      Pedir ahora
                    </Button>

                    <Button
                      onClick={() => {
                        handleAddToCart(selectedProduct, 1);
                        setSelectedProduct(null);
                        setShowStoreCatalog(true);
                      }}
                      className="py-3 rounded-2xl bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-5 font-semibold text-sm"
                    >
                      Agregar ahora
                    </Button>
                  </div>
                </div>
              </div>

              {/* Store Info Section */}
              <div className="border-t pt-4 mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src={store.logo} 
                    alt={store.name} 
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm">{store.name}</h4>
                    <p className="text-xs text-gray-600 mb-1">{store.categories.join(", ")}</p>
                    <p className="text-xs font-semibold text-gray-800">Más productos de esta tienda</p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{store.schedule}</span>
                </div>

                {/* Delivery Service */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v5l4.28 2.54.72-1.21-3-1.78V7z"/>
                  </svg>
                  <span className="text-sm text-gray-700">Servicios a domicilio</span>
                </div>

                {/* Social Media - Black and White Icons Only */}
                <div className="flex items-center gap-4 mb-4">
                  <a href={store.socialMedia.playStore} target="_blank" rel="noopener noreferrer">
                    <Play className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                  </a>
                  <a href={store.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                  </a>
                  <a href={store.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-gray-600 hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>

                {/* Actions - Black and White Icons Only */}
                <div className="flex items-center gap-6 border-t pt-4">
                  <button className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span className="text-sm text-gray-700">Me interesa</span>
                  </button>
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="flex items-center gap-2"
                  >
                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-gray-600 text-gray-600' : 'text-gray-600'} hover:text-gray-800`} />
                    <span className="text-sm text-gray-700">Favoritos</span>
                  </button>
                  <button className="flex items-center gap-2">
                    <Share2 className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    <span className="text-sm text-gray-700">Compartir</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Main store catalog - COMPACT 2-COLUMN DESIGN
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Discount Form Modal */}
      {showDiscountForm && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 py-8"
          onClick={() => setShowDiscountForm(false)}
        >
          <div 
            className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm font-bold text-gray-900 text-center mb-2">
              Llena el siguiente formulario para obtener descuentos o promociones
            </h3>
            <p className="text-orange-500 font-semibold text-sm text-center mb-4">
              {promotionalText || "Compra 2 y paga únicamente por el de mayor precio"}
            </p>
            
            <form className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Nombre y Apellido</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: +591 77022585"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Ciudad</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Cochabamba"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: juan@ejemplo.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button
                  type="button"
                  onClick={() => {
                    // Here you would normally send the form data
                    alert('Formulario enviado! Pronto recibirás tus descuentos.');
                    setShowDiscountForm(false);
                  }}
                  className="py-2.5 text-sm rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-semibold"
                >
                  Enviar
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowDiscountForm(false)}
                  className="py-2.5 text-sm rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Phone Modal */}
      {showPhoneModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPhoneModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-4 max-w-xs w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-center mb-4">Información de contacto</h3>
            
            <div className="space-y-3">
              {/* Phone Section */}
              <div>
                <p className="text-xs text-gray-600 mb-1">Llamar:</p>
                <a 
                  href={`tel:77022585`}
                  className="text-base font-bold text-orange-600 hover:text-orange-700 block"
                >
                  77022585
                </a>
              </div>

              {/* Email Section */}
              <div>
                <p className="text-xs text-gray-600 mb-1">Correo:</p>
                <a 
                  href={`mailto:boutique@gmail.com`}
                  className="text-sm font-bold text-orange-600 hover:text-orange-700 block break-all"
                >
                  boutique@gmail.com
                </a>
              </div>
            </div>
            
            <Button
              onClick={() => setShowPhoneModal(false)}
              className="w-full mt-4 py-2 text-sm rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold"
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}

      {/* Store Cover Banner */}
      <div className="relative w-full h-40 sm:h-48 md:h-56">
        <img 
          src={store.coverImage} 
          alt={store.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Back button overlay */}
        <button
          onClick={onBack}
          className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2 bg-white/90 hover:bg-white rounded-xl transition-colors shadow-lg z-10"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
        </button>
        
        {/* Cart and Share buttons overlay */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2 z-10">
          {/* Cart button */}
          <button
            onClick={() => {
              if (totalCartItems > 0) {
                setShowOrderReview(true);
              }
            }}
            className="p-2 bg-black/40 hover:bg-black/60 rounded-xl transition-colors shadow-lg relative"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Share button */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: store.name,
                  text: `Mira este negocio: ${store.name}`,
                  url: window.location.href,
                });
              } else {
                alert('Compartir no está disponible en este navegador');
              }
            }}
            className="p-2 bg-black/40 hover:bg-black/60 rounded-xl transition-colors shadow-lg"
          >
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Store Header - Compact with overlap */}
      <div className="-mt-16 sm:-mt-20 relative z-10 pt-10 sm:pt-12 px-3 sm:px-4">
        <Card className={`shadow-xl ${isOwnProfile ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img src={store.logo} alt={store.name} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover flex-shrink-0 border-4 border-white shadow-lg -mt-16 sm:-mt-20 mx-auto sm:mx-0" />
              
              <div className="flex-1 min-w-0 sm:-mt-8 w-full">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-center sm:text-left">{store.name}</h1>
                <p className="text-gray-600 text-sm sm:text-base mb-2 text-center sm:text-left">{store.categories.join(" • ")}</p>
                <div className="flex items-center gap-1 justify-center sm:justify-start">
                  {/* Render 5 stars */}
                  {[1, 2, 3, 4, 5].map((starIndex) => {
                    const filled = store.rating >= starIndex;
                    const partialFill = store.rating > starIndex - 1 && store.rating < starIndex;
                    const fillPercentage = partialFill ? ((store.rating - (starIndex - 1)) * 100) : 0;
                    
                    return (
                      <div key={starIndex} className="relative w-4 h-4 sm:w-5 sm:h-5">
                        {/* Background empty star */}
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 absolute top-0 left-0" />
                        {/* Filled star or partial fill */}
                        {filled ? (
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 absolute top-0 left-0" />
                        ) : partialFill ? (
                          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                  <span className="font-bold text-sm sm:text-base ml-1">{store.rating}</span>
                  <span className="text-gray-600 text-sm sm:text-base">({store.reviewCount})</span>
                </div>
                
                {/* Location, Hours and Schedule Button */}
                <div className="flex items-center gap-2 sm:gap-3 mt-2 flex-wrap justify-center sm:justify-start">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">{store.city}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-semibold text-green-600">Abierto</span>
                    <span className="text-xs sm:text-sm text-gray-700">
                      {(() => {
                        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                        const today = days[new Date().getDay()] as keyof typeof store.weeklySchedule;
                        const todaySchedule = store.weeklySchedule[today];
                        return todaySchedule.isOpen 
                          ? `de ${todaySchedule.open.replace(':', ':')} a ${todaySchedule.close.replace(':', ':')}`
                          : 'Cerrado';
                      })()}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const scheduleElement = document.getElementById('schedule-section');
                      scheduleElement?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Ver horario
                  </button>
                </div>

                {/* Business Description - Brief */}
                <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed text-center sm:text-left">
                  Las últimas tendencias en moda femenina. Prendas elegantes y de alta calidad que resaltan tu estilo único.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => window.open(`https://wa.me/${store.phone.replace(/\+/g, '')}`, '_blank')}
                  className="p-2 hover:bg-orange-50 rounded-full transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
                </button>
                
                <button
                  onClick={() => setShowPhoneModal(true)}
                  className="p-2 hover:bg-orange-50 rounded-full transition-colors group"
                >
                  <Phone className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
                </button>
                
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 hover:bg-orange-50 rounded-full transition-colors group"
                >
                  <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 group-hover:text-orange-600'}`} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            {isOwnProfile ? (
              <div className="mt-3 flex justify-center gap-2 px-4">
                <Button
                  type="button"
                  onClick={() => setShowEditStoreModal(true)}
                  className="py-2.5 px-5 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-orange-500 hover:border-orange-500 hover:text-white active:bg-orange-500 active:border-orange-500 font-medium text-sm shadow-sm"
                >
                  Editar tienda
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowStatistics(true)}
                  className="py-2.5 px-5 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-orange-500 hover:border-orange-500 hover:text-white active:bg-orange-500 active:border-orange-500 font-medium text-sm shadow-sm"
                >
                  Estadísticas
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowPublishModal(true)}
                  className="py-2.5 px-5 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-orange-500 hover:border-orange-500 hover:text-white active:bg-orange-500 active:border-orange-500 font-medium text-sm shadow-sm"
                >
                  Publicar
                </Button>
              </div>
            ) : (
              <div className="mt-3 flex flex-wrap justify-center gap-2 px-2">
                <Button
                  type="button"
                  onClick={() => setShowStoreCatalog(true)}
                  className="py-1.5 px-2.5 text-xs rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent font-medium flex-1 min-w-[80px] max-w-[110px] shadow-sm transition-all"
                >
                  Ver tienda
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    window.open(`https://wa.me/${store.phone.replace(/\+/g, '')}`, '_blank');
                  }}
                  className="py-1.5 px-2.5 text-xs rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent font-medium flex items-center justify-center gap-1 flex-1 min-w-[80px] max-w-[110px] shadow-sm transition-all"
                >
                  <MessageCircle className="w-3 h-3" />
                  Mensaje
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowPhoneModal(true)}
                  className="py-1.5 px-2.5 text-xs rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent font-medium flex-1 min-w-[80px] max-w-[110px] shadow-sm transition-all"
                >
                  Contacto
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowDiscountForm(true)}
                  className="py-1.5 px-2.5 text-xs rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent font-medium flex-1 min-w-[80px] max-w-[110px] shadow-sm transition-all"
                >
                  Descuentos
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Promotional Card - Always visible */}
      <div className="px-3 sm:px-4 mb-4">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-b-3xl p-4 border-x border-b border-gray-200">
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
                {isOwnProfile ? (promotionalText || "¡Configura tu primera promoción!") : "¡Configura tu primera promoción!"}
              </p>
              <p className="text-xs text-orange-600 font-bold">
                Accede al descuento o promoción vigente
              </p>
            </div>

            {/* Button */}
            <button 
              onClick={() => setShowDiscountForm(true)}
              className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg flex-shrink-0"
            >
              Descuento
            </button>
          </div>
        </div>
      </div>

      {/* Tabs / Filters - Horizontal Scroll */}
      <div className="mb-4 mt-4 px-3">
        <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-2 scrollbar-hide border-b border-gray-200">
          {["informacion", "anuncios", "eventos", "ofertas", "tienda"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-2 sm:pb-3 px-1 sm:px-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 border-b-2 ${
                activeTab === tab
                  ? "text-orange-600 border-orange-600"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="pb-6">
        {/* INFORMACIÓN TAB */}
        {activeTab === "informacion" && (
          <div className="space-y-4">
            {/* Tienda Section with 6 Products */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-base">Tienda</h3>
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </div>
              
              {/* Products Grid - 2 columns on mobile, 3 on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                {store.products.slice(0, 6).map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="cursor-pointer"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity" 
                    />
                  </div>
                ))}
              </div>

              {/* Ver todo link */}
              <button
                onClick={() => setActiveTab('tienda')}
                className="w-full py-2.5 text-orange-500 hover:text-orange-600 transition-colors text-sm font-semibold text-center"
              >
                Ver todo
              </button>
            </div>

            {/* Buttons in one line */}
            <div className="flex justify-center gap-3 px-8">
              <Button
                onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
                className="py-1.5 px-3 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent font-medium text-xs flex items-center justify-center gap-1 min-w-[110px] shadow-sm transition-all"
              >
                <Play className="w-3 h-3" />
                Play video
              </Button>
              <Button
                onClick={() => window.open("https://example.com/ofertas", "_blank")}
                className="py-1.5 px-3 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent font-medium text-xs whitespace-nowrap min-w-[110px] shadow-sm transition-all"
              >
                Ofertas y promociones
              </Button>
              <Button
                onClick={() => window.open("https://example.com/catalogo", "_blank")}
                className="py-1.5 px-3 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent font-medium text-xs min-w-[110px] shadow-sm transition-all"
              >
                Ver catálogo
              </Button>
            </div>

            {/* Horarios y Ubicación - Two columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4">
              {/* Left Column: Horarios de atención y Servicios a domicilio */}
              <div className="space-y-3">
                {/* Horarios de atención */}
                <Card id="schedule-section" className="rounded-2xl p-3">
                  <h3 className="font-bold mb-1.5 text-sm">Horarios de atención</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Lunes</span>
                      <span className="text-sm font-medium text-gray-900">
                        {store.weeklySchedule.monday.isOpen 
                          ? `${store.weeklySchedule.monday.open} - ${store.weeklySchedule.monday.close}`
                          : 'Cerrado'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Martes</span>
                      <span className="text-sm font-medium text-gray-900">
                        {store.weeklySchedule.tuesday.isOpen 
                          ? `${store.weeklySchedule.tuesday.open} - ${store.weeklySchedule.tuesday.close}`
                          : 'Cerrado'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Miércoles</span>
                      <span className="text-sm font-medium text-gray-900">
                        {store.weeklySchedule.wednesday.isOpen 
                          ? `${store.weeklySchedule.wednesday.open} - ${store.weeklySchedule.wednesday.close}`
                          : 'Cerrado'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Jueves</span>
                      <span className="text-sm font-medium text-gray-900">
                        {store.weeklySchedule.thursday.isOpen 
                          ? `${store.weeklySchedule.thursday.open} - ${store.weeklySchedule.thursday.close}`
                          : 'Cerrado'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Viernes</span>
                      <span className="text-sm font-medium text-gray-900">
                        {store.weeklySchedule.friday.isOpen 
                          ? `${store.weeklySchedule.friday.open} - ${store.weeklySchedule.friday.close}`
                          : 'Cerrado'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Sábado</span>
                      <span className="text-sm font-medium text-gray-900">
                        {store.weeklySchedule.saturday.isOpen 
                          ? `${store.weeklySchedule.saturday.open} - ${store.weeklySchedule.saturday.close}`
                          : 'Cerrado'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Domingo</span>
                      <span className="text-sm font-medium text-gray-900">
                        {store.weeklySchedule.sunday.isOpen 
                          ? `${store.weeklySchedule.sunday.open} - ${store.weeklySchedule.sunday.close}`
                          : 'Cerrado'}
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Servicios a domicilio */}
                <Card className="rounded-2xl p-3">
                  <h3 className="font-bold mb-1.5 text-sm">Servicios a domicilio</h3>
                  <p className="text-gray-700 text-sm">{store.delivery}</p>
                </Card>
              </div>

              {/* Right Column: Ubicación con Google Maps */}
              <Card className="rounded-2xl p-3">
                <h3 className="font-bold mb-1.5 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  Ubicación
                </h3>
                <div className="mb-2.5">
                  <p className="text-gray-900 font-medium text-sm">{store.location}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{store.city}, Bolivia</p>
                </div>
                {/* Google Maps Embed */}
                <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3674394349796!2d-68.13306372421816!3d-16.50027584140834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206e5bf0da7b%3A0x56891c85de7b3e9d!2sPlaza%20Murillo!5e0!3m2!1ses!2sbo!4v1706380000000!5m2!1ses!2sbo"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación del negocio"
                  />
                </div>
              </Card>
            </div>

            {/* Social Media Icons - Black & White */}
            <div className="flex items-center justify-center gap-6 py-2">
              <a href={store.socialMedia.playStore} target="_blank" rel="noopener noreferrer">
                <Play className="w-7 h-7 text-gray-600 hover:text-orange-500 transition-colors" />
              </a>
              <a href={store.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-7 h-7 text-gray-600 hover:text-orange-500 transition-colors" />
              </a>
              <a href={store.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-7 h-7 text-gray-600 hover:text-orange-500 transition-colors" />
              </a>
              <a href={store.socialMedia.tiktok} target="_blank" rel="noopener noreferrer">
                <svg className="w-7 h-7 text-gray-600 hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Business Proposal Button */}
            <div className="border-t border-b border-gray-200 py-4">
              <button
                onClick={() => setShowBusinessProposal(true)}
                className="w-full text-gray-700 hover:text-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                <span className="text-sm font-medium">Propuesta de negocio</span>
              </button>
            </div>

            {/* Recomendaciones */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-base">Recomendaciones</h3>
                {store.reviews.length > 2 && (
                  <button
                    onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                    className="text-orange-600 text-sm font-semibold hover:underline"
                  >
                    {showAllRecommendations ? "Ver menos" : "Ver más"}
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {store.reviews
                  .slice(0, showAllRecommendations ? store.reviews.length : 2)
                  .map((review: Review) => (
                  <Card key={review.id} className="rounded-2xl p-3.5">
                    <div className="flex gap-2.5">
                      {/* Contenido a la izquierda */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-1.5">
                          <img 
                            src={review.userAvatar} 
                            alt={review.userName} 
                            className="w-9 h-9 rounded-full object-cover flex-shrink-0" 
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm mb-0.5">{review.userName}</p>
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`w-2 h-2 rounded-full ${i < review.rating ? 'bg-orange-500' : 'bg-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-sm mb-1.5">{review.title}</h4>
                        <p className="text-gray-700 text-sm mb-1.5 leading-snug line-clamp-2">{review.description}</p>
                        <p className="text-gray-500 text-xs">Fecha: {review.visitDate}</p>
                      </div>
                      
                      {/* Imagen de review a la derecha */}
                      {review.image && (
                        <img 
                          src={review.image} 
                          alt="Review" 
                          className="w-24 h-24 object-cover rounded-lg flex-shrink-0" 
                        />
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Recomiéndanos Button */}
              <div className="w-full mt-3 border-t border-b border-gray-300 py-2.5">
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="w-full text-gray-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Recomiéndanos
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ANUNCIOS TAB */}
        {activeTab === "anuncios" && (
          <div>
            {/* Announcements Grid - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {announcements.slice(0, 2).map((announcement) => (
                <div key={announcement.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  {/* Header with logo, name, location and rating */}
                  <div className="p-4 flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      {/* Logo */}
                      <img 
                        src={announcement.logo} 
                        alt={announcement.businessName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {/* Name and Location */}
                      <div className="flex-1">
                        <h3 className="font-bold text-sm">{announcement.businessName}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{announcement.location}</span>
                        </div>
                      </div>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      <span className="text-sm font-semibold">{announcement.rating}</span>
                    </div>
                  </div>

                  {/* Announcement Image */}
                  <div className="relative">
                    <img 
                      src={announcement.image} 
                      alt={announcement.businessName}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  {/* Footer with WhatsApp and actions */}
                  <div className="p-4 flex items-center justify-between">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${announcement.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </a>

                    {/* Action Icons */}
                    <div className="flex items-center gap-3">
                      {/* Favorite */}
                      <button
                        onClick={() => {
                          setAnnouncementFavorites(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has(announcement.id)) {
                              newSet.delete(announcement.id);
                            } else {
                              newSet.add(announcement.id);
                            }
                            return newSet;
                          });
                        }}
                        className="text-gray-600 hover:text-red-500 transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 ${announcementFavorites.has(announcement.id) ? 'fill-red-500 text-red-500' : ''}`}
                        />
                      </button>

                      {/* Share */}
                      <button
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: announcement.businessName,
                              text: `Mira este anuncio de ${announcement.businessName}`,
                              url: window.location.href,
                            });
                          } else {
                            alert('Compartir no está disponible en este navegador');
                          }
                        }}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>

                      {/* Save */}
                      <button
                        onClick={() => {
                          setAnnouncementSaved(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has(announcement.id)) {
                              newSet.delete(announcement.id);
                            } else {
                              newSet.add(announcement.id);
                            }
                            return newSet;
                          });
                        }}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Bookmark 
                          className={`w-5 h-5 ${announcementSaved.has(announcement.id) ? 'fill-gray-900' : ''}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVENTOS TAB */}
        {activeTab === "eventos" && (
          <div>
            {!selectedEvent ? (
              <>
                {/* Events Grid - 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {events.slice(0, 2).map((event) => (
                    <div key={event.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      {/* Event Image */}
                      <div className="relative">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-48 object-cover cursor-pointer"
                          onClick={() => setSelectedEvent(event)}
                        />
                        {/* Icons overlay */}
                        <div className="absolute top-3 right-3 flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEventFavorites(prev => {
                                const newSet = new Set(prev);
                                if (newSet.has(event.id)) {
                                  newSet.delete(event.id);
                                } else {
                                  newSet.add(event.id);
                                }
                                return newSet;
                              });
                            }}
                            className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
                          >
                            <Heart 
                              className={`w-5 h-5 ${eventFavorites.has(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                            />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (navigator.share) {
                                navigator.share({
                                  title: event.title,
                                  text: event.description,
                                  url: window.location.href,
                                });
                              } else {
                                alert('Compartir no está disponible en este navegador');
                              }
                            }}
                            className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
                          >
                            <Share2 className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Event Info */}
                      <div 
                        className="p-4 cursor-pointer"
                        onClick={() => setSelectedEvent(event)}
                      >
                        <h3 className="font-bold text-base mb-2">{event.title}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{event.startDate} - {event.endDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* Event Detail View */
              <div>
                {/* Back button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-sm font-medium">Volver a eventos</span>
                </button>

                {/* Event Detail Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Left: Event Image */}
                  <div>
                    <img 
                      src={selectedEvent.image} 
                      alt={selectedEvent.title}
                      className="w-full h-96 rounded-2xl object-cover"
                    />
                  </div>

                  {/* Right: Event Details */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Inicio: {selectedEvent.startDate}</p>
                          <p className="font-medium">Fin: {selectedEvent.endDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <p>{selectedEvent.location}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <p>{selectedEvent.time}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Descripción</h3>
                      <p className="text-sm text-gray-700">{selectedEvent.description}</p>
                    </div>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${selectedEvent.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-700"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">WhatsApp</span>
                    </a>

                    {/* Contact Icons */}
                    <div className="flex items-center gap-4">
                      <a href={`tel:${selectedEvent.phone}`} className="text-gray-700 hover:text-orange-500 transition-colors">
                        <Phone className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${selectedEvent.email}`} className="text-gray-700 hover:text-orange-500 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                      <a href={selectedEvent.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-orange-500 transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href={selectedEvent.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-orange-500 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Sponsor and Provider Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <button
                        onClick={() => setShowSponsorModal(true)}
                        className="py-2.5 px-4 rounded-xl bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors text-sm font-medium"
                      >
                        Propuesta de participación como auspiciador
                      </button>
                      <button
                        onClick={() => setShowProviderModal(true)}
                        className="py-2.5 px-4 rounded-xl bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors text-sm font-medium"
                      >
                        Proveedores interesados en ofrecer sus servicios
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-0 pt-2 border-t border-gray-200">
                      <button
                        onClick={() => {
                          setEventInterested(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has(selectedEvent.id)) {
                              newSet.delete(selectedEvent.id);
                            } else {
                              newSet.add(selectedEvent.id);
                            }
                            return newSet;
                          });
                        }}
                        className="flex items-center justify-center gap-2 text-gray-700 hover:text-orange-500 transition-colors py-3 border-r border-gray-200"
                      >
                        <Bookmark className={`w-5 h-5 ${eventInterested.has(selectedEvent.id) ? 'fill-gray-900' : ''}`} />
                        <span className="text-sm">Me interesa</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          setEventFavorites(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has(selectedEvent.id)) {
                              newSet.delete(selectedEvent.id);
                            } else {
                              newSet.add(selectedEvent.id);
                            }
                            return newSet;
                          });
                        }}
                        className="flex items-center justify-center gap-2 text-gray-700 hover:text-orange-500 transition-colors py-3 border-r border-gray-200"
                      >
                        <Heart className={`w-5 h-5 ${eventFavorites.has(selectedEvent.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        <span className="text-sm">Favorito</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: selectedEvent.title,
                              text: selectedEvent.description,
                              url: window.location.href,
                            });
                          } else {
                            alert('Compartir no está disponible en este navegador');
                          }
                        }}
                        className="flex items-center justify-center gap-2 text-gray-700 hover:text-orange-500 transition-colors py-3"
                      >
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm">Compartir</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Más eventos de la tienda */}
                {events.filter(e => e.id !== selectedEvent.id).length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Más eventos de la tienda</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {events.filter(e => e.id !== selectedEvent.id).slice(0, 4).map((event) => (
                        <div key={event.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => {
                            setSelectedEvent(event);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {/* Event Image */}
                          <div className="relative">
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-40 object-cover"
                            />
                            {/* Icons overlay */}
                            <div className="absolute top-2 right-2 flex gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEventFavorites(prev => {
                                    const newSet = new Set(prev);
                                    if (newSet.has(event.id)) {
                                      newSet.delete(event.id);
                                    } else {
                                      newSet.add(event.id);
                                    }
                                    return newSet;
                                  });
                                }}
                                className="p-1.5 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
                              >
                                <Heart 
                                  className={`w-4 h-4 ${eventFavorites.has(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                                />
                              </button>
                            </div>
                          </div>
                          
                          {/* Event Info */}
                          <div className="p-3">
                            <h4 className="font-bold text-sm mb-1.5 line-clamp-2">{event.title}</h4>
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <Clock className="w-3 h-3" />
                              <span className="truncate">{event.startDate}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* OFERTAS TAB */}
        {activeTab === "ofertas" && (
          <div>
            {selectedOffer ? (
              <OfferDetailScreen
                onBack={() => {
                  setSelectedOffer(null);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                post={{
                  id: selectedOffer.id,
                  business: store.name,
                  category: store.categories[0],
                  city: store.city,
                  image: selectedOffer.image,
                  description: selectedOffer.title,
                  rating: store.rating,
                  reviews: store.reviewCount,
                  price: `Bs ${selectedOffer.price}`,
                  originalPrice: `Bs ${selectedOffer.originalPrice}`,
                  discount: selectedOffer.discount
                }}
              />
            ) : (
              <>
                {store.offers && store.offers.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {store.offers.slice(0, 2).map((offer) => (
                        <Card
                          key={offer.id}
                          onClick={() => {
                            setSelectedOffer(offer);
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          }}
                          className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
                        >
                          {/* Image */}
                          <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center overflow-hidden relative">
                            <img
                              src={offer.image}
                              alt={offer.title}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                              {offer.discount}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-4">
                            <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">
                              {offer.title}
                            </h3>
                            
                            {/* Prices */}
                            <div className="flex items-center gap-2">
                              <span className="text-orange-600 font-bold text-base">
                                Bs {offer.price}
                              </span>
                              <span className="text-gray-400 line-through text-sm">
                                Bs {offer.originalPrice}
                              </span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-sm">No hay ofertas disponibles</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* TIENDA TAB */}
        {activeTab === "tienda" && (
          <div>
            {/* Tienda Header with Cart Icon */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Tienda</h2>
              <button
                onClick={() => window.open("https://example.com/tienda", "_blank")}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Products - Only Images (show 6) - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {store.products.slice(0, 6).map((product) => (
                <div 
                  key={product.id}
                  onClick={() => {
                    setSelectedProduct(product);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</p>
                    <p className="text-base font-bold text-orange-600">Bs. {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Business Proposal Modal */}
      {showBusinessProposal && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowBusinessProposal(false)}
        >
          <div 
            className="bg-white rounded-3xl p-5 max-w-md w-full shadow-2xl max-h-[80vh] overflow-y-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-center mb-2">Propuesta de negocio</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Si deseas hacernos llegar tu propuesta de negocio, te pedimos llenes el siguiente formulario
            </p>
            
            <form className="space-y-3 pb-2">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Nombre y Apellido</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Ciudad en la que vives</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Cochabamba"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Empresa en la que trabajas</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Mi Empresa S.A."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Servicios que ofreces</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Desarrollo web, Marketing"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Cargo que ocupas en la empresa</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Gerente de Ventas"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: juan@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: +591 77022585"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Describe tu propuesta</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Describe tu propuesta aquí..."
                />
              </div>

              <Button
                type="button"
                onClick={() => {
                  alert('Propuesta enviada! Nos pondremos en contacto contigo pronto.');
                  setShowBusinessProposal(false);
                }}
                className="w-full py-2.5 text-sm rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-semibold"
              >
                Enviar
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Sponsor Modal */}
      {showSponsorModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowSponsorModal(false)}
        >
          <div 
            className="bg-white rounded-3xl p-5 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-center mb-2">Propuesta de auspiciador</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Si deseas ser auspiciador del evento, te pedimos llenes el siguiente formulario
            </p>
            
            <form className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Empresa</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Mi Empresa S.A."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Servicios que ofrece</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Marketing digital, Publicidad"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Describe tu propuesta</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Describe tu propuesta aquí..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: contacto@empresa.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: +591 77022585"
                />
              </div>

              <Button
                type="button"
                onClick={() => {
                  alert('Propuesta enviada! Nos pondremos en contacto contigo pronto.');
                  setShowSponsorModal(false);
                }}
                className="w-full py-2.5 text-sm rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-semibold"
              >
                Enviar
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Provider Modal */}
      {showProviderModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowProviderModal(false)}
        >
          <div 
            className="bg-white rounded-3xl p-5 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-center mb-2">Proveedor de servicio</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Si deseas ser proveedor del evento, te pedimos llenes el siguiente formulario
            </p>
            
            <form className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Empresa</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Mi Empresa S.A."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Servicios que ofreces</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Catering, Audio y video"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Describe tu propuesta</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Describe tu propuesta aquí..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: contacto@empresa.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: +591 77022585"
                />
              </div>

              <Button
                type="button"
                onClick={() => {
                  alert('Propuesta enviada! Nos pondremos en contacto contigo pronto.');
                  setShowProviderModal(false);
                }}
                className="w-full py-2.5 text-sm rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-semibold"
              >
                Enviar
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Review Form Modal */}
      {showReviewForm && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto pt-40 pb-8 px-4"
          onClick={() => setShowReviewForm(false)}
        >
          <div 
            className="bg-white rounded-3xl p-4 max-w-md w-full shadow-2xl mb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold text-center mb-3">Recomiéndanos</h3>
            
            <form className="space-y-3">
              {/* Rating Circles */}
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1.5 text-center">Pulsa un círculo para puntuar</p>
                <div className="flex items-center justify-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setReviewFormData({...reviewFormData, rating})}
                      className={`w-8 h-8 rounded-full border-2 transition-colors ${
                        reviewFormData.rating >= rating
                          ? 'bg-orange-500 border-orange-500'
                          : 'bg-white border-gray-300 hover:border-orange-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Mes de visita */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Mes de visita</label>
                <select
                  value={reviewFormData.visitMonth}
                  onChange={(e) => setReviewFormData({...reviewFormData, visitMonth: e.target.value})}
                  className="w-full px-2.5 py-1.5 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Selecciona un mes</option>
                  <option value="Enero 2025">Enero 2025</option>
                  <option value="Diciembre 2024">Diciembre 2024</option>
                  <option value="Noviembre 2024">Noviembre 2024</option>
                  <option value="Octubre 2024">Octubre 2024</option>
                </select>
              </div>

              {/* Tipo de visita */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Tipo de visita</label>
                <button
                  type="button"
                  onClick={() => setShowVisitTypeModal(true)}
                  className="w-full px-2.5 py-1.5 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 text-left hover:border-orange-300 transition-colors"
                >
                  {reviewFormData.visitType || "Selecciona el tipo de visita"}
                </button>
              </div>

              {/* Título */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Título</label>
                <input 
                  type="text"
                  value={reviewFormData.title}
                  onChange={(e) => setReviewFormData({...reviewFormData, title: e.target.value})}
                  className="w-full px-2.5 py-1.5 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  placeholder="Ej: Excelente servicio"
                />
              </div>

              {/* Escribe una recomendación */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Escribe una recomendación</label>
                <textarea 
                  rows={3}
                  value={reviewFormData.description}
                  onChange={(e) => setReviewFormData({...reviewFormData, description: e.target.value})}
                  className="w-full px-2.5 py-1.5 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Describe tu experiencia..."
                />
              </div>

              {/* Agregar foto */}
              <button
                type="button"
                onClick={() => setReviewFormData({...reviewFormData, hasImage: !reviewFormData.hasImage})}
                className="w-full py-2 rounded-xl bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium">Agregar foto (opcional)</span>
              </button>

              <Button
                type="button"
                onClick={() => {
                  alert('¡Gracias por tu recomendación!');
                  setShowReviewForm(false);
                  setReviewFormData({
                    rating: 0,
                    visitMonth: "",
                    visitType: "",
                    title: "",
                    description: "",
                    hasImage: false
                  });
                }}
                className="w-full py-2 text-sm rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-semibold"
              >
                Enviar recomendación
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Visit Type Modal */}
      {showVisitTypeModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVisitTypeModal(false)}
        >
          <div 
            className="bg-white rounded-3xl p-5 max-w-xs w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-center mb-4">Tipo de visita</h3>
            
            <div className="space-y-2">
              {["Negocios", "Parejas", "Familia", "Amigos", "En solitario"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setReviewFormData({...reviewFormData, visitType: type});
                    setShowVisitTypeModal(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Publish Modal - Only for own profile */}
      {isOwnProfile && showPublishModal && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center animate-in fade-in duration-200"
          onClick={() => setShowPublishModal(false)}
        >
          <div 
            className="bg-white rounded-t-3xl sm:rounded-3xl max-w-sm w-full p-4 animate-in slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              ¿Qué deseas publicar?
            </h2>
            <p className="text-gray-600 text-xs mb-4">
              Selecciona el tipo de publicación que quieres crear
            </p>

            <div className="space-y-2">
              {/* Anuncio */}
              <button
                onClick={() => {
                  setShowPublishModal(false);
                  setShowCreateAnnouncement(true);
                }}
                className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">Anuncio</h3>
                    <p className="text-gray-600 text-xs">Publica información general</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Eventos */}
              <button
                onClick={() => {
                  setShowPublishModal(false);
                  setShowCreateEvent(true);
                }}
                className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">Eventos</h3>
                    <p className="text-gray-600 text-xs">Crea eventos especiales</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Ofertas */}
              <button
                onClick={() => {
                  setShowPublishModal(false);
                  setShowCreateOffer(true);
                }}
                className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">Oferta</h3>
                    <p className="text-gray-600 text-xs">Promociona descuentos</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowPublishModal(false)}
              className="w-full mt-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition-colors text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Edit Store Modal */}
      <EditStoreModal
        isOpen={showEditStoreModal}
        onClose={() => setShowEditStoreModal(false)}
        storeLogo={store.logo}
        storeName={store.name}
      />

    </div>
  );
};