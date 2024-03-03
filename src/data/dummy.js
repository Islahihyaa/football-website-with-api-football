import { GiTrophyCup } from "react-icons/gi";

export { default as LogoInggris } from "./Logo-Liga-Inggris.jpg";
export { default as LogoPrancis } from "./Logo-Liga-Prancis.jpg";
export { default as LogoSpanyol } from "./Logo-Liga-Spanyol.png";
export { default as LogoJerman } from "./Logo-Liga-Jerman.png";
export { default as LogoItalia } from "./Logo-Liga-Italia.png";
export { default as LogoIndonesia } from "./Logo-Liga-Indonesia.webp";

export const links = [
  {
    title: "Klasemen",
    icon: <GiTrophyCup />,
    links: [
      {
        name: "Liga Inggris",
        route: "LigaInggris",
      },
      {
        name: "Liga Prancis",
        route: "LigaPrancis",
      },
      {
        name: "Liga Spanyol",
        route: "LigaSpanyol",
      },
      {
        name: "Liga Jerman",
        route: "LigaJerman",
      },
      {
        name: "Liga Italia",
        route: "LigaItalia",
      },
      {
        name: "Liga Indonesia",
        route: "LigaIndonesia",
      },
    ],
  },
];

export const tableHeader = [
  { title: "Posisi" },
  { title: "Klub" },
  { title: "Main" },
  { title: "Poin" },
  { title: "Menang" },
  { title: "Seri" },
  { title: "Kalah" },
  { title: "Goal" },
];

export const tableTopScoreHeader = [
  { title: "Posisi" },
  { title: "Pemain" },
  { title: "Klub" },
  { title: "Goal" },
];
