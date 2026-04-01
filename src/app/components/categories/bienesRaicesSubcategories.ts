import imgAgenciasInmobiliarias from "figma:asset/66adbd92987a74342613ca11d0797c8e1a159fce.png";
import imgAsesoresInmobiliarios from "figma:asset/2a32a346111e243a365f26831099bb1e603fa870.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const bienesRaicesSubcategories: SubcategoryWithImage[] = [
  { name: "Agencias inmobiliarias", image: imgAgenciasInmobiliarias },
  { name: "Asesores inmobiliarios", image: imgAsesoresInmobiliarios },
];
