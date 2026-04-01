import { useState } from "react";
import { ChevronRight } from "lucide-react";

// Importar imágenes
import imgAntiguedades from "figma:asset/bc42842e4f8d1720f906e66c77e0c4e480e469b9.png";
import imgAplicacionesTelefonicas from "figma:asset/023f53dc3efd07b703155f580453df7dbf45dc5f.png";
import imgAsociaciones from "figma:asset/97169928c0be89ecba159cc94dbf583b850d6662.png";
import imgBancos from "figma:asset/498e7b8151a302415cf9fa9ee88fb3af740b2c3e.png";
import imgBebes from "figma:asset/98efec0cfc07b0ddaa0b7c9564a5e1ed3c879d97.png";
import imgBellezaBienestar from "figma:asset/9faca0a3c726da7f37893fff1dfcb71e0d30d3f7.png";
import imgBienesRaices from "figma:asset/f9a52ffbdebe7a01d9b6fa4435de4b0498e12a5f.png";
import imgBodas from "figma:asset/052ef550339d361f3c18f208668f4a914d84491a.png";
import imgConstruccion from "figma:asset/5e707e224ceff5b50c9cc1600dfa8bd95291f6fc.png";
import imgCultura from "figma:asset/2b8ab125132ad420f753e78261ae0e7ab25433e1.png";
import imgDecoracion from "figma:asset/5b1702fd451a2d409ce2d234adef0ac857e8ea03.png";
import imgDeportes from "figma:asset/3bbfe6eab40aae98cc32070c8686b2baaa33f94e.png";
import imgDisenoModa from "figma:asset/0d2847b1944abba8790f61e5b4ccb52092a9ec9f.png";
import imgEducacion from "figma:asset/1efa928f30b560bfe4d79df1ebdf6a9b8cab5380.png";
import imgElectronicoAudioVideo from "figma:asset/952965cdb120ec87493ae48a66b544bb1cc74e8e.png";
import imgEntretenimiento from "figma:asset/63ce3359f1d712f3fc0c86ecd94c94d3822ac807.png";
import imgEntretenimientoInfantil from "figma:asset/16a67522f3ad0a05ae91916fb87978154d331a81.png";
import imgFiestasEventos from "figma:asset/625045026e3dcfb62f2ffb147b02216023563d04.png";
import imgFiestasEventosInfantiles from "figma:asset/805fe8a344e5d463635296dea3b9cc9fdb94c10e.png";
import imgFlorerias from "figma:asset/1f07da9795988cfff13d2418c4670f27b3a963f9.png";
import imgFotografia from "figma:asset/c4b6e1772e5c5c7e4b3215ba2ef5d356c75f047a.png";
import imgGastronomia from "figma:asset/d466868fb2d75cb832169384e0c7384ff0606b6f.png";
import imgHogar from "figma:asset/439abbf76a7847681612c01f4c8f8c19d3683cbf.png";
import imgHombre from "figma:asset/3e5e681ef57f12689ee5546cfdba16d4d86784cb.png";
import imgHoteles from "figma:asset/1700a879929966f7e915444a629c63cd1e947d6e.png";
import imgIndustriaTextil from "figma:asset/4f6ed2d64aa2dd64b11b18509afd4eb85cd6dc44.png";
import imgJardin from "figma:asset/28696259e18d8d6e551e95ed3e1c0b6fe1908035.png";
import imgLibreriasEditoriales from "figma:asset/d540d8dfaf99e27d45bd2da33c2efa6fc1343afd.png";
import imgMascotasAnimales from "figma:asset/154763f4cdf33885a5a2b245a897dfeb8da2e60e.png";
import imgMediosComunicacion from "figma:asset/d020f75e2330515bfa32a3d3dcf5cef91f0e7273.png";
import imgMujer from "figma:asset/e5e05a042ed4ffd422aeb9c3f2160d7d5d13525c.png";
import imgMusicosGruposMusicales from "figma:asset/75ce3a7507b2d67fea3cf4ab54de926c18b84a09.png";
import imgNinos from "figma:asset/15cc6ae40bb85dc4d94e0d34d5bd7a949cb0f0ca.png";
import imgOficina from "figma:asset/b6ca258097b7d0261508308109603504f1b4269f.png";
import imgRegalos from "figma:asset/89c5c0d7519dfa26415681837024da9806b3f4c3.png";
import imgSalud from "figma:asset/c2f5ea54076ceb9e876ca0b04f144b9690511447.png";
import imgServiciosGenerales from "figma:asset/538499137f039a77a8240d1b3eeacf72c22f95da.png";
import imgServiciosIndependientes from "figma:asset/9816268c6ad03527523959871b03002c7abf8568.png";
import imgServiciosProfesionales from "figma:asset/824110474e7117521250b8fa1c1b1d7a933795a6.png";
import imgSupermercados from "figma:asset/a721c588fe8eadb52cf4554bbadaa159b39b5d68.png";
import imgTecnologia from "figma:asset/5d08b98273d6dd4eb5ed3ba88329734b6fc50414.png";
import imgTurismo from "figma:asset/abf6e60079e0fc51906543e56c3dc8c1276e51b4.png";
import imgVehiculos from "figma:asset/e7ab19395ac37816187982c2cb022a97bbe36f21.png";

