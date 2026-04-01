import imgJuegosNinos from "figma:asset/74852748d622c1311f05522ddd7bcbea0294424b.png";
import imgParquesAcuaticos from "figma:asset/aea14fca1dd923cb98330e8b1a57fe18c27538bb.png";
import imgParquesDiversionInfantil from "figma:asset/7dfa3029b95c4282af6664b39d6103ec99d4552e.png";
import imgPistaPatinaje from "figma:asset/2de02d633cd3df9f431ff5f0240bf03669bd77c5.png";
import imgRestaurantesAreaJuegos from "figma:asset/d6144743f60f62d2f0d613dfee2ee253deb74b68.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const entrenamientoInfantilSubcategories: SubcategoryWithImage[] = [
  { name: "Juegos para niños", image: imgJuegosNinos },
  { name: "Parques acuáticos", image: imgParquesAcuaticos },
  { name: "Parques de diversión infantil", image: imgParquesDiversionInfantil },
  { name: "Pista de patinaje", image: imgPistaPatinaje },
  { name: "Restaurantes con área de juegos", image: imgRestaurantesAreaJuegos },
];
