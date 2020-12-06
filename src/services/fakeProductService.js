import simple from "../assets/img/simple.png";
import bañado from "../assets/img/bañado.png";
import tresGustos from "../assets/img/tresgustos.png";
import especial from "../assets/img/especial.png";

const products = [
  {
    label: "Simple",
    name: "simple",
    img: simple,
    category: "cucurucho",
    price: 100,
    details: "El clásico de siempre. Una bocha de crema helada de puro sabor.",
  },
  {
    label: "Bañado",
    name: "bañado",
    img: bañado,
    category: "cucurucho",
    price: 110,
    details: "Una bocha de delicioso helado, bañado en chocolate.",
  },
  {
    label: "Tres Gustos",
    name: "tres-gustos",
    img: tresGustos,
    category: "cucurucho",
    price: 120,
    details:
      "Por si no te alcanzaba con una, te ofrecemos ¡3 bochas del más rico helado! ",
  },
  {
    label: "Especial",
    name: "especial",
    img: especial,
    category: "cucurucho",
    price: 130,
    details:
      "Sólo los verdaderos amantes del helado están autorizados para degustar esta bomba de ¡4 bochas de helado!",
  },
];

export function getProducts(cat) {
  return products.filter((m) => m.category === cat);
}

export function getProduct(n) {
  return products.find((m) => m.name === n);
}
