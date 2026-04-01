import { Calendar, Briefcase, Music, GraduationCap, Users, Building2, Car, Sparkles, Home, Heart, Laptop, Gift, UtensilsCrossed, Globe, Mic, TrendingUp, Church, Network, HandshakeIcon } from "lucide-react";

interface EventosMegaMenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

// Selección de las categorías principales más representativas
const featuredEventCategories = [
  { 
    id: "boliches", 
    name: "Boliches", 
    icon: Music,
    color: "from-purple-400 to-pink-500",
  },
  { 
    id: "capacitaciones", 
    name: "Capacitaciones", 
    icon: GraduationCap,
    color: "from-blue-400 to-indigo-500",
  },
  { 
    id: "conciertos", 
    name: "Conciertos", 
    icon: Mic,
    color: "from-pink-400 to-rose-500",
  },
  { 
    id: "cursos-talleres", 
    name: "Cursos y Talleres", 
    icon: GraduationCap,
    color: "from-teal-400 to-cyan-500",
  },
  { 
    id: "eventos-corporativos", 
    name: "Eventos Corporativos", 
    icon: Briefcase,
    color: "from-slate-400 to-gray-500",
  },
  { 
    id: "eventos-culturales", 
    name: "Eventos Culturales", 
    icon: Globe,
    color: "from-amber-400 to-orange-500",
  },
  { 
    id: "eventos-gastronómicos", 
    name: "Eventos Gastronómicos", 
    icon: UtensilsCrossed,
    color: "from-orange-400 to-red-500",
  },
  { 
    id: "ferias-expos", 
    name: "Ferias y Expos", 
    icon: Building2,
    color: "from-emerald-400 to-green-500",
  },
  { 
    id: "networkings", 
    name: "Networkings", 
    icon: Network,
    color: "from-sky-400 to-blue-500",
  },
  { 
    id: "webinars", 
    name: "Webinars", 
    icon: Laptop,
    color: "from-indigo-400 to-purple-500",
  },
];

export function EventosMegaMenuDropdown({ isOpen, onClose }: EventosMegaMenuDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="bg-white border-t-2 border-orange-500 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Eventos
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Descubre eventos increíbles cerca de ti
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-5 gap-6">
          {featuredEventCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className="flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-200 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <div className={`bg-gradient-to-br ${category.color} rounded-full p-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-900 text-center leading-tight max-w-[100px]">
                  {category.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Time Filters */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Descubre eventos por fecha
          </h3>
          <div className="flex gap-3 flex-wrap">
            {[
              { id: "hoy", label: "HOY" },
              { id: "esta-semana", label: "ESTA SEMANA" },
              { id: "este-fin-de-semana", label: "ESTE FIN DE SEMANA" },
              { id: "proxima-semana", label: "PRÓXIMA SEMANA" },
              { id: "este-mes", label: "ESTE MES" },
            ].map((filter) => (
              <button
                key={filter.id}
                className="px-5 py-2 bg-black hover:bg-gray-800 text-white text-sm font-semibold rounded-xl shadow-md transition-all hover:scale-105"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
