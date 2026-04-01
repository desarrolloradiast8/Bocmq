import imgBebidasEventos from "figma:asset/95a69a4dec3fa71918ea14642f17334ba8a4406c.png";
import imgCateringEventos from "figma:asset/6c702f8ffc6e7fbd75e82fbbb7a1bf5b39abd9b1.png";
import imgComidaEventos from "figma:asset/67abfbf4b5a644d0189b49667a8d2d55e0e98c02.png";
import imgCotillones from "figma:asset/1751522e1027eebb63bcfd2d2e5a94546fef53b1.png";
import imgDecoracionEventos from "figma:asset/c9bb36d9ee41c2a853f1bea6cdc99870dfaba397.png";
import imgDulcesEventos from "figma:asset/9486530757c650aabc910fe642b1f6bbbec36d8b.png";
import imgFloresEventos from "figma:asset/179906ef1c037e7b1284996c9435a7f38ad9d8ed.png";
import imgFotografoEventos from "figma:asset/65723664cfdd6bd401d1e9a1f012e8b2b057f524.png";
import imgGruposMusicalesEventos from "figma:asset/93ec0ac281510d72a4dc164d24babede2ea86b46.png";
import imgIdeasOriginalesEventos from "figma:asset/c62b14a4a0dc6d797dddfced2fc285f5af65a128.png";
import imgInvitacionesEventos from "figma:asset/caf1e7299d22673347360a1609bdf91b2c656978.png";
import imgOrganizacionEventos from "figma:asset/61bf5f5d424c34d414e00aae8d7d09758e1e1383.png";
import imgRentaLimosinas from "figma:asset/22c5c789b2c189c18c8741df478d123259796c83.png";
import imgRentaMobiliario from "figma:asset/944f7790e16912e94cf0e90a7b3c1de2a8974e86.png";
import imgSalonesCorporativos from "figma:asset/ae5a9268e3e43483a64e3e2a3cb4f2ecffd685b3.png";
import imgSalonesLugares from "figma:asset/67ddaa569ee14138b878f74ff7c4496c35f63cea.png";
import imgServiciosAudiovisuales from "figma:asset/6d67ed7e36784a0e6a0c9450aa248bb5c05b0355.png";
import imgShowsHoraLoca from "figma:asset/350f07df9f6e42ff66fe84c89a832f89a94ff354.png";
import imgTortasEventos from "figma:asset/7c7f2416e68364d735edf4040f41addd3f8ca48b.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const fiestasEventosSubcategories: SubcategoryWithImage[] = [
  { name: "Bebidas para eventos", image: imgBebidasEventos },
  { name: "Catering para eventos", image: imgCateringEventos },
  { name: "Comida para eventos", image: imgComidaEventos },
  { name: "Cotillones", image: imgCotillones },
  { name: "Decoración de eventos", image: imgDecoracionEventos },
  { name: "Dulces para eventos", image: imgDulcesEventos },
  { name: "Flores para eventos", image: imgFloresEventos },
  { name: "Fotógrafo para eventos", image: imgFotografoEventos },
  { name: "Grupos musicales para eventos", image: imgGruposMusicalesEventos },
  { name: "Ideas originales para tus eventos", image: imgIdeasOriginalesEventos },
  { name: "Invitaciones para eventos", image: imgInvitacionesEventos },
  { name: "Organización de eventos", image: imgOrganizacionEventos },
  { name: "Renta de limosinas", image: imgRentaLimosinas },
  { name: "Renta de mobiliario para eventos", image: imgRentaMobiliario },
  { name: "Salones para eventos corporativos", image: imgSalonesCorporativos },
  { name: "Salones y lugares para eventos", image: imgSalonesLugares },
  { name: "Servicios audiovisuales para eventos", image: imgServiciosAudiovisuales },
  { name: "Shows y hora loca", image: imgShowsHoraLoca },
  { name: "Tortas para eventos", image: imgTortasEventos },
];