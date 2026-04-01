import { ArrowLeft, ChevronRight } from "lucide-react";

interface SeleccionarCategoriaScreenProps {
  onBack: () => void;
  onSelectCategory: (category: string) => void;
}

const categorias = [
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
  "Servicios para Emprendedores",
  "Servicios para Eventos",
  "Servicios para Negocios",
  "Servicios Profesionales",
  "Servicios Técnicos",
  "Tecnología",
  "Teléfonos y Accesorios para Teléfonos",
  "Vehículos",
  "Viajes y Turismo"
];

export function SeleccionarCategoriaScreen({ onBack, onSelectCategory }: SeleccionarCategoriaScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Seleccione una categoría
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="space-y-2">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => onSelectCategory(categoria)}
              className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-gray-200 hover:border-orange-500 hover:shadow-md rounded-2xl transition-all text-left group"
            >
              <span className="text-base font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                {categoria}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
