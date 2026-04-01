import imgAluminio from "figma:asset/1c93ac4840f563755ddf4c2821d474c3784ce869.png";
import imgCalaminas from "figma:asset/a5ddaac7f412ae28561575265afe0c7f7844b7b5.png";
import imgCementeras from "figma:asset/a603851f3b45b3d285531a2aa4fad11cb44f2105.png";
import imgCeramicas from "figma:asset/c09cf8c37dbfce4f0470aa49df94f78366961f0e.png";
import imgCerraduras from "figma:asset/38c87526209e823ac6ceab56b17a29be2a0b7c0d.png";
import imgConstructoras from "figma:asset/8f5e7122bd5cac28f5afe5d6d1307ad29536f8cf.png";
import imgElectricidad from "figma:asset/0f4fa396b247c79787ee4d587a4b99e9fa3221be.png";
import imgGasfiteria from "figma:asset/7b1e4fc5199fa07926fc4bed1f070897d53b265a.png";
import imgGruas from "figma:asset/68dc9dd9eebc19b1b7e5d9b94dff725b5c1a1b56.png";
import imgHerreria from "figma:asset/ecece73d0b7ee27c856c41a88603ed583176b6c6.png";
import imgMaterialesConstruccion from "figma:asset/44d4e487a2ce2587c02cb5f7d5f8bc0d3b819a35.png";
import imgPintura from "figma:asset/23b9983f5de3b2392e58933f640ff4443dcdccb0.png";
import imgPisos from "figma:asset/23115ffdafe1a9983c21a6fbebe73f6039017246.png";
import imgPuertas from "figma:asset/6192688b9ffcf1926e460e29326a6661e1f721b6.png";
import imgTechos from "figma:asset/c05b1cb7e0d678623484dc3faa19a1f723051048.png";
import imgTejas from "figma:asset/7e7ff5c9ef00d72ee7cbfc9103271eb82280c0e1.png";
import imgVidriosVentanas from "figma:asset/bac884eed1133fc196281157e39aa0d3b6269b85.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const construccionSubcategories: SubcategoryWithImage[] = [
  { name: "Aluminio", image: imgAluminio },
  { name: "Calaminas", image: imgCalaminas },
  { name: "Cementeras", image: imgCementeras },
  { name: "Cerámicas", image: imgCeramicas },
  { name: "Cerraduras", image: imgCerraduras },
  { name: "Constructoras", image: imgConstructoras },
  { name: "Electricidad", image: imgElectricidad },
  { name: "Gasfitería", image: imgGasfiteria },
  { name: "Grúas", image: imgGruas },
  { name: "Herrería", image: imgHerreria },
  { name: "Materiales de construcción", image: imgMaterialesConstruccion },
  { name: "Pintura", image: imgPintura },
  { name: "Pisos", image: imgPisos },
  { name: "Puertas", image: imgPuertas },
  { name: "Techos", image: imgTechos },
  { name: "Tejas", image: imgTejas },
  { name: "Vidrios y ventanas", image: imgVidriosVentanas },
];