// Definición de categorías principales con subcategorías
const categoriesData = [
  { id: "antiguedades", name: "Antigüedades", subcategories: [], image: imgAntiguedades },
  { id: "aplicaciones", name: "Aplicaciones Telefónicas", subcategories: [], image: imgAplicacionesTelefonicas },
  { id: "asociaciones", name: "Asociaciones", subcategories: [], image: imgAsociaciones },
  { id: "bancos", name: "Bancos", subcategories: [], image: imgBancos },
  { 
    id: "bebes", 
    name: "Bebés", 
    subcategories: [
      "Accesorios para bebé",
      "Decoración para cuartos de bebés",
      "Muebles para cuartos de bebés",
      "Ropa de bebé"
    ],
    image: imgBebes
  },
  { 
    id: "belleza", 
    name: "Belleza y Bienestar", 
    subcategories: [
      "Barberías",
      "Cejas",
      "Centro de depilación",
      "Centros de yoga",
      "Compañías de belleza",
      "Cuidado capilar",
      "Cuidado de la piel",
      "Dermocosmética",
      "Duchas solares",
      "Extensiones de pelo"
    ],
    image: imgBellezaBienestar
  },
  { 
    id: "bienes-raices", 
    name: "Bienes Raíces", 
    subcategories: [
      "Agencias inmobiliarias",
      "Asesores inmobiliarios"
    ],
    image: imgBienesRaices
  },
  { id: "bodas", name: "Bodas", subcategories: [], image: imgBodas },
  { 
    id: "construccion", 
    name: "Construcción", 
    subcategories: [
      "Aluminio",
      "Calaminas",
      "Cementeras",
      "Cerámicas",
      "Cerraduras",
      "Constructoras",
      "Electricidad",
      "Gasfitería",
      "Grúas",
      "Herrería",
      "Materiales de construcción",
      "Pintura",
      "Pisos",
      "Puertas",
      "Techos",
      "Tejas",
      "Vidrios y ventanas"
    ],
    image: imgConstruccion
  },
  { 
    id: "cultura", 
    name: "Cultura", 
    subcategories: [
      "Artistas",
      "Centros culturales",
      "Escritores",
      "Galerías de arte y fotografía",
      "Museos",
      "Pintores",
      "Teatro"
    ],
    image: imgCultura
  },
  { 
    id: "decoracion", 
    name: "Decoración", 
    subcategories: [
      "Adornos",
      "Alfombras y tapetes",
      "Arte y decoraciones",
      "Artesanías",
      "Cojines decorativos",
      "Cortinas",
      "Cuadros",
      "Espejo",
      "Iluminación",
      "Muebles",
      "Tiendas de decoración"
    ],
    image: imgDecoracion
  },
  { 
    id: "deportes", 
    name: "Deportes", 
    subcategories: [
      "Ballet",
      "Natación",
      "Artes marciales",
      "Artículos deportivos",
      "Baile",
      "Boxeo",
      "Calistenia",
      "Caza y pesca",
      "Ciclismo",
      "Club deportivo",
      "Deportes extremos",
      "Equitación",
      "Fútbol",
      "Gimnasia",
      "Gimnasios",
      "Golf",
      "Kick boxing",
      "Ropa deportiva",
      "Spinning",
      "Tiendas deportivas",
      "Zumba"
    ],
    image: imgDeportes
  },
  { id: "diseno-moda", name: "Diseño de Moda", subcategories: [], image: imgDisenoModa },
  { 
    id: "educacion", 
    name: "Educación", 
    subcategories: [
      "Bibliotecas",
      "Centro de reforzamiento escolar",
      "Clases de música",
      "Clases de teatro",
      "Coaching y liderazgo",
      "Colegios",
      "Cursos",
      "Cursos de computación e informática",
      "Cursos de verano",
      "Escuelas de arte y creatividad",
      "Escuelas de ballet",
      "Escuelas de gastronomía",
      "Escuelas de negocios",
      "Guarderías",
      "Institutos de idiomas",
      "Jardín de niños",
      "Kinders",
      "Profesores",
      "Talleres",
      "Universidades"
    ],
    image: imgEducacion
  },
  { id: "electronica", name: "Electrónica, Audio y Video", subcategories: [], image: imgElectronicoAudioVideo },
  { 
    id: "entretenimiento", 
    name: "Entretenimiento", 
    subcategories: [
      "Actividades aventura",
      "Actividades deportivas",
      "After office",
      "Bares",
      "Billar",
      "Boliches",
      "Bowling",
      "Karaoke",
      "Piscinas de fin de semana"
    ],
    image: imgEntretenimiento
  },
  { 
    id: "entretenimiento-infantil", 
    name: "Entretenimiento Infantil", 
    subcategories: [
      "Juegos para niños",
      "Parques acuáticos",
      "Parques de diversión infantil",
      "Pista de patinaje",
      "Restaurante con área de juegos"
    ],
    image: imgEntretenimientoInfantil
  },
  { 
    id: "fiestas-eventos", 
    name: "Fiestas y Eventos", 
    subcategories: [
      "Catering",
      "Decoración de eventos",
      "Sonido e iluminación",
      "Organización de eventos"
    ],
    image: imgFiestasEventos
  },
  { 
    id: "fiestas-infantiles", 
    name: "Fiestas y Eventos Infantiles", 
    subcategories: [
      "Animación infantil",
      "Decoración infantil",
      "Catering infantil"
    ],
    image: imgFiestasEventosInfantiles
  },
  { id: "florerias", name: "Florerías", subcategories: [], image: imgFlorerias },
  { 
    id: "fotografia", 
    name: "Fotografía y Estudios", 
    subcategories: [
      "Estudios fotográficos",
      "Fotógrafos",
      "Accesorios fotográficos"
    ],
    image: imgFotografia
  },
  { 
    id: "gastronomia", 
    name: "Gastronomía", 
    subcategories: [
      "Restaurantes",
      "Cafeterías",
      "Fast food",
      "Repostería"
    ],
    image: imgGastronomia
  },
  { 
    id: "hogar", 
    name: "Hogar", 
    subcategories: [
      "Muebles",
      "Electrodomésticos",
      "Decoración del hogar"
    ],
    image: imgHogar
  },
  { 
    id: "hombre", 
    name: "Hombre", 
    subcategories: [
      "Ropa",
      "Calzado",
      "Accesorios"
    ],
    image: imgHombre
  },
  { 
    id: "hoteles", 
    name: "Hoteles", 
    subcategories: [
      "Hoteles",
      "Hostales",
      "Alojamientos turísticos"
    ],
    image: imgHoteles
  },
  { 
    id: "industria-textil", 
    name: "Industria Textil", 
    subcategories: [
      "Fábricas textiles",
      "Confecciones",
      "Telas"
    ],
    image: imgIndustriaTextil
  },
  { 
    id: "jardin", 
    name: "Jardín", 
    subcategories: [
      "Plantas",
      "Jardinería",
      "Viveros"
    ],
    image: imgJardin
  },
  { 
    id: "librerias", 
    name: "Librerías y Editoriales", 
    subcategories: [
      "Librerías",
      "Editoriales",
      "Papelerías"
    ],
    image: imgLibreriasEditoriales
  },
  { 
    id: "mascotas", 
    name: "Mascotas y Animales", 
    subcategories: [
      "Veterinarias",
      "Tiendas de mascotas",
      "Peluquería canina"
    ],
    image: imgMascotasAnimales
  },
  { 
    id: "medios", 
    name: "Medios de Comunicación", 
    subcategories: [
      "Periódicos",
      "Radio",
      "Televisión"
    ],
    image: imgMediosComunicacion
  },
  { 
    id: "mujer", 
    name: "Mujer", 
    subcategories: [
      "Ropa",
      "Calzado",
      "Accesorios"
    ],
    image: imgMujer
  },
  { 
    id: "musicos", 
    name: "Músicos y Grupos Musicales", 
    subcategories: [
      "Bandas",
      "Orquestas",
      "DJ"
    ],
    image: imgMusicosGruposMusicales
  },
  { 
    id: "ninos", 
    name: "Niños", 
    subcategories: [
      "Ropa infantil",
      "Calzado infantil",
      "Juguetes"
    ],
    image: imgNinos
  },
  { 
    id: "oficina", 
    name: "Oficina", 
    subcategories: [
      "Mobiliario de oficina",
      "Papelería",
      "Equipos de oficina"
    ],
    image: imgOficina
  },
  { 
    id: "regalos", 
    name: "Regalos", 
    subcategories: [
      "Tiendas de regalos",
      "Detalles personalizados"
    ],
    image: imgRegalos
  },
  { 
    id: "salud", 
    name: "Salud", 
    subcategories: [
      "Clínicas",
      "Laboratorios",
      "Farmacias",
      "Centros médicos"
    ],
    image: imgSalud
  },
  { 
    id: "servicios-generales", 
    name: "Servicios Generales", 
    subcategories: [
      "Limpieza",
      "Mudanzas",
      "Mantenimiento"
    ],
    image: imgServiciosGenerales
  },
  { 
    id: "servicios-independientes", 
    name: "Servicios Independientes", 
    subcategories: [
      "Freelancers",
      "Consultores"
    ],
    image: imgServiciosIndependientes
  },
  { 
    id: "servicios-profesionales", 
    name: "Servicios Profesionales", 
    subcategories: [
      "Abogados",
      "Contadores",
      "Arquitectos"
    ],
    image: imgServiciosProfesionales
  },
  { 
    id: "supermercados", 
    name: "Supermercados", 
    subcategories: [
      "Supermercados",
      "Minimarkets",
      "Tiendas de barrio"
    ],
    image: imgSupermercados
  },
  { 
    id: "tecnologia", 
    name: "Tecnología", 
    subcategories: [
      "Computadoras",
      "Celulares",
      "Accesorios tecnológicos"
    ],
    image: imgTecnologia
  },
  { 
    id: "turismo", 
    name: "Turismo", 
    subcategories: [
      "Agencias de viajes",
      "Tours",
      "Guías turísticos"
    ],
    image: imgTurismo
  },
  { 
    id: "vehiculos", 
    name: "Vehículos", 
    subcategories: [
      "Autos",
      "Motos",
      "Repuestos"
    ],
    image: imgVehiculos
  }
];

