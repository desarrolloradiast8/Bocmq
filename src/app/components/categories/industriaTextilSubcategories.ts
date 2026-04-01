import imgTelasDecorativas from "figma:asset/cd12fdb6a39dd75a8b8cee9c5af54e94607a463d.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const industriaTextilSubcategories: SubcategoryWithImage[] = [
  { name: "Telas decorativas", image: imgTelasDecorativas },
];
