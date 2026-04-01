import { useState, useEffect } from "react";
import { ArrowLeft, MapPin, Globe, Mail, Share2, CheckCircle, ExternalLink } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import profileRef from "figma:asset/1cebf2ffc09a58ee4c525538bbe2223491632fd5.png";

interface BusinessProfileScreenProps {
  businessId: number;
  onBack: () => void;
  onViewPost: (postId: number) => void;
}

interface Recommendation {
  id: number;
  authorName: string;
  authorPhoto: string;
  rating: number;
  title: string;
  description: string;
  visitDate: string;
}

// Mock business data
const getBusinessProfile = (id: number) => {
  const businesses: Record<number, any> = {
    1: {
      id: 1,
      name: "Cámara Nacional de Industrias",
      username: "@cnibolivia",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
      city: "La Paz, Bolivia",
      website: "www.cni.bo",
      email: "cni@cnibolivia.com",
      description: "Cámara Nacional de Industrias es la Cámara que Impulsa la Competitividad y Desarrollo Sostenible",
      posts: [
        {
          id: 1,
          type: "link",
          business: "Cámara Nacional de Industrias",
          description: "Impulsando la competitividad y desarrollo sostenible",
          linkPreview: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHZpZGVvfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=1080",
          linkTitle: "Video: Oportunidades de Negocio en Bolivia",
          linkUrl: "https://www.youtube.com/watch?v=example",
        },
        {
          id: 101,
          type: "normal",
          business: "Cámara Nacional de Industrias",
          description: "Evento empresarial de networking",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
        },
        {
          id: 102,
          type: "normal",
          business: "Cámara Nacional de Industrias",
          description: "Seminario de innovación tecnológica",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
        },
        {
          id: 103,
          type: "normal",
          business: "Cámara Nacional de Industrias",
          description: "Capacitación empresarial",
          image: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=600",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "María Fernanda López",
          authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 5,
          title: "Excelente organización",
          description: "La Cámara Nacional de Industrias brinda un servicio excepcional. Su equipo es muy profesional y siempre están dispuestos a ayudar a las empresas.",
          visitDate: "15 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Carlos Mendoza",
          authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 5,
          title: "Muy recomendable",
          description: "Asistí a varios eventos organizados por la CNI y todos fueron muy productivos. Excelente networking y oportunidades de negocio.",
          visitDate: "10 de Enero, 2025",
        },
      ],
    },
    2: {
      id: 2,
      name: "Restaurante El Sabor Paceño",
      username: "@saborpaceno",
      verified: false,
      profileImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbG9nb3xlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
      city: "La Paz, Bolivia",
      website: "www.saborpaceno.com",
      email: "info@saborpaceno.com",
      description: "Restaurante tradicional boliviano que ofrece lo mejor de la gastronomía paceña. Sabores auténticos con recetas familiares de más de 30 años.",
      posts: [
        {
          id: 2,
          type: "normal",
          business: "Restaurante El Sabor Paceño",
          description: "Disfruta de la mejor comida tradicional boliviana. Platos del día con descuento especial.",
          image: "https://images.unsplash.com/photo-1723672885092-d31ebd5a94b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJvbGl2aWFufGVufDF8fHx8MTc2ODkxNTk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "Roberto Paz",
          authorPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 5,
          title: "¡La mejor comida paceña!",
          description: "Excelente sabor, porciones generosas y precios justos. El fricasé es el mejor que he probado. Totalmente recomendado.",
          visitDate: "18 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Lucía Fernández",
          authorPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 5,
          title: "Ambiente familiar y acogedor",
          description: "Un lugar perfecto para comer en familia. El servicio es excelente y la comida deliciosa. Volveré sin duda.",
          visitDate: "12 de Enero, 2025",
        },
      ],
    },
    3: {
      id: 3,
      name: "Tech Store Bolivia",
      username: "@techstorebo",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RvcmUlMjBsb2dvfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
      city: "Santa Cruz, Bolivia",
      website: "www.techstorebo.com",
      email: "ventas@techstorebo.com",
      description: "Tu tienda de tecnología de confianza en Bolivia. Equipos de última generación, accesorios y servicio técnico especializado. Garantía en todos nuestros productos.",
      posts: [
        {
          id: 3,
          type: "link",
          business: "Tech Store Bolivia",
          description: "Conoce los últimos lanzamientos en tecnología",
          linkPreview: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4ODMwMDI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
          linkTitle: "Video: Los mejores laptops 2025",
          linkUrl: "https://www.youtube.com/watch?v=tech",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "Diego Vargas",
          authorPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 5,
          title: "Excelente servicio técnico",
          description: "Compré una laptop gaming y el asesoramiento fue excepcional. Me ayudaron a elegir el equipo perfecto para mis necesidades. Precios competitivos y garantía completa.",
          visitDate: "20 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Sofía Martínez",
          authorPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 5,
          title: "Los mejores productos tech",
          description: "Variedad increíble de productos. Encontré todo lo que buscaba para mi oficina. El personal es muy profesional y conocedor.",
          visitDate: "16 de Enero, 2025",
        },
        {
          id: 3,
          authorName: "Andrés Rojas",
          authorPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 4,
          title: "Buena atención",
          description: "Rpida atención y buenos precios. La única observación es que a veces hay poca disponibilidad de algunos productos muy solicitados.",
          visitDate: "8 de Enero, 2025",
        },
      ],
    },
    4: {
      id: 4,
      name: "Boutique Moda & Estilo",
      username: "@modayestilo",
      verified: false,
      profileImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmUlMjBsb2dvfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
      city: "Cochabamba, Bolivia",
      website: "www.modayestilo.com.bo",
      email: "contacto@modayestilo.com.bo",
      description: "Boutique de moda femenina con las últimas tendencias internacionales. Ropa exclusiva, accesorios y asesoría de imagen personalizada.",
      posts: [
        {
          id: 4,
          type: "normal",
          business: "Boutique Moda & Estilo",
          description: "Las últimas tendencias en moda. Ropa para toda ocasión. ¡Nuevas colecciones cada semana!",
          image: "https://images.unsplash.com/photo-1761370571873-5d869310d731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBib3V0aXF1ZXxlbnwxfHx8fDE3Njg5MTU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "Valentina Quiroga",
          authorPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 5,
          title: "Ropa de excelente calidad",
          description: "Siempre encuentro prendas únicas y de muy buena calidad. La atención es personalizada y te ayudan a armar outfits perfectos.",
          visitDate: "19 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Carolina Méndez",
          authorPhoto: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
          rating: 4,
          title: "Lindas prendas",
          description: "Me encanta la variedad de estilos. Aunque los precios son un poco elevados, la calidad lo vale.",
          visitDate: "14 de Enero, 2025",
        },
      ],
    },
    5: {
      id: 5,
      name: "Café Vida",
      username: "@cafevida",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200",
      city: "La Paz, Bolivia",
      website: "www.cafevida.bo",
      email: "contacto@cafevida.bo",
      description: "Cafetería de especialidad con los mejores granos de café boliviano. Ambiente acogedor perfecto para trabajar o relajarse. WiFi gratis y variedad de pastelería artesanal.",
      posts: [
        {
          id: 5,
          type: "normal",
          business: "Café Vida",
          description: "El mejor café de especialidad. Ambiente tranquilo ideal para trabajar o estudiar. WiFi gratis.",
          image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1080",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "Ana María Torres",
          authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
          rating: 5,
          title: "El mejor café de La Paz",
          description: "Ambiente increíble, café delicioso y excelente atención. Perfecto para trabajar remoto. Las medialunas son espectaculares.",
          visitDate: "21 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Jorge Pinto",
          authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
          rating: 5,
          title: "Excelente lugar",
          description: "Mi cafetería favorita. El capuchino es perfecto y siempre hay enchufes disponibles. Muy recomendado.",
          visitDate: "17 de Enero, 2025",
        },
      ],
    },
    10: {
      id: 10,
      name: "Tech Store Bolivia",
      username: "@techstorebo",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200",
      city: "Santa Cruz, Bolivia",
      website: "www.techstorebo.com",
      email: "ventas@techstorebo.com",
      description: "Tu tienda de tecnología de confianza en Bolivia. Equipos de última generación, accesorios y servicio técnico especializado. Garantía oficial en todos nuestros productos. Financiamiento disponible.",
      posts: [
        {
          id: 10,
          type: "normal",
          business: "Tech Store Bolivia",
          description: "Lo último en tecnología. Laptops, PCs de escritorio y accesorios. Financiamiento disponible.",
          image: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?w=1080",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "Diego Vargas",
          authorPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
          rating: 5,
          title: "Excelente servicio técnico",
          description: "Compré una laptop gaming y el asesoramiento fue excepcional. Me ayudaron a elegir el equipo perfecto para mis necesidades. Precios competitivos y garantía completa.",
          visitDate: "20 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Sofía Martínez",
          authorPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
          rating: 5,
          title: "Los mejores productos tech",
          description: "Variedad increíble de productos. Encontré todo lo que buscaba para mi oficina. El personal es muy profesional y conocedor.",
          visitDate: "16 de Enero, 2025",
        },
      ],
    },
    13: {
      id: 13,
      name: "Mobile Store",
      username: "@mobilestore",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
      city: "Santa Cruz, Bolivia",
      website: "www.mobilestore.bo",
      email: "info@mobilestore.bo",
      description: "Especialistas en smartphones de última generación. Garantía oficial de todas las marcas. Planes de financiamiento sin intereses. Accesorios originales y servicio técnico certificado.",
      posts: [
        {
          id: 13,
          type: "normal",
          business: "Mobile Store",
          description: "Smartphones de última generación. Garantía oficial. Planes de financiamiento sin intereses.",
          image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1080",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "Fernando Rojas",
          authorPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
          rating: 5,
          title: "Muy buena atención",
          description: "Compré mi iPhone y quedé muy satisfecho. Los planes de pago son flexibles y la garantía es confiable. Recomendado 100%.",
          visitDate: "19 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Patricia Suárez",
          authorPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
          rating: 5,
          title: "Excelente servicio",
          description: "Personal muy capacitado que te asesora bien. Los precios son justos y tienen gran variedad de modelos.",
          visitDate: "15 de Enero, 2025",
        },
      ],
    },
    20: {
      id: 20,
      name: "Style Hair Salon",
      username: "@stylehair",
      verified: false,
      profileImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200",
      city: "La Paz, Bolivia",
      website: "www.stylehair.bo",
      email: "info@stylehair.bo",
      description: "Peluquería y salón de belleza con estilistas profesionales certificados. Cortes modernos, tratamientos capilares, colorimetría avanzada. Productos de alta calidad para el cuidado del cabello.",
      posts: [
        {
          id: 20,
          type: "normal",
          business: "Style Hair Salon",
          description: "Cortes modernos y tratamientos capilares. Estilistas profesionales con años de experiencia.",
          image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1080",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "Carla Mendoza",
          authorPhoto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
          rating: 5,
          title: "Excelentes estilistas",
          description: "Me encantó mi corte y el tratamiento que me hicieron. Las chicas son súper profesionales y el ambiente es muy agradable.",
          visitDate: "22 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Daniela Ríos",
          authorPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
          rating: 5,
          title: "Mi peluquería favorita",
          description: "Siempre salgo feliz de aquí. Los estilistas te escuchan y te aconsejan muy bien. Precios razonables.",
          visitDate: "18 de Enero, 2025",
        },
      ],
    },
    23: {
      id: 23,
      name: "Spa Relax",
      username: "@sparelax",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200",
      city: "La Paz, Bolivia",
      website: "www.sparelax.bo",
      email: "reservas@sparelax.bo",
      description: "Centro de relajación y bienestar. Masajes terapéuticos, tratamientos faciales, aromaterapia y sauna. Personal certificado en técnicas de spa internacional. Paquetes especiales disponibles.",
      posts: [
        {
          id: 23,
          type: "normal",
          business: "Spa Relax",
          description: "El mejor spa de La Paz. Masajes, tratamientos faciales y relajación total. Reserva tu cita ahora.",
          image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1080",
        },
      ],
      recommendations: [
        {
          id: 1,
          authorName: "Isabel Morales",
          authorPhoto: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
          rating: 5,
          title: "Relajación total",
          description: "Una experiencia increíble. Los masajes son excelentes y el ambiente es super tranquilo. Salí renovada completamente.",
          visitDate: "20 de Enero, 2025",
        },
        {
          id: 2,
          authorName: "Monica Vega",
          authorPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
          rating: 5,
          title: "Altamente recomendado",
          description: "El mejor spa que he visitado. Personal muy profesional y los tratamientos son de primera. Vale cada boliviano.",
          visitDate: "16 de Enero, 2025",
        },
      ],
    },
  };

  return businesses[id] || businesses[1]; // Return business 1 as default if not found
};