interface CategoriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CategoriesMegaMenu({ isOpen, onClose }: CategoriesMegaMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const activeCategory = categoriesData.find(cat => cat.id === hoveredCategory);

  return (
    <div 
      className="absolute top-full left-0 right-0 bg-white border-t-2 border-orange-200 shadow-2xl z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 min-h-[500px] max-h-[600px]">
          {/* Left Panel - Categories List */}
          <div className="col-span-3 border-r border-gray-200 overflow-y-auto">
            <div className="py-4">
              {categoriesData.map((category) => (
                <button
                  key={category.id}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  className={`w-full px-6 py-3 text-left flex items-center justify-between hover:bg-orange-50 transition-colors ${
                    hoveredCategory === category.id ? 'bg-orange-50 border-l-4 border-orange-500' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                  </div>
                  {category.subcategories.length > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel - Subcategories */}
          <div className="col-span-9 overflow-y-auto bg-gray-50">
            {activeCategory && activeCategory.subcategories.length > 0 ? (
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {activeCategory.name}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {activeCategory.subcategories.map((subcategory, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-white rounded-lg transition-all text-left"
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              </div>
            ) : activeCategory ? (
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <img 
                  src={activeCategory.image} 
                  alt={activeCategory.name}
                  className="w-32 h-32 object-contain mb-4 opacity-50"
                />
                <p className="text-gray-500 text-center">
                  No hay subcategorías disponibles
                </p>
              </div>
            ) : (
              <div className="p-6 flex items-center justify-center h-full">
                <p className="text-gray-500 text-center">
                  Pasa el cursor sobre una categoría para ver más detalles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
