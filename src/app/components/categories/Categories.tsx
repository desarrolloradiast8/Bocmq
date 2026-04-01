import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Search, Star, MapPin, Grid3x3, Plus, Minus, ChevronRight, ChevronLeft, X, Sparkles, ShoppingBag, Home, Wrench, Palette, Theater, Dumbbell, GraduationCap, Gift, PartyPopper, Camera, UtensilsCrossed, Sofa, Heart, Hotel, TrendingUp, Lightbulb, Briefcase, Users, Building2, Newspaper, Gamepad2, Baby, Music, Car, Shirt, Flower2, Hand, Leaf, Book, Dog, BadgeDollarSign, Laptop, Plane, Stethoscope, Hammer, Package, TreePine, Building, Cake, Coins, Drill, Clapperboard, DollarSign, ShoppingCart, Zap, Globe, Warehouse, Megaphone, Puzzle, Award, Glasses, PhoneCall, Store } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { bellezaBienestarSubcategories } from "@/app/components/categories/bellezaBienestarSubcategories";
import { bebesSubcategories } from "@/app/components/categories/bebesSubcategories";
import { bienesRaicesSubcategories } from "@/app/components/categories/bienesRaicesSubcategories";
import { construccionSubcategories } from "@/app/components/categories/construccionSubcategories";
import { decoracionSubcategories } from "@/app/components/categories/decoracionSubcategories";
import { culturaSubcategories } from "@/app/components/categories/culturaSubcategories";
import { deporteSubcategories } from "@/app/components/categories/deporteSubcategories";
import { educacionSubcategories } from "@/app/components/categories/educacionSubcategories";
import { entrenamientoInfantilSubcategories } from "@/app/components/categories/entrenamientoInfantilSubcategories";
import { entretenimientoInfantilSubcategories } from "@/app/components/categories/entretenimientoInfantilSubcategories";
import { fiestasEventosSubcategories } from "@/app/components/categories/fiestasEventosSubcategories";
import { fiestasEventosInfantilesSubcategories } from "@/app/components/categories/fiestasEventosInfantilesSubcategories";
import { gastronomiaSubcategories } from "@/app/components/categories/gastronomiaSubcategories";
import { hogarSubcategories } from "@/app/components/categories/hogarSubcategories";
import { hombreSubcategories } from "@/app/components/categories/hombreSubcategories";
import { hotelesSubcategories } from "@/app/components/categories/hotelesSubcategories";
import { industriaTextilSubcategories } from "@/app/components/categories/industriaTextilSubcategories";
import { jardinSubcategories } from "@/app/components/categories/jardinSubcategories";
import { libreriasEditorialesSubcategories } from "@/app/components/categories/libreriasEditorialesSubcategories";
import { mascotasAnimalesSubcategories } from "@/app/components/categories/mascotasAnimalesSubcategories";
import { mediosComunicacionSubcategories } from "@/app/components/categories/mediosComunicacionSubcategories";
import { mujerSubcategories } from "@/app/components/categories/mujerSubcategories";
import { musicosGruposMusicalesSubcategories } from "@/app/components/categories/musicosGruposMusicalesSubcategories";
import { ninosSubcategories } from "@/app/components/categories/ninosSubcategories";
import { oficinaSubcategories } from "@/app/components/categories/oficinaSubcategories";
import { regalosSubcategories } from "@/app/components/categories/regalosSubcategories";
import { saludSubcategories } from "@/app/components/categories/saludSubcategories";
import { serviciosGeneralesSubcategories } from "@/app/components/categories/serviciosGeneralesSubcategories";
import { serviciosIndependientesSubcategories } from "@/app/components/categories/serviciosIndependientesSubcategories";
import { serviciosProfesionalesSubcategories } from "@/app/components/categories/serviciosProfesionalesSubcategories";
import { supermercadosSubcategories } from "@/app/components/categories/supermercadosSubcategories";
import { tecnologiaSubcategories } from "@/app/components/categories/tecnologiaSubcategories";
import { turismoSubcategories } from "@/app/components/categories/turismoSubcategories";
import { vehiculosSubcategories } from "@/app/components/categories/vehiculosSubcategories";

