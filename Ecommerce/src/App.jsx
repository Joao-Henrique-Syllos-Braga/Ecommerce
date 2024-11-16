import { useState } from 'react';
import './App.css';
import Product from './components/Products';



function App() {
  return (
    <>
      <Product name="Produto 1" img="/Bola.svg" status="Disponível" price="$21.00" />
    </>
  );
}

export default App;