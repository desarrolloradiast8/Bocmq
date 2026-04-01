import imgAlquilerVehiculos from "figma:asset/f26dcd5b6e13c06f3e1f61fc95d5a800d7fbaa28.png";
import imgArticulosAutomoviles from "figma:asset/881eaa43e349398ebbbc4fdb82f8e6ca5e9ea267.png";
import imgAutoescuela from "figma:asset/60367e4b639dfce3e96070dddaaa78f7375dc6c1.png";
import imgAutopartes from "figma:asset/6069cfb7db7852a9ea266c4897271bec833ff59c.png";
import imgAutosSeminuevos from "figma:asset/7e0d4258154c2150c54a5176c3106e47dacf6845.png";
import imgBateriasAutomoviles from "figma:asset/78ed0fbea7f23270e48ef468696bbcdb1eeef4be.png";
import imgCarWash from "figma:asset/e4391131c8e0cfcf7f79dbbdca8a24de4f6cde82.png";
import imgConcesionarias from "figma:asset/ec953f373ed8140adf60ae2074c16ea9c77ef3f8.png";
import imgServiciosAutos from "figma:asset/8b7c9e48c700a61a788d39de244b4432c7744fa4.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const vehiculosSubcategories: SubcategoryWithImage[] = [
  { name: "Alquiler de vehículos", image: imgAlquilerVehiculos },
  { name: "Artículos para automóviles", image: imgArticulosAutomoviles },
  { name: "Autoescuela", image: imgAutoescuela },
  { name: "Autopartes", image: imgAutopartes },
  { name: "Autos seminuevos", image: imgAutosSeminuevos },
  { name: "Baterías para automóviles", image: imgBateriasAutomoviles },
  { name: "Car wash", image: imgCarWash },
  { name: "Concesionarias automotrices", image: imgConcesionarias },
  { name: "Servicios para autos", image: imgServiciosAutos },
];
