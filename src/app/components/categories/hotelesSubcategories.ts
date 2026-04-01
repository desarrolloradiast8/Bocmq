import imgAlojamientos from "figma:asset/1917463ceb1d8f6597ebaf24c0dfa66be95dce20.png";
import imgHoteles2Estrellas from "figma:asset/9be347a61b97b5adc1c435c77b5cb058d5778f6b.png";
import imgHoteles3Estrellas from "figma:asset/78224b6608d7292685c4d6dd654b6cf80f990499.png";
import imgHoteles4Estrellas from "figma:asset/ed6b152a1ad82b58cc416bba1bcc0a61b58164ad.png";
import imgHoteles5Estrellas from "figma:asset/269b9e36b45e3c972325dee07ef18f677572e7d5.png";
import imgMoteles from "figma:asset/87d9524b64b03a85b0d8ace82a843de5c0c6e81e.png";
import imgResorts from "figma:asset/7a57ffec3bc92e6b39947e2ff232345fa9ddeeb5.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const hotelesSubcategories: SubcategoryWithImage[] = [
  { name: "Alojamientos", image: imgAlojamientos },
  { name: "Hoteles 2 estrellas", image: imgHoteles2Estrellas },
  { name: "Hoteles 3 estrellas", image: imgHoteles3Estrellas },
  { name: "Hoteles 4 estrellas", image: imgHoteles4Estrellas },
  { name: "Hoteles 5 estrellas", image: imgHoteles5Estrellas },
  { name: "Moteles", image: imgMoteles },
  { name: "Resorts", image: imgResorts },
];
