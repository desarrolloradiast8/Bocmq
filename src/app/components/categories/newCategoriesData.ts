import imgCategorias from "figma:asset/0c244070daa2a8df31500a48b6598b712a2e5dec.png";
import imgHechoBolivia from "figma:asset/a81d559a66fcebd00320377db40f566c0fd7ca1b.png";
import imgGastronomia from "figma:asset/b43abe273a2314fed7fed511654c902111f75d91.png";
import imgHoteles from "figma:asset/cafca0e002b040ff03fe41645ff0cf02b0361079.png";
import imgTurismo from "figma:asset/7bbc7f8e41cebaf5f0e2cb06e1ae9f297c7b30d5.png";
import imgCultura from "figma:asset/c79f10445867bea1bed74687fadf23c136b67009.png";
import imgBellezaBienestar from "figma:asset/368ca15009783d58ac08d32cb86f996940dd29c9.png";
import imgSalud from "figma:asset/7a0cb2f2f0f1efac0711522192d981555fae0c54.png";
import imgSegundaMano from "figma:asset/4d35a1f2547ba336b60d08787c74118df29c4ca7.png";
import imgEmprendimientos from "figma:asset/5d59be92bf102b33cccff3165c2b6c5175b50e38.png";
import imgEcommerce from "figma:asset/9bb35e5d1f6824f7303d7c487877f51337c1efc6.png";
import imgTecnologia from "figma:asset/5e9a5d795fae75a72f507f0778be8583642c208c.png";
import imgServiciosIndependientes from "figma:asset/40f8248e32d40fd48ce80d87755a6a0dbef0a4de.png";
import imgServiciosProfesionales from "figma:asset/18b4b37386ac55e41b8ffd113af704f0d9075b53.png";
import imgServiciosGenerales from "figma:asset/f35907d337c99a1d07f5b2a8646837685e017fca.png";
import imgDeportes from "figma:asset/cf7ad0ff190dad636815cd942d765826a96de285.png";
import imgCentrosComerciales from "figma:asset/2e17f78783dd5a1f85d0f78d9ade3d719bb804d1.png";
import imgEntretenimiento from "figma:asset/39260093a7b4208ffdd56532e3a9ae905371918c.png";
import imgEmprendimientosNuevo from "figma:asset/ecc87e30e93c4fb875c7dda109cd054a831dcf0b.png";
import imgEntretenimientoNuevo from "figma:asset/80dc782dc2696be0e7e2d1d2700dcda9c7b99ed3.png";