// Imports de imágenes de Figma
import imgAntiguedades from "figma:asset/bc42842e4f8d1720f906e66c77e0c4e480e469b9.png";
import imgAplicacionesTelefonicas from "figma:asset/023f53dc3efd07b703155f580453df7dbf45dc5f.png";
import imgAsociaciones from "figma:asset/97169928c0be89ecba159cc94dbf583b850d6662.png";
import imgBancos from "figma:asset/498e7b8151a302415cf9fa9ee88fb3af740b2c3e.png";
import imgBebes from "figma:asset/98efec0cfc07b0ddaa0b7c9564a5e1ed3c879d97.png";
import imgBellezaBienestar from "figma:asset/9faca0a3c726da7f37893fff1dfcb71e0d30d3f7.png";
import imgBienesRaices from "figma:asset/f9a52ffbdebe7a01d9b6fa4435de4b0498e12a5f.png";
import imgBodas from "figma:asset/052ef550339d361f3c18f208668f4a914d84491a.png";
import imgCamaraComercio from "figma:asset/83e08ab2aef82c2ab33b344f06769b4774ec2b22.png";
import imgCamping from "figma:asset/032ac271922c8d7f8f3315e2769eb5b676876d70.png";
import imgCasasCambio from "figma:asset/0427f38b6159bd26c0a54412fca604f9cb13af29.png";
import imgCasasEmpeno from "figma:asset/fdf0533e04a33f43268b70aa38c3dffd5a14eaf3.png";
import imgCazaPesca from "figma:asset/a2df5adbd634b205c92f7d965ad07419dfc0c7c2.png";
import imgCentrosComerciales from "figma:asset/75c974ce401f1d3b4e93260770b51860c7d1ea40.png";
import imgCiencia from "figma:asset/e875f2bc39973d65a6062ea2b8222d023206f3c7.png";
import imgCines from "figma:asset/930e00cc38ca2bda319a9cf1ec9b896cfcbbbca3.png";
import imgColeccionistas from "figma:asset/0628a7364863a3189c28ce6ef4c2ce931f95c5cc.png";
import imgConstruccion from "figma:asset/5e707e224ceff5b50c9cc1600dfa8bd95291f6fc.png";
import imgCultura from "figma:asset/2b8ab125132ad420f753e78261ae0e7ab25433e1.png";
import imgDecoracion from "figma:asset/5b1702fd451a2d409ce2d234adef0ac857e8ea03.png";
import imgDeportes from "figma:asset/3bbfe6eab40aae98cc32070c8686b2baaa33f94e.png";
import imgDisenoModa from "figma:asset/0d2847b1944abba8790f61e5b4ccb52092a9ec9f.png";
import imgDistribuidores from "figma:asset/2a0fa9838b0e9501f9a570ff84b9d0a193ca4f9d.png";
import imgEcommerce from "figma:asset/7470beec5c7dae32ca8ffff6d80a9bdc1fd28521.png";
import imgEducacion from "figma:asset/1efa928f30b560bfe4d79df1ebdf6a9b8cab5380.png";
import imgElectronicoAudioVideo from "figma:asset/952965cdb120ec87493ae48a66b544bb1cc74e8e.png";
import imgEmbajadasConsulados from "figma:asset/b6c3f8c1c3e08839eb30f8f3d500e0962d98f5ef.png";
import imgEmprendimientos from "figma:asset/72c6efce09de0990bb018abca924d1789600a044.png";
import imgEntretenimiento from "figma:asset/63ce3359f1d712f3fc0c86ecd94c94d3822ac807.png";
import imgEntretenimientoInfantil from "figma:asset/16a67522f3ad0a05ae91916fb87978154d331a81.png";
import imgEnviosDinero from "figma:asset/81f1d16c2f7b1fbf2f6f4fbfec4c2452094099e8.png";
import imgEquiposSeguridad from "figma:asset/d1a2c8a3e6a37ec6c83f716d9a8ce0fe8038ce2e.png";
import imgExportadores from "figma:asset/2e5a9ee7a2c4a77eb2903ce8542b46dc505a9ae3.png";
import imgFabricantes from "figma:asset/997bef95af1da9a7a72f63b7badbb157ce6f8e92.png";
import imgFiestasEventos from "figma:asset/625045026e3dcfb62f2ffb147b02216023563d04.png";
import imgFiestasEventosInfantiles from "figma:asset/805fe8a344e5d463635296dea3b9cc9fdb94c10e.png";
import imgFlorerias from "figma:asset/1f07da9795988cfff13d2418c4670f27b3a963f9.png";
import imgFotografia from "figma:asset/c4b6e1772e5c5c7e4b3215ba2ef5d356c75f047a.png";
import imgFundaciones from "figma:asset/1b6493cfab24bdbe7d2137e8674c221292a1d56e.png";
import imgGastronomia from "figma:asset/d466868fb2d75cb832169384e0c7384ff0606b6f.png";
import imgHechoMano from "figma:asset/87fe94e4a75f7c301732a952ba89d92b0543cb3f.png";
import imgHechoBolivia from "figma:asset/ad0842ec6964afe420a226df914f3ed0992cfbd4.png";
import imgHerramientas from "figma:asset/14d48dc73c63e38b376f97f3974f727a9859c6b4.png";
import imgHigiene from "figma:asset/533fab50b6be7b92331e10c150acec8047187718.png";
import imgHogar from "figma:asset/439abbf76a7847681612c01f4c8f8c19d3683cbf.png";
import imgHombre from "figma:asset/3e5e681ef57f12689ee5546cfdba16d4d86784cb.png";
import imgHoteles from "figma:asset/1700a879929966f7e915444a629c63cd1e947d6e.png";
import imgIndustriaAgricola from "figma:asset/211fe05b5714c581150dcb32be4725c92c2401ce.png";
import imgIndustriaAlimentos from "figma:asset/7878e4ea64522e79068fa3cd45f9482e1bfa3115.png";
import imgIndustriaBebidas from "figma:asset/7beaaa7b78be3661ae2eba1683a72179b099e39f.png";
import imgIndustriaSalud from "figma:asset/3a7073206f4f6fdee590771d57fc6c10386a21d4.png";
import imgIndustriaGanadera from "figma:asset/45a24247b3f26e8e999fac1b001364608aa6f254.png";
import imgIndustriaMaderera from "figma:asset/b5b2d8dac7d03384906d8514e6488b5664439e68.png";
import imgIndustriaMetalurgica from "figma:asset/8182b13ba732d588947a9e449ac9cf1ba786c2ff.png";
import imgIndustriaPetrolera from "figma:asset/761028527c223f447d70baafe4c30a08d905f05a.png";
import imgIndustriaTextil from "figma:asset/4f6ed2d64aa2dd64b11b18509afd4eb85cd6dc44.png";
import imgIndustriaVitivinicola from "figma:asset/5e5ae3b7424efc10a4058aaa083781984f39e3b0.png";
import imgInfluencers from "figma:asset/46da9ee70622f1958844b99cda2515173097a937.png";
import imgInstitucionesGubernamentales from "figma:asset/752a955bcbd5583c39f9a649a0692d501fa4f742.png";
import imgInstitucionesNoGubernamentales from "figma:asset/74d9b7e635e3e5b5c6b3a8848287f648a0d3acd1.png";
import imgJardin from "figma:asset/28696259e18d8d6e551e95ed3e1c0b6fe1908035.png";
import imgJovenes from "figma:asset/028f325ab8cad865773debd704a70159bb0c2c89.png";
import imgJoyeriasRelojerias from "figma:asset/62e9dab687877cbcebbf84a7221ec7564dc8fe01.png";
import imgJugueteriasJuegos from "figma:asset/06b2989401f649dc37fb064ba39b5d449f47b4ef.png";
import imgLavanderias from "figma:asset/909df84b47b745e9be1895279a5833423df44878.png";
import imgLibreriasEditoriales from "figma:asset/d540d8dfaf99e27d45bd2da33c2efa6fc1343afd.png";
import imgLicorerias from "figma:asset/2ebf840c175330b32756b34a67813447e4d683a4.png";
import imgLimpieza from "figma:asset/68fdc47da8c5d64e6f3f589279f50fb49ac92b84.png";
import imgMaquinaria from "figma:asset/38f24a6ad5b179e8664f703dc39acfd9d1862fc5.png";
import imgMascotasAnimales from "figma:asset/154763f4cdf33885a5a2b245a897dfeb8da2e60e.png";
import imgMedioAmbiente from "figma:asset/aba7a08e5543e5fe10b553407bed440893254ca1.png";
import imgMediosComunicacion from "figma:asset/d020f75e2330515bfa32a3d3dcf5cef91f0e7273.png";
import imgMinoristas from "figma:asset/dfd34c44fc3bfb99880aed9753deae0f9bf03b8b.png";
import imgMujer from "figma:asset/e5e05a042ed4ffd422aeb9c3f2160d7d5d13525c.png";
import imgMunicipios from "figma:asset/1c545c9d670c072d0688c0eb6ce160c259e9ddb4.png";
import imgMusicaInstrumentos from "figma:asset/ba7a0e7aab039b231095660fe409099e5015f542.png";
import imgMusicosGruposMusicales from "figma:asset/75ce3a7507b2d67fea3cf4ab54de926c18b84a09.png";
import imgNinos from "figma:asset/15cc6ae40bb85dc4d94e0d34d5bd7a949cb0f0ca.png";
import imgOficina from "figma:asset/b6ca258097b7d0261508308109603504f1b4269f.png";
import imgPeliculas from "figma:asset/5004bd10a51ddd85a2997e31f73fc6d3d485a557.png";
import imgPiscina from "figma:asset/dcbf65b88fea194f7ab991c9ded028686bbd131f.png";
import imgProductores from "figma:asset/e691370352e9fab78c7cbf28bd24239078c280f3.png";
import imgRadioMoviles from "figma:asset/e6f42e74d9ae1414f7aa146dc07c2cf3a5a153cb.png";
import imgRegalos from "figma:asset/89c5c0d7519dfa26415681837024da9806b3f4c3.png";
import imgSalud from "figma:asset/c2f5ea54076ceb9e876ca0b04f144b9690511447.png";
import imgSegundaMano from "figma:asset/137223122fb28ab0b4b452969eade464293bdba5.png";
import imgSeguridad from "figma:asset/3c7088536f66e9c1d9e11a07d138ae2ebcdcaaa0.png";
import imgSeguros from "figma:asset/ad1099d60c01183af4820829cdef63f60d83aaf5.png";
import imgServiciosDigitales from "figma:asset/73de9f6a2dad099378d893455469442366a2b0af.png";
import imgServiciosFunerarios from "figma:asset/6ffc98df287b60435749b97f4f08fdd6870ee148.png";
import imgServiciosGenerales from "figma:asset/538499137f039a77a8240d1b3eeacf72c22f95da.png";
import imgServiciosIndependientes from "figma:asset/9816268c6ad03527523959871b03002c7abf8568.png";
import imgServiciosNegocios from "figma:asset/299636accffec3d61e9bc06533659e92696bf4a4.png";
import imgServiciosProfesionales from "figma:asset/824110474e7117521250b8fa1c1b1d7a933795a6.png";
import imgSupermercados from "figma:asset/a721c588fe8eadb52cf4554bbadaa159b39b5d68.png";
import imgSurtidores from "figma:asset/c3b100c04bafe6116ace9886eda3aef1048f5917.png";
import imgTecnologia from "figma:asset/5d08b98273d6dd4eb5ed3ba88329734b6fc50414.png";
import imgTurismo from "figma:asset/abf6e60079e0fc51906543e56c3dc8c1276e51b4.png";
import imgUniformes from "figma:asset/28684669c2bac2c208bb206e757e277f4770a165.png";
import imgVehiculos from "figma:asset/e7ab19395ac37816187982c2cb022a97bbe36f21.png";
import imgViajes from "figma:asset/215e446b10f02e92cad5c75bc450a0887d418add.png";
import imgVideojuegos from "figma:asset/a4cdc21d380087a5585a0f0eeb85af863a102d24.png";

