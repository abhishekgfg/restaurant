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
// import logo from "../assets/nine-to-nine-logo.png";
import logo from "../assets/image.png";
import Mlogo from "../assets/mlogo.png";
import "../styles/Header.css";

// Suggestions array for rotating placeholder
const suggestions = [
  "Pizza",
  "Burger",
  "Paneer Tikka",
  "Ice Cream",
  "Biryani",
  "Chinese",
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileSticky, setIsMobileSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
const [searchTerm, setSearchTerm] = useState("");



  // Rotating search suggestion
  const [index, setIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState(`Search for ${suggestions[0]}`);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Loading delay
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Header scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Mobile sticky header trigger
  useEffect(() => {
    const handleScroll = () => {
      setIsMobileSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate placeholder every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % suggestions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPlaceholder(`Search for ${suggestions[index]}`);
  }, [index]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner" />
      </div>
    );
  }
const handleSearch = () => {
  if (searchTerm.trim()) {
    console.log("Search for:", searchTerm); // Replace this with actual filter/search logic
    // Optionally: route to `/search?query=searchTerm`
    setIsSearchOpen(false);
  }
};

  return (
    <>
      {/* Desktop Header */}
      <header className={`header ${showHeader ? "show" : "hide"} desktop-only`}>
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-right">
          <Link to="/" className={`nav-item ${location.pathname === "/" ? "active-link" : ""}`}>
            <AiFillHome className="icon" />
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/menu" className={`nav-item ${location.pathname.startsWith("/menu") ? "active-link" : ""}`}>
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
          <Link to="/help" className={`nav-item ${location.pathname === "/help" ? "active-link" : ""}`}>
            <FiHelpCircle className="icon" />
            <span className="nav-text">Help</span>
          </Link>
          <Link to="/account" className={`nav-item ${location.pathname === "/account" ? "active-link" : ""}`}>
            <FaUser className="icon" />
            <span>Sign In</span>
          </Link>
          <Link to="/cart" className={`nav-item ${location.pathname === "/cart" ? "active-link" : ""}`}>
            <FaShoppingBag className="icon" />
            <span>Cart</span>
          </Link>
        </div>
      </header>

      <div className={`swiggy-hero-mobile-only mobile-only`}>
        <div className={`hero-sticky-top ${isMobileSticky ? "sticky-active" : ""}`}>
          <div className="swiggy-top-nav">
            {/* <Link to="/menu" className="top-nav-link">
              <MdMenu style={{ fontSize: "24px", marginRight: "40px", verticalAlign: "middle" }} />
            </Link> */}
            <img src={Mlogo} alt="Logo" style={{ height: "50px", marginRight: "40px" }} />

            <Link to="#" className="top-nav-link">Exclusive Offers</Link>
            <button className="top-nav-button">Get the App</button>
            <Link to="/account" className="top-nav-link">
              <FaUser className="top-nav-user" style={{ fontSize: "24px" }} />
            </Link>
          </div>
          <hr className="hero-divider" />
          <div className="hero-search-mobile">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder={placeholder}
              className="search-input-mobile"
            />
          </div>
        </div>

        {isHomePage && (
          <>
            <h1 className="hero-title">
              Food delivery reimagined. Welcome to 9 to 9.
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
                <button className="explore-button">Explore</button>
              </div>
              <div className="swiggy-card dineout">
                <h3>SPECIAL</h3>
                <p>9 to 9</p>
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
        <Link to="/" className={`mobile-nav-item1 ${location.pathname === "/" ? "active-link" : ""}`}>
          <AiFillHome className="mobile-nav-icon1" />
          <span>Home</span>
        </Link>
        <div
  className={`mobile-nav-item1 ${isSearchOpen ? "active-link" : ""}`}
  onClick={() => setIsSearchOpen(true)}
>
  <FaSearch className="mobile-nav-icon1" />
  <span>Search</span>
</div>

        <Link to="/menu" className={`mobile-nav-item1 ${location.pathname.startsWith("/menu") ? "active-link" : ""}`}>
          <MdMenu className="mobile-nav-icon1" />
          <span>Menu</span>
        </Link>
        <Link to="/cart" className={`mobile-nav-item1 ${location.pathname === "/cart" ? "active-link" : ""}`}>
          <FaShoppingBag className="mobile-nav-icon1" />
          <span>Cart</span>
        </Link>
        <Link to="/account" className={`mobile-nav-item1 ${location.pathname === "/account" ? "active-link" : ""}`}>
          <FaUser className="mobile-nav-icon1" />
          <span>Account</span>
        </Link>
      </nav>
     {isSearchOpen && (
  <div className="search-popup-overlay">
    <div className="search-popup">
      <button className="close-search-btn" onClick={() => setIsSearchOpen(false)}>×</button>
      <div className="search-popup-content">
        <FaSearch className="popup-search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search for food or restaurants..."
          className="popup-search-input"
        />
        <button
          style={{
            background: "orange",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Header;
