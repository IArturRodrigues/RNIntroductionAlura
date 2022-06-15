import top from '../assets/topo.png';
import logo from '../assets/logo.png';

import tomato from '../assets/frutas/Tomate.png';
import broccoli from '../assets/frutas/Brócolis.png';
import potatoe from '../assets/frutas/Batata.png';
import cucumber from '../assets/frutas/Pepino.png';
import pumpkin from '../assets/frutas/Abóbora.png';

import { IBasketMock } from '../interfaces/IMock';

const Basket: IBasketMock = {
   top: {
      title: "Detalhes da cesta",
      image: top,
   },
   details: {
      name: "Cesta de Verduras",
      farmOwner: {
         name: "Jenny Jack Farm",
         logo: logo,
      },
      description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto pra sua cozinha",
      price: "R$ 40,00",
      button: "COMPRAR",
   },
   list: {
      title: "Itens da Cesta",
      items: [
         {
            name: "Tomate",
            image: tomato,
         },
         {
            name: "Brócolis",
            image: broccoli,
         },
         {
            name: "Batata",
            image: potatoe,
         },
         {
            name: "Pepino",
            image: cucumber,
         },
         {
            name: "Abóbora",
            image: pumpkin,
         },
      ],
   },
}

export default Basket;