// Definición de categorías con subcategorías
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
  { id: "camara-comercio", name: "Cámara de Comercio", subcategories: [], image: imgCamaraComercio },
  { id: "camping", name: "Camping", subcategories: [], image: imgCamping },
  { id: "casas-cambio", name: "Casas de Cambio", subcategories: [], image: imgCasasCambio },
  { id: "casas-empeno", name: "Casas de Empeño", subcategories: [], image: imgCasasEmpeno },
  { id: "caza-pesca", name: "Caza y Pesca", subcategories: [], image: imgCazaPesca },
  { id: "centros-comerciales", name: "Centros Comerciales", subcategories: [], image: imgCentrosComerciales },
  { id: "ciencia", name: "Ciencia", subcategories: [], image: imgCiencia },
  { id: "cines", name: "Cines", subcategories: [], image: imgCines },
  { id: "coleccionistas", name: "Coleccionistas", subcategories: [], image: imgColeccionistas },
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
      "Zumba",
      "Juegos para niños",
      "Parques acuáticos",
      "Parques de diversión infantil",
      "Pista de patinaje",
      "Restaurantes con área de juegos"
    ],
    image: imgDeportes
  },
  { id: "diseno-moda", name: "Diseño de Moda", subcategories: [], image: imgDisenoModa },
  { id: "distribuidores", name: "Distribuidores", subcategories: [], image: imgDistribuidores },
  { id: "ecommerce", name: "E-commerce", subcategories: [], image: imgEcommerce },
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
      "Escuelas especiales para niños con discapacidades",
      "Guarderías",
      "Institutos de desarrollo humano",
      "Institutos de idiomas",
      "Institutos técnicos",
      "Jardín de niños",
      "Kinders",
      "Profesores",
      "Talleres",
      "Universidades"
    ],
    image: imgEducacion
  },
  { id: "electronica", name: "Electrónica, Audio y Video", subcategories: [], image: imgElectronicoAudioVideo },
  { id: "embajadas", name: "Embajadas y Consulados", subcategories: [], image: imgEmbajadasConsulados },
  { id: "emprendimientos", name: "Emprendimientos", subcategories: [], image: imgEmprendimientos },
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
  { id: "envios-dinero", name: "Envíos de Dinero", subcategories: [], image: imgEnviosDinero },
  { id: "equipos-seguridad", name: "Equipos de Seguridad", subcategories: [], image: imgEquiposSeguridad },
  { id: "exportadores", name: "Exportadores", subcategories: [], image: imgExportadores },
  { id: "fabricantes", name: "Fabricantes", subcategories: [], image: imgFabricantes },
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
    name: "Fotografía, Estudios Fotográficos y Accesorios", 
    subcategories: [
      "Estudios fotográficos",
      "Fotógrafos",
      "Accesorios fotográficos"
    ],
    image: imgFotografia
  },
  { id: "fundaciones", name: "Fundaciones", subcategories: [], image: imgFundaciones },
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
  { id: "hecho-mano", name: "Hecho a Mano", subcategories: [], image: imgHechoMano },
  { id: "hecho-bolivia", name: "Hecho en Bolivia", subcategories: [], image: imgHechoBolivia },
  { id: "herramientas", name: "Herramientas", subcategories: [], image: imgHerramientas },
  { id: "higiene", name: "Higiene", subcategories: [], image: imgHigiene },
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
  { id: "industria-agricola", name: "Industria Agrícola", subcategories: [], image: imgIndustriaAgricola },
  { id: "industria-alimentos", name: "Industria de Alimentos", subcategories: [], image: imgIndustriaAlimentos },
  { id: "industria-bebidas", name: "Industria de Bebidas", subcategories: [], image: imgIndustriaBebidas },
  { 
    id: "industria-salud", 
    name: "Industria de la Salud", 
    subcategories: [
      "Clínicas",
      "Laboratorios",
      "Centros médicos"
    ],
    image: imgIndustriaSalud
  },
  { id: "industria-ganadera", name: "Industria Ganadera", subcategories: [], image: imgIndustriaGanadera },
  { id: "industria-maderera", name: "Industria Maderera", subcategories: [], image: imgIndustriaMaderera },
  { id: "industria-metalurgica", name: "Industria Metalúrgica", subcategories: [], image: imgIndustriaMetalurgica },
  { id: "industria-petrolera", name: "Industria Petrolera", subcategories: [], image: imgIndustriaPetrolera },
  { 
    id: "industria-textil", 
    name: "Industria Textil", 
    subcategories: [
      "Fabricación",
      "Distribución"
    ],
    image: imgIndustriaTextil
  },
  { 
    id: "industria-vitivinicola", 
    name: "Industria Vitivinícola", 
    subcategories: [
      "Bodegas",
      "Viñedos"
    ],
    image: imgIndustriaVitivinicola
  },
  { id: "influencers", name: "Influencers", subcategories: [], image: imgInfluencers },
  { id: "instituciones-gubernamentales", name: "Instituciones Gubernamentales", subcategories: [], image: imgInstitucionesGubernamentales },
  { id: "instituciones-no-gubernamentales", name: "Instituciones No Gubernamentales", subcategories: [], image: imgInstitucionesNoGubernamentales },
  { 
    id: "jardin", 
    name: "Jardín", 
    subcategories: [
      "Churrasqueras y parrillas",
      "Decoración para jardines",
      "Muebles para jardín",
      "Todo para jardín",
      "Todo para piscina",
      "Viveros"
    ],
    image: imgJardin
  },
  { id: "jovenes", name: "Jóvenes", subcategories: [], image: imgJovenes },
  { id: "joyerias", name: "Joyerías y Relojerías", subcategories: [], image: imgJoyeriasRelojerias },
  { id: "jugueterias", name: "Jugueterías y Juegos", subcategories: [], image: imgJugueteriasJuegos },
  { id: "lavanderias", name: "Lavanderías", subcategories: [], image: imgLavanderias },
  { 
    id: "librerias", 
    name: "Librerías y Editoriales", 
    subcategories: [
      "Editoriales",
      "Librerías",
      "Librerías religiosas"
    ],
    image: imgLibreriasEditoriales
  },
  { id: "licorerias", name: "Licorerías", subcategories: [], image: imgLicorerias },
  { 
    id: "limpieza", 
    name: "Limpieza", 
    subcategories: [
      "Servicios de limpieza",
      "Productos de limpieza"
    ],
    image: imgLimpieza
  },
  { id: "maquinaria", name: "Maquinaria", subcategories: [], image: imgMaquinaria },
  { 
    id: "mascotas", 
    name: "Mascotas y Animales", 
    subcategories: [
      "Artículos para mascotas",
      "Refugios para animales",
      "Servicios para mascotas",
      "Veterinarias"
    ],
    image: imgMascotasAnimales
  },
  { id: "medio-ambiente", name: "Medio Ambiente", subcategories: [], image: imgMedioAmbiente },
  { 
    id: "medios-comunicacion", 
    name: "Medios de Comunicación", 
    subcategories: [
      "Programas y canales de televisión"
    ],
    image: imgMediosComunicacion
  },
  { id: "minoristas", name: "Minoristas", subcategories: [], image: imgMinoristas },
  { 
    id: "mujer", 
    name: "Mujer", 
    subcategories: [
      "Accesorios para mujer",
      "Carteras",
      "Embarazada",
      "Jeans para mujer",
      "Mallas de mujer",
      "Ropa de mujer",
      "Ropa de mujer, lencería y fajas",
      "Vestidos de novia",
      "Vestidos elegantes",
      "Zapatos de mujer"
    ],
    image: imgMujer
  },
  { id: "municipios", name: "Municipios", subcategories: [], image: imgMunicipios },
  { id: "musica-instrumentos", name: "Música e Instrumentos Musicales", subcategories: [], image: imgMusicaInstrumentos },
  { 
    id: "musicos-grupos", 
    name: "Músicos y Grupos de Música", 
    subcategories: [
      "Cantantes y músicos",
      "Orquestas"
    ],
    image: imgMusicosGruposMusicales
  },
  { 
    id: "ninos", 
    name: "Niños", 
    subcategories: [
      "Accesorios para niñas",
      "Accesorios para niños",
      "Ropa para niñas",
      "Ropa para niños",
      "Zapatos para niñas",
      "Zapatos para niños"
    ],
    image: imgNinos
  },
  { 
    id: "oficina", 
    name: "Oficina", 
    subcategories: [
      "Co work",
      "Decoración de oficina",
      "Material de oficina",
      "Muebles de oficina"
    ],
    image: imgOficina
  },
  { id: "peliculas", name: "Películas", subcategories: [], image: imgPeliculas },
  { id: "piscinas", name: "Piscinas", subcategories: [], image: imgPiscina },
  { id: "productores", name: "Productores", subcategories: [], image: imgProductores },
  { id: "radio-moviles", name: "Radio Móviles", subcategories: [], image: imgRadioMoviles },
  { 
    id: "regalos", 
    name: "Regalos", 
    subcategories: [
      "Regalos en general",
      "Regalos para boda"
    ],
    image: imgRegalos
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
  { id: "segunda-mano", name: "Segunda Mano", subcategories: [], image: imgSegundaMano },
  { id: "seguridad", name: "Seguridad", subcategories: [], image: imgSeguridad },
  { id: "seguros", name: "Seguros", subcategories: [], image: imgSeguros },
  { 
    id: "servicios-digitales", 
    name: "Servicios Digitales", 
    subcategories: [
      "Desarrollo web",
      "Marketing digital",
      "Diseño gráfico"
    ],
    image: imgServiciosDigitales
  },
  { id: "servicios-funerarios", name: "Servicios Funerarios", subcategories: [], image: imgServiciosFunerarios },
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
      "Servicios de aires acondicionados",
      "Servicio de gas",
      "Servicios de luz",
      "Servicios de mantenimiento",
      "Servicio de pintura",
      "Servicio de transporte y envíos",
      "Servicios de fumigación",
      "Servicios de jardinería",
      "Servicios de limpieza",
      "Sistema de riego"
    ],
    image: imgServiciosGenerales
  },
  { 
    id: "servicios-independientes", 
    name: "Servicios Independientes", 
    subcategories: [
      "Carpinteros",
      "Cerrajero",
      "Electricistas",
      "Jardinero",
      "Pintor",
      "Plomero",
      "Tapicero",
      "Zapatero"
    ],
    image: imgServiciosIndependientes
  },
  { 
    id: "servicios-negocios", 
    name: "Servicios para Negocios", 
    subcategories: [
      "Servicios empresariales",
      "Consultoría"
    ],
    image: imgServiciosNegocios
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
    id: "supermercados", 
    name: "Supermercados, Mercados y Tiendas", 
    subcategories: [
      "Friajes y carnicerias",
      "Mercados",
      "Productos para churrasco",
      "Supermercados"
    ],
    image: imgSupermercados
  },
  { id: "surtidores", name: "Surtidores", subcategories: [], image: imgSurtidores },
  { 
    id: "tecnologia", 
    name: "Tecnología", 
    subcategories: tecnologiaSubcategories,
    image: imgTecnologia
  },
  { 
    id: "turismo", 
    name: "Turismo", 
    subcategories: turismoSubcategories,
    image: imgTurismo
  },
  { id: "uniformes", name: "Uniformes y Ropa de Trabajo", subcategories: [], image: imgUniformes },
  { 
    id: "vehiculos", 
    name: "Vehículos", 
    subcategories: vehiculosSubcategories,
    image: imgVehiculos
  },
  { id: "viajes", name: "Viajes", subcategories: [], image: imgViajes },
  { id: "videojuegos", name: "Videojuegos", subcategories: [], image: imgVideojuegos },
];

