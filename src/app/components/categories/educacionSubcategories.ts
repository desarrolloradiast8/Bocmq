import imgBibliotecas from "figma:asset/91f8bee1cc71fbef689eeb4618b2f091e5295106.png";
import imgReforzamientoEscolar from "figma:asset/36b1ac246ba5dc6a55570d518d1c82584220bf2a.png";
import imgClasesMusica from "figma:asset/abb53d1a1ac67fa6601d0a87bc88eb5242f7df3a.png";
import imgClasesTeatro from "figma:asset/97475d48457ec52ccd18d5ac28df37ce37f0a68e.png";
import imgCoachingLiderazgo from "figma:asset/e26c828d0d6993cbecb6da1f3a50f948b01fa90e.png";
import imgColegios from "figma:asset/c209b04c463edf09f2e6764f56edfe09462a3574.png";
import imgCursos from "figma:asset/37e3d4ea35ad7982e25f9d8ed2412a96f8ec557d.png";
import imgCursosComputacion from "figma:asset/7f4749140b9fa6392f53552fdb65fb974c22c440.png";
import imgCursosVerano from "figma:asset/b883b224a05e8c74aecfee30734254bde18b652c.png";
import imgEscuelasArte from "figma:asset/0ecf0dcbd3f20afa59c874fc60197fafccc61e3f.png";
import imgEscuelasBallet from "figma:asset/e131b8be23173e2bf0c2b04e90dbfa79ed37f23a.png";
import imgEscuelasGastronomia from "figma:asset/897f08197e734242e016a44c769da68c3438a909.png";
import imgEscuelasNegocios from "figma:asset/f2a701c2d54d13bbd46827ca06c3ba935d1a9457.png";
import imgEscuelasEspeciales from "figma:asset/86ca618bfda98165ad86fc80c909da3fb9bfd859.png";
import imgGuarderias from "figma:asset/c04668a0258c0e9a11444c0ad8d71fb6050952ca.png";
import imgInstitutosDesarrolloHumano from "figma:asset/3da6b9d2f2c61c454b5ea030bfdb211d0291147d.png";
import imgInstitutosIdiomas from "figma:asset/efb7254c35bd69cdf4c86c0cf6d7af42218ec11f.png";
import imgInstitutosTecnicos from "figma:asset/6adb6d2455f0b635cb16b557a9cf7f2ebda7db6c.png";
import imgJardinNinos from "figma:asset/48fb85fb77628905fcf013bf7061bd3ca4cc8c75.png";
import imgKinders from "figma:asset/0bfd8de29b4207a60bcc978e522239fd29ce5369.png";
import imgProfesores from "figma:asset/1f51b673849db5e0a9ae0d330aa54357db36ad8a.png";
import imgTalleres from "figma:asset/ea581b35e380ee4a5e0694acf776fdec67013ba0.png";
import imgUniversidades from "figma:asset/cd6229c94881585d52432b12d655d612821f08d3.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const educacionSubcategories: SubcategoryWithImage[] = [
  { name: "Bibliotecas", image: imgBibliotecas },
  { name: "Centro de reforzamiento escolar", image: imgReforzamientoEscolar },
  { name: "Clases de música", image: imgClasesMusica },
  { name: "Clases de teatro", image: imgClasesTeatro },
  { name: "Coaching y liderazgo", image: imgCoachingLiderazgo },
  { name: "Colegios", image: imgColegios },
  { name: "Cursos", image: imgCursos },
  { name: "Cursos de computación e informática", image: imgCursosComputacion },
  { name: "Cursos de verano", image: imgCursosVerano },
  { name: "Escuelas de arte y creatividad", image: imgEscuelasArte },
  { name: "Escuelas de ballet", image: imgEscuelasBallet },
  { name: "Escuelas de gastronomía", image: imgEscuelasGastronomia },
  { name: "Escuelas de negocios", image: imgEscuelasNegocios },
  { name: "Escuelas especiales para niños con discapacidades", image: imgEscuelasEspeciales },
  { name: "Guarderías", image: imgGuarderias },
  { name: "Institutos de desarrollo humano", image: imgInstitutosDesarrolloHumano },
  { name: "Institutos de idiomas", image: imgInstitutosIdiomas },
  { name: "Institutos técnicos", image: imgInstitutosTecnicos },
  { name: "Jardín de niños", image: imgJardinNinos },
  { name: "Kinders", image: imgKinders },
  { name: "Profesores", image: imgProfesores },
  { name: "Talleres", image: imgTalleres },
  { name: "Universidades", image: imgUniversidades },
];