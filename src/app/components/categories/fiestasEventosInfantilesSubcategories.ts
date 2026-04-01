import imgComidaFiestasInfantiles from "figma:asset/7f5c085f58675f8f46cf0b00a98b296ef3f11ad6.png";
import imgCotillonFiestasInfantiles from "figma:asset/8d6d1efc1a84aa9caae69772024abcedf8301101.png";
import imgDecoracionFiestasInfantiles from "figma:asset/e66c57a5339bdaab48e8a8d8c9821016aabea108.png";
import imgDisfraces from "figma:asset/0db185bf3e6e9f472cec8b1a32f612f207538417.png";
import imgDulcesFiestasInfantiles from "figma:asset/d5603b9641dad049911b68dff23c5597d6d3c6fb.png";
import imgEntretenimientoFiestasInfantiles from "figma:asset/36bf9efe7f914b9a8004c59ae5a500ffa442a675.png";
import imgInvitacionesEventosInfantiles from "figma:asset/78d44390b972964fc08d4a6909e33ab46ed1ecbc.png";
import imgSalonesLugaresFiestasInfantiles from "figma:asset/ebd5d8acc4a286d9e825a569d801dc9f1e0a5d16.png";
import imgTortasFiestasInfantiles from "figma:asset/93b444bc72b4b4ff8d40b02dd96abbd57382a7fb.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const fiestasEventosInfantilesSubcategories: SubcategoryWithImage[] = [
  { name: "Comida para fiestas infantiles", image: imgComidaFiestasInfantiles },
  { name: "Cotillón para fiestas infantiles", image: imgCotillonFiestasInfantiles },
  { name: "Decoración para fiestas infantiles", image: imgDecoracionFiestasInfantiles },
  { name: "Disfraces", image: imgDisfraces },
  { name: "Dulces para fiestas infantiles", image: imgDulcesFiestasInfantiles },
  { name: "Entretenimiento para fiestas infantiles", image: imgEntretenimientoFiestasInfantiles },
  { name: "Invitaciones para eventos infantiles", image: imgInvitacionesEventosInfantiles },
  { name: "Salones y lugares para fiestas infantiles", image: imgSalonesLugaresFiestasInfantiles },
  { name: "Tortas para fiestas infantiles", image: imgTortasFiestasInfantiles },
];