// Mock featured businesses (destacados)
const mockFeaturedBusinesses = [
  {
    id: 101,
    name: "Baby Corp",
    logo: "https://images.unsplash.com/photo-1763888647744-c566e723c396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvcCUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzY5NzA3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 523,
  },
  {
    id: 102,
    name: "El Sabor Paceño",
    logo: "https://images.unsplash.com/photo-1575395311793-ad870d50fbd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbG9nb3xlbnwxfHx8fDE3Njk3MDcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 734,
  },
  {
    id: 103,
    name: "Tech Store Bolivia",
    logo: "https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RvcmUlMjBsb2dvfGVufDF8fHx8MTc2OTcwNzI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 1234,
  },
  {
    id: 104,
    name: "Fitness Pro Gym",
    logo: "https://images.unsplash.com/photo-1711623350002-d97138f35bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwbG9nb3xlbnwxfHx8fDE3Njk3MDcyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 892,
  },
  {
    id: 105,
    name: "Bella Vista Spa",
    logo: "https://images.unsplash.com/photo-1762095568382-b6d1245f06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGxvZ298ZW58MXx8fHwxNzY5NzA3MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 456,
  },
  {
    id: 106,
    name: "Fashion Store",
    logo: "https://images.unsplash.com/photo-1747868752289-e74d613cb5ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmUlMjBsb2dvfGVufDF8fHx8MTc2OTcwNzI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 678,
  },
];

