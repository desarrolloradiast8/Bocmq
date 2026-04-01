import { Zap, HandCoins, Home as HomeIcon, BookOpen, Heart, Activity, ShoppingBag, UtensilsCrossed, HeartHandshake, Gift, Sofa, Plane, Briefcase, Music, DollarSign } from "lucide-react";

interface PromocionesMegaMenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToPromociones?: () => void;
}

// Grid de 3 columnas x 5 filas (14 categorías + "Ver más" = 15 items)
const displayCategories = [
  // Fila 1
  { id: "ofertas-relampago", name: "Ofertas Relámpago" },
  { id: "segunda-mano", name: "Segunda Mano" },
  { id: "bienes-raices", name: "Bienes y Raíces" },
  // Fila 2
  { id: "cursos-talleres", name: "Cursos y Talleres" },
  { id: "bienestar", name: "Bienestar" },
  { id: "salud", name: "Salud" },
  // Fila 3
  { id: "compras", name: "Compras" },
  { id: "comida", name: "Comida" },
  { id: "romance", name: "Romance" },
  // Fila 4
  { id: "regalos", name: "Regalos" },
  { id: "hogar", name: "Hogar" },
  { id: "viajes", name: "Viajes" },
  // Fila 5
  { id: "servicios-negocios", name: "Servicios para Negocios" },
  { id: "entretenimiento", name: "Entretenimiento" },
];

export function PromocionesMegaMenuDropdown({ isOpen, onClose, onNavigateToPromociones }: PromocionesMegaMenuDropdownProps) {
  if (!isOpen) return null;

  const handleCategoryClick = () => {
    onClose();
    if (onNavigateToPromociones) {
      onNavigateToPromociones();
    }
  };

  const handleViewAll = () => {
    onClose();
    if (onNavigateToPromociones) {
      onNavigateToPromociones();
    }
  };

  return (
    <div 
      className="bg-white shadow-lg border-t-2 border-orange-500 animate-in slide-in-from-top-5 duration-300 inline-block"
    >
      {/* Contenedor ajustado al contenido */}
      <div className="py-1 px-2">
        {/* Grid de 3 columnas x 5 filas (15 items exactos) */}
        <div className="grid grid-cols-3 grid-rows-5 gap-0.5 w-fit">
          {displayCategories.map((category) => (
            <button
              key={category.id}
              onClick={handleCategoryClick}
              className="text-left px-1.5 py-0.5 text-[11px] text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors font-medium border border-transparent hover:border-orange-200 whitespace-nowrap"
            >
              {category.name}
            </button>
          ))}
          
          {/* Botón Ver más - completa el grid de 15 items (3 columnas x 5 filas) */}
          <button
            onClick={handleViewAll}
            className="text-left px-1.5 py-0.5 text-[11px] font-bold text-orange-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded transition-all border border-orange-500 whitespace-nowrap"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}