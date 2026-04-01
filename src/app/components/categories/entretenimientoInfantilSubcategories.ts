import imgJuegosNinos from "figma:asset/b3e41073f42ca826314d3ca788f16192b0c6af81.png";
import imgParquesAcuaticos from "figma:asset/5a1351e42d3d6f817d15cc347e03b04fc4e17213.png";
import imgParquesDiversionInfantil from "figma:asset/9f5b4decb2c41d278b32d4cf26ee9f02e454f7f7.png";
import imgPistaPatinaje from "figma:asset/aba427ad1cac869bf642afd18ae92c9d5e889840.png";
import imgRestauranteAreaJuegos from "figma:asset/c423ae723e08d3e3421de316358d6b289f6cf78a.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const entretenimientoInfantilSubcategories: SubcategoryWithImage[] = [
  { name: "Juegos para niños", image: imgJuegosNinos },
  { name: "Parques acuáticos", image: imgParquesAcuaticos },
  { name: "Parques de diversión infantil", image: imgParquesDiversionInfantil },
  { name: "Pista de patinaje", image: imgPistaPatinaje },
  { name: "Restaurante con área de juegos", image: imgRestauranteAreaJuegos },
];