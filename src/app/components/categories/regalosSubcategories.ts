import imgRegalosGeneral from "figma:asset/0c32c6c326fcb325684d8acd0bd86138fc29182b.png";
import imgRegalosBoda from "figma:asset/66901be85e959bd8f89a018bf3bec3360083d853.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const regalosSubcategories: SubcategoryWithImage[] = [
  { name: "Regalos en general", image: imgRegalosGeneral },
  { name: "Regalos para boda", image: imgRegalosBoda },
];
