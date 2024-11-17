import { useState } from 'react';
import './App.css';
import Product from './components/Products';
import ContProd from './components/ContainerProd';
import NavBar from './components/NavBar';



function App() {
  return (
    <>
      <main>
        <NavBar />
        <ContProd />
      </main>
    </>
  );
}

export default App;