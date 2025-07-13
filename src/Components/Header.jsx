import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { PiPercentFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/nine-to-nine-logo.png";
import "../styles/Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileSticky, setIsMobileSticky] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  useEffect(() => {
  const handleScroll = () => {
    setIsMobileSticky(window.scrollY > 100); // show sticky after 100px scroll
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      {/* Desktop Header */}
      <header className={`header ${showHeader ? "show" : "hide"} desktop-only`}>
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-right">
          <Link to="/" className="nav-item">
            <AiFillHome className="icon" />
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/menu" className="nav-item">
            <MdMenu className="icon" />
            <span className="nav-text">Menu</span>
          </Link>
          <div className="nav-item">
            <FaSearch className="icon" />
            <span className="nav-text">Search</span>
          </div>
          <div className="nav-item offers">
            <PiPercentFill className="icon" />
            <span className="nav-text">Offers</span>
            <span className="new-badge">NEW</span>
          </div>
          <Link to="/help" className="nav-item">
            <FiHelpCircle className="icon" />
            <span className="nav-text">Help</span>
          </Link>
          <Link to="/account" className="nav-item">
            <FaUser className="icon" />
            <span>Sign In</span>
          </Link>
          <Link to="/cart" className="nav-item">
            <FaShoppingBag className="icon" />
            <span>Cart</span>
          </Link>
        </div>
      </header>

  <div className={`swiggy-hero-mobile-only mobile-only`}>
  <div className={`hero-sticky-top ${isMobileSticky ? "sticky-active" : ""}`}>
    <div className="swiggy-top-nav">
      <Link to="#" className="top-nav-link">Menu</Link>
      <Link to="#" className="top-nav-link">Exclusive Offers</Link>
      <button className="top-nav-button">Get the App</button>
      <FaUser className="top-nav-user" />
    </div>
    <hr className="hero-divider" />
  </div>

  <h1 className="hero-title">Order food. Discover best restaurants. Swiggy it!</h1>

  <div className="search-bar-row">
    <div className="location-dropdown">
      <span>📍</span>
      <select>
        <option>845438-PW76, Bettiah</option>
      </select>
    </div>

    <div className="hero-search-box">
      <FaSearch />
      <input type="text" placeholder="Search for restaurant, items, or cuisine" />
    </div>
  </div>

  <div className="swiggy-card-section">
    <div className="swiggy-card food-delivery">
      <h3>FOOD DELIVERY</h3>
      <p>From Restaurants</p>
      <p className="card-discount">UPTO 60% OFF</p>
      <button className="explore-button">Explore</button>
    </div>

    <div className="swiggy-card dineout">
      <h3>DINEOUT</h3>
      <p>Eat Out & Save </p>
      <p className="card-discount">UPTO 50% OFF</p>
      <button className="explore-button">Explore</button>
    </div>
  </div>




      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>×</button>
          <input type="text" placeholder="Search for area, street name.." className="sidebar-search" />
          <div className="location-box">
            <span className="location-icon">📍</span>
            <div>
              <div className="get-location-text">Get current location</div>
              <div className="gps-text">Using GPS</div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <nav className="mobile-bottom-nav mobile-only">
        <Link to="/" className="nav-item">
          <AiFillHome className="icon" />
          <span>Home</span>
        </Link>
        <div className="nav-item">
          <FaSearch className="icon" />
          <span>Search</span>
        </div>
        <Link to="/menu" className="nav-item">
          <MdMenu className="icon" />
          <span>Menu</span>
        </Link>
        <Link to="/cart" className="nav-item">
          <FaShoppingBag className="icon" />
          <span>Cart</span>
        </Link>
        <Link to="/account" className="nav-item">
          <FaUser className="icon" />
          <span>Account</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
