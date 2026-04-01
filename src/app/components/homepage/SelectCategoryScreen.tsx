import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface SelectCategoryScreenProps {
  onBack: () => void;
  onSelectCategory: (category: string) => void;
}

export function SelectCategoryScreen({ onBack, onSelectCategory }: SelectCategoryScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Antigüedades",
    "Aplicaciones telefónicas",
    "Asociaciones",
    "Bancos",
    "Bebés",
    "Belleza y bienestar",
    "Bienes raíces",
    "Boda",
    "Cámara de Comercio",
    "Camping",
    "Casas de cambio",
    "Casas de empeño",
    "Caza y pesca",
    "Centros comerciales",
    "Ciencia",
    "Cines",
    "Coleccionistas",
    "Construcción",
    "Cultura",
    "Decoración",
    "Deportes",
    "Diseñadores de moda",
    "Distribuidores",
    "E-commerce",
    "Educación",
    "Electrónica, audio y video",
    "Embajadas y consulados",
    "Emprendimientos",
    "Entretenimiento",
    "Entretenimiento infantil",
    "Envíos de dinero",
    "Equipos de seguridad",
    "Exportadores",
    "Fabricantes",
    "Fiestas y eventos",
    "Fiestas y eventos infantiles",
    "Florerías",
    "Fotografía, estudios fotográficos y accesorios",
    "Fundaciones",
    "Gastronomía",
    "Hecho a mano",
    "Hecho en Bolivia",
    "Herramientas",
    "Higiene",
    "Hogar",
    "Hombre",
    "Hoteles",
    "Industria agrícola",
    "Industria de alimentos",
    "Industria de bebidas",
    "Industria de la salud",
    "Industria ganadera",
    "Industria maderera",
    "Industria metalúrgica",
    "Industria petrolera",
    "Industria textil",
    "Industria vitivinícola",
    "Influencers",
    "Instituciones gubernamentales",
    "Instituciones no gubernamentales",
    "Jardín",
    "Jóvenes",
    "Joyerías y relojes",
    "Jugueterías y juegos",
    "Lavanderías",
    "Librerías y editoriales",
    "Licorerías",
    "Limpieza",
    "Maquinaria",
    "Mascotas y animales",
    "Medio ambiente",
    "Medios de comunicación",
    "Minoristas",
    "Mujer",
    "Municipios",
    "Música e instrumentos musicales",
    "Músicos y grupos de música",
    "Niños",
    "Oficinas",
    "Películas",
    "Piscina",
    "Productores",
    "Radio móviles",
    "Regalos",
    "Salud",
    "Segunda mano",
    "Seguridad",
    "Seguros",
    "Servicios digitales",
    "Servicios funerarios",
    "Servicios generales",
    "Servicios independientes",
    "Servicios para negocios",
    "Servicios profesionales",
    "Supermercados, mercados y tiendas",
    "Surtidores",
    "Tecnología",
    "Turismo",
    "Uniforme y ropa de trabajo",
    "Vehículos",
    "Viajes",
    "Videojuegos"
  ];

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white font-bold text-lg">
            ¿Qué categoría describe mejor a tu negocio o servicio?
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar categoría..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Categories List */}
        <div className="space-y-2">
          {filteredCategories.map((category, index) => (
            <Card
              key={index}
              onClick={() => onSelectCategory(category)}
              className="p-4 rounded-2xl hover:bg-orange-50 hover:border-orange-300 transition-all cursor-pointer"
            >
              <p className="font-medium text-gray-900">{category}</p>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No se encontraron categorías</p>
          </div>
        )}
      </div>
    </div>
  );
}
