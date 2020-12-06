import bebidas from "../assets/img/bebidas.png";
import cafeteria from "../assets/img/cafeteria.png";
import cucurucho from "../assets/img/cucuruchos.png";
import chocolate from "../assets/img/chocolate.png";
import especiales from "../assets/img/especiales.png";
import copaHelada from "../assets/img/copahelada.png";
import copaDulce from "../assets/img/copadulce.png";
import promociones from "../assets/img/promociones.png";

import barraBebidas from "../assets/img/barraBebidas.png";
import barraCafeteria from "../assets/img/barraCafeteria.png";
import barraCucurucho from "../assets/img/barraCucurucho.png";
import barraChocolate from "../assets/img/barraChocolate.png";
import barraEspeciales from "../assets/img/barraEspeciales.png";
import barraCopaHelada from "../assets/img/barraCopaHelada.png";
import barraCopaDulce from "../assets/img/barraCopaDulce.png";
import barraPromociones from "../assets/img/barraPromociones.png";

export const categories = [
  {
    label: "Bebidas",
    name: "bebidas",
    img: bebidas,
    selectedImg: barraBebidas,
  },
  {
    label: "Cafetería",
    name: "cafeteria",
    img: cafeteria,
    selectedImg: barraCafeteria,
  },
  {
    label: "Cucurucho",
    name: "cucurucho",
    img: cucurucho,
    selectedImg: barraCucurucho,
  },
  {
    label: "Chocolate",
    name: "chocolate",
    img: chocolate,
    selectedImg: barraChocolate,
  },
  {
    label: "Especiales",
    name: "especiales",
    img: especiales,
    selectedImg: barraEspeciales,
  },
  {
    label: "Copa Helada",
    name: "copa-helada",
    img: copaHelada,
    selectedImg: barraCopaHelada,
  },
  {
    label: "Copa Dulce",
    name: "copa-dulce",
    img: copaDulce,
    selectedImg: barraCopaDulce,
  },
  {
    label: "Promociones",
    name: "promociones",
    img: promociones,
    selectedImg: barraPromociones,
  },
];

export function getCategories() {
  return categories.filter((g) => g);
}

export function getCategory(n) {
  return categories.find((m) => m.name === n);
}
