import logo from './logo.svg';
import './App.css';
import { InputComponent } from '../../components/input';
import { useEffect, useRef, useState } from 'react';
import { CardRifa } from '../../components/cardRifa';
const rifas = [
  {
    urlImage:"https://cdn.leroymerlin.com.br/products/microondas_mondial_mo_01_21_w_1200w_21_litros_10_niveis_de_po_1568417944_3f89_600x600.jpg",
    nome:"um micro ondas Zerado! 🙏",
    data:"11/01/2024"
},
{
  urlImage:"https://cdn.leroymerlin.com.br/products/microondas_mondial_mo_01_21_w_1200w_21_litros_10_niveis_de_po_1568417944_3f89_600x600.jpg",
  nome:"um micro ondas Zerado! 🙏",
  data:"11/01/2024"
},
{
  urlImage:"https://cdn.leroymerlin.com.br/products/microondas_mondial_mo_01_21_w_1200w_21_litros_10_niveis_de_po_1568417944_3f89_600x600.jpg",
  nome:"um micro ondas Zerado! 🙏",
  data:"11/01/2024"
}
]
function App() {
  return (
    <div className="App">
    {rifas.map(rifa=> 
    <CardRifa
    urlImage={rifa.urlImage}
     title={rifa.nome}
     descrision={rifa.descrision}
     money={rifa.money}
     totalmoney={rifa.totalmoney}
     location={rifa.location}
     date={rifa.data}
     
     />) }
    </div>
  );
}

export default App;
