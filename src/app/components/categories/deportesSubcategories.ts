import imgBallet from "figma:asset/1b17b3bb3d4d96d9e3a850b05cdcab1fd1f947a2.png";
import imgNatacion from "figma:asset/d8566f27e9ab247c2813e657009ac52ed595c292.png";
import imgArtesMarciales from "figma:asset/0897ed2efd8c4ed9e8d4bb9cb775b9eddb75f4b2.png";
import imgArticulosDeportivos from "figma:asset/395ef455cf099363fe66b54bb0afe9a5d9c0b4b7.png";
import imgBaile from "figma:asset/70ad2a7ba2db543d2d23d4e5acaebe2c7af956d3.png";
import imgBoxeo from "figma:asset/13c9a72c29d3bfb5117c0a662f8c66789b0aa35d.png";
import imgCalistenia from "figma:asset/78542926711ddc76b9ae08c634e4b13e35852cdd.png";
import imgCazaPesca from "figma:asset/421a61389a6f99008fecc29e4092d2bf0fa84ec4.png";
import imgCiclismo from "figma:asset/f232044a4e509b36b247737856b58e5c0a782685.png";
import imgClubDeportivo from "figma:asset/ee2318813e1b1a73d9634b35db04815c7d3379f4.png";
import imgDeportesExtremos from "figma:asset/6681983e5a09b02f4a027c8ae8f66c9df50b3b25.png";
import imgEquitacion from "figma:asset/a93e7eaece4e7d22ac5606b15e431044c3b0134a.png";
import imgFutbol from "figma:asset/2fa095011333c1f77d15f127d4d3225a35a7fb3f.png";
import imgGimnasia from "figma:asset/1864a03a081c227c3bcf68f5e0aefcbf13e33a65.png";
import imgGimnasios from "figma:asset/1564673b953d667ba79c46cbcf3c5d703f1cdc5d.png";
import imgGolf from "figma:asset/4f3d8381aa5e54a2239f6b45d4f17fbd16498cc6.png";
import imgKickBoxing from "figma:asset/7da7de9c3da692f6f7797b57e02f32d6b28dedea.png";
import imgRopaDeportiva from "figma:asset/c5697ae201376e69d68519ed69f48b5d9d4ca858.png";
import imgSpinning from "figma:asset/55701c5457adc1ca5561539a08c5e3143971d117.png";
import imgTiendasDeportivas from "figma:asset/02b5dc3ae20dc74a55a07c590b04f4d6156b1da9.png";
import imgZumba from "figma:asset/3dcf2af0b63db566cff4b46310e0754332168fa8.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const deportesSubcategories: SubcategoryWithImage[] = [
  { name: "Ballet", image: imgBallet },
  { name: "Natación", image: imgNatacion },
  { name: "Artes marciales", image: imgArtesMarciales },
  { name: "Artículos deportivos", image: imgArticulosDeportivos },
  { name: "Baile", image: imgBaile },
  { name: "Boxeo", image: imgBoxeo },
  { name: "Calistenia", image: imgCalistenia },
  { name: "Caza y pesca", image: imgCazaPesca },
  { name: "Ciclismo", image: imgCiclismo },
  { name: "Club deportivo", image: imgClubDeportivo },
  { name: "Deportes extremos", image: imgDeportesExtremos },
  { name: "Equitación", image: imgEquitacion },
  { name: "Fútbol", image: imgFutbol },
  { name: "Gimnasia", image: imgGimnasia },
  { name: "Gimnasios", image: imgGimnasios },
  { name: "Golf", image: imgGolf },
  { name: "Kick boxing", image: imgKickBoxing },
  { name: "Ropa deportiva", image: imgRopaDeportiva },
  { name: "Spinning", image: imgSpinning },
  { name: "Tiendas deportivas", image: imgTiendasDeportivas },
  { name: "Zumba", image: imgZumba },
];