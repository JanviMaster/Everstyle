// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Shop It</h3>
          <p>Shop It is your go-to online store for high-quality products, designed to meet all your shopping needs.</p>
          <p>&copy; {new Date().getFullYear()} Shop It. All Rights Reserved.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactinfo">Contact Us</Link></li>
            <li><Link to="/shippingdetails">Shipping Details</Link></li>
            <li><Link to="/returnpolicy">Return Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@shopit.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Market Street, Cityville</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
