import imgBarberias from "figma:asset/784972601fcfd49a8bf62746d069d73677644799.png";
import imgCejas from "figma:asset/f514dfa1e12971b284b43384d3b20c7d907c36e4.png";
import imgCentroDepilacion from "figma:asset/f09bef12f29124b278f52b1994fc6485f2be76bf.png";
import imgCentrosYoga from "figma:asset/caa55ed084b6b2b440c97e55b12a2c5758701d32.png";
import imgCompaniasBelleza from "figma:asset/64c92829896619c3914c4440447f04f8e0f8d75e.png";
import imgCuidadoCapilar from "figma:asset/d7062c69e0a403e7c27569fc4ff7e7e39edff7fc.png";
import imgCuidadoPiel from "figma:asset/4805048c8efbfc2e2c268777ebf213855833c52f.png";
import imgDermocosmetica from "figma:asset/0093ec8fc984d38d4e0d76318c8fb4474c15c122.png";
import imgDuchasSolares from "figma:asset/0a6e922cc919a9c8af85b4e90bc930e664d88645.png";
import imgExtensiones from "figma:asset/26a61320679f7a432cf09dd966e18b0c0f63af53.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const bellezaBienestarSubcategories: SubcategoryWithImage[] = [
  { name: "Barberías", image: imgBarberias },
  { name: "Cejas", image: imgCejas },
  { name: "Centro de depilación", image: imgCentroDepilacion },
  { name: "Centros de yoga", image: imgCentrosYoga },
  { name: "Compañías de belleza", image: imgCompaniasBelleza },
  { name: "Cuidado capilar", image: imgCuidadoCapilar },
  { name: "Cuidado de la piel", image: imgCuidadoPiel },
  { name: "Dermocosmética", image: imgDermocosmetica },
  { name: "Duchas solares", image: imgDuchasSolares },
  { name: "Extensiones de pelo", image: imgExtensiones },
];
