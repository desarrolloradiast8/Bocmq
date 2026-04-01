import imgFrialesCarnicerias from "figma:asset/330deb9b46299df2a1d66bef68dba2ba4de8512a.png";
import imgMercados from "figma:asset/5dce6c3dc7c9281783a2be7939a44e3a4606609b.png";
import imgProductosChurrasco from "figma:asset/f5cee1b404dd2486ff3de97c6c2b43b0381357c7.png";
import imgSupermercados from "figma:asset/2d12748f75620d2d19b687b84f24048d998036ad.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const supermercadosSubcategories: SubcategoryWithImage[] = [
  { name: "Friajes y carnicerias", image: imgFrialesCarnicerias },
  { name: "Mercados", image: imgMercados },
  { name: "Productos para churrasco", image: imgProductosChurrasco },
  { name: "Supermercados", image: imgSupermercados },
];
