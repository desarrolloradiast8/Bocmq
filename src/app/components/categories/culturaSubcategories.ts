import imgArtistas from "figma:asset/bd9cda9bf59e8a0933a2844ba8ea970b302ada0d.png";
import imgCentrosCulturales from "figma:asset/a005b6fce760761315cf02459c0c15a52636f8fc.png";
import imgEscritores from "figma:asset/0c5ed934150389236da1c9bdec8f54196171ab4c.png";
import imgGaleriasArte from "figma:asset/072d07d2dcdd72d1008eabbc1fe45f33da1b6440.png";
import imgMuseos from "figma:asset/7120ae79ff5bf3da209ec49534d923a4e2e10247.png";
import imgPintores from "figma:asset/a1e4dcad02796bf70f9f41cf584b633f467fb7a4.png";
import imgTeatro from "figma:asset/4bc607724e34a270a7b9303d1ac9aab19df0f5da.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const culturaSubcategories: SubcategoryWithImage[] = [
  { name: "Artistas", image: imgArtistas },
  { name: "Centros culturales", image: imgCentrosCulturales },
  { name: "Escritores", image: imgEscritores },
  { name: "Galerías de arte y fotografía", image: imgGaleriasArte },
  { name: "Museos", image: imgMuseos },
  { name: "Pintores", image: imgPintores },
  { name: "Teatro", image: imgTeatro },
];
