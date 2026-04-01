import imgEmbalaje from "figma:asset/fd045f2225351bc6a7f39d501ee38f7659c3901a.png";
import imgAgenciasDespachantesAduana from "figma:asset/6ac851087bc9092cc5b410544361b1c9b3c91343.png";
import imgCarpinteria from "figma:asset/e455336be27b35b52d345e591f139212f18d8b1b.png";
import imgEmpresasTelecomunicacion from "figma:asset/566a426000a543d9b7c2c90d2ad57fc6a01ff8a4.png";
import imgFotocopias from "figma:asset/87a04cfd70c0904ef8193857da3a39ac21dd8ef1.png";
import imgHerreria from "figma:asset/6a014639f5c7f6e8c4abb4bf34f17e0fabc78e13.png";
import imgImprentasServiciosImpresion from "figma:asset/f70f552a9b97e70016a40d83eacdedd3f74f00f6.png";
import imgLetrerosVallas from "figma:asset/56826e83b65eec536a7cbe453c2fab4ecf0deb4c.png";
import imgServiciosAgua from "figma:asset/01af8f633a2eb208a5b3b4aebed721e6489294b2.png";
import imgServiciosAiresAcondicionados from "figma:asset/f15b8641d932e8ce54b96aad10dd77725a7f4cd1.png";
import imgServicioGas from "figma:asset/19633f1fd92a886670ca765f2f9cd348502832ee.png";
import imgServiciosLuz from "figma:asset/d1c1c5f0361ad7179d8bd624475562be4e29412d.png";
import imgServiciosMantenimiento from "figma:asset/0c34b4209f259a85d0b93d5e76aa1ffc1439e31f.png";
import imgServicioPintura from "figma:asset/5eda3bcad62b424a616b64f87f50ecdc61402146.png";
import imgServicioTransporteEnvios from "figma:asset/6533859e37bec56da2b91a9b15671c7c5d8e519a.png";
import imgServiciosFumigacion from "figma:asset/87e34c65415a0542f083f5e53ad89ae4af697a5e.png";
import imgServiciosJardineria from "figma:asset/43ef33304dfc73f9094f24eb091774c323afe7f8.png";
import imgServiciosLimpieza from "figma:asset/138e44137ce60584353773104f90bfaa1212856c.png";
import imgSistemaRiego from "figma:asset/103f97a896e9d0a6f05d727bb89c3631c54d3bca.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const serviciosGeneralesSubcategories: SubcategoryWithImage[] = [
  { name: "Embalaje", image: imgEmbalaje },
  { name: "Agencias despachantes de aduana", image: imgAgenciasDespachantesAduana },
  { name: "Carpintería", image: imgCarpinteria },
  { name: "Empresas de telecomunicación", image: imgEmpresasTelecomunicacion },
  { name: "Fotocopias", image: imgFotocopias },
  { name: "Herrería", image: imgHerreria },
  { name: "Imprentas y servicios de impresión", image: imgImprentasServiciosImpresion },
  { name: "Letreros y vallas", image: imgLetrerosVallas },
  { name: "Servicios de agua", image: imgServiciosAgua },
  { name: "Servicios de aires acondicionados", image: imgServiciosAiresAcondicionados },
  { name: "Servicio de gas", image: imgServicioGas },
  { name: "Servicios de luz", image: imgServiciosLuz },
  { name: "Servicios de mantenimiento", image: imgServiciosMantenimiento },
  { name: "Servicio de pintura", image: imgServicioPintura },
  { name: "Servicio de transporte y envíos", image: imgServicioTransporteEnvios },
  { name: "Servicios de fumigación", image: imgServiciosFumigacion },
  { name: "Servicios de jardinería", image: imgServiciosJardineria },
  { name: "Servicios de limpieza", image: imgServiciosLimpieza },
  { name: "Sistema de riego", image: imgSistemaRiego },
];