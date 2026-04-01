import { useState, useEffect } from "react";
import { Search, MapPin, AlertCircle, X, Heart, MessageCircle, Share2, Star, Bookmark, Calendar, Handshake, Globe, Home, Megaphone, Link, Percent } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { useFavorites } from "@/app/components/homepage/FavoritesContext";
import { CitySearchScreen } from "@/app/components/homepage/CitySearchScreen";
import { ProductSearchModal } from "@/app/components/homepage/ProductSearchModal";
import { SearchResultsScreen } from "@/app/components/homepage/SearchResultsScreen";
import { SelectProfileScreen } from "@/app/components/homepage/SelectProfileScreen";
import { CreateAnnouncementScreen } from "@/app/components/homepage/CreateAnnouncementScreen";
import { CreateLinkScreen } from "@/app/components/homepage/CreateLinkScreen";
import { CreateEventScreen } from "@/app/components/homepage/CreateEventScreen";
import { CreateOfferScreen } from "@/app/components/homepage/CreateOfferScreen";
import { HeroCarousel } from "@/app/components/homepage/HeroCarousel";

const cities = [
  "La Paz", "Santa Cruz", "Cochabamba", "Oruro", "Potosí",
  "Sucre", "Tarija", "Beni", "Pando"
];

// Mock posts data
const mockPosts = [
  {
    id: 1,
    type: "link",
    business: "Cámara Nacional de Industrias",
    username: "@cnibolivia",
    category: "Institucional",
    city: "La Paz",
    profileImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0b3JlfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
    description: "Impulsando la competitividad y desarrollo sostenible",
    linkUrl: "https://www.youtube.com/watch?v=example",
    linkPreview: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHZpZGVvfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    linkTitle: "Video: Oportunidades de Negocio en Bolivia",
    rating: 4.9,
  },
  {
    id: 2,
    type: "normal",
    business: "Restaurante El Sabor Paceño",
    category: "Restaurantes",
    city: "La Paz",
    profileImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbG9nb3xlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
    image: "https://images.unsplash.com/photo-1723672885092-d31ebd5a94b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJvbGl2aWFufGVufDF8fHx8MTc2ODkxNTk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Disfruta de la mejor comida tradicional boliviana. Platos del da con descuento especial. ¡Ven y prueba nuestros sabores únicos!",
    rating: 4.8,
    reviews: 234,
    price: "Bs 35-80",
    phone: "+59171234567",
  },
  {
    id: 3,
    type: "link",
    business: "Tech Store Bolivia",
    username: "@techstorebo",
    category: "Tecnología",
    city: "Santa Cruz",
    profileImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RvcmUlMjBsb2dvfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
    description: "Conoce los últimos lanzamientos en tecnología",
    linkUrl: "https://www.youtube.com/watch?v=tech",
    linkPreview: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4ODMwMDI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkTitle: "Video: Los mejores laptops 2025",
    rating: 4.9,
  },
  {
    id: 4,
    type: "normal",
    business: "Boutique Moda & Estilo",
    category: "Moda",
    city: "Cochabamba",
    profileImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmUlMjBsb2dvfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
    image: "https://images.unsplash.com/photo-1761370571873-5d869310d731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBib3V0aXF1ZXxlbnwxfHx8fDE3Njg5MTU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Las últimas tendencias en moda. Ropa para toda ocasión. ¡Nuevas colecciones cada semana!",
    rating: 4.7,
    reviews: 189,
    price: "Bs 150-400",
    phone: "+59178901234",
    promotion: "¡2x1 en toda la colección de verano! Válido hasta fin de mes",
  },
  {
    id: 5,
    type: "normal",
    business: "Gimnasio Fitness Pro",
    category: "Deportes",
    city: "La Paz",
    profileImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBsb2dvfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
    image: "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Alcanza tus metas fitness con nuestros entrenadores certificados. Primera clase gratis.",
    rating: 4.6,
    reviews: 298,
    price: "Bs 200/mes",
    phone: "+59172345678",
    promotion: "¡Matricúlate hoy y obtén 3 meses por el precio de 2! Incluye evaluación física gratis",
  },
  {
    id: 6,
    type: "link",
    business: "Spa Belleza Total",
    username: "@bellezatotal",
    category: "Belleza",
    city: "Santa Cruz",
    profileImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBsb2dvfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
    description: "Tutorial: 5 pasos para una piel radiante",
    linkUrl: "https://www.youtube.com/watch?v=beauty",
    linkPreview: "https://images.unsplash.com/photo-1664549760921-2198b054a592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBiZWF1dHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY4ODQxNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkTitle: "Video: Tratamientos de belleza profesionales",
    rating: 4.9,
  },
  {
    id: 7,
    type: "normal",
    business: "Librería Cultural",
    category: "Educación",
    city: "Sucre",
    profileImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1080",
    description: "Los mejores libros y material educativo. Descuentos especiales para estudiantes.",
    rating: 4.5,
    reviews: 142,
    price: "Bs 20-150",
    phone: "+59173456789",
    promotion: "30% de descuento en toda la sección de textos universitarios. Presentando tu carnet estudiantil",
  },
  {
    id: 8,
    type: "normal",
    business: "Cafetería Aroma",
    category: "Cafeterías",
    city: "Cochabamba",
    profileImage: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1080",
    description: "El mejor café de la ciudad. Ambiente acogedor y wifi gratis.",
    rating: 4.7,
    reviews: 312,
    price: "Bs 15-45",
    phone: "+59174567890",
  },
  {
    id: 9,
    type: "link",
    business: "Constructora Bolivia",
    username: "@constructorabo",
    category: "Construcción",
    city: "La Paz",
    profileImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400",
    description: "Proyectos de construcción innovadores",
    linkUrl: "https://www.youtube.com/watch?v=construction",
    linkPreview: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1080",
    linkTitle: "Video: Nuestros últimos proyectos",
    rating: 4.8,
  },
  {
    id: 10,
    type: "normal",
    business: "Veterinaria Mascotas Felices",
    category: "Veterinarias",
    city: "Santa Cruz",
    profileImage: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=400",
    image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=1080",
    description: "Cuidado profesional para tus mascotas. Consultas, vacunas y emergencias 24/7.",
    rating: 4.9,
    reviews: 267,
    price: "Bs 50-200",
    phone: "+59175678901",
  },
  {
    id: 11,
    type: "normal",
    business: "Peluquería Estilo Único",
    category: "Belleza",
    city: "Tarija",
    profileImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1080",
    description: "Los mejores cortes y peinados. Productos premium para el cuidado del cabello.",
    rating: 4.6,
    reviews: 178,
    price: "Bs 30-120",
    phone: "+59176789012",
  },
  {
    id: 12,
    type: "link",
    business: "Academia de Idiomas Global",
    username: "@academiaglobal",
    category: "Educación",
    city: "Cochabamba",
    profileImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
    description: "Aprende inglés, francés, alemán y más",
    linkUrl: "https://www.youtube.com/watch?v=languages",
    linkPreview: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1080",
    linkTitle: "Video: Nuestros métodos de enseñanza",
    rating: 4.8,
  },
  {
    id: 13,
    type: "normal",
    business: "Ferretería El Constructor",
    category: "Ferreterías",
    city: "Oruro",
    profileImage: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1080",
    description: "Todo lo que necesitas para tu proyecto. Herramientas y materiales de construcción.",
    rating: 4.5,
    reviews: 201,
    price: "Variado",
    phone: "+59177890123",
  },
  {
    id: 14,
    type: "normal",
    business: "Pastelería Dulce Sabor",
    category: "Pastelerías",
    city: "La Paz",
    profileImage: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1080",
    description: "Tortas personalizadas y postres artesanales. Pedidos para eventos especiales.",
    rating: 4.9,
    reviews: 445,
    price: "Bs 80-350",
    phone: "+59178901234",
  },
  {
    id: 15,
    type: "normal",
    business: "Lavandería Express",
    category: "Servicios",
    city: "Santa Cruz",
    profileImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1080",
    description: "Servicio rápido y profesional. Entrega a domicilio en 24 horas.",
    rating: 4.4,
    reviews: 156,
    price: "Bs 15-60",
    phone: "+59179012345",
  },
  {
    id: 16,
    type: "link",
    business: "Agencia de Viajes Aventura",
    username: "@aventuraviajes",
    category: "Turismo",
    city: "Potosí",
    profileImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400",
    description: "Descubre Bolivia con nosotros",
    linkUrl: "https://www.youtube.com/watch?v=travel",
    linkPreview: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1080",
    linkTitle: "Video: Tours por todo Bolivia",
    rating: 4.9,
  },
  {
    id: 17,
    type: "normal",
    business: "Farmacia Salud Total",
    category: "Farmacias",
    city: "Cochabamba",
    profileImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1080",
    description: "Medicamentos de calidad y atención personalizada. Abierto 24 horas.",
    rating: 4.7,
    reviews: 289,
    price: "Variado",
    phone: "+59170123456",
  },
  {
    id: 18,
    type: "normal",
    business: "Taller Mecánico AutoPro",
    category: "Automotriz",
    city: "La Paz",
    profileImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1080",
    description: "Reparación y mantenimiento de vehículos. Mecánicos certificados.",
    rating: 4.6,
    reviews: 223,
    price: "Bs 100-800",
    phone: "+59171234567",
  },
  {
    id: 19,
    type: "normal",
    business: "Pizzería Mama Mia",
    category: "Restaurantes",
    city: "Tarija",
    profileImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1080",
    description: "Pizzas artesanales al horno de leña. Ingredientes frescos e importados.",
    rating: 4.8,
    reviews: 367,
    price: "Bs 45-90",
    phone: "+59172345678",
  },
  {
    id: 20,
    type: "link",
    business: "Centro de Yoga Zen",
    username: "@yogazen",
    category: "Deportes",
    city: "Santa Cruz",
    profileImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    description: "Encuentra tu equilibrio interior",
    linkUrl: "https://www.youtube.com/watch?v=yoga",
    linkPreview: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1080",
    linkTitle: "Video: Clases de yoga para principiantes",
    rating: 4.9,
  },
];

