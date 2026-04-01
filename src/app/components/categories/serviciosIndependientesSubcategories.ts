import imgCarpinteros from "figma:asset/cf2ad672d52917d0d0504bd56fca60d825d0f859.png";
import imgCerrajero from "figma:asset/9fe1fdb9cf08ce792c2c648694fb70d3f774396d.png";
import imgElectricistas from "figma:asset/0a3badcd61940f8f0c619dff606239903ca7b305.png";
import imgJardinero from "figma:asset/5662b92b18d1e6f1858b81a46244975087b7e619.png";
import imgPintor from "figma:asset/3352b745272363f50ebfc1efd7bb33803949b1ae.png";
import imgPlomero from "figma:asset/3f0921e8e94d2e30bebdf114ac359840d96ae65e.png";
import imgTapicero from "figma:asset/b41772a57a07a5aee41acf97652182cdb00b539f.png";
import imgZapatero from "figma:asset/c20f696cea0d4f3ade5a36448f97ee33780c579c.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const serviciosIndependientesSubcategories: SubcategoryWithImage[] = [
  { name: "Carpinteros", image: imgCarpinteros },
  { name: "Cerrajero", image: imgCerrajero },
  { name: "Electricistas", image: imgElectricistas },
  { name: "Jardinero", image: imgJardinero },
  { name: "Pintor", image: imgPintor },
  { name: "Plomero", image: imgPlomero },
  { name: "Tapicero", image: imgTapicero },
  { name: "Zapatero", image: imgZapatero },
];
