import imgAccesoriosMasculinos from "figma:asset/0a0c56cfb9c0757872e6cf3495f2eaa108a2b80e.png";
import imgJeans from "figma:asset/03abd0df6dbc209f4efd6e4c829abddcdb1f875e.png";
import imgMallas from "figma:asset/1ee0219e326f788ff431e6335b53c580626e41d2.png";
import imgRopaHombre from "figma:asset/62fa1f2afe1ad81eb5c25f9126528231cc0809da.png";
import imgTernos from "figma:asset/00e8b04126ad284a6464ca72f0b0b546cc04aeee.png";
import imgZapatos from "figma:asset/c956af69e91293951af4c9b78fada223bf2f7e82.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const hombreSubcategories: SubcategoryWithImage[] = [
  { name: "Accesorios masculinos", image: imgAccesoriosMasculinos },
  { name: "Jeans para hombres", image: imgJeans },
  { name: "Mallas de hombre", image: imgMallas },
  { name: "Ropa de hombre", image: imgRopaHombre },
  { name: "Ternos", image: imgTernos },
  { name: "Zapatos de hombre", image: imgZapatos },
];
