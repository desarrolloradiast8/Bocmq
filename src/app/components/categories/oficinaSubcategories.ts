import imgCoWork from "figma:asset/3ef5c97bbc15da45e210583b23a09936e42102c0.png";
import imgDecoracionOficina from "figma:asset/48f3163fbbc4c02048384e4c24a0b14378fe49ce.png";
import imgMaterialOficina from "figma:asset/476b85bc802cfc6bfcb8bb0ec177b4b9ad3001b3.png";
import imgMueblesOficina from "figma:asset/5653a2fd69912f7bcacc8a3235e001433c4b3f3c.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const oficinaSubcategories: SubcategoryWithImage[] = [
  { name: "Co work", image: imgCoWork },
  { name: "Decoración de oficina", image: imgDecoracionOficina },
  { name: "Material de oficina", image: imgMaterialOficina },
  { name: "Muebles de oficina", image: imgMueblesOficina },
];
