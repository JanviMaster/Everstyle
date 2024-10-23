import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { NavLink, BrowserRouter } from 'react-router-dom';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const productList = [
    {
      price: 99999,
      name: 'IPhone 105 Max',
      quantity: 0,
    },
    {
      price: 99999,
      name: 'Redmi Note 105 Max',
      quantity: 0,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <nav>
          <NavLink to="/Explore"></NavLink>
          <NavLink to="/Aboutus"></NavLink>
          <NavLink to="/create"></NavLink>
        </nav>
      </BrowserRouter>
      <ProductList productList={productList} />
      <Footer />
    </>
  );
}

export default App;

