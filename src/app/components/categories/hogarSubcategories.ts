import imgAromatizantes from "figma:asset/e077634e9253747cfba4babaa95135601ac32eb8.png";
import imgBanos from "figma:asset/b57eafe97ccf609d0fad944d8aca387a871a610b.png";
import imgCocinas from "figma:asset/e9382fd3004c31910eb102c669ed16b444c0d2f9.png";
import imgColchones from "figma:asset/693a1eca163c3ec33f9753d4ed10cacad000e38f.png";
import imgCuartosNinos from "figma:asset/1e41184a8cf8565cf98da3ef5909a3f7c10a29ef.png";
import imgElectrodomesticos from "figma:asset/eb761053da268f2df70a202bbbec87beba8e7056.png";
import imgProductosLimpieza from "figma:asset/860cdd193464513f3d6758fe8198e8eabd29de8d.png";
import imgUtensiliosCocina from "figma:asset/e65e127d69ecbb3efcdbb76ca8df7850f189cb19.png";
import imgVajillas from "figma:asset/cdd70ba90c014de4e306c0bf290e9150153c50a2.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const hogarSubcategories: SubcategoryWithImage[] = [
  { name: "Aromatizantes", image: imgAromatizantes },
  { name: "Baños", image: imgBanos },
  { name: "Cocinas", image: imgCocinas },
  { name: "Colchones", image: imgColchones },
  { name: "Cuartos para niños", image: imgCuartosNinos },
  { name: "Electrodomésticos", image: imgElectrodomesticos },
  { name: "Productos de limpieza", image: imgProductosLimpieza },
  { name: "Utensilios para cocina", image: imgUtensiliosCocina },
  { name: "Vajillas", image: imgVajillas },
];
