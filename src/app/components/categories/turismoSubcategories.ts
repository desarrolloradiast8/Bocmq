import imgAerolineas from "figma:asset/b04ab6141baeeb011c883c4b6634b11a80f63c23.png";
import imgAeropuertos from "figma:asset/275d2612e739bde76016253ca1c734807776b9dc.png";
import imgAgenciasViaje from "figma:asset/d2c5a43b5a17e0c2d883bf4931fd8952d10bfc05.png";
import imgArticulosViaje from "figma:asset/8947ba8f1cd9ea41e32fec141e2012c1ba96c7c5.png";
import imgBioParque from "figma:asset/2bca757b857c5137e39e78a9284d913f33f35a45.png";
import imgBolivia from "figma:asset/469e0eec25bec804caa4a9e68397feded089053a.png";
import imgCentralAutobuses from "figma:asset/2d1d56c84900f2c31f03d9029bd7d527ea82efc1.png";
import imgDepartamentoSantaCruz from "figma:asset/d7ffe200e4e013193cef00d3a0483dddf20e3a69.png";
import imgFerrocarril from "figma:asset/5fd049de2c694aa311a9a3b164537d94fe7bae48.png";
import imgLugaresTuristicos from "figma:asset/461422c42baa64dc848407f1460d6b3f246c34c7.png";
import imgParques from "figma:asset/85e62e9269adb464e1b77a00238216721deb1ad5.png";
import imgServiciosTuristicos from "figma:asset/c39a52b86553db9ecb5161b168dc6b97ac100fc5.png";
import imgTramitesMigratorios from "figma:asset/36f1a5c6d1ef64e4a8476ee53c0075c46a747786.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const turismoSubcategories: SubcategoryWithImage[] = [
  { name: "Aerolíneas", image: imgAerolineas },
  { name: "Aeropuertos", image: imgAeropuertos },
  { name: "Agencias de viaje", image: imgAgenciasViaje },
  { name: "Artículos para viaje", image: imgArticulosViaje },
  { name: "Bio parque", image: imgBioParque },
  { name: "Bolivia", image: imgBolivia },
  { name: "Central de autobuses", image: imgCentralAutobuses },
  { name: "Departamento de Santa Cruz", image: imgDepartamentoSantaCruz },
  { name: "Ferrocarril", image: imgFerrocarril },
  { name: "Lugares turísticos en Santa Cruz y cerca de Santa Cruz", image: imgLugaresTuristicos },
  { name: "Parques", image: imgParques },
  { name: "Servicios turísticos", image: imgServiciosTuristicos },
  { name: "Trámites migratorios", image: imgTramitesMigratorios },
];