import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Cart from '../../Cart/Cart';

function Navbar({ cartOpen, toggleCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navBar-container">
      <div className="navBar-left">
        <FaBars className="navBar-icon" onClick={toggleMenu} /> {/* Left Icon */}
      </div>

      <div className="navBar-center">
        <h1 className="navBar-title">HEAD GEAR</h1> {/* Company Name */}
      </div>

      <div className="navBar-right">
        <FaSearch className="navBar-icon" /> {/* Search Icon */}
        <FaShoppingCart className="navBar-icon" onClick={toggleCart} /> {/* Cart Icon */}
      </div>

      {/* Left Sidebar Menu */}
      {menuOpen && (
        <div className="navbar-popup-menu">
          <FaTimes className="navbar-close-icon" onClick={toggleMenu} /> {/* Close Icon */}
          <ul className="navbar-menu-list">
            <li>Log in</li>
            <li>Create account</li>
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Order and Delivery Policy</li>
            <li>Return and Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Blogs</li>
            <li>Order Tracker</li>
            <li>Loyalty Program</li>
            <li>Career</li>
            <li>FAQ</li>
          </ul>
        </div>
      )}

      {/* Right Cart Sidebar */}
      {cartOpen && (
        <div className="navbar-cart-menu">
          <FaTimes className="navbar-close-icon" onClick={toggleCart} /> {/* Close Icon */}
          <h2 className="navbar-cart-title">Your Cart</h2>
           <Cart></Cart>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
