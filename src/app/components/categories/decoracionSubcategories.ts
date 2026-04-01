import imgAdornos from "figma:asset/c9f78c1ef2d2240a7bba0b4029696ef2f20c8683.png";
import imgAlfombrasTapetes from "figma:asset/5bb06df1b2b62aea7096d7aa1d516e1aeca82dff.png";
import imgArteDecoraciones from "figma:asset/6f66e981363335fa710dd33c2e8664ee5cf6186f.png";
import imgArtesanias from "figma:asset/d6e76169ca7e015e991335c0583bf3bc3ce20536.png";
import imgCojinesDecorativos from "figma:asset/815b4c6f163aac865131a9787ec21ab2bf6cd79f.png";
import imgCortinas from "figma:asset/86b8d77acf45fbbee76eae53b34242a96895ca7f.png";
import imgCuadros from "figma:asset/fdb96526151503ffb4b769c9ed7b43cbd32f3122.png";
import imgEspejo from "figma:asset/09d06ac7627b75b6f1bec64b05ca855916c75160.png";
import imgIluminacion from "figma:asset/b7eed5c2c911d033a9f6783623ecdeadab50718a.png";
import imgMuebles from "figma:asset/5b0972d4624f4a74befce713c6b0f9de84957828.png";
import imgTiendasDecoracion from "figma:asset/b9aeb8f0e750755fb9a66b27e2f7aa19e7d907e0.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const decoracionSubcategories: SubcategoryWithImage[] = [
  { name: "Adornos", image: imgAdornos },
  { name: "Alfombras y tapetes", image: imgAlfombrasTapetes },
  { name: "Arte y decoraciones", image: imgArteDecoraciones },
  { name: "Artesanías", image: imgArtesanias },
  { name: "Cojines decorativos", image: imgCojinesDecorativos },
  { name: "Cortinas", image: imgCortinas },
  { name: "Cuadros", image: imgCuadros },
  { name: "Espejo", image: imgEspejo },
  { name: "Iluminación", image: imgIluminacion },
  { name: "Muebles", image: imgMuebles },
  { name: "Tiendas de decoración", image: imgTiendasDecoracion },
];