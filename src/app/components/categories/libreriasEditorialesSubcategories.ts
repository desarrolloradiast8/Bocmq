import imgEditoriales from "figma:asset/4a3ce042d962ac372ae0741479e2be220b3fad4d.png";
import imgLibrerias from "figma:asset/542682d5878b92ed985751db7349b036858d4df5.png";
import imgLibreriasReligiosas from "figma:asset/e4d5d2307a312c2254443aa20f842083286cc7e5.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const libreriasEditorialesSubcategories: SubcategoryWithImage[] = [
  { name: "Editoriales", image: imgEditoriales },
  { name: "Librerías", image: imgLibrerias },
  { name: "Librerías religiosas", image: imgLibreriasReligiosas },
];
