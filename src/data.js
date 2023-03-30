//Declaro un array con los servicios q ofrece la web
export const  data = [
  {
    name: "Una pagina web (500€)",
    price: 500
  },
  {
    name: "Una consultoria SEO (300€)",
    price: 300
  },
  {
    name: "Una campaña de google Ads (200€)",
    price: 200
  },
];

export const webOptions = [
  {
    label: 'Número de paginas',
    name: 'numPaginas',
    quantity: 0,
    priceUnity: 30,
    info: 'En este componente debes indicar el numero de paginas de tu web'
  },
  {
    label: 'Número de idiomas',
    name: 'numIdiomas',
    quantity: 0,
    priceUnity: 30,
    info: 'En este componente debes indicar los idiomas de tu web'
  }
]