import imgActividadesAventura from "figma:asset/5aa90d94eecaf279b55ed084004d4f31ebc321a9.png";
import imgActividadesDeportivas from "figma:asset/29151ee2a67616671c099ee5f2c10429630540aa.png";
import imgAfterOffice from "figma:asset/37ecff4039ed905ba3c18730b331d099ed26d735.png";
import imgBares from "figma:asset/75abcf80656894851c379730037131bb4e343013.png";
import imgBillar from "figma:asset/4cb1db342d1258842ec5cfed477fd14f8776d06e.png";
import imgBoliches from "figma:asset/225f2a29ddbf861974101b7b3681c4fab717086f.png";
import imgBowling from "figma:asset/d67dd4aca1ac0192a298fcdabdcde13226181fdc.png";
import imgKaraokes from "figma:asset/7d4a141c89ef5f4d49502386af158a8d13809d85.png";
import imgPiscinasFinSemana from "figma:asset/1651007d4b71dcd46aff74de129c5260d3f42017.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const entretenimientoSubcategories: SubcategoryWithImage[] = [
  { name: "Actividades aventura", image: imgActividadesAventura },
  { name: "Actividades deportivas", image: imgActividadesDeportivas },
  { name: "After office", image: imgAfterOffice },
  { name: "Bares", image: imgBares },
  { name: "Billar", image: imgBillar },
  { name: "Boliches", image: imgBoliches },
  { name: "Bowling", image: imgBowling },
  { name: "Karaokes", image: imgKaraokes },
  { name: "Piscinas de fin de semana", image: imgPiscinasFinSemana },
];