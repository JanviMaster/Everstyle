import React from 'react';
// import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import Aboutus from "./pages/Aboutus";
import Cart from "./pages/Cart";
import ContactInfo from "./pages/ContactInfo";
import ShippingDetails from "./pages/ShippingDetails";
import ReturnPolicy from "./pages/ReturnPolicy";
import Explore from "./pages/Explore";
import { AuthProvider } from './context/AuthContext';
import './App.css';
// import Footer from './components/Footer';
// import Main from './pages/Main';

function App() {
  return (
    // <div style={{ backgroundColor: '#393E46', minHeight: '100vh' }}>
      <div>
      <Router>
        <AuthProvider>
          <Navbar />
          {/* <Container > */}
            {/* <div className="w-100" style={{ maxWidth: '400px', boxShadow: 'none' }}> */}
            {/* <div> */}
              <Routes>
                {/* Authentication Routes */}
                <Route path="/" element={<Dashboard/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/forgot-password" className="w-100" style={{ maxWidth: '400px', boxShadow: 'none' }} element={<ForgotPassword />} />
                
                {/* E-commerce Routes */}
                <Route path="/explore" element={<Explore />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/contactinfo" element={<ContactInfo />} />
                <Route path="/shippingdetails" element={<ShippingDetails />} />
                <Route path="/returnpolicy" element={<ReturnPolicy />} />
                <Route path="/mycart" element={<Cart />} />
              </Routes>
            {/* </div> */}
          {/* </Container> */}
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;