import imgAccesoriosNinas from "figma:asset/4e40787589a8230a91381bd7b762b7ace8fb5623.png";
import imgAccesoriosNinos from "figma:asset/f9b647b98cb5e0b37b367ac411dcb35cbcfa978a.png";
import imgRopaNinas from "figma:asset/b59930ab41d59e69473d2f711393f7961a0d315c.png";
import imgRopaNinos from "figma:asset/57c6c3c4c01f0c7e8cf8ba1cf7cfcadef4ebfdf5.png";
import imgZapatosNinas from "figma:asset/66e585b3ac5020d666cd0235bbba981f5b478ddb.png";
import imgZapatosNinos from "figma:asset/2a8cb4d7e4b74055be8077604ac1e3410bed947c.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const ninosSubcategories: SubcategoryWithImage[] = [
  { name: "Accesorios para niñas", image: imgAccesoriosNinas },
  { name: "Accesorios para niños", image: imgAccesoriosNinos },
  { name: "Ropa para niñas", image: imgRopaNinas },
  { name: "Ropa para niños", image: imgRopaNinos },
  { name: "Zapatos para niñas", image: imgZapatosNinas },
  { name: "Zapatos para niños", image: imgZapatosNinos },
];
