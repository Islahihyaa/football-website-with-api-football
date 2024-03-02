

import { GiTrophyCup } from "react-icons/gi";

export const links = [
  {
    title: "Klasemen",
    icon: <GiTrophyCup/>,
    links: [
      {
        name: "Liga Inggris",
        route:"LigaInggris"
      },
      {
        name: "Liga Italia",
        route:"LigaItalia"
      },
      {
        name: "Liga Spanyol",
        route:"LigaSpanyol"
      },
      {
        name: "Liga Jerman",
        route:"LigaJerman"
      },
      {
        name: "Liga Indonesia",
        route:"LigaIndonesia"
      },
      {
        name: "Liga Champions",
        route:"LigaChampions"
      },

    ],
  },
];

export const tableHeader = [
  { title: "Posisi"},
  { title: "Klub"},
  { title: "Main"},
  { title: "Poin"},
  { title: "Menang"},
  { title: "Seri"},
  { title: "Kalah"},
  { title: "Goal"},
]
