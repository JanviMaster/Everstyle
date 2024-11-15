import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><h3>Everstyle</h3></NavLink> 

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/Explore">Explore</NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Aboutus">About us</NavLink> 
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="CustomerSupport" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Customer support
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="ReturnPolicy">Return policy </NavLink></li>
                <li><NavLink className="dropdown-item" to="ShippingDetails">Shiping details </NavLink></li>
                <li><NavLink className="dropdown-item" to="ContactInfo">Conact info</NavLink></li>
              </ul>
            </li>
          </ul>
          
          <NavLink className='btn' to="/Login">Log In</NavLink>
          
          <NavLink className="btn btn-outline-success" to="/mycart">
          {/* <i className="bi bi-cart" /> */}
          My Cart</NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
