import imgAccesoriosBebe from "figma:asset/8718d0a6a674609e0d4d5e6ad010cf8e4a33b4fd.png";
import imgDecoracionBebes from "figma:asset/8716976495bf4620c91ebe0a614ea5491b49faf6.png";
import imgMueblesBebes from "figma:asset/16ce0c1fdf294a50525d54711c1904fd29dadac3.png";
import imgRopaBebe from "figma:asset/ec200ae28ec258c4981f40567f79dd1d514d2eb2.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const bebesSubcategories: SubcategoryWithImage[] = [
  { name: "Accesorios para bebé", image: imgAccesoriosBebe },
  { name: "Decoración para cuartos de bebés", image: imgDecoracionBebes },
  { name: "Muebles para cuartos de bebés", image: imgMueblesBebes },
  { name: "Ropa de bebé", image: imgRopaBebe },
];