// Mock publications for demo
const mockPublications = [
  {
    id: 1,
    business: "Restaurante El Sabor Paceño",
    category: "Gastronomía",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1723672885092-d31ebd5a94b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJvbGl2aWFufGVufDF8fHx8MTc2ODkxNTk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Disfruta de la mejor comida tradicional boliviana. Platos del día con descuento especial.",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    business: "Tech Store Bolivia",
    category: "Tecnología",
    city: "Santa Cruz",
    image: "https://images.unsplash.com/photo-1642943038577-eb4a59549766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4ODMwMDI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Lo último en tecnología. Laptops, smartphones y accesorios.",
    rating: 4.9,
    reviews: 456,
  },
  {
    id: 3,
    business: "Gimnasio Fitness Pro",
    category: "Deportes",
    city: "La Paz",
    image: "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3Njg5MTU5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Alcanza tus metas fitness con nuestros entrenadores certificados.",
    rating: 4.6,
    reviews: 298,
  },
];

interface CategoriesProps {
  onBack: () => void;
  onCategorySelect?: (category: string) => void;
  selectedCity?: string;
  onViewBusiness?: (businessId: number) => void;
  onViewStore?: (storeId: number) => void;
  initialCategoryId?: string | null;
}

// Helper function to get icon for each category based on ID
const getCategoryIcon = (categoryId: string) => {
  const iconMap: Record<string, any> = {
    "antiguedades": Sparkles,
    "aplicaciones": Laptop,
    "asociaciones": Users,
    "bancos": Building2,
    "bebes": Baby,
    "belleza": Heart,
    "bienes-raices": Home,
    "bodas": Gift,
    "camara-comercio": Building2,
    "camping": TreePine,
    "casas-cambio": Coins,
    "casas-empeno": DollarSign,
    "caza-pesca": Leaf,
    "centros-comerciales": ShoppingBag,
    "ciencia": Zap,
    "cines": Clapperboard,
    "coleccionistas": Package,
    "construccion": Hammer,
    "cultura": Theater,
    "decoracion": Palette,
    "deportes": Dumbbell,
    "diseno-moda": Shirt,
    "distribuidores": Package,
    "ecommerce": ShoppingCart,
    "educacion": GraduationCap,
    "electronica": Laptop,
    "embajadas": Building,
    "emprendimientos": Lightbulb,
    "entretenimiento": Gamepad2,
    "entretenimiento-infantil": Baby,
    "envios-dinero": DollarSign,
    "equipos-seguridad": Building2,
    "exportadores": Plane,
    "fabricantes": Warehouse,
    "fiestas-eventos": PartyPopper,
    "fiestas-infantiles": Cake,
    "florerias": Flower2,
    "fotografia": Camera,
    "fundaciones": Heart,
    "gastronomia": UtensilsCrossed,
    "hecho-mano": Hand,
    "hecho-bolivia": Award,
    "herramientas": Wrench,
    "higiene": Sparkles,
    "hogar": Home,
    "hombre": Shirt,
    "hoteles": Hotel,
    "industria-agricola": Leaf,
    "industria-alimentos": UtensilsCrossed,
    "industria-bebidas": UtensilsCrossed,
    "industria-salud": Stethoscope,
    "industria-ganadera": Leaf,
    "industria-maderera": TreePine,
    "industria-metalurgica": Warehouse,
    "industria-petrolera": Warehouse,
    "industria-textil": Shirt,
    "industria-vitivinicola": UtensilsCrossed,
    "influencers": Megaphone,
    "instituciones-gubernamentales": Building,
    "jardin": Leaf,
    "librerias-editoriales": Book,
    "mascotas-animales": Dog,
    "medios-comunicacion": Newspaper,
    "mujer": Shirt,
    "musicos-grupos": Music,
    "ninos": Baby,
    "oficina": Briefcase,
    "regalos": Gift,
    "salud": Stethoscope,
    "servicios-generales": Wrench,
    "servicios-independientes": Briefcase,
    "servicios-profesionales": Briefcase,
    "supermercados": ShoppingCart,
    "tecnologia": Laptop,
    "turismo": Plane,
    "vehiculos": Car,
    "terapia-fisica": Stethoscope,
    "yoga-pilates": Dumbbell,
    "nutricion-dietetica": UtensilsCrossed,
    "cirugias-esteticas": Heart,
    "spa-masajes": Sparkles,
    "terapeutas": Stethoscope,
    "maquilladores": Palette,
    "peluquerias": Palette,
    "estetica-integral": Heart,
    "barbershop": Palette,
    "centros-esteticos": Heart,
  };
  
  return iconMap[categoryId] || ShoppingBag;
};

