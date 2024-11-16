// Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Links Section */}
        <div className="footer-links">
          <p>About Us</p>
          <p>Terms and Conditions</p>
          <p>Order and Delivery Policy</p>
          <p>Return and Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
          <p>Blogs</p>
          <p>Order Tracker</p>
          <p>Loyalty Program</p>
          <p>Career</p>
          <p>FAQ</p>
        </div>

        {/* Social Media and SSLCommerz Section */}
        <div className="footer-social">
          <div className="footer-social-icons">
            <FaFacebook className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <img src="https://cdn.shopify.com/s/files/1/0625/3238/7051/files/SSLCOMMERZ_Pay_With_logo_All_Size_Aug_21-02.png?v=1675022838" alt="SSLCommerz" className="footer-sslcommerz" />
          </div>
          <p className="footer-copyright">© 2024, Head Gear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
