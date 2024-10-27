import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from "./pages/Aboutus";
import Cart from "./pages/Cart";
import ContactInfo from "./pages/ContactInfo";
import ShippingDetails from "./pages/ShippingDetails";
import ReturnPolicy from "./pages/ReturnPolicy";
import Explore from "./pages/Explore";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main className="home">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Dashboard/>
              </>
            }
          />
          
          <Route path="/explore" element={<Explore />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/shippingdetails" element={<ShippingDetails />} />
          <Route path="/returnpolicy" element={<ReturnPolicy />} />
          <Route path="/mycart" element={<Cart />} />
          {/* <Route path="/Login" element={<Login/>} /> */}
        </Routes>
      </main>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
