import imgCelulares from "figma:asset/5588f0521aa6ad0249af4efcbdb953de399f1874.png";
import imgComputadoras from "figma:asset/a2fc97775bd8d43b0685fd7c688bac32d1c6b30e.png";
import imgDrones from "figma:asset/1c746a8ba428a105fc8aef25369074891c46954c.png";
import imgEquiposSeguridad from "figma:asset/cd8ddf057c192d84dd740c7eed35c12a1c6a3ef6.png";
import imgFotografia from "figma:asset/7d89e1057dd248d33dcea4064cd90176cf3128a8.png";
import imgNovedadesTecnologicas from "figma:asset/7d5d5f168d3e3cab1c95cefd8bea3f4e02b36aaa.png";
import imgReparacionCelulares from "figma:asset/930fee9db974b57e9f1b2590c3fe5cf73e6f5fa8.png";
import imgServiciosInteligencia from "figma:asset/14022a587e21c3c6b1706991a4e68a58191c8a04.png";
import imgSmartHome from "figma:asset/6ad72d5df45f678e0c3906c9a24f29efd0d1fc84.png";
import imgSoftwares from "figma:asset/1043edb796f74931671e207eaac511bc6901814e.png";
import imgTelevision from "figma:asset/d6dbf890f6b191b7bc66befc80db08c98ffd554c.png";
import imgVentaArticulosElectronicos from "figma:asset/d79090006e41ead1853c1ca908a2b199c91464c1.png";
import imgVentaTelefonos from "figma:asset/547efedbe8edc76f1ec6da87307b7d44db3c8e70.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const tecnologiaSubcategories: SubcategoryWithImage[] = [
  { name: "Celulares y todo para celulares", image: imgCelulares },
  { name: "Computadoras y todo para computadoras", image: imgComputadoras },
  { name: "Drones", image: imgDrones },
  { name: "Equipos de seguridad", image: imgEquiposSeguridad },
  { name: "Fotografía", image: imgFotografia },
  { name: "Novedades tecnológicas para tu negocio", image: imgNovedadesTecnologicas },
  { name: "Reparación de celulares", image: imgReparacionCelulares },
  { name: "Servicios de inteligencia para hogar, negocio u oficina", image: imgServiciosInteligencia },
  { name: "Smart home", image: imgSmartHome },
  { name: "Softwares", image: imgSoftwares },
  { name: "Televisión", image: imgTelevision },
  { name: "Venta de artículos electrónicos", image: imgVentaArticulosElectronicos },
  { name: "Venta de teléfonos", image: imgVentaTelefonos },
];