import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { PiPercentFill } from "react-icons/pi";
import logo from "../assets/nine-to-nine-logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // scrolling down → hide
      } else {
        setShowHeader(true); // scrolling up → show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header */}
 <header className={`header ${showHeader ? "show" : "hide"}`}>
  {/* Left Section */}
  {/* Back Arrow – Mobile Only */}
<IoArrowBack
  className="back-arrow mobile-only"
  onClick={() => window.history.back()}
/>
<img src={logo} alt="Logo" className="logo" />
  <div
    className="header-left"
    onClick={() => setIsSidebarOpen(true)}
    style={{ cursor: "pointer" }}
  >
    
    {/* <img src={logo} alt="Logo" className="logo" /> */}
    <div className="location-with-offers">
      <div className="location">
        Other <MdOutlineKeyboardArrowDown className="dropdown-icon" />
      </div>
    </div>
    
  </div>

  {/* Mobile-only Menu Button */}
  <div className="nav-item mobile-only">
    <Link to="/menu" className="nav-item">
      <MdMenu className="icon" />
      <span className="nav-text">Menu</span>
    </Link>
  </div>

  



        {/* Right Navigation - Desktop Only */}
        <div className="header-right desktop-only">
          <Link to="/" className="nav-item">
  <AiFillHome className="icon" />
  <span className="nav-text">Home</span>
</Link>

         <Link to="/menu" className="nav-item">
        <MdMenu className="icon" />
        <span className="nav-text">Menu</span>
      </Link>
          <div className="nav-item">
            <FaSearch className="icon" />Search
          </div>
          <div className="nav-item offers">
            <PiPercentFill className="icon" />
            Offers <span className="new-badge">NEW</span>
          </div>
         <Link to="/help">
  <div className="nav-item">
    <FiHelpCircle className="icon" />
    Help
  </div>
</Link>
          <Link to="/account">
  <div className="nav-item">
    <FaUser className="icon" />
    <span>Sign In</span>
  </div>
</Link>

<Link to="/cart" className="nav-link">
  <div className="nav-item">
    <FaShoppingBag className="icon" />
    <span>Cart</span>
  </div>
</Link>

        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
            ×
          </button>
          <input
            type="text"
            placeholder="Search for area, street name.."
            className="sidebar-search"
          />
          <div className="location-box">
            <span className="location-icon">📍</span>
            <div>
              <div className="get-location-text">Get current location</div>
              <div className="gps-text">Using GPS</div>
            </div>
            
          </div>
         {/* <Link to="/cart" className="nav-link">
  <div className="nav-item">
    <FaShoppingBag className="icon" />
    <span>Cart</span>
  </div>
</Link> */}

        </div>
      )}

      {/* Bottom Navigation - Mobile Only */}
      <nav className="mobile-bottom-nav mobile-only">
        <Link to="/" className="nav-item">
  <AiFillHome className="icon" />
  <span>Home</span>
</Link>
        <div className="nav-item">
          <FaSearch className="icon" />
          <span>Search</span>
        </div>
       <Link to="/cart" className="nav-link">
  <div className="nav-item">
    <FaShoppingBag className="icon" />
    <span>Cart</span>
  </div>
</Link>
        <Link to="/account">
  <div className="nav-item">
    <FaUser className="icon" />
    <span>Account</span>
  </div>
</Link>
      </nav>
    </>
  );
};

export default Header;
