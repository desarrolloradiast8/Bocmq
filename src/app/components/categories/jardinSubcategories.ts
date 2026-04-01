import imgChurrasqueras from "figma:asset/93c0d462ed5743e35dff3bf3ef98cf630cf55cf6.png";
import imgDecoracionJardin from "figma:asset/27251545369042a59a3515c980983f19e1465bb9.png";
import imgMueblesJardin from "figma:asset/c21b1a60751adc27d3ff323624b7e91944a36d72.png";
import imgTodoJardin from "figma:asset/1bb544b68a353bfde2a54bbd139cc6368fde917f.png";
import imgTodoPiscina from "figma:asset/1d2767b222c057bb9ef0356b38b0a61ad8a6fd3f.png";
import imgViveros from "figma:asset/1cc5e8401f82aadccca590424bb0e7725626c648.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const jardinSubcategories: SubcategoryWithImage[] = [
  { name: "Churrasqueras y parrillas", image: imgChurrasqueras },
  { name: "Decoración para jardines", image: imgDecoracionJardin },
  { name: "Muebles para jardín", image: imgMueblesJardin },
  { name: "Todo para jardín", image: imgTodoJardin },
  { name: "Todo para piscina", image: imgTodoPiscina },
  { name: "Viveros", image: imgViveros },
];
