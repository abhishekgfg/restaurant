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
      <Link to="/menu" className="top-nav-link">
  <MdMenu style={{ marginRight: "40px", verticalAlign: "middle" }} />
  
</Link>

      <Link to="#" className="top-nav-link">Exclusive Offers</Link>
      <button className="top-nav-button">Get the App</button>
      <Link to="/account" className="top-nav-link">
  <FaUser className="top-nav-user" />

</Link>

    </div>
    <hr className="hero-divider" />
    <div className="hero-search-mobile">
  <FaSearch className="search-icon" />
  <input
    type="text"
    placeholder="Search for restaurants, items, or cuisines"
    className="search-input-mobile"
  />
</div>

  </div>
  

    {isHomePage && (
    <>
      <h1 className="hero-title">
        Order food. Discover best restaurants. Swiggy it!
      </h1>

      <div className="search-bar-row">
        <div className="location-dropdown">
          <span>📍</span>
          <select>
            <option>harivatika, Bettiah</option>
          </select>
        </div>

        
      </div>

      <div className="swiggy-card-section">
        <div className="swiggy-card food-delivery">
          <h3>FOOD DELIVERY</h3>
          <p>Restaurants</p>
          {/* <p className="card-discount">UPTO 60% OFF</p> */}
          <button className="explore-button">Explore</button>
        </div>

        <div className="swiggy-card dineout">
          <h3>SPECIAL</h3>
          <p>NINE TO NINE</p>
         
         <Link to="/nine-specials" className="explore-button">Explore</Link>

        </div>
      </div>
    </>
  )}




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
   <nav className="mobile-nav-bar1 mobile-only1">
  <Link to="/" className="mobile-nav-item1">
    <AiFillHome className="mobile-nav-icon1" />
    <span>Home</span>
  </Link>
  <Link to="#" className="mobile-nav-item1">
    <FaSearch className="mobile-nav-icon1" />
    <span>Search</span>
  </Link>
  <Link to="/menu" className="mobile-nav-item1">
    <MdMenu className="mobile-nav-icon1" />
    <span>Menu</span>
  </Link>
  <Link to="/cart" className="mobile-nav-item1">
    <FaShoppingBag className="mobile-nav-icon1" />
    <span>Cart</span>
  </Link>
  <Link to="/account" className="mobile-nav-item1">
    <FaUser className="mobile-nav-icon1" />
    <span>Account</span>
  </Link>
</nav>


    </>
  );
};

export default Header;
