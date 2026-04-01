import imgCantantesMusicos from "figma:asset/34249e0cb51473881d048e220891c1df544233d9.png";
import imgOrquestas from "figma:asset/160cb7c3bea4ba9cc5e2a59c2df702334255ea16.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const musicosGruposMusicalesSubcategories: SubcategoryWithImage[] = [
  { name: "Cantantes y músicos", image: imgCantantesMusicos },
  { name: "Orquestas", image: imgOrquestas },
];
