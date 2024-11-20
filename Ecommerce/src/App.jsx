import { useState } from 'react';
import './App.css';
import Product from './components/Products';
import ContProd from './components/ContainerProd';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <main>
        <NavBar />
        <ContProd />
        <Footer />
      </main>
    </>
  );
}

export default App;