import React, { useState } from "react";
import {
  FaSearch, FaUser, FaShoppingBag,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { PiPercentFill } from "react-icons/pi";
import logo from "../assets/nine-to-nine-logo.png";
import "../styles/Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="header">
        {/* Left Section - Clickable Logo + Location */}
        <div className="header-left" onClick={() => setIsSidebarOpen(true)} style={{ cursor: "pointer" }}>
          <img src={logo} alt="Swiggy Logo" className="logo" />
          <div className="location-with-offers">
  <div className="location">
    Other <MdOutlineKeyboardArrowDown className="dropdown-icon" />
  </div>
  <div className="mobile-only location-offers">
    <PiPercentFill className="icon" />
    <span>Offers</span>
  </div>
</div>

        </div>

        {/* Right Nav for Desktop */}
        <div className="header-right desktop-only">
          <div className="nav-item"><MdMenu className="icon" /><span className="nav-text">Menu</span></div>
          <div className="nav-item"><FaSearch className="icon" />Search</div>
          <div className="nav-item offers">
            <PiPercentFill className="icon" />
            Offers <span className="new-badge">NEW</span>
          </div>
          <div className="nav-item"><FiHelpCircle className="icon" />Help</div>
          <div className="nav-item"><FaUser className="icon" />Sign In</div>
          <div className="nav-item"><FaShoppingBag className="icon" /><span className="cart-count">0</span>Cart</div>
        </div>
      </header>

      {/* Sidebar - On clicking "Other" */}
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

      {/* Bottom Mobile Nav */}
     <nav className="mobile-bottom-nav mobile-only">
  <div className="nav-item">
    <AiFillHome className="icon" />
    <span>Home</span>
  </div>
  <div className="nav-item">
    <FaSearch className="icon" />
    <span>Search</span>
  </div>
  {/* <div className="nav-item">
    <PiPercentFill className="icon" />
    <span>Offers</span>
  </div> */}
  <div className="nav-item">
    <FaShoppingBag className="icon" />
    <span>Cart</span>
  </div>
  <div className="nav-item">
    <FaUser className="icon" />
    <span>Account</span>
  </div>
</nav>


    </>
  );
};

export default Header;
