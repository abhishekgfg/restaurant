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
import { Link ,useLocation } from "react-router-dom";
import logo from "../assets/nine-to-nine-logo.png";
import "../styles/Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
const location = useLocation();
const isHomePage = location.pathname === "/";

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

    <div className="mobile-train-header mobile-only">
  {/* Fixed Top Section */}
  <div className="train-header-fixed">
    <div className="train-location-row">
      <div className="train-location-left">
        <span className="train-location-icon">📍</span>
        <div>
          <p className="train-station-name">Bettiah Station ▾</p>
          <p className="train-station-address">
            Railway Station Road, Saraswati Nagar, Banuch...
          </p>
        </div>
      </div>
      <div className="train-profile-icon">
        <FaUser />
      </div>
    </div>

    <div className="train-search-row">
      <div className="train-search-box">
        <FaSearch />
        <input type="text" placeholder="Search for 'Pizza'" />
      </div>
      <select className="veg-toggle-dropdown">
        <option value="veg">VEG 🟢</option>
        <option value="non-veg">NON-VEG 🔴</option>
        <option value="all">ALL ITEMS 🍽️</option>
      </select>
    </div>
  </div>

  {/* Scrollable Promo Section */}
 {isHomePage && (
  <div className="train-promo-scroll">
    <div className="train-promo-box">
      <div className="train-promo-text">
        <h3>Explore 9 to 9 Special Items!</h3>
        <p>Special dishes made fresh daily with love & flavor..</p>
        <Link to="/nine-specials" className="pnr-button">
          Explore Specials
        </Link>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNq-0cRn4Uoce0m1fklu8iZlR4qBFoagwvVQ&s"
        alt="Food"
        className="train-promo-image"
      />
    </div>
  </div>
)}
</div>


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
            <span className="nav-text">Menu</span>
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
