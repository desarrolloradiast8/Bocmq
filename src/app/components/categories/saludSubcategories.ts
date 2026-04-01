import imgAmbulancias from "figma:asset/7b610822a7bfb3800fb539203c878ace6322301a.png";
import imgBancosSangre from "figma:asset/168845a46accc5ae6d229898f7f4e81b1c0e31ab.png";
import imgCardiologia from "figma:asset/aebe79267ae4c7840f0d1bc18d1f30ada0a80b90.png";
import imgCentrosSalud from "figma:asset/fcd83be10ff4b08330992b65404d6433ce5f1ee5.png";
import imgCirugiaGeneral from "figma:asset/c7b95774333451fb623c27d2b0949e7832d7ba5e.png";
import imgCirugiaPlastica from "figma:asset/b4227085612140c1a174f013378ee06d7d669599.png";
import imgClinicas from "figma:asset/1043e883759bde8583300186ba2c1f17fce2a8f7.png";
import imgDermatologia from "figma:asset/0150d81cadcbe083e0ab27091984b98b3103439b.png";
import imgEmergenciasMedicas from "figma:asset/8f005a1ad4a862fcd1174cec48fc3280d67eb0c5.png";
import imgEndocrinologia from "figma:asset/2faf3c78080df666895901d22b6c7e446c84e1a8.png";
import imgEnfermerias from "figma:asset/d56d6ae3e2e32baffefe0899e8306bd1bb7b8e14.png";
import imgFarmacias from "figma:asset/045278d972ba930512e4cdc113666371be8c78a4.png";
import imgFarmaciasNaturistas from "figma:asset/f25a4fbf0eac557244c8a7512159659025531fad.png";
import imgFisioterapia from "figma:asset/032c46582811f29cc8f3dec3156419d74ea3a857.png";
import imgGastroenterologia from "figma:asset/83a01b9f16c15ce136d5edc6d71d20c33850793a.png";
import imgGinecoObstetricia from "figma:asset/3fcbdb8abd39a80583fc7e532306e0c00f770776.png";
import imgHematologia from "figma:asset/1b5f48ffc5ea8a270448fc9362386ddd3a618ed3.png";
import imgHospitales from "figma:asset/bcee4d58bedb8e0446a22759511d1391b5df033a.png";
import imgImagenologia from "figma:asset/e8b96b348490e16d3703c63a8831d0a8c74f0aa1.png";
import imgMaxilofacial from "figma:asset/5220ae96acf93e5aa5e01570c647a0eba3d6d5d6.png";
import imgMedicinaCardiovascular from "figma:asset/eb2821caa2d52ade9a983184c3d5b83b3db4b4ca.png";
import imgMedicinaGeneral from "figma:asset/bd235ceacb2b3a5081c529f073e0a7974129daf1.png";
import imgMedicinaInterna from "figma:asset/1179bf8eaaa454fedc90352c1b33c00b097678d2.png";
import imgNefrologia from "figma:asset/2b61f3634649509b3d2e69b6b7b837a6c59140a3.png";
import imgNeonatologia from "figma:asset/361565e990cffa23df8dd5f15f7f3094fa839599.png";
import imgNeumologia from "figma:asset/98a908791332420845a109438e4f984c9e70d55e.png";
import imgNeurocirugia from "figma:asset/28e728e7654c4317e30c67634f7d9eda2ce4325d.png";
import imgNeurologia from "figma:asset/5cd217cee67670c4cad960decdabf9dc942d2c3f.png";
import imgNutricion from "figma:asset/e0bc62ec620f41c9c1c93c88e3b24a26b5539409.png";
import imgOdontologia from "figma:asset/73efda62cd516447141ee25ec0244197b6180d59.png";
import imgOftalmologia from "figma:asset/a207733236c4de7f5e67b4711abf0fb2d0147b14.png";
import imgOncologia from "figma:asset/2fc96af77e96bcc80f3fb0c04ff524a6610361dc.png";
import imgOtorrinolaringologia from "figma:asset/faed26c98607a2bad552468d4548b47c14ab6d75.png";
import imgPediatria from "figma:asset/37ad1ebf43881edb2b5ec668875c301bf3cbd756.png";
import imgPsicologia from "figma:asset/b69a68a16c6f8258f0a6df2a52d1618a180cb15b.png";
import imgQuiropraxia from "figma:asset/c07695357d17e43e12a7c1b82fc94cb8f8dd3cff.png";
import imgReumatismo from "figma:asset/c894ea141e911514e4804c46c29079668354b46b.png";
import imgSaludMental from "figma:asset/229b054db3b03d3c37b42464f5887c7833052a1b.png";
import imgSaludSexual from "figma:asset/915c12ed1fef032dd75db17830455d94ab709611.png";
import imgTraumatologiaOrtopedia from "figma:asset/f87efd3d77a5dacc86623142c30511bbc1f3ff1d.png";
import imgUrologia from "figma:asset/fe40854e9d233e78ae327c317365e60e9d6cd9c7.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const saludSubcategories: SubcategoryWithImage[] = [
  { name: "Ambulancias", image: imgAmbulancias },
  { name: "Bancos de sangre", image: imgBancosSangre },
  { name: "Cardiología", image: imgCardiologia },
  { name: "Centros de salud", image: imgCentrosSalud },
  { name: "Cirugía general", image: imgCirugiaGeneral },
  { name: "Cirugía plástica", image: imgCirugiaPlastica },
  { name: "Clínicas", image: imgClinicas },
  { name: "Dermatología", image: imgDermatologia },
  { name: "Emergencias médicas", image: imgEmergenciasMedicas },
  { name: "Endocrinología", image: imgEndocrinologia },
  { name: "Enfermerías", image: imgEnfermerias },
  { name: "Farmacias", image: imgFarmacias },
  { name: "Farmacias naturistas", image: imgFarmaciasNaturistas },
  { name: "Fisioterapia", image: imgFisioterapia },
  { name: "Gastroenterología", image: imgGastroenterologia },
  { name: "Gineco obstetricia", image: imgGinecoObstetricia },
  { name: "Hematología", image: imgHematologia },
  { name: "Hospitales", image: imgHospitales },
  { name: "Imagenología", image: imgImagenologia },
  { name: "Maxilofacial", image: imgMaxilofacial },
  { name: "Medicina cardiovascular", image: imgMedicinaCardiovascular },
  { name: "Medicina general", image: imgMedicinaGeneral },
  { name: "Medicina interna", image: imgMedicinaInterna },
  { name: "Nefrología", image: imgNefrologia },
  { name: "Neonatología", image: imgNeonatologia },
  { name: "Neumología", image: imgNeumologia },
  { name: "Neurocirugía", image: imgNeurocirugia },
  { name: "Neurología", image: imgNeurologia },
  { name: "Nutrición", image: imgNutricion },
  { name: "Odontología", image: imgOdontologia },
  { name: "Oftalmología", image: imgOftalmologia },
  { name: "Oncología", image: imgOncologia },
  { name: "Otorrinolaringología", image: imgOtorrinolaringologia },
  { name: "Pediatría", image: imgPediatria },
  { name: "Psicología", image: imgPsicologia },
  { name: "Quiropraxia", image: imgQuiropraxia },
  { name: "Reumatismo", image: imgReumatismo },
  { name: "Salud mental", image: imgSaludMental },
  { name: "Salud sexual", image: imgSaludSexual },
  { name: "Traumatología y ortopedia", image: imgTraumatologiaOrtopedia },
  { name: "Urología", image: imgUrologia },
];