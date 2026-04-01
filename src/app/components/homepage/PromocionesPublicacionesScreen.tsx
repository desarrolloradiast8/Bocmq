import { useState } from "react";
import { ArrowLeft, Bell, BellOff, MapPin, Star, Heart, MessageCircle, Share2, Bookmark, Search } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { useFavorites } from "@/app/components/homepage/FavoritesContext";
import { PromocionesSearchScreen } from "@/app/components/homepage/PromocionesSearchScreen";
import { OfferDetailScreen } from "@/app/components/homepage/OfferDetailScreen";

interface PromocionesPublicacionesScreenProps {
  onBack: () => void;
  categoryName: string;
  selectedCity?: string;
}

// Mock data de publicaciones por categoría
const mockPublicacionesByCategory: Record<string, any[]> = {
  "Ofertas Relámpago": [
    {
      id: 101,
      business: "Tech Store Flash",
      category: "Ofertas Relámpago",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4ODMwMDI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "¡Solo por hoy! Laptop HP con 50% de descuento. Stock limitado.",
      rating: 4.9,
      reviews: 234,
      price: "Bs 2,500",
      originalPrice: "Bs 5,000",
      discount: "-50%"
    },
    {
      id: 102,
      business: "Electro Express",
      category: "Ofertas Relámpago",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3Mzc0MTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Electrodomésticos con hasta 40% OFF. ¡Últimas unidades!",
      rating: 4.7,
      reviews: 189,
      price: "Bs 900",
      originalPrice: "Bs 1,500",
      discount: "-40%"
    },
    {
      id: 103,
      business: "Moda Flash",
      category: "Ofertas Relámpago",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400",
      description: "Ropa de temporada 60% OFF. ¡Últimas 24 horas!",
      rating: 4.8,
      reviews: 345,
      price: "Bs 150",
      originalPrice: "Bs 375",
      discount: "-60%"
    },
    {
      id: 104,
      business: "Deportes Extremos",
      category: "Ofertas Relámpago",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400",
      description: "Equipamiento deportivo 45% descuento. Solo hoy.",
      rating: 4.6,
      reviews: 278,
      price: "Bs 550",
      originalPrice: "Bs 1,000",
      discount: "-45%"
    },
  ],
  "Segunda Mano": [
    {
      id: 201,
      business: "Mercado de Usados",
      category: "Segunda Mano",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1761370571873-5d869310d731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBib3V0aXF1ZXxlbnwxfHx8fDE3Njg5MTU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Ropa de segunda mano en excelente estado. Precios accesibles.",
      rating: 4.5,
      reviews: 156,
      price: "Bs 50-200"
    },
    {
      id: 202,
      business: "Muebles Seminuevos",
      category: "Segunda Mano",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY4ODc0NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Muebles de calidad a precios increíbles. Como nuevos.",
      rating: 4.6,
      reviews: 98,
      price: "Bs 300-1,500"
    },
  ],
  "Bienes y Raíces": [
    {
      id: 301,
      business: "Inmobiliaria Premium",
      category: "Bienes y Raíces",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzM3NDEwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Casa de 3 dormitorios en zona residencial. Documentos al día.",
      rating: 4.8,
      reviews: 67,
      price: "Bs 450,000"
    },
  ],
  "Cursos y Talleres": [
    {
      id: 401,
      business: "Academia Digital Pro",
      category: "Cursos y Talleres",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3Mzc0MTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Curso de Marketing Digital. Certificado incluido. Modalidad online.",
      rating: 4.9,
      reviews: 412,
      price: "Bs 800"
    },
  ],
  "Bienestar": [
    {
      id: 501,
      business: "Spa & Wellness Center",
      category: "Bienestar",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1664549760921-2198b054a592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBiZWF1dHklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY4ODQxNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Paquete de masajes relajantes. 3 sesiones por el precio de 2.",
      rating: 4.8,
      reviews: 298,
      price: "Bs 300"
    },
  ],
  "Salud": [
    {
      id: 601,
      business: "Clínica Salud Total",
      category: "Salud",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwaGVhbHRofGVufDF8fHx8MTczNzQxMDc0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Chequeo médico completo con descuento especial. Incluye análisis.",
      rating: 4.7,
      reviews: 189,
      price: "Bs 250"
    },
  ],
  "Compras": [
    {
      id: 701,
      business: "Super Store Bolivia",
      category: "Compras",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHN0b3JlfGVufDF8fHx8MTczNzQxMDc0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Gran liquidación de temporada. Todo al 30% de descuento.",
      rating: 4.6,
      reviews: 567,
      price: "Desde Bs 50"
    },
  ],
  "Comida": [
    {
      id: 801,
      business: "Restaurant Gourmet",
      category: "Comida",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1723672885092-d31ebd5a94b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJvbGl2aWFufGVufDF8fHx8MTc2ODkxNTk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Menú del día 2x1. La mejor comida tradicional boliviana.",
      rating: 4.9,
      reviews: 890,
      price: "Bs 45"
    },
  ],
  "Romance": [
    {
      id: 901,
      business: "Cenas Románticas VIP",
      category: "Romance",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXxlbnwxfHx8fDE3Mzc0MTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Cena romántica para dos con música en vivo. Ambiente íntimo.",
      rating: 4.9,
      reviews: 234,
      price: "Bs 350"
    },
  ],
  "Regalos": [
    {
      id: 1001,
      business: "Tienda de Regalos Únicos",
      category: "Regalos",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwcHJlc2VudHxlbnwxfHx8fDE3Mzc0MTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Regalos personalizados para toda ocasión. Envíos a domicilio.",
      rating: 4.7,
      reviews: 345,
      price: "Bs 80-500"
    },
  ],
  "Hogar": [
    {
      id: 1101,
      business: "Hogar & Estilo",
      category: "Hogar",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY4ODc0NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Decoración moderna para tu hogar. Colección nueva con 25% OFF.",
      rating: 4.8,
      reviews: 456,
      price: "Bs 200-2,000"
    },
  ],
  "Viajes": [
    {
      id: 1201,
      business: "Agencia de Viajes Bolivia",
      category: "Viajes",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB2YWNhdGlvbiUyMGJlYWNofGVufDF8fHx8MTczNzQxMDc0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Paquetes turísticos al Salar de Uyuni. Todo incluido.",
      rating: 4.9,
      reviews: 678,
      price: "Bs 1,200"
    },
  ],
  "Servicios para Negocios": [
    {
      id: 1301,
      business: "Consultoría Empresarial",
      category: "Servicios para Negocios",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzM3NDEwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Asesoría contable y legal para tu empresa. Primera consulta gratis.",
      rating: 4.8,
      reviews: 123,
      price: "Bs 500/mes"
    },
  ],
  "Entretenimiento": [
    {
      id: 1401,
      business: "Centro de Eventos & Shows",
      category: "Entretenimiento",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwY29uY2VydHxlbnwxfHx8fDE3Mzc0MTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Conciertos y eventos en vivo. Compra anticipada con descuento.",
      rating: 4.7,
      reviews: 789,
      price: "Bs 80-300"
    },
  ],
  "Servicios Financieros": [
    {
      id: 1501,
      business: "Asesoría Financiera Plus",
      category: "Servicios Financieros",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yeSUyMGJhbmt8ZW58MXx8fHwxNzM3NDEwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Planificación financiera personal. Inversiones y ahorros inteligentes.",
      rating: 4.9,
      reviews: 234,
      price: "Consultar"
    },
  ],
  // Filtros de tiempo
  "Hoy": [
    {
      id: 2001,
      business: "Super Ofertas Express",
      category: "Ofertas de Hoy",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400",
      description: "¡Solo hoy! Descuento especial en toda la tienda. No te lo pierdas.",
      rating: 4.8,
      reviews: 456,
      price: "Bs 99",
      originalPrice: "Bs 199",
      discount: "-50%"
    },
    {
      id: 2002,
      business: "Electrónica Flash",
      category: "Ofertas de Hoy",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
      description: "Smartphones y tablets al mejor precio. Solo por 24 horas.",
      rating: 4.7,
      reviews: 234,
      price: "Bs 1,500",
      originalPrice: "Bs 2,800",
      discount: "-46%"
    },
    {
      id: 2003,
      business: "Restaurante El Sabor",
      category: "Ofertas de Hoy",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
      description: "Menú especial 2x1. Válido solo hoy para almuerzos.",
      rating: 4.9,
      reviews: 678,
      price: "Bs 35",
      originalPrice: "Bs 70",
      discount: "-50%"
    },
  ],
  "Esta semana": [
    {
      id: 2101,
      business: "Moda & Estilo",
      category: "Ofertas de la Semana",
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
      id: 2102,
      business: "Gym Total Fitness",
      category: "Ofertas de la Semana",
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
      id: 2103,
      business: "Spa Relax Premium",
      category: "Ofertas de la Semana",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400",
      description: "Paquete de masajes y tratamientos con descuento especial.",
      rating: 4.7,
      reviews: 234,
      price: "Bs 250",
      originalPrice: "Bs 450",
      discount: "-44%"
    },
  ],
  "Este fin de semana": [
    {
      id: 2201,
      business: "Parque de Diversiones",
      category: "Fin de Semana",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1529310399831-ed472b81d589?w=400",
      description: "Entrada familiar con 50% descuento. Solo este fin de semana.",
      rating: 4.9,
      reviews: 890,
      price: "Bs 150",
      originalPrice: "Bs 300",
      discount: "-50%"
    },
    {
      id: 2202,
      business: "Cine Premium",
      category: "Fin de Semana",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
      description: "2x1 en entradas para todas las películas del fin de semana.",
      rating: 4.6,
      reviews: 456,
      price: "Bs 25",
      originalPrice: "Bs 50",
      discount: "-50%"
    },
    {
      id: 2203,
      business: "Hotel Boutique",
      category: "Fin de Semana",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      description: "Escape romántico con desayuno incluido. Fin de semana especial.",
      rating: 4.8,
      reviews: 345,
      price: "Bs 450",
      originalPrice: "Bs 750",
      discount: "-40%"
    },
  ],
  "Próxima semana": [
    {
      id: 2301,
      business: "Curso de Programación",
      category: "Próxima Semana",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
      description: "Curso intensivo de desarrollo web. Inicia la próxima semana.",
      rating: 4.9,
      reviews: 234,
      price: "Bs 800",
      originalPrice: "Bs 1,200",
      discount: "-33%"
    },
    {
      id: 2302,
      business: "Taller de Cocina Gourmet",
      category: "Próxima Semana",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400",
      description: "Aprende a cocinar platos internacionales. Cupos limitados.",
      rating: 4.7,
      reviews: 178,
      price: "Bs 350",
      originalPrice: "Bs 550",
      discount: "-36%"
    },
    {
      id: 2303,
      business: "Yoga & Meditación",
      category: "Próxima Semana",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
      description: "Clases de yoga para principiantes. Comienza próxima semana.",
      rating: 4.8,
      reviews: 289,
      price: "Bs 200",
      originalPrice: "Bs 350",
      discount: "-43%"
    },
  ],
  "Este mes": [
    {
      id: 2401,
      business: "Clínica Dental Sonrisa",
      category: "Ofertas del Mes",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400",
      description: "Limpieza dental + blanqueamiento con 40% OFF todo el mes.",
      rating: 4.9,
      reviews: 567,
      price: "Bs 300",
      originalPrice: "Bs 500",
      discount: "-40%"
    },
    {
      id: 2402,
      business: "Librería Cultural",
      category: "Ofertas del Mes",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
      description: "Libros de todos los géneros con hasta 30% descuento este mes.",
      rating: 4.6,
      reviews: 345,
      price: "Bs 50-200",
      originalPrice: "Bs 70-280",
      discount: "-30%"
    },
    {
      id: 2403,
      business: "Mueblería Moderna",
      category: "Ofertas del Mes",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
      description: "Liquidación de muebles de sala y comedor. Todo el mes.",
      rating: 4.7,
      reviews: 234,
      price: "Bs 1,500-5,000",
      originalPrice: "Bs 2,500-8,000",
      discount: "-40%"
    },
  ],
  "Todas las ofertas": [
    {
      id: 3001,
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
      id: 3002,
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
      id: 3003,
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
      id: 3004,
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
      id: 3005,
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
      id: 3006,
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
      id: 3007,
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
      id: 3008,
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
    {
      id: 3009,
      business: "Electro Express",
      category: "Ofertas Relámpago",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400",
      description: "Electrodomésticos con hasta 40% OFF. ¡Últimas unidades!",
      rating: 4.7,
      reviews: 189,
      price: "Bs 900",
      originalPrice: "Bs 1,500",
      discount: "-40%"
    },
    {
      id: 3010,
      business: "Cenas Románticas VIP",
      category: "Romance",
      city: "Cochabamba",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400",
      description: "Cena romántica para dos con música en vivo. Ambiente íntimo.",
      rating: 4.9,
      reviews: 234,
      price: "Bs 350",
      originalPrice: "Bs 500",
      discount: "-30%"
    },
    {
      id: 3011,
      business: "Clínica Salud Total",
      category: "Salud",
      city: "Santa Cruz",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400",
      description: "Chequeo médico completo con descuento especial. Incluye análisis.",
      rating: 4.7,
      reviews: 189,
      price: "Bs 250",
      originalPrice: "Bs 400",
      discount: "-37%"
    },
    {
      id: 3012,
      business: "Tienda de Regalos Únicos",
      category: "Regalos",
      city: "La Paz",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400",
      description: "Regalos personalizados para toda ocasión. Envíos a domicilio.",
      rating: 4.7,
      reviews: 345,
      price: "Bs 150",
      originalPrice: "Bs 250",
      discount: "-40%"
    },
  ],
};

export function PromocionesPublicacionesScreen({ 
  onBack, 
  categoryName, 
  selectedCity = "" 
}: PromocionesPublicacionesScreenProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [showSearchScreen, setShowSearchScreen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [subscribedPosts, setSubscribedPosts] = useState<Set<number>>(new Set());
  const { isFavorite, toggleFavorite } = useFavorites();

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    // Aquí podrías agregar lógica para suscribirse a notificaciones push
  };
  
  const toggleSubscription = (postId: number) => {
    setSubscribedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
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

  // Obtener publicaciones de la categoría
  const allPosts = mockPublicacionesByCategory[categoryName] || [];
  
  // Filtrar por ciudad si está seleccionada
  const filteredPosts = selectedCity 
    ? allPosts.filter(post => post.city === selectedCity)
    : allPosts;

  const displayCity = selectedCity || "Todo Bolivia";
  
  // Determinar el número de columnas según la categoría
  const gridCols = categoryName === "Todas las ofertas" 
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con ciudad y notificaciones */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="w-full px-2 py-3">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3 flex-1">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
              <div className="flex-1">
                <h1 className="text-lg font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
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
          
          {/* Ciudad y Notificaciones - MÁS PEQUEÑO */}
          <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-2 gap-3">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              <span className={`font-medium text-xs ${selectedCity ? 'text-gray-900' : 'text-red-600'}`}>
                {displayCity}
              </span>
            </div>
            <button
              onClick={toggleNotifications}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs ${
                notificationsEnabled
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
              }`}
            >
              {notificationsEnabled ? (
                <>
                  <Bell className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Notificaciones activadas</span>
                </>
              ) : (
                <>
                  <BellOff className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Recibir notificaciones</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content - Publicaciones */}
      <div className="w-full px-2 py-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No hay publicaciones disponibles en {displayCity} para esta categoría
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Mostrando {filteredPosts.length} {filteredPosts.length === 1 ? 'promoción' : 'promociones'}
            </p>
            
            <div className={`grid ${gridCols} gap-4`}>
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubscription(post.id);
                      }}
                      className="p-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                    >
                      {subscribedPosts.has(post.id) ? (
                        <Bell className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
                      ) : (
                        <BellOff className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>
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

                    {/* Price and Ver más Button - Same Line */}
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
          </>
        )}
      </div>
    </div>
  );
}