import { useState, useRef } from "react";
import { Calendar, MapPin, Clock, Heart, ArrowLeft, Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card } from "@/app/components/ui/card";
import logoImage from "figma:asset/5bd1390b600814efd35c7824f6d4aa947cc9bd64.png";
import { eventCategories } from "@/app/components/events/event-categories";

const timeOptions = [];
for (let hour = 0; hour < 24; hour++) {
  for (let minute = 0; minute < 60; minute += 30) {
    const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    timeOptions.push(timeString);
  }
}

const mockEvents = [
  {
    id: 1,
    title: "Eventrid",
    category: "Eventos digitales",
    startDate: "29 ene. 2026",
    endDate: "29 ene. 2026",
    location: "Calle potosi, Montero",
    startTime: "09:06",
    endTime: "18:09",
    description: "Realiza tus eventos 100% online con ⭐Eventrid Live⭐. Nuestra plataforma permite generar ingresos organizando conciertos, seminarios, obras de teatro, conversatorios, charlas, conferencias y lo que imagines que pueda ser entregado al público por Internet. Los espectadores compran su entrada en línea de manera rápida y segura, y disfrutan de tu transmisión desde cualquier dispositivo.",
    image: "https://images.unsplash.com/photo-1669670617524-5f08060c8dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmNlcnQlMjBwYXJ0eXxlbnwxfHx8fDE3Njg4NDE3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "WEBINAR de Fotogrametría con Drones",
    category: "Webinars",
    startDate: "30 ene. 2026",
    endDate: "30 ene. 2026",
    location: "https://bit.ly/Fotogrametría-Drontec-Online",
    startTime: "19:09",
    endTime: "20:09",
    description: "Aprende las últimas técnicas de fotogrametría con drones en este webinar exclusivo.",
    image: "https://images.unsplash.com/photo-1765438863717-49fca900f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njg4NDE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Competencia Nacional de Investigaciones Estudiantiles",
    category: "Eventos de ciencia y tecnología",
    startDate: "31 ene. 2026",
    endDate: "31 ene. 2026",
    location: "https://www.facebook.com/WitCamp-Bolivia-102807108160733/",
    startTime: "00:09",
    endTime: "00:10",
    description: "🔥 ATENCIÓN 🔥 🎓 ¡CONVOCATORIA ABIERTA! 🎓 ¿Te gusta la ciencia? 🧪👨‍🔬 ¿Tienes un proyecto científico que cambiará Bolivia? 🇧🇴👩‍🔬 Entonces, esta oportunidad es para tí 💪 🚀 Buscamos al \"Rockstar\" 🎸 de la ciencia para participar de la 1ra \"Competencia Nacional de Investigaciones Estudiantiles\" Bolivia 2020. 🏆 Llamá a tu equipo,📋alistá tu proyecto🔬y sé parte de la experiencia científica más importante del año ✨ 📍 Envía tu postulación del 17 de septiembre al 5 de octubre a través del siguiente enlace: https://forms.gle/AjCeVasiGkJbRJXBA Descarga las bases de la convocatoria en: https://drive.google.com/file/d/1NiBIFdyhp1LPT2cVDPt8WhA27eBvMDEf/view?usp=drivesdk No olvidés seguirnos en todas nuestras redes sociales 📱 ¡Que comience el reto! 🎯 #WitCamp #BoliviaQuiereCiencias",
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjBmZXN0aXZhbHxlbnwxfHx8fDE3Njg4NDE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Festival de Música Latina",
    category: "Conciertos",
    startDate: "01 feb. 2026",
    endDate: "01 feb. 2026",
    location: "Plaza Principal, La Paz",
    startTime: "20:00",
    endTime: "23:00",
    description: "Una noche de música latina con artistas locales e internacionales. Disfruta de los mejores ritmos en vivo.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBsaXZlfGVufDF8fHx8MTc2ODg0MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Taller de Emprendimiento Digital",
    category: "Capacitaciones",
    startDate: "02 feb. 2026",
    endDate: "02 feb. 2026",
    location: "Centro de Innovación, Santa Cruz",
    startTime: "14:00",
    endTime: "18:00",
    description: "Aprende las mejores estrategias para lanzar tu negocio digital en Bolivia.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvcmtzaG9wJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY4ODQxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Expo Tecnología 2026",
    category: "Ferias y expos",
    startDate: "03 feb. 2026",
    endDate: "05 feb. 2026",
    location: "Centro de Convenciones, Cochabamba",
    startTime: "09:00",
    endTime: "18:00",
    description: "La feria más grande de tecnología en Bolivia. Conoce las últimas innovaciones y tendencias.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXhwbyUyMGZhaXJ8ZW58MXx8fHwxNzY4ODQxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    title: "Networking Empresarial 2026",
    category: "Networkings",
    startDate: "07 feb. 2026",
    endDate: "07 feb. 2026",
    location: "Hotel Los Tajibos, Santa Cruz",
    startTime: "18:00",
    endTime: "21:00",
    description: "Conecta con empresarios y emprendedores de toda Bolivia. Una oportunidad única para expandir tu red de contactos profesionales.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JraW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY4ODQxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    title: "Feria Gastronómica Boliviana",
    category: "Eventos gastronómicos",
    startDate: "08 feb. 2026",
    endDate: "10 feb. 2026",
    location: "Parque Urbano Central, La Paz",
    startTime: "10:00",
    endTime: "22:00",
    description: "Celebra la riqueza culinaria de Bolivia. Degusta platos tradicionales y modernos de todas las regiones del país.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWwlMjBnYXN0cm9ub215fGVufDF8fHx8MTc2ODg0MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    title: "Curso Intensivo de Marketing Digital",
    category: "Cursos y talleres",
    startDate: "12 feb. 2026",
    endDate: "14 feb. 2026",
    location: "Auditorio Universidad Mayor, Cochabamba",
    startTime: "08:00",
    endTime: "17:00",
    description: "Domina las estrategias más efectivas de marketing digital en 3 días intensivos. Incluye certificación.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBkaWdpdGFsJTIwY291cnNlfGVufDF8fHx8MTc2ODg0MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 10,
    title: "Concierto Sinfónico",
    category: "Eventos musicales",
    startDate: "15 feb. 2026",
    endDate: "15 feb. 2026",
    location: "Teatro Municipal, Sucre",
    startTime: "19:00",
    endTime: "22:00",
    description: "Disfruta de la mejor música clásica interpretada por la Orquesta Sinfónica Nacional.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBjb25jZXJ0fGVufDF8fHx8MTc2ODg0MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 11,
    title: "Summit de Emprendedores Bolivia 2026",
    category: "Eventos para emprendedores",
    startDate: "20 feb. 2026",
    endDate: "21 feb. 2026",
    location: "Centro de Convenciones, Santa Cruz",
    startTime: "08:00",
    endTime: "19:00",
    description: "El evento más importante para emprendedores de Bolivia. Conecta con inversionistas, mentores y otros emprendedores.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBzdW1taXR8ZW58MXx8fHwxNzY4ODQxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 12,
    title: "Festival de Arte Urbano",
    category: "Eventos culturales",
    startDate: "25 feb. 2026",
    endDate: "27 feb. 2026",
    location: "Plaza San Francisco, La Paz",
    startTime: "10:00",
    endTime: "20:00",
    description: "Celebra el arte urbano boliviano con exposiciones, murales en vivo, música y más.",
    image: "https://images.unsplash.com/photo-1658894663006-851b08839866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMGFydCUyMGZlc3RpdmFsJTIwZ3JhZmZpdGl8ZW58MXx8fHwxNzY5NzAzNDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 13,
    title: "Carrera Atlética 10K La Paz",
    category: "Eventos deportivos",
    startDate: "01 mar. 2026",
    endDate: "01 mar. 2026",
    location: "Parque Metropolitano, La Paz",
    startTime: "07:00",
    endTime: "12:00",
    description: "Participa en la carrera atlética más importante de La Paz. Todas las edades bienvenidas.",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwcmFjZSUyMG1hcmF0aG9ufGVufDF8fHx8MTc2ODg0MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 14,
    title: "Exposición de Fotografía Boliviana",
    category: "Eventos culturales",
    startDate: "05 mar. 2026",
    endDate: "10 mar. 2026",
    location: "Galería de Arte Nacional, Sucre",
    startTime: "09:00",
    endTime: "18:00",
    description: "Descubre la belleza de Bolivia a través de los lentes de fotógrafos nacionales.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzY4ODQxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 15,
    title: "Hackathon Bolivia Tech 2026",
    category: "Eventos de ciencia y tecnología",
    startDate: "15 mar. 2026",
    endDate: "17 mar. 2026",
    location: "Universidad Católica Boliviana, Cochabamba",
    startTime: "08:00",
    endTime: "20:00",
    description: "48 horas de código intensivo. Forma tu equipo y desarrolla soluciones tecnológicas innovadoras.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjB0ZWNofGVufDF8fHx8MTc2ODg0MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 16,
    title: "Feria del Libro Boliviano",
    category: "Eventos culturales",
    startDate: "20 mar. 2026",
    endDate: "25 mar. 2026",
    location: "Plaza Mayor, Santa Cruz",
    startTime: "09:00",
    endTime: "21:00",
    description: "La feria literaria más grande de Bolivia. Conoce autores, compra libros y asiste a presentaciones.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwZmFpciUyMGxpdGVyYXR1cmV8ZW58MXx8fHwxNzY4ODQxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const mockOrganizers = [
  {
    id: 1,
    name: "EventosPro Bolivia",
    eventsCount: 24,
    description: "Organizadores de eventos corporativos y sociales",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY4ODQxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 1250,
  },
  {
    id: 2,
    name: "Cultura Viva",
    eventsCount: 18,
    description: "Promovemos eventos culturales y artísticos",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjdWx0dXJlJTIwZXZlbnR8ZW58MXx8fHwxNzY4ODQxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 890,
  },
  {
    id: 3,
    name: "Tech Bolivia",
    eventsCount: 32,
    description: "Eventos de tecnología e innovación",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODg0MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 2100,
  },
  {
    id: 4,
    name: "Música & Vida",
    eventsCount: 15,
    description: "Los mejores conciertos y festivales",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwZmVzdGl2YWwlMjBtdXNpY3xlbnwxfHx8fDE3Njg4NDE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    followers: 3400,
  },
];

interface EventsProps {
  onBack: () => void;
}

export function Events({ onBack }: EventsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mainView, setMainView] = useState<"eventos" | "organizadores">("eventos");
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "detail" | "all-events">("list");
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllOrganizers, setShowAllOrganizers] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [detailSource, setDetailSource] = useState<"eventos" | "organizadores">("eventos");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
  const [showAllRelatedEvents, setShowAllRelatedEvents] = useState(false);
  
  const categoriesScrollRef = useRef<HTMLDivElement>(null);

  // Form states
  const [eventTitle, setEventTitle] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showEndDate, setShowEndDate] = useState(false);
  const [eventDescription, setEventDescription] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const [onlineLink, setOnlineLink] = useState("");
  const [location, setLocation] = useState("");
  const [ticketLink, setTicketLink] = useState("");
  const [wantsSponsor, setWantsSponsor] = useState(false);
  const [wantsServices, setWantsServices] = useState(false);
  const [proposalEmail, setProposalEmail] = useState("");
  const [photoFile, setPhotoFile] = useState<string | null>(null);

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

  const handlePublish = () => {
    alert("Evento publicado exitosamente!");
    setShowCreateForm(false);
    // Reset form
    setEventTitle("");
    setSelectedProfile("");
    setStartDate("");
    setStartTime("");
    setEndDate("");
    setEndTime("");
    setShowEndDate(false);
    setEventDescription("");
    setEventCategory("");
    setIsOnline(false);
    setOnlineLink("");
    setLocation("");
    setTicketLink("");
    setWantsSponsor(false);
    setWantsServices(false);
    setProposalEmail("");
    setPhotoFile(null);
  };

  const getFilteredEvents = () => {
    if (selectedCategory) {
      return mockEvents.filter(event => event.category === selectedCategory);
    }
    
    if (selectedFilter) {
      const today = new Date();
      const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      
      return mockEvents.filter(event => {
        // Parse event date (format: "01 jun. 2020")
        const eventDateStr = event.startDate;
        const monthMap: { [key: string]: number } = {
          'ene': 0, 'feb': 1, 'mar': 2, 'abr': 3, 'may': 4, 'jun': 5,
          'jul': 6, 'ago': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dic': 11
        };
        
        const parts = eventDateStr.split(' ');
        const day = parseInt(parts[0]);
        const month = monthMap[parts[1].replace('.', '')];
        const year = parseInt(parts[2]);
        const eventDate = new Date(year, month, day);
        
        switch(selectedFilter) {
          case 'today':
            return eventDate.toDateString() === todayStart.toDateString();
          
          case 'week': {
            const weekEnd = new Date(todayStart);
            weekEnd.setDate(weekEnd.getDate() + 7);
            return eventDate >= todayStart && eventDate < weekEnd;
          }
          
          case 'weekend': {
            const dayOfWeek = todayStart.getDay();
            const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
            const saturday = new Date(todayStart);
            saturday.setDate(saturday.getDate() + daysUntilSaturday);
            const monday = new Date(saturday);
            monday.setDate(monday.getDate() + 2);
            return eventDate >= saturday && eventDate < monday;
          }
          
          case 'nextweek': {
            const nextWeekStart = new Date(todayStart);
            nextWeekStart.setDate(nextWeekStart.getDate() + 7);
            const nextWeekEnd = new Date(nextWeekStart);
            nextWeekEnd.setDate(nextWeekEnd.getDate() + 7);
            return eventDate >= nextWeekStart && eventDate < nextWeekEnd;
          }
          
          case 'month': {
            const monthEnd = new Date(todayStart.getFullYear(), todayStart.getMonth() + 1, 0);
            return eventDate >= todayStart && eventDate <= monthEnd;
          }
          
          default:
            return true;
        }
      });
    }
    
    return mockEvents;
  };

  const filteredEvents = getFilteredEvents();
  
  const selectedEvent = selectedEventId ? mockEvents.find(e => e.id === selectedEventId) : null;

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-6">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 rounded-3xl shadow-lg border-2 border-orange-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuevo evento</h2>

            <div className="space-y-6">
              {/* Foto */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Foto</label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setPhotoFile(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-6 file:rounded-2xl file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  />
                </div>
                {photoFile && (
                  <img src={photoFile} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-2xl" />
                )}
              </div>

              {/* Título del evento */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Título del evento:</label>
                <Input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  className="w-full py-6 rounded-2xl border-2 border-gray-300 focus:border-orange-500"
                />
              </div>

              {/* Elige un perfil */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Elige un perfil:</label>
                <select
                  value={selectedProfile}
                  onChange={(e) => setSelectedProfile(e.target.value)}
                  className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-white"
                >
                  <option value="">Seleccione un perfil</option>
                  <option value="DesarrollandoApp">DesarrollandoApp</option>
                  <option value="Ivanmuebles">Ivanmuebles</option>
                  <option value="Prueba">Prueba</option>
                </select>
              </div>

              {/* Fecha de inicio */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Fecha de inicio:</label>
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Hora de inicio:</label>
                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-white"
                  >
                    <option value="">Seleccione hora</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Añadir Fecha de finalización */}
              {!showEndDate && (
                <Button
                  onClick={() => setShowEndDate(true)}
                  className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-6 py-3 rounded-2xl font-semibold"
                >
                  <Plus className="w-5 h-5 inline mr-2" />
                  Añadir Fecha de finalización
                </Button>
              )}

              {/* Fecha de finalización */}
              {showEndDate && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-700 font-semibold">Fecha y hora de finalización</h3>
                    <Button
                      onClick={() => {
                        setShowEndDate(false);
                        setEndDate("");
                        setEndTime("");
                      }}
                      className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-2xl font-semibold flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Quitar
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 p-4 bg-orange-50 rounded-2xl">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Fecha de finalización:</label>
                      <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Hora de finalización:</label>
                      <select
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-white"
                      >
                        <option value="">Seleccione hora</option>
                        {timeOptions.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Describe tu evento */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Describe tu evento:</label>
                <textarea
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  rows={4}
                  className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 resize-none"
                />
              </div>

              {/* Categoría de evento */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Categoría de evento:</label>
                <select
                  value={eventCategory}
                  onChange={(e) => setEventCategory(e.target.value)}
                  className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-white"
                >
                  <option value="">Seleccione categoría</option>
                  {eventCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Este evento es en línea */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isOnline"
                  checked={isOnline}
                  onChange={(e) => setIsOnline(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="isOnline" className="text-gray-700 font-semibold">
                  Este evento es en línea
                </label>
              </div>

              {/* Enlace al evento en línea */}
              {isOnline && (
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <label className="block text-gray-700 font-semibold mb-2">Enlace al evento en línea:</label>
                  <Input
                    type="url"
                    placeholder="http://"
                    value={onlineLink}
                    onChange={(e) => setOnlineLink(e.target.value)}
                    className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Agrega un enlace para que las personas sepan cómo acceder cuando empiece el evento
                  </p>
                </div>
              )}

              {/* Lugar y dirección */}
              {!isOnline && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Lugar y dirección:</label>
                  <Input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Agrega una ubicación física para que las personas se unan a tu evento.
                  </p>
                </div>
              )}

              {/* Enlace a boletos */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Enlace a boletos:</label>
                <Input
                  type="url"
                  placeholder="http://"
                  value={ticketLink}
                  onChange={(e) => setTicketLink(e.target.value)}
                  className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Agrega un enlace a la página de compra de boletos en línea.
                </p>
              </div>

              {/* Deseo recibir propuestas del auspiciador */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="wantsSponsor"
                  checked={wantsSponsor}
                  onChange={(e) => setWantsSponsor(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="wantsSponsor" className="text-gray-700 font-semibold">
                  Deseo recibir propuestas del auspiciador
                </label>
              </div>

              {/* Deseo recibir propuestas de servicios */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="wantsServices"
                  checked={wantsServices}
                  onChange={(e) => setWantsServices(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="wantsServices" className="text-gray-700 font-semibold">
                  Deseo recibir propuestas de servicios
                </label>
              </div>

              {/* Correo electrónico para recibir propuestas */}
              {(wantsSponsor || wantsServices) && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Correo electrónico para recibir propuestas:
                  </label>
                  <Input
                    type="email"
                    value={proposalEmail}
                    onChange={(e) => setProposalEmail(e.target.value)}
                    className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500"
                  />
                </div>
              )}

              {/* Botón Publicar */}
              <Button
                onClick={handlePublish}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-6 rounded-2xl text-lg font-semibold shadow-lg"
              >
                Publicar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pt-6 px-4">
      {viewMode === "all-events" ? (
        /* All Events View - Full Screen Grid */
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              {detailSource === "organizadores" ? "Todos los organizadores" : "Todos los eventos"}
            </h1>
            <p className="text-sm text-gray-600">
              {detailSource === "organizadores" ? "Explora todos los organizadores disponibles" : "Explora todos los eventos disponibles"}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(detailSource === "organizadores" 
              ? mockEvents.slice(6, mockEvents.length)
              : mockEvents
            ).map((event) => (
              <Card
                key={event.id}
                onClick={() => {
                  setSelectedEventId(event.id);
                  setViewMode("detail");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                  
                  <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                    <Calendar className="w-3 h-3 text-orange-600 flex-shrink-0" />
                    <span className="truncate">{event.startDate}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : viewMode === "detail" && selectedEvent ? (
        /* Event Detail View - Full Screen */
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              {detailSource === "organizadores" ? "Detalle de organizadores" : "Detalle del Evento"}
            </h1>
            <p className="text-sm text-gray-600">Información completa del evento</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image */}
              <Card className="rounded-3xl overflow-hidden border-2 border-gray-100">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-96 object-cover"
                />
              </Card>

              {/* Description */}
              <Card className="p-8 rounded-3xl border-2 border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedEvent.description}
                </p>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Info Card */}
              <Card className="p-6 rounded-3xl border-2 border-orange-200 bg-white sticky top-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">{selectedEvent.title}</h1>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Fecha</p>
                      <p className="font-semibold text-gray-900">
                        {selectedEvent.startDate} - {selectedEvent.endDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Ubicación</p>
                      <p className="font-semibold text-gray-900">{selectedEvent.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Horario</p>
                      <p className="font-semibold text-gray-900">
                        {selectedEvent.startTime} - {selectedEvent.endTime}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <Button
                    onClick={() => alert("Calendario - Agregar a mi calendario")}
                    className="w-full bg-orange-100 text-orange-700 hover:bg-orange-200 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Agregar al calendario
                  </Button>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white py-4 rounded-2xl font-semibold transition-all">
                      Me interesa
                    </Button>

                    <Button className="px-4 py-4 bg-gray-100 hover:bg-orange-500 rounded-2xl transition-all group">
                      <Heart className="w-5 h-5 text-gray-600 group-hover:text-white transition-all" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* More Events Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {detailSource === "organizadores" ? "Más organizadores" : "Más eventos"}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {(detailSource === "organizadores" 
                ? mockEvents.slice(6, mockEvents.length)
                : mockEvents
              )
                .filter((event) => event.id !== selectedEvent.id)
                .slice(0, 4)
                .map((event) => (
                  <Card
                    key={event.id}
                    onClick={() => {
                      setSelectedEventId(event.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Calendar className="w-3 h-3 text-orange-600 flex-shrink-0" />
                        <span className="truncate">{event.startDate}</span>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  setViewMode("all-events");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-all"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* List View */
        <>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Eventos
            </h1>
            <p className="text-sm text-gray-600">Descubre eventos increíbles cerca de ti</p>
          </div>

          {/* Date Filters */}
          <div className="border-t-2 border-b-2 border-gray-200 py-4 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    if (selectedFilter === "today") {
                      setSelectedFilter(null);
                    } else {
                      setSelectedFilter("today");
                      setSelectedCategory(null);
                    }
                  }}
                  className={`px-3 py-1.5 font-medium rounded-lg border transition-all whitespace-nowrap shadow-sm text-sm flex items-center gap-1.5 ${
                    selectedFilter === "today"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700"
                      : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500"
                  }`}
                >
                  Hoy
                  {selectedFilter === "today" && (
                    <X className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
                <button
                  onClick={() => {
                    if (selectedFilter === "week") {
                      setSelectedFilter(null);
                    } else {
                      setSelectedFilter("week");
                      setSelectedCategory(null);
                    }
                  }}
                  className={`px-3 py-1.5 font-medium rounded-lg border transition-all whitespace-nowrap shadow-sm text-sm flex items-center gap-1.5 ${
                    selectedFilter === "week"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700"
                      : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500"
                  }`}
                >
                  Esta semana
                  {selectedFilter === "week" && (
                    <X className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
                <button
                  onClick={() => {
                    if (selectedFilter === "weekend") {
                      setSelectedFilter(null);
                    } else {
                      setSelectedFilter("weekend");
                      setSelectedCategory(null);
                    }
                  }}
                  className={`px-3 py-1.5 font-medium rounded-lg border transition-all whitespace-nowrap shadow-sm text-sm flex items-center gap-1.5 ${
                    selectedFilter === "weekend"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700"
                      : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500"
                  }`}
                >
                  Este fin de semana
                  {selectedFilter === "weekend" && (
                    <X className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
                <button
                  onClick={() => {
                    if (selectedFilter === "nextweek") {
                      setSelectedFilter(null);
                    } else {
                      setSelectedFilter("nextweek");
                      setSelectedCategory(null);
                    }
                  }}
                  className={`px-3 py-1.5 font-medium rounded-lg border transition-all whitespace-nowrap shadow-sm text-sm flex items-center gap-1.5 ${
                    selectedFilter === "nextweek"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700"
                      : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500"
                  }`}
                >
                  Próxima semana
                  {selectedFilter === "nextweek" && (
                    <X className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
                <button
                  onClick={() => {
                    if (selectedFilter === "month") {
                      setSelectedFilter(null);
                    } else {
                      setSelectedFilter("month");
                      setSelectedCategory(null);
                    }
                  }}
                  className={`px-3 py-1.5 font-medium rounded-lg border transition-all whitespace-nowrap shadow-sm text-sm flex items-center gap-1.5 ${
                    selectedFilter === "month"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700"
                      : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500"
                  }`}
                >
                  Este mes
                  {selectedFilter === "month" && (
                    <X className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Categories Section - Horizontal Scroll */}
          <div className="border-t border-b border-gray-200 py-2 mb-6">
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
                      setSelectedCategory(null);
                      setSelectedFilter(null);
                    }}
                    className={`px-3 py-1.5 font-medium rounded-lg border transition-all whitespace-nowrap shadow-sm text-sm flex items-center gap-1.5 ${
                      !selectedCategory
                        ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700"
                        : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500"
                    }`}
                  >
                    Todas
                    {!selectedCategory && (
                      <X className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>
                  
                  {eventCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        if (selectedCategory === category) {
                          setSelectedCategory(null);
                        } else {
                          setSelectedCategory(category);
                          setSelectedFilter(null);
                        }
                      }}
                      className={`px-3 py-1.5 font-medium rounded-lg border transition-all whitespace-nowrap shadow-sm text-sm flex items-center gap-1.5 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-600 hover:from-orange-600 hover:to-red-700"
                          : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-orange-500"
                      }`}
                    >
                      {category}
                      {selectedCategory === category && (
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

          {/* Show filtered events if a filter or category is selected */}
          {(selectedFilter || selectedCategory) ? (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-gray-700">
                  {selectedFilter === "today" && "Eventos de hoy"}
                  {selectedFilter === "week" && "Eventos de esta semana"}
                  {selectedFilter === "weekend" && "Eventos de este fin de semana"}
                  {selectedFilter === "nextweek" && "Eventos de la próxima semana"}
                  {selectedFilter === "month" && "Eventos de este mes"}
                  {selectedCategory && !selectedFilter && `Eventos: ${selectedCategory}`}
                </h2>
              </div>
              {filteredEvents.length === 0 ? (
                <div className="text-center py-20">
                  <img
                    src={logoImage}
                    alt="Logo"
                    className="w-32 h-32 mx-auto mb-6 opacity-30 grayscale"
                  />
                  <p className="text-2xl text-gray-500 font-semibold">No existen datos para mostrar</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredEvents.map((event) => (
                    <Card
                      key={event.id}
                      onClick={() => {
                        setSelectedEventId(event.id);
                        setViewMode("detail");
                        setDetailSource("eventos");
                      }}
                      className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                        
                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                          <Calendar className="w-3 h-3 text-orange-600 flex-shrink-0" />
                          <span className="truncate">{event.startDate}</span>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Eventos Destacados Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-700">Eventos destacados</h2>
                  <button
                    onClick={() => setShowAllFeatured(!showAllFeatured)}
                    className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-all"
                  >
                    {showAllFeatured ? "Ver menos" : "Ver más"}
                  </button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockEvents.slice(0, showAllFeatured ? mockEvents.length : 4).map((event) => (
                    <Card
                      key={event.id}
                      onClick={() => {
                        setSelectedEventId(event.id);
                        setViewMode("detail");
                        setDetailSource("eventos");
                      }}
                      className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                        
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Calendar className="w-3 h-3 text-orange-600 flex-shrink-0" />
                          <span className="truncate">{event.startDate}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Organizadores Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-700">Organizadores</h2>
                  <button
                    onClick={() => setShowAllOrganizers(!showAllOrganizers)}
                    className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-all"
                  >
                    {showAllOrganizers ? "Ver menos" : "Ver más"}
                  </button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockEvents.slice(6, showAllOrganizers ? mockEvents.length : 10).map((event) => (
                    <Card
                      key={event.id}
                      onClick={() => {
                        setSelectedEventId(event.id);
                        setViewMode("detail");
                        setDetailSource("organizadores");
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                        
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Calendar className="w-3 h-3 text-orange-600 flex-shrink-0" />
                          <span className="truncate">{event.startDate}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Explora por categorías Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-700">Explora por categorías</h2>
                  <button
                    onClick={() => setShowAllCategories(!showAllCategories)}
                    className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-all"
                  >
                    {showAllCategories ? "Ver menos" : "Ver más"}
                  </button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockEvents.slice(0, showAllCategories ? mockEvents.length : 4).map((event) => (
                    <Card
                      key={event.id}
                      onClick={() => {
                        setSelectedEventId(event.id);
                        setViewMode("detail");
                        setDetailSource("eventos");
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                        
                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                          <Calendar className="w-3 h-3 text-orange-600 flex-shrink-0" />
                          <span className="truncate">{event.startDate}</span>
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          {event.category}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Events List or Detail */}
          {!selectedFilter && !selectedCategory && selectedEvent ? (
            /* Event Detail */
            <div className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Image */}
                  <Card className="rounded-3xl overflow-hidden border-2 border-gray-100">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-96 object-cover"
                    />
                  </Card>

                  {/* Description */}
                  <Card className="p-8 rounded-3xl border-2 border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedEvent.description}
                    </p>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Event Info Card */}
                  <Card className="p-6 rounded-3xl border-2 border-orange-200 bg-white sticky top-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">{selectedEvent.title}</h1>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Fecha</p>
                          <p className="font-semibold text-gray-900">
                            {selectedEvent.startDate} - {selectedEvent.endDate}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Ubicación</p>
                          <p className="font-semibold text-gray-900">{selectedEvent.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Horario</p>
                          <p className="font-semibold text-gray-900">
                            {selectedEvent.startTime} - {selectedEvent.endTime}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                      <Button
                        onClick={() => alert("Calendario - Agregar a mi calendario")}
                        className="w-full bg-orange-100 text-orange-700 hover:bg-orange-200 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-5 h-5" />
                        Agregar al calendario
                      </Button>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white py-4 rounded-2xl font-semibold transition-all">
                          Me interesa
                        </Button>

                        <Button className="px-4 py-4 bg-gray-100 hover:bg-orange-500 rounded-2xl transition-all group">
                          <Heart className="w-5 h-5 text-gray-600 group-hover:text-white transition-all" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* More Events Section */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Más eventos de {selectedEvent.category}</h2>
                  <button
                    onClick={() => setShowAllRelatedEvents(!showAllRelatedEvents)}
                    className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-all"
                  >
                    {showAllRelatedEvents ? "Ver menos" : "Ver más"}
                  </button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockEvents
                    .filter(event => event.category === selectedEvent.category && event.id !== selectedEvent.id)
                    .slice(0, showAllRelatedEvents ? undefined : 8)
                    .map((event) => (
                      <Card
                        key={event.id}
                        onClick={() => {
                          setSelectedEventId(event.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                      >
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                          
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Calendar className="w-3 h-3 text-orange-600 flex-shrink-0" />
                            <span className="truncate">{event.startDate}</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}