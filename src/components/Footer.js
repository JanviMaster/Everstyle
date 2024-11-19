// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Everstyle</h3>
          <p className='footer-text'>Everstyle is your go-to online store for high-quality products, designed to meet all your shopping needs.</p>
          <p className='footer-text'>&copy; {new Date().getFullYear()} Everstyle. All Rights Reserved.</p>
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
          <p className='footer-text'>Email: support@everstyle.com</p>
          <p className='footer-text'>Phone: +123 456 7890</p>
          <p className='footer-text'>Address: 123 Market Street, Mumbai</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          Facebook | Instagram | Twitter

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