export function BusinessProfileScreen({ businessId, onBack, onViewPost }: BusinessProfileScreenProps) {
  const business = getBusinessProfile(businessId);
  const [activeTab, setActiveTab] = useState<"publicaciones" | "recomendaciones">("publicaciones");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

  // Reset showAllRecommendations when changing business
  useEffect(() => {
    setShowAllRecommendations(false);
  }, [businessId]);

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      setActiveTab("recomendaciones");
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right
      setActiveTab("publicaciones");
    }
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-2">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
          <Share2 className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Main Container with Border */}
      <div className="border-2 border-gray-200 rounded-3xl overflow-visible shadow-lg bg-white relative">
        {/* Profile Info Card */}
        <div className="rounded-t-3xl overflow-visible relative">
          {/* Banner/Cover Image with actual image */}
          <div className="h-32 relative overflow-hidden rounded-t-3xl">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop" 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-red-500/40 to-orange-500/40"></div>
          </div>
          
          {/* Photo - Logo positioned below banner with higher z-index */}
          <div className="absolute left-6 top-32 transform -translate-y-1/2 z-50">
            <img
              src={business.profileImage}
              alt={business.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg bg-white"
            />
          </div>

          {/* Profile Content */}
          <div className="px-4 pt-8 pb-4 relative z-0">
            <div className="ml-28">
              <div className="flex items-center gap-1.5 mb-0.5">
                <h1 className="text-lg font-bold text-gray-900">{business.name}</h1>
                {business.verified && (
                  <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
                )}
              </div>
              <p className="text-gray-600 text-sm">{business.username}</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-3" />

            {/* Contact Info - Reduced spacing */}
            <div className="space-y-1.5">
              {/* City */}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{business.city}</span>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <a 
                  href={`https://${business.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-600 hover:underline text-sm"
                >
                  {business.website}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{business.email}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-3" />

            {/* Description */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {business.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t-2 border-gray-200">
          <div 
            className="flex"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={() => setActiveTab("publicaciones")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${
                activeTab === "publicaciones"
                  ? "text-orange-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Publicaciones
              {activeTab === "publicaciones" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-full" />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("recomendaciones")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${
                activeTab === "recomendaciones"
                  ? "text-orange-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Recomendaciones
              {activeTab === "recomendaciones" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-full" />
              )}
            </button>
          </div>
        </div>

        {/* Posts Section */}
        {activeTab === "publicaciones" && (
          <div className="bg-white rounded-b-2xl border-2 border-t-0 border-gray-200 p-4 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {business.posts.map((post) => (
                <Card
                  key={post.id}
                  className="rounded-xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => onViewPost(post.id)}
                >
                  {/* Content only - compact view */}
                  {post.type === "link" && post.linkPreview && (
                    <div className="relative group">
                      <img 
                        src={post.linkPreview}
                        alt={post.linkTitle}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}

                  {post.type === "normal" && post.image && (
                    <img 
                      src={post.image}
                      alt="Post"
                      className="w-full h-32 object-cover"
                    />
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations Section */}
        {activeTab === "recomendaciones" && (
          <div className="bg-white rounded-b-2xl border-2 border-t-0 border-gray-200 p-4 shadow-sm">
            {business.recommendations.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {business.recommendations
                    .slice(0, showAllRecommendations ? business.recommendations.length : 2)
                    .map((recommendation) => (
                      <Card
                        key={recommendation.id}
                        className="p-4 rounded-2xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-md transition-all"
                      >
                        {/* Author info */}
                        <div className="flex items-center gap-2 mb-2">
                          <img
                            src={recommendation.authorPhoto}
                            alt={recommendation.authorName}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-sm text-gray-900">{recommendation.authorName}</h3>
                            <p className="text-xs text-gray-600">escribió una recomendación</p>
                          </div>
                        </div>

                        {/* Rating circles */}
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < recommendation.rating
                                  ? "bg-gradient-to-br from-orange-400 to-red-500"
                                  : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Title */}
                        <h4 className="font-bold text-base text-gray-900 mb-1.5">
                          {recommendation.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-700 text-sm leading-relaxed mb-1.5">
                          {recommendation.description}
                        </p>

                        {/* Visit date */}
                        <p className="text-xs text-gray-500">
                          Fecha de visita: {recommendation.visitDate}
                        </p>
                      </Card>
                    ))}
                </div>
                
                {/* Ver más button */}
                {business.recommendations.length > 2 && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                      className="text-orange-600 font-semibold hover:underline text-sm"
                    >
                      {showAllRecommendations ? "Ver menos" : "Ver más"}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-600 text-center text-sm py-6">
                No hay recomendaciones disponibles
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}