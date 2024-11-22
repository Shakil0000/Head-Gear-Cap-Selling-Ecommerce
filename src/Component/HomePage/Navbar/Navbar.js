import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Cart from "../../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ cartOpen, toggleCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // State to check user login
  const navigate = useNavigate();

  useEffect(() => {
    // Check session storage for userId and userEmail
    const userId = sessionStorage.getItem("userId");
    const userEmail = sessionStorage.getItem("userEmail");

    if (userId && userEmail) {
      setIsUserLoggedIn(true); // User is logged in
    } else {
      setIsUserLoggedIn(false); // User is not logged in
    }
  }, []); // Runs only once on component mount

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
    <div className="navBar">
      <nav className="navBar-container">
        <div className="navBar-left">
          <FaBars className="navBar-icon" onClick={toggleMenu} />
        </div>

        <div className="navBar-center">
          <h1 className="navBar-title">
            <Link to="/" className="navBar-title-link">
              HEAD GEAR
            </Link>
          </h1>
        </div>

        <div className="navBar-right">
          {!searchOpen && (
            <FaSearch className="navBar-icon" onClick={handleSearchIconClick} />
          )}
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
          {searchOpen && (
            <FaTimes className="navBar-icon" onClick={handleSearchIconClick} />
          )}
          <FaShoppingCart className="navBar-icon" onClick={toggleCart} />
        </div>

        {/* Left Sidebar Menu */}
        {menuOpen && (
          <div className="navbar-popup-menu">
            <FaTimes className="navbar-close-icon" onClick={toggleMenu} />
            <ul className="navbar-menu-list">
              <li>
                <Link to="/profile" className="navbar-menu-list-link">
                  Profile
                </Link>
              </li>
              {!isUserLoggedIn && ( // Only show Login and Create Account if user is not logged in
                <>
                  <li>
                    <Link to="/login" className="navbar-menu-list-link">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/create-account"
                      className="navbar-menu-list-link"
                    >
                      Create account
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/about-us" className="navbar-menu-list-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="navbar-menu-list-link"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/order-and-delivery-policy"
                  className="navbar-menu-list-link"
                >
                  Order and Delivery Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/return-and-refund-policy"
                  className="navbar-menu-list-link"
                >
                  Return and Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="navbar-menu-list-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="navbar-menu-list-link">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/first-cap-brand"
                  className="navbar-menu-list-link"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/order-tracker" className="navbar-menu-list-link">
                  Order Tracker
                </Link>
              </li>
              <li>
                <Link to="/loyalty-program" className="navbar-menu-list-link">
                  Loyalty Program
                </Link>
              </li>
              <li>
                <Link to="/faq" className="navbar-menu-list-link">
                  FAQ
                </Link>
              </li>
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
    </div>
  );
}

export default Navbar;