// Nuevas categorías principales con subcategorías
export const mainCategoriesData = [
  {
    id: "categorias",
    name: "Categorías",
    subcategories: [],
    image: imgCategorias,
    isAllCategories: true
  },
  {
    id: "hecho-bolivia",
    name: "Hecho en Bolivia",
    subcategories: [],
    image: imgHechoBolivia
  },
  {
    id: "gastronomia",
    name: "Gastronomía",
    subcategories: [
      "Brunch dominical",
      "Cafeterías",
      "Catering",
      "Chef at home",
      "Chocolaterías",
      "Churrascuerías",
      "Churros",
      "Comida alemana",
      "Comida americana",
      "Comida árabe",
      "Comida argentina",
      "Comida boliviana",
      "Comida brasilera",
      "Comida china",
      "Comida colombiana",
      "Comida coreana",
      "Comida cubana",
      "Comida española",
      "Comida francesa",
      "Comida hindú",
      "Comida internacional",
      "Comida italiana",
      "Comida japonesa",
      "Comida libanesa",
      "Comida mexicana",
      "Comida peruana",
      "Comida rápida",
      "Comida rusa",
      "Comida saludable",
      "Desayunos a domicilio",
      "Dulcerías",
      "Emprendimientos gastronómicos",
      "Food truck",
      "Hamburguesas",
      "Heladerías",
      "Jugos",
      "Lomitos y sandwiches",
      "Masitas típicas",
      "Pacumutos y anticuchos",
      "Pastelerías y picoles",
      "Panaderías",
      "Patios de comida",
      "Patios de comida nocturnos",
      "Pescados y mariscos",
      "Pizza",
      "Pollos",
      "Postres",
      "Productos alimenticios",
      "Productos gourmet",
      "Restaurantes 24hrs",
      "Restaurantes con áreas infantiles",
      "Restaurantes con buffet",
      "Restaurantes con shows",
      "Restaurantes con terraza",
      "Restaurantes elegantes",
      "Restaurantes fuera de la ciudad",
      "Restaurantes para almorzar",
      "Restaurantes para desayunar",
      "Salones de té",
      "Salteñas",
      "Smoothies y raspados",
      "Tiendas de productos alimenticios",
      "Tortas"
    ],
    image: imgGastronomia
  },
  {
    id: "hoteles",
    name: "Hoteles",
    subcategories: [
      "Alojamientos",
      "Hoteles 2 estrellas",
      "Hoteles 3 estrellas",
      "Hoteles 4 estrellas",
      "Hoteles 5 estrellas",
      "Moteles",
      "Resorts"
    ],
    image: imgHoteles
  },
  {
    id: "turismo",
    name: "Turismo",
    subcategories: [
      "Aerolíneas",
      "Aeropuertos",
      "Agencias de viaje",
      "Artículos para viaje",
      "Bio parque",
      "Bolivia",
      "Central de autobuses",
      "Departamento de Santa Cruz",
      "Ferrocarril",
      "Lugares turísticos en Santa Cruz y cerca de Santa Cruz",
      "Parques",
      "Servicios turísticos",
      "Trámites migratorios"
    ],
    image: imgTurismo
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
    id: "belleza-bienestar",
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
    id: "salud",
    name: "Salud",
    subcategories: [
      "Ambulancias",
      "Bancos de sangre",
      "Cardiología",
      "Centros de salud",
      "Cirugía general",
      "Cirugía plástica",
      "Clínicas",
      "Dermatología",
      "Emergencias médicas",
      "Endocrinología",
      "Enfermerías",
      "Farmacias",
      "Farmacias naturistas",
      "Fisioterapia",
      "Gastroenterología",
      "Gineco obstetricia",
      "Hematología",
      "Hospitales",
      "Imagenología",
      "Maxilofacial",
      "Medicina cardiovascular",
      "Medicina general",
      "Medicina interna",
      "Nefrología",
      "Neonatología",
      "Neumología",
      "Neurocirugía",
      "Neurología",
      "Nutrición",
      "Odontología",
      "Oftalmología",
      "Oncología",
      "Otorrinolaringología",
      "Pediatría",
      "Proctología",
      "Psicología",
      "Quiropraxia",
      "Reumatismo",
      "Salud mental",
      "Salud sexual",
      "Traumatología y ortopedia",
      "Urología"
    ],
    image: imgSalud
  },
  {
    id: "segunda-mano",
    name: "Segunda Mano",
    subcategories: [],
    image: imgSegundaMano
  },
  {
    id: "emprendimientos",
    name: "Emprendimientos",
    subcategories: [],
    image: imgEmprendimientosNuevo
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    subcategories: [],
    image: imgEcommerce
  },
  {
    id: "tecnologia",
    name: "Tecnología",
    subcategories: [
      "Celulares y todo para celulares",
      "Computadoras y todo para computadora",
      "Drones",
      "Equipos de seguridad",
      "Fotografía",
      "Novedades tecnológicas para tu negocio",
      "Smart home",
      "Softwares",
      "Televisión",
      "Venta de artículos electrónicos",
      "Venta de teléfonos"
    ],
    image: imgTecnologia
  },
  {
    id: "servicios-independientes",
    name: "Servicios Independientes",
    subcategories: [
      "Carpinteros",
      "Cerrajero",
      "Electricistas",
      "Jardineros",
      "Pintor",
      "Plomero",
      "Tapicero",
      "Zapatero"
    ],
    image: imgServiciosIndependientes
  },
  {
    id: "servicios-profesionales",
    name: "Servicios Profesionales",
    subcategories: [
      "Abogados",
      "Agencias de medios",
      "Agencias de publicidad",
      "Arquitectos",
      "Auditores",
      "Capacitación",
      "Empresas consultoras",
      "Empresas de marketing digital",
      "Escaparatismo y merchandising",
      "Fotógrafos",
      "Ingenieros",
      "Notarías",
      "Periodistas"
    ],
    image: imgServiciosProfesionales
  },
  {
    id: "servicios-generales",
    name: "Servicios Generales",
    subcategories: [
      "Embalaje",
      "Agencias despachantes de aduana",
      "Carpintería",
      "Empresas de telecomunicación",
      "Fotocopias",
      "Herrería",
      "Imprentas y servicios de impresión",
      "Letreros y vallas",
      "Servicios de agua",
      "Servicio de aires acondicionados",
      "Servicio de gas",
      "Servicio de luz",
      "Servicio de mantenimiento",
      "Servicio de pintura",
      "Servicio de transporte y envíos",
      "Servicios de fumigación",
      "Servicios de jardinería",
      "Servicios de limpieza",
      "Sistemas de riego"
    ],
    image: imgServiciosGenerales
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
  {
    id: "centros-comerciales",
    name: "Centros Comerciales",
    subcategories: [],
    image: imgCentrosComerciales
  },
  {
    id: "entretenimiento",
    name: "Entretenimiento",
    subcategories: [
      "Actividades de aventura",
      "Actividades deportivas",
      "After office",
      "Bares",
      "Billar",
      "Boliches",
      "Bowling",
      "Karaokes",
      "Piscinas de fin de semana"
    ],
    image: imgEntretenimientoNuevo
  }
];