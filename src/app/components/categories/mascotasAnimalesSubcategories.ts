import imgArticulosMascotas from "figma:asset/ca7367875b5782f03f4a346884d0f1a9cc0a106a.png";
import imgRefugiosAnimales from "figma:asset/4e448742fa2aeb5105db00c9a2311817347521bd.png";
import imgServiciosMascotas from "figma:asset/b47ed248d33422b2821e6e3ce6997e6ac746b95c.png";
import imgVeterinarias from "figma:asset/982811d50e75d9b62913177396ebef6edb44c5d5.png";

export interface SubcategoryWithImage {
  name: string;
  image: string;
}

export const mascotasAnimalesSubcategories: SubcategoryWithImage[] = [
  { name: "Artículos para mascotas", image: imgArticulosMascotas },
  { name: "Refugios para animales", image: imgRefugiosAnimales },
  { name: "Servicios para mascotas", image: imgServiciosMascotas },
  { name: "Veterinarias", image: imgVeterinarias },
];
