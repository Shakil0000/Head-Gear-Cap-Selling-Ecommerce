import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Cart from "../../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ cartOpen, toggleCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchIconClick = () => {
    setSearchOpen(!searchOpen);
    setSearchText(""); // Clear the search text when toggling
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      console.log(`Search Text: ${searchText}`);
      setSearchText("");
      setSearchOpen(false);
      if (searchText.trim()) {
        navigate(`/search?query=${encodeURIComponent(searchText)}`);
      }
    }
  };

  return (
    <nav className="navBar-container">
      <div className="navBar-left">
        <FaBars className="navBar-icon" onClick={toggleMenu} />
      </div>

      <div className="navBar-center">
         <h1 className="navBar-title"><Link to="/" className="navBar-title-link">HEAD GEAR</Link></h1>
      </div>

      <div className="navBar-right">
        {!searchOpen && (<FaSearch className="navBar-icon" onClick={handleSearchIconClick} />)}
        {/* Search Box */}
        {searchOpen && (
          <div className="navbar-search-container">
            <input
              type="text"
              className="navbar-search-input"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
            />
          </div>
        )}
        {searchOpen && (<FaTimes className="navBar-icon" onClick={handleSearchIconClick} />)}
        <FaShoppingCart className="navBar-icon" onClick={toggleCart} />
      </div>

      {/* Left Sidebar Menu */}
      {menuOpen && (
        <div className="navbar-popup-menu">
          <FaTimes className="navbar-close-icon" onClick={toggleMenu} />
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
          <FaTimes className="navbar-close-icon" onClick={toggleCart} />
          <Cart />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