interface HomeFeedProps {
  onNavigate?: (destination: string) => void;
  onViewPost?: (postId: number) => void;
  onViewBusiness?: (businessId: number) => void;
  onViewStore?: (storeId: number) => void;
  onCityChange?: (city: string) => void;
  selectedCity?: string;
  triggerCreateAnnouncement?: boolean;
  triggerCreateLink?: boolean;
  onCreateComplete?: () => void;
  onCreateScreenChange?: (isCreating: boolean) => void;
}

export function HomeFeed({ 
  onNavigate, 
  onViewPost, 
  onViewBusiness, 
  onViewStore, 
  onCityChange, 
  selectedCity: initialSelectedCity = "",
  triggerCreateAnnouncement = false,
  triggerCreateLink = false,
  onCreateComplete,
  onCreateScreenChange
}: HomeFeedProps) {
  const [selectedCity, setSelectedCity] = useState(initialSelectedCity);
  const [showCitySearch, setShowCitySearch] = useState(false);
  const [showProductSearch, setShowProductSearch] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [productSearchQuery, setProductSearchQuery] = useState("");
  const [productSearchCity, setProductSearchCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const { isFavorite, toggleFavorite } = useFavorites();
  
  // Create post flow states
  const [showSelectProfile, setShowSelectProfile] = useState(false);
  const [showCreateAnnouncement, setShowCreateAnnouncement] = useState(false);
  const [showCreateLink, setShowCreateLink] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showCreateOffer, setShowCreateOffer] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);

  // Pagination states
  const [postsPerPage, setPostsPerPage] = useState<number | 'all'>(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPostsFilter, setShowPostsFilter] = useState(false);
  
  // Sync local state with prop when it changes
  useEffect(() => {
    setSelectedCity(initialSelectedCity);
  }, [initialSelectedCity]);

  // Listen for trigger props from parent (Homepage dropdown)
  useEffect(() => {
    if (triggerCreateAnnouncement) {
      handleCreateOptionSelect('announcement');
      if (onCreateComplete) {
        onCreateComplete();
      }
    }
  }, [triggerCreateAnnouncement]);

  useEffect(() => {
    if (triggerCreateLink) {
      handleCreateOptionSelect('link');
      if (onCreateComplete) {
        onCreateComplete();
      }
    }
  }, [triggerCreateLink]);

  // Notify parent when create screens are shown or hidden
  useEffect(() => {
    if (onCreateScreenChange) {
      const isCreating = showSelectProfile || showCreateAnnouncement || showCreateLink || showCreateEvent || showCreateOffer;
      onCreateScreenChange(isCreating);
    }
  }, [showSelectProfile, showCreateAnnouncement, showCreateLink, showCreateEvent, showCreateOffer, onCreateScreenChange]);

  // Scroll to top when create screens are shown
  useEffect(() => {
    if (showSelectProfile || showCreateAnnouncement || showCreateLink || showCreateEvent || showCreateOffer) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [showSelectProfile, showCreateAnnouncement, showCreateLink, showCreateEvent, showCreateOffer]);

  // Scroll a "Todas las Publicaciones" cuando cambia la página
  useEffect(() => {
    const publicationsElement = document.getElementById('publications-heading');
    if (publicationsElement) {
      const elementPosition = publicationsElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 150;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [currentPage]);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    if (onCityChange) {
      onCityChange(city);
    }
  };

  const handleClearCity = () => {
    setSelectedCity("");
    if (onCityChange) {
      onCityChange("");
    }
  };

  const handleProductSearch = (query: string, city: string) => {
    setProductSearchQuery(query);
    setProductSearchCity(city);
    setShowProductSearch(false);
    setShowSearchResults(true);
  };

  const handleSearch = () => {
    setHasSearched(true);
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

  // Filter posts by selected city
  const filteredPosts = selectedCity
    ? mockPosts.filter((post) => post.city === selectedCity)
    : mockPosts;

  // Calculate pagination
  const totalPosts = filteredPosts.length;
  const postsToShow = postsPerPage === 'all' ? filteredPosts : filteredPosts.slice((currentPage - 1) * (postsPerPage as number), currentPage * (postsPerPage as number));
  const totalPages = postsPerPage === 'all' ? 1 : Math.ceil(totalPosts / (postsPerPage as number));

  // Mock profile data
  const mockProfileData = {
    1: {
      name: "Mi Negocio Principal",
      photo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0b3JlfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
    },
    2: {
      name: "Tienda Online",
      photo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wJTIwc3RvcmV8ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
  };

  const handleCreateOptionSelect = (option: 'announcement' | 'link' | 'event' | 'offer') => {
    if (option === 'announcement') {
      setShowSelectProfile(true);
    } else {
      // For link, go directly to create link screen with default profile
      setSelectedProfileId(1);
      if (option === 'link') {
        setShowCreateLink(true);
      } else if (option === 'event') {
        setShowCreateEvent(true);
      } else if (option === 'offer') {
        setShowCreateOffer(true);
      }
    }
    if (onCreateScreenChange) {
      onCreateScreenChange(true);
    }
  };

  const handleProfileSelect = (profileId: number) => {
    setSelectedProfileId(profileId);
    setShowSelectProfile(false);
    setShowCreateAnnouncement(true);
  };

  const handlePublishAnnouncement = (data: any) => {
    console.log('Publishing announcement:', data);
    // Reset states
    setShowCreateAnnouncement(false);
    setSelectedProfileId(null);
    alert('¡Anuncio publicado exitosamente!');
    if (onCreateComplete) {
      onCreateComplete();
    }
    if (onCreateScreenChange) {
      onCreateScreenChange(false);
    }
  };

  const handlePublishLink = (data: any) => {
    console.log('Publishing link:', data);
    // Reset states
    setShowCreateLink(false);
    setSelectedProfileId(null);
    alert('¡Enlace publicado exitosamente!');
    if (onCreateComplete) {
      onCreateComplete();
    }
    if (onCreateScreenChange) {
      onCreateScreenChange(false);
    }
  };

  const handlePublishEvent = (data: any) => {
    console.log('Publishing event:', data);
    // Reset states
    setShowCreateEvent(false);
    setSelectedProfileId(null);
    alert('¡Evento publicado exitosamente!');
    if (onCreateComplete) {
      onCreateComplete();
    }
    if (onCreateScreenChange) {
      onCreateScreenChange(false);
    }
  };

  const handlePublishOffer = (data: any) => {
    console.log('Publishing offer:', data);
    // Reset states
    setShowCreateOffer(false);
    setSelectedProfileId(null);
    alert('¡Oferta publicada exitosamente!');
    if (onCreateComplete) {
      onCreateComplete();
    }
    if (onCreateScreenChange) {
      onCreateScreenChange(false);
    }
  };

  // Show select profile screen
  if (showSelectProfile) {
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 lg:left-64 z-50 bg-white overflow-y-auto">
        <SelectProfileScreen
          onBack={() => {
            setShowSelectProfile(false);
            if (onCreateScreenChange) {
              onCreateScreenChange(false);
            }
          }}
          onSelectProfile={handleProfileSelect}
        />
      </div>
    );
  }

  // Show create announcement screen
  if (showCreateAnnouncement && selectedProfileId) {
    const profile = mockProfileData[selectedProfileId as keyof typeof mockProfileData];
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 lg:left-64 z-50 bg-white overflow-y-auto">
        <CreateAnnouncementScreen
          onBack={() => {
            setShowCreateAnnouncement(false);
            setShowSelectProfile(true);
          }}
          profileName={profile.name}
          profilePhoto={profile.photo}
          onPublish={handlePublishAnnouncement}
        />
      </div>
    );
  }

  // Show create link screen
  if (showCreateLink && selectedProfileId) {
    const profile = mockProfileData[selectedProfileId as keyof typeof mockProfileData];
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 lg:left-64 z-50 bg-white overflow-y-auto">
        <CreateLinkScreen
          onBack={() => {
            setShowCreateLink(false);
            if (onCreateScreenChange) {
              onCreateScreenChange(false);
            }
          }}
          profileName={profile.name}
          profilePhoto={profile.photo}
          onPublish={handlePublishLink}
        />
      </div>
    );
  }

  // Show create event screen
  if (showCreateEvent && selectedProfileId) {
    const profile = mockProfileData[selectedProfileId as keyof typeof mockProfileData];
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 lg:left-64 z-50 bg-white overflow-y-auto">
        <CreateEventScreen
          onBack={() => {
            setShowCreateEvent(false);
            if (onCreateScreenChange) {
              onCreateScreenChange(false);
            }
          }}
          profileName={profile.name}
          profilePhoto={profile.photo}
          onPublish={handlePublishEvent}
        />
      </div>
    );
  }

  // Show create offer screen
  if (showCreateOffer && selectedProfileId) {
    const profile = mockProfileData[selectedProfileId as keyof typeof mockProfileData];
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 lg:left-64 z-50 bg-white overflow-y-auto">
        <CreateOfferScreen
          onBack={() => {
            setShowCreateOffer(false);
            if (onCreateScreenChange) {
              onCreateScreenChange(false);
            }
          }}
          profileName={profile.name}
          profilePhoto={profile.photo}
          onPublish={handlePublishOffer}
        />
      </div>
    );
  }

  // Show city search screen
  if (showCitySearch) {
    return (
      <CitySearchScreen
        onBack={() => setShowCitySearch(false)}
        onSelectCity={handleCitySelect}
        currentCity={selectedCity}
      />
    );
  }

  // Show search results screen
  if (showSearchResults) {
    return (
      <SearchResultsScreen
        onBack={() => setShowSearchResults(false)}
        searchQuery={productSearchQuery}
        city={productSearchCity}
        onViewPost={onViewPost}
      />
    );
  }

  return (
    <div className="space-y-2 bg-white rounded-3xl pl-2 pr-4 pb-4 pt-2">
      {/* Product Search Modal */}
      <ProductSearchModal
        isOpen={showProductSearch}
        onClose={() => setShowProductSearch(false)}
        onSearch={handleProductSearch}
      />

      {/* Filter Info */}
      {selectedCity && (
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 mt-4">
          <p className="text-orange-900 font-medium text-center">
            Mostrando {filteredPosts.length} publicaciones en <strong>{selectedCity}</strong>
          </p>
        </div>
      )}

      {/* Posts Feed */}
      <div className="space-y-4">
        {/* Create Post Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-3 overflow-hidden">
            {/* Top row - profile photo and text */}
            <div className="flex items-center gap-3 mb-3">
              {/* Profile Picture */}
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Mzc0ODU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="María González"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Title */}
              <span className="text-gray-400 text-sm">
                ¿Qué deseas publicar hoy?
              </span>
            </div>

            {/* Bottom row - Action Buttons */}
            <div className="grid grid-cols-4 gap-2">
              {/* Oferta Button */}
              <button
                onClick={() => handleCreateOptionSelect('offer')}
                className="flex items-center justify-center gap-1.5 px-2 py-2 border-2 border-gray-200 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:border-transparent transition-all group"
              >
                <svg className="w-4 h-4 text-orange-600 group-hover:text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-xs font-medium text-gray-700 group-hover:text-white">Oferta</span>
              </button>

              {/* Evento Button */}
              <button
                onClick={() => handleCreateOptionSelect('event')}
                className="flex items-center justify-center gap-1.5 px-2 py-2 border-2 border-gray-200 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:border-transparent transition-all group"
              >
                <svg className="w-4 h-4 text-orange-600 group-hover:text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium text-gray-700 group-hover:text-white">Evento</span>
              </button>

              {/* Anuncio Button */}
              <button
                onClick={() => handleCreateOptionSelect('announcement')}
                className="flex items-center justify-center gap-1.5 px-2 py-2 border-2 border-gray-200 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:border-transparent transition-all group"
              >
                <svg className="w-4 h-4 text-orange-600 group-hover:text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <span className="text-xs font-medium text-gray-700 group-hover:text-white">Anuncio</span>
              </button>

              {/* Enlace Button */}
              <button
                onClick={() => handleCreateOptionSelect('link')}
                className="flex items-center justify-center gap-1.5 px-2 py-2 border-2 border-gray-200 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:border-transparent transition-all group"
              >
                <svg className="w-4 h-4 text-orange-600 group-hover:text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span className="text-xs font-medium text-gray-700 group-hover:text-white">Enlace</span>
              </button>
            </div>
          </div>
        </div>

        {/* Separador con espacio - extendido completamente hasta el final - LÍNEA MÁS GRUESA */}
        <div className="-ml-2 -mr-4 py-2">
          <div className="border-t-8 border-gray-100"></div>
        </div>

        <div className="flex items-center justify-end flex-wrap gap-2 mb-3">          
          {/* Posts per page selector */}
          <div className="relative">
            <button
              onClick={() => setShowPostsFilter(!showPostsFilter)}
              className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-lg hover:border-orange-500 transition-colors"
            >
              <span className="text-xs text-gray-600">
                Mostrar: {postsPerPage === 'all' ? 'Todas' : postsPerPage}
              </span>
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showPostsFilter && (
              <div className="absolute right-0 mt-1 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {[10, 50, 100, 'all'].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setPostsPerPage(option as number | 'all');
                      setCurrentPage(1);
                      setShowPostsFilter(false);
                    }}
                    className={`w-full px-2 py-1.5 text-xs text-left hover:bg-orange-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      postsPerPage === option ? 'bg-orange-50 font-bold text-orange-600' : 'text-gray-700'
                    }`}
                  >
                    {option === 'all' ? 'Todas' : option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {postsToShow.map((post: any) => (
            <Card
              key={post.id}
              className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all shadow-lg"
            >
              {post.type === "link" ? (
                // Link Post Type
                <div className="flex flex-col h-full">
                  {/* Header - Profile info */}
                  <div className="p-3 pb-2 border-b border-gray-100 mt-2">
                    <div className="flex items-center gap-2 mb-0">
                      <img
                        src={post.profileImage}
                        alt={post.business}
                        onClick={() => onViewBusiness && onViewBusiness(post.id)}
                        className="w-8 h-8 rounded-full object-cover cursor-pointer"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 
                          onClick={() => onViewBusiness && onViewBusiness(post.id)}
                          className="font-bold text-sm text-gray-900 cursor-pointer hover:text-orange-600 transition-colors truncate"
                        >
                          {post.business}
                        </h3>
                        <p className="text-xs text-gray-600">ha publicado un enlace</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="px-3 pt-2">
                    <p className="text-sm text-gray-700 leading-snug line-clamp-2">
                      {post.description}
                    </p>
                  </div>

                  {/* Link Preview */}
                  <div className="px-3 py-2 flex-1">
                    <a 
                      href={post.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl overflow-hidden border-2 border-gray-200 hover:border-orange-300 transition-colors h-full flex flex-col"
                    >
                      <img 
                        src={post.linkPreview} 
                        alt={post.linkTitle}
                        className="w-full h-32 sm:h-40 object-cover"
                      />
                      <div className="p-2 bg-gray-50 flex-1 flex items-center">
                        <p className="font-semibold text-gray-900 text-xs line-clamp-2">
                          {post.linkTitle}
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Actions */}
                  <div className="px-3 pb-3 flex items-center justify-end gap-1">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          likedPosts.has(post.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </button>

                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </button>

                    <button
                      onClick={() => toggleFavorite(post.id)}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Bookmark
                        className={`w-4 h-4 transition-colors ${
                          isFavorite(post.id)
                            ? "fill-orange-600 text-orange-600"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ) : (
                // Normal Post Type
                <>
                  {/* Header with profile */}
                  <div className="pt-4 px-3 pb-3 border-b border-gray-100">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <img
                          src={post.profileImage}
                          alt={post.business}
                          onClick={() => onViewStore && onViewStore(post.id)}
                          className="w-8 h-8 rounded-full object-cover cursor-pointer flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 
                            onClick={() => onViewStore && onViewStore(post.id)}
                            className="font-bold text-sm text-gray-900 cursor-pointer hover:text-orange-600 transition-colors truncate"
                          >
                            {post.business}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{post.city}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stars rating on the right */}
                      <div className="flex items-center gap-0.5 flex-shrink-0">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm text-gray-900">{post.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="px-3 pt-3">
                    {post.description && (
                      <p className="text-sm text-gray-700 leading-snug line-clamp-2">
                        {post.description}
                      </p>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="px-3 py-3">
                    <div
                      onClick={() => onViewStore && onViewStore(post.id)}
                      className="rounded-xl overflow-hidden cursor-pointer"
                    >
                      <img 
                        src={post.image} 
                        alt={post.business}
                        className="w-full h-32 sm:h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-3 pb-3 flex items-center justify-between gap-2">
                    {/* WhatsApp button on the left */}
                    <a
                      href={`https://wa.me/${post.phone?.replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-xs font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>

                    {/* Other actions on the right */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            likedPosts.has(post.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }`}
                        />
                      </button>

                      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>

                      <button
                        onClick={() => toggleFavorite(post.id)}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Bookmark
                          className={`w-4 h-4 transition-colors ${
                            isFavorite(post.id)
                              ? "fill-orange-600 text-orange-600"
                              : "text-gray-600"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex flex-col items-center gap-4 pt-6 border-t-2 border-gray-200 mt-6">
          {/* Results info - Always show */}
          <div className="text-gray-600 text-sm font-medium">
            {postsPerPage === 'all' ? (
              <span>Mostrando todas las {totalPosts} publicaciones</span>
            ) : (
              <span>
                Mostrando {Math.min((currentPage - 1) * (postsPerPage as number) + 1, totalPosts)} - {Math.min(currentPage * (postsPerPage as number), totalPosts)} de {totalPosts} publicaciones
              </span>
            )}
          </div>

          {/* Pagination controls - Show when there are multiple pages */}
          {postsPerPage !== 'all' && totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-2xl font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-500'
                }`}
              >
                Anterior
              </button>
              
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNum = index + 1;
                  // Show first page, last page, current page, and pages around current
                  const shouldShow = 
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);
                  
                  const showEllipsisBefore = pageNum === currentPage - 2 && currentPage > 3;
                  const showEllipsisAfter = pageNum === currentPage + 2 && currentPage < totalPages - 2;
                  
                  if (!shouldShow && !showEllipsisBefore && !showEllipsisAfter) return null;
                  
                  if (showEllipsisBefore || showEllipsisAfter) {
                    return <span key={pageNum} className="text-gray-500">...</span>;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-xl font-medium transition-colors ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-500'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
          
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-2xl font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-500'
                }`}
              >
                Siguiente
              </button>
            </div>
          )}

          {/* Message when viewing all on single page */}
          {postsPerPage === 'all' && totalPosts > 10 && (
            <div className="text-gray-500 text-xs text-center">
              <p>Estás viendo todas las publicaciones en una sola página</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions - Moved after posts */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card
          onClick={() => onNavigate && onNavigate('lobby')}
          className="p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Handshake className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Bec Business</h4>
          </div>
        </Card>

        <Card
          onClick={() => onNavigate && onNavigate('categories')}
          className="p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900">Categorías</h4>
          </div>
        </Card>

        <Card
          onClick={() => onNavigate && onNavigate('events')}
          className="p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900">Eventos</h4>
          </div>
        </Card>

        <Card
          onClick={() => onNavigate && onNavigate('marketplace')}
          className="p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900">Promociones</h4>
          </div>
        </Card>

        <Card
          onClick={() => window.open('https://boliviaenunclic.com', '_blank')}
          className="p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Noticias</h4>
          </div>
        </Card>

        <Card
          onClick={() => window.open('https://kumyy.com', '_blank')}
          className="p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Home className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Kumyy</h4>
          </div>
        </Card>
      </div>

      {/* Create Post Button - Moved after posts */}
      <div className="relative mt-6 flex flex-col items-center" id="create-post-trigger">
        {/* Texto descriptivo */}
        <p className="text-center text-gray-700 font-medium mb-2">
          ¿Deseas publicar noticias de tu actividad comercial?
        </p>
        
        <div className="flex gap-3 justify-center w-full max-w-xl">
          {/* Crear Anuncio Button */}
          <button 
            onClick={() => handleCreateOptionSelect('announcement')}
            className="flex-1 px-6 py-3 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group flex items-center justify-center gap-2"
          >
            <Megaphone className="w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-900 text-base">
              Crear anuncio
            </span>
          </button>

          {/* Crear Enlace Button */}
          <button 
            onClick={() => handleCreateOptionSelect('link')}
            className="flex-1 px-6 py-3 rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group flex items-center justify-center gap-2"
          >
            <Link className="w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-900 text-base">
              Crear enlace
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}