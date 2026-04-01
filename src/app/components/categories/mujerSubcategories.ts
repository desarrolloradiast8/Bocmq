import imgAccesoriosMujer from "figma:asset/4bb32218fb3ec0989d4dff45e93d7d820c8aef67.png";
import imgCarteras from "figma:asset/17f5ce1f3cc31bf6743da238df47aee00d268727.png";
import imgEmbarazada from "figma:asset/604bb6f2e8ca1d86f54326ec183a55801f0dd7b1.png";
import imgJeansMujer from "figma:asset/b6fb4b7c148a86a7667b3bbe63c8d52a35208496.png";
import imgMallasMujer from "figma:asset/159008779f6bd1f5f176c2b2c1bd269a92cf371b.png";
import imgRopaMujer from "figma:asset/3682cee42e37451cfd7b61ac426cb09d125bfbc4.png";
import imgLenceriaFajas from "figma:asset/cc09c87af4ef833f862fd79b35f51c178ea6fcab.png";
import imgVestidosNovia from "figma:asset/7fde8ad08acbf080fa5702b273f6948d1973cfcb.png";
import imgVestidosElegantes from "figma:asset/c5cd16c6ab50c0662b8c869f35b0f0a72b5a3fae.png";
import imgZapatosMujer from "figma:asset/963415ee9e27c10c8502f08358da3466fcb54e67.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const mujerSubcategories: SubcategoryWithImage[] = [
  { name: "Accesorios para mujer", image: imgAccesoriosMujer },
  { name: "Carteras", image: imgCarteras },
  { name: "Embarazada", image: imgEmbarazada },
  { name: "Jeans para mujer", image: imgJeansMujer },
  { name: "Mallas de mujer", image: imgMallasMujer },
  { name: "Ropa de mujer", image: imgRopaMujer },
  { name: "Ropa de mujer, lencería y fajas", image: imgLenceriaFajas },
  { name: "Vestidos de novia", image: imgVestidosNovia },
  { name: "Vestidos elegantes", image: imgVestidosElegantes },
  { name: "Zapatos de mujer", image: imgZapatosMujer },
];
