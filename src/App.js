import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './pages/Signup';
import Signup from './pages/Signup';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import Aboutus from "./pages/Aboutus";
import Cart from "./pages/Cart";
import ContactInfo from "./pages/ContactInfo";
import ShippingDetails from "./pages/ShippingDetails";
import ReturnPolicy from "./pages/ReturnPolicy";
import Explore from "./pages/Explore";
import { AuthProvider } from './components/AuthContext';
import Register from './components/Register';
import Profile from './components/Profile';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            {/* Authentication Routes */}
             <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* E-commerce Routes */}
            <Route path="/explore" element={<Explore />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactinfo" element={<ContactInfo />} />
            <Route path="/shippingdetails" element={<ShippingDetails />} />
            <Route path="/returnpolicy" element={<ReturnPolicy />} />
            <Route path="/mycart" element={<Cart />} />
          </Routes>
          <ToastContainer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