const getCategoryColor = (categoryId: string) => {
  const colors = [
    "from-orange-500 to-red-600",
    "from-blue-500 to-blue-700",
    "from-green-500 to-green-700",
    "from-purple-500 to-purple-700",
    "from-pink-500 to-pink-700",
    "from-yellow-500 to-yellow-700",
    "from-indigo-500 to-indigo-700",
    "from-teal-500 to-teal-700",
  ];
  
  const hash = categoryId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

export function Categories({ onBack, onCategorySelect, selectedCity = "", onViewBusiness, onViewStore, initialCategoryId = null }: CategoriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [view, setView] = useState<"categories" | "subcategories" | "publications">("categories");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  
  // Estados de paginación para "Todas las Categorías"
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 10;

  // Si hay una categoría inicial, seleccionarla automáticamente
  useEffect(() => {
    if (initialCategoryId) {
      const category = categoriesData.find(cat => cat.id === initialCategoryId);
      if (category) {
        handleCategoryClick(category);
      }
    }
  }, [initialCategoryId]);

  // Scroll a "Todas las Categorías" cuando cambia la página
  useEffect(() => {
    const todasCategoriasElement = document.getElementById('todas-las-categorias');
    if (todasCategoriasElement && view === "categories") {
      const elementPosition = todasCategoriasElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 150;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [currentPage]);

  // Guardar posición de scroll cuando se cambia de vista
  useEffect(() => {
    if (scrollContainerRef.current) {
      if (view === "categories") {
        // Restaurar posición guardada al volver a categorías
        scrollContainerRef.current.scrollTop = scrollPositionRef.current;
      } else {
        // Ir al inicio cuando se ve subcategorías o publicaciones
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [view]);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleCategoryClick = (category: any) => {
    // Guardar posición actual del scroll
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollTop;
    }
    
    // Cerrar sidebar mobile al seleccionar categoría
    setShowSidebarMobile(false);
    
    if (category.subcategories.length === 0) {
      // No tiene subcategorías, mostrar publicaciones directamente
      setSelectedCategory(category);
      setView("publications");
    } else {
      // Tiene subcategorías, mostrar subcategorías
      setSelectedCategory(category);
      setView("subcategories");
    }
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setView("publications");
    setShowSidebarMobile(false);
  };

  const handleBackClick = () => {
    if (view === "publications") {
      if (selectedCategory && selectedCategory.subcategories.length > 0) {
        setView("subcategories");
        setSelectedSubcategory(null);
      } else {
        setView("categories");
        setSelectedCategory(null);
      }
    } else if (view === "subcategories") {
      setView("categories");
      setSelectedCategory(null);
    } else {
      onBack();
    }
  };

  const handleSearch = () => {
    // Implementar búsqueda global
    console.log("Buscando:", searchQuery);
  };

  const filteredCategories = searchQuery
    ? categoriesData.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categoriesData;

  return (
    <div ref={scrollContainerRef} className="space-y-2 sm:space-y-3">
      {/* Header - Común para todas las vistas */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {/* Botón de volver solo visible si NO estamos en vista de categorías */}
          {view !== "categories" && (
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-all group flex-shrink-0"
            >
              <div className="bg-white rounded-full p-1.5 sm:p-2 shadow-md group-hover:shadow-lg group-hover:bg-orange-100 transition-all border border-orange-200">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>
          )}
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent truncate">
              {view === "categories" 
                ? "Categorías" 
                : view === "subcategories"
                ? selectedCategory?.name
                : selectedSubcategory || selectedCategory?.name
              }
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 truncate">
              {view === "categories" 
                ? "Explora todos nuestros servicios y productos"
                : view === "subcategories"
                ? "Selecciona una subcategoría"
                : "Publicaciones disponibles"
              }
            </p>
          </div>
          
          {/* Botón de Menú Mobile - Solo visible en mobile */}
          <button
            onClick={() => setShowSidebarMobile(!showSidebarMobile)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg shadow-md flex-shrink-0"
          >
            <Grid3x3 className="w-4 h-4" />
            <span className="text-xs font-medium">Menú</span>
          </button>
        </div>
        
        {/* Search Bar - Solo en vista de categorías en desktop */}
        {view === "categories" && (
          <div className="relative w-full sm:w-auto hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar categorías..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="w-full sm:w-96 pl-10 pr-3 py-2 text-sm rounded-full border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>
        )}
      </div>

      {/* Separator Line */}
      <div className="border-t-2 border-gray-200"></div>

      {/* Layout con Panel Lateral y Contenido Principal */}
      <div className="flex gap-3 sm:gap-6 relative">
        {/* Panel Lateral Izquierdo - Lista de Categorías */}
        {/* Desktop: Siempre visible | Mobile: Overlay cuando showSidebarMobile=true */}
        <div className={`
          ${showSidebarMobile ? 'fixed' : 'hidden'} lg:block
          ${showSidebarMobile ? 'inset-0 z-50 bg-black/50' : ''}
        `}
        onClick={() => setShowSidebarMobile(false)}
        >
          <div 
            className={`
              bg-white rounded-2xl border-2 border-gray-100 p-3 overflow-y-auto scrollbar-hide
              ${showSidebarMobile 
                ? 'fixed left-0 top-0 bottom-0 w-64 max-w-[85vw] z-50 shadow-2xl' 
                : 'lg:w-64 lg:flex-shrink-0 lg:h-[calc(100vh-250px)] lg:sticky lg:top-4'
              }
            `}
            onClick={(e) => e.stopPropagation()}
          >
          <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
            Todas las Categorías
          </h3>
          <div className="space-y-1">
            {categoriesData.map((category) => (
              <div key={category.id}>
                <div className="flex items-center justify-between hover:bg-orange-50 rounded-lg transition-colors">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="flex-1 text-left px-2 py-1.5 text-xs text-gray-700 hover:text-orange-600 transition-colors font-medium"
                  >
                    {category.name}
                  </button>
                  {category.subcategories.length > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCategory(category.id);
                      }}
                      className="p-1 hover:bg-orange-100 rounded-lg transition-colors mr-1"
                    >
                      {expandedCategories.has(category.id) ? (
                        <Minus className="w-3 h-3 text-orange-600" />
                      ) : (
                        <Plus className="w-3 h-3 text-orange-600" />
                      )}
                    </button>
                  )}
                </div>
                
                {/* Subcategorías expandibles */}
                {expandedCategories.has(category.id) && category.subcategories.length > 0 && (
                  <div className="ml-3 mt-1 mb-2 space-y-0.5 border-l-2 border-orange-200 pl-2">
                    {category.subcategories.map((subcategory, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedCategory(category);
                          setSelectedSubcategory(subcategory);
                          setView("publications");
                        }}
                        className="block w-full text-left px-2 py-1 text-[10px] text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                      >
                        <ChevronRight className="w-2.5 h-2.5 inline-block mr-0.5" />
                        {subcategory}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Panel Central - Contenido según la vista */}
        <div className="flex-1 min-w-0">
          {/* Categories View */}
          {view === "categories" && (
            <div className="space-y-4 sm:space-y-8">
            {/* Algunas de las Categorías */}
            {!searchQuery && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Algunas de las Categorías</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {categoriesData.filter(cat => 
                    ["cultura", "gastronomia", "hoteles", "belleza", "salud", "ecommerce", "tecnologia", "servicios-profesionales", "servicios-generales", "deportes"].includes(cat.id)
                  ).map((category) => {
                    const IconComponent = getCategoryIcon(category.id);
                    return (
                      <div
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                        className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-700 border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-center leading-tight max-w-[100px] text-gray-900 line-clamp-2">
                          {category.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Todas las Categorías */}
            <div id="todas-las-categorias">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {searchQuery ? "Resultados de búsqueda" : "Todas las Categorías"}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {filteredCategories
                  .slice((currentPage - 1) * categoriesPerPage, currentPage * categoriesPerPage)
                  .map((category) => {
                    const IconComponent = getCategoryIcon(category.id);
                    return (
                      <div
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                        className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-700 border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-center leading-tight max-w-[100px] text-gray-900 line-clamp-2">
                          {category.name}
                        </p>
                      </div>
                    );
                  })}
              </div>
              
              {/* Paginación */}
              {filteredCategories.length > categoriesPerPage && (
                <div className="flex flex-col items-center gap-4 pt-6 mt-6 border-t-2 border-gray-200">
                  <div className="text-gray-600 text-sm font-medium">
                    Mostrando {Math.min((currentPage - 1) * categoriesPerPage + 1, filteredCategories.length)} - {Math.min(currentPage * categoriesPerPage, filteredCategories.length)} de {filteredCategories.length} categorías
                  </div>
                  
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
                      {[...Array(Math.ceil(filteredCategories.length / categoriesPerPage))].map((_, index) => {
                        const pageNum = index + 1;
                        const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);
                        
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
                      onClick={() => setCurrentPage(prev => Math.min(Math.ceil(filteredCategories.length / categoriesPerPage), prev + 1))}
                      disabled={currentPage === Math.ceil(filteredCategories.length / categoriesPerPage)}
                      className={`px-4 py-2 rounded-2xl font-medium transition-colors ${
                        currentPage === Math.ceil(filteredCategories.length / categoriesPerPage)
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-500'
                      }`}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
            </div>
            </div>
          )}

        {/* Subcategories View */}
        {view === "subcategories" && selectedCategory && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {selectedCategory.id === "belleza" ? (
                // Mostrar subcategorías de Belleza y Bienestar con imágenes
                bellezaBienestarSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "bebes" ? (
                // Mostrar subcategorías de Bebés con imágenes
                bebesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "bienes-raices" ? (
                // Mostrar subcategorías de Bienes Raíces con imágenes
                bienesRaicesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "construccion" ? (
                // Mostrar subcategorías de Construcción con imágenes
                construccionSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "decoracion" ? (
                // Mostrar subcategorías de Decoración con imágenes
                decoracionSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "cultura" ? (
                // Mostrar subcategorías de Cultura con imágenes
                culturaSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "deportes" ? (
                // Mostrar subcategorías de Deportes con imágenes
                deporteSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "educacion" ? (
                // Mostrar subcategorías de Educación con imágenes
                educacionSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "entretenimiento-infantil" ? (
                // Mostrar subcategorías de Entretenimiento Infantil con imágenes
                entretenimientoInfantilSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "fiestas-eventos" ? (
                // Mostrar subcategorías de Fiestas y Eventos con imágenes
                fiestasEventosSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "fiestas-infantiles" ? (
                // Mostrar subcategorías de Fiestas y Eventos Infantiles con imágenes
                fiestasEventosInfantilesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "gastronomia" ? (
                // Mostrar subcategorías de Gastronomía con imágenes
                gastronomiaSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "hogar" ? (
                // Mostrar subcategorías de Hogar con imágenes
                hogarSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "hombre" ? (
                // Mostrar subcategorías de Hombre con imágenes
                hombreSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "hoteles" ? (
                // Mostrar subcategorías de Hoteles con imágenes
                hotelesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "industria-textil" ? (
                // Mostrar subcategorías de Industria Textil con imágenes
                industriaTextilSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "jardin" ? (
                // Mostrar subcategorías de Jardín con imágenes
                jardinSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "librerias" ? (
                // Mostrar subcategorías de Librerías y Editoriales con imágenes
                libreriasEditorialesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "mascotas" ? (
                // Mostrar subcategorías de Mascotas y Animales con imágenes
                mascotasAnimalesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "medios-comunicacion" ? (
                // Mostrar subcategorías de Medios de Comunicación con imágenes
                mediosComunicacionSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "mujer" ? (
                // Mostrar subcategorías de Mujer con imágenes
                mujerSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "musicos-grupos" ? (
                // Mostrar subcategorías de Músicos y Grupos de Música con imágenes
                musicosGruposMusicalesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "ninos" ? (
                // Mostrar subcategorías de Niños con imágenes
                ninosSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "oficina" ? (
                // Mostrar subcategorías de Oficina con imágenes
                oficinaSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "regalos" ? (
                // Mostrar subcategorías de Regalos con imágenes
                regalosSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "salud" ? (
                // Mostrar subcategorías de Salud con imágenes
                saludSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "servicios-generales" ? (
                // Mostrar subcategorías de Servicios Generales con imágenes
                serviciosGeneralesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "servicios-independientes" ? (
                // Mostrar subcategorías de Servicios Independientes con imágenes
                serviciosIndependientesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "servicios-profesionales" ? (
                // Mostrar subcategorías de Servicios Profesionales con imágenes
                serviciosProfesionalesSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "supermercados" ? (
                // Mostrar subcategorías de Supermercados con imágenes
                supermercadosSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "tecnologia" ? (
                // Mostrar subcategorías de Tecnología con imágenes
                tecnologiaSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "turismo" ? (
                // Mostrar subcategorías de Turismo con imágenes
                turismoSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : selectedCategory.id === "vehiculos" ? (
                // Mostrar subcategorías de Vehículos con imágenes
                vehiculosSubcategories.map((subcategory, index) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-white border-t border-gray-100">
                      <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-tight">
                        {subcategory.name}
                      </h3>
                    </div>
                  </Card>
                ))
              ) : (
                // Mostrar subcategorías normales sin imágenes
                selectedCategory.subcategories.map((subcategory: string, index: number) => (
                  <Card
                    key={index}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className="p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer text-center"
                  >
                    <h3 className="font-bold text-gray-900">{subcategory}</h3>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}

        {/* Publications View */}
        {view === "publications" && (
          <div className="space-y-4 sm:space-y-6">
            {/* Featured Businesses Section */}
            <div>
              <h2 className="text-xl text-gray-900 mb-4">Destacados</h2>
              <div className="relative group">
                {/* Left Arrow */}
                <button
                  onClick={() => {
                    const container = document.getElementById('featured-scroll');
                    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -ml-4"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                {/* Scrollable Container */}
                <div
                  id="featured-scroll"
                  className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {mockFeaturedBusinesses.map((business) => (
                    <Card
                      key={business.id}
                      onClick={() => onViewStore && onViewStore(business.id)}
                      className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer p-0 flex-shrink-0 w-32 snap-start"
                    >
                      <div className="flex flex-col">
                        {/* Logo */}
                        <div className="w-full aspect-square overflow-hidden bg-gray-100">
                          <img
                            src={business.logo}
                            alt={business.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Name & Rating */}
                        <div className="p-2 space-y-1">
                          <h3 className="font-semibold text-xs text-gray-900 text-center line-clamp-2 leading-tight">
                            {business.name}
                          </h3>
                          
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-xs text-gray-900">{business.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => {
                    const container = document.getElementById('featured-scroll');
                    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -mr-4"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Regular Publications */}
            {mockPublications.length === 0 ? (
              <div className="text-center py-12 sm:py-20">
                <p className="text-lg sm:text-2xl text-gray-500 font-semibold px-4">
                  No existen publicaciones para mostrar
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockPublications.map((pub) => (
                  <Card
                    key={pub.id}
                    onClick={() => onViewBusiness && onViewBusiness(pub.id)}
                    className="rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <img
                      src={pub.image}
                      alt={pub.business}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-1">{pub.business}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-lg font-medium">
                          {pub.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {pub.city}
                        </span>
                      </div>
                      <p className="text-gray-700 text-xs mb-3 line-clamp-2">{pub.description}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900 text-sm">{pub.rating}</span>
                        <span className="text-xs text-gray-500">({pub.reviews})</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
