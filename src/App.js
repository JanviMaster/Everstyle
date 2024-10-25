import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Aboutus from "./pages/Aboutus";
import Cart from "./pages/Cart";
import ContactInfo from "./pages/ContactInfo";
import ShippingDetails from "./pages/ShippingDetails";
import AddItem from "./components/AddItem";
import Total from "./components/Total";

function App() {
  const products = [
    { price: 99999, name: "IPhone 10S Max", quantity: 0 },
    { price: 9999, name: "Redmi Note 10S Max", quantity: 0 },
  ];

  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setTotalAmount(totalAmount + newProductList[index].price);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      setTotalAmount(totalAmount - newProductList[index].price);
    }
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    const newProductList = productList.map(product => ({ ...product, quantity: 0 }));
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    setProductList([...productList, { price, name, quantity: 0 }]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddItem addItem={addItem} />
                <br />
                <ProductList
                  productList={productList}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  removeItem={removeItem}
                  
                />
                 <Total totalAmount={totalAmount} resetQuantity={resetQuantity} />
                 <br/>
              </>
            }
          />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/shippingdetails" element={<ShippingDetails />} />
        </Routes>
      </main>
      <br />
     
        <Footer /> 
    </BrowserRouter>
  );
}

export default App;
