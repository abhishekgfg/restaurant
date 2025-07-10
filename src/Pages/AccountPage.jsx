import React, { useState } from "react";
import "../styles/AccountPage.css";
import {
  FaHeart,
  FaCreditCard,
  FaMapMarkerAlt,
  FaCog,
  FaUser,
  FaStar,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";



const AccountPage = () => {
  const [activeSection, setActiveSection] = useState("orders");
 const { t, i18n } = useTranslation();


 const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="account-wrapper">
      {/* Top Header */}
      <div className="account-header">
        <div className="user-info">
          <h2>Abhishek Kumar</h2>
          <p>6202000340 · abhishek8579013@gmail.com</p>
        </div>
        <button className="edit-btn">EDIT PROFILE</button>
      </div>

      {/* Page Content */}
      <div className="account-content">
        <div className="left-column">
          <div className="account-sidebar">
            <div
              className={`menu-item ${activeSection === "orders" ? "active" : ""}`}
              onClick={() => setActiveSection("orders")}
            >
              <FaUser /> Orders
            </div>
            <div
              className={`menu-item ${activeSection === "restaurant" ? "active" : ""}`}
              onClick={() => setActiveSection("restaurant")}
            >
              <FaStar /> Restaurant Location
            </div>
            <div
              className={`menu-item ${activeSection === "favourites" ? "active" : ""}`}
              onClick={() => setActiveSection("favourites")}
            >
              <FaHeart /> Favourites
            </div>
            <div
              className={`menu-item ${activeSection === "payments" ? "active" : ""}`}
              onClick={() => setActiveSection("payments")}
            >
              <FaCreditCard /> Payments
            </div>
            <div
              className={`menu-item ${activeSection === "addresses" ? "active" : ""}`}
              onClick={() => setActiveSection("addresses")}
            >
              <FaMapMarkerAlt /> Addresses
            </div>
            <div
              className={`menu-item ${activeSection === "settings" ? "active" : ""}`}
              onClick={() => setActiveSection("settings")}
            >
              <FaCog /> Settings
            </div>
          </div>
        </div>

        {/* Right Column Content Sections */}
        <div className="right-column">
          {/* Orders Section */}
          {activeSection === "orders" && (
           <section className="section-content">
  <h2 className="section-title">Your Recent Orders</h2>
  <div className="orders-list">
    {/* Order 1 */}
    <div className="order-card">
      <div className="order-header">
        <h3>Pizza </h3>
        <span className="status delivered">Delivered</span>
      </div>
      <p className="order-id">Order ID: #PH-98234</p>
      <p className="order-address">Delivered to: 221B Baker Street, Delhi</p>
      <div className="order-items-list">
        <ul>
          <li>2 x Margherita Pizza - ₹300</li>
          <li>1 x Garlic Bread - ₹100</li>
          <li>GST & Charges - ₹39</li>
        </ul>
      </div>
      <div className="order-footer">
        <span className="order-total">Total: ₹589</span>
        <span className="order-date">Delivered on Jul 6, 2025 • 7:35 PM</span>
      </div>
      <div className="payment-mode cash">Payment: Cash on Delivery</div>
      <button className="invoice-btn">Download Invoice</button>
    </div>

    {/* Order 2 */}
    <div className="order-card">
      <div className="order-header">
        <h3>Biryani </h3>
        <span className="status preparing">Preparing</span>
      </div>
      <p className="order-id">Order ID: #BB-14789</p>
      <p className="order-address">Delivering to: A-Block, Sector 63, Noida</p>
      <div className="order-items-list">
        <ul>
          <li>1 x Chicken Biryani - ₹350</li>
          <li>1 x Raita - ₹40</li>
          <li>GST & Charges - ₹39</li>
        </ul>
      </div>
      <div className="order-footer">
        <span className="order-total">Total: ₹429</span>
        <span className="order-date">Placed on Jul 9, 2025 • Preparing for 10 mins</span>
      </div>
      <div className="payment-mode online">Payment: Paid Online (UPI)</div>
      <button className="invoice-btn">Download Invoice</button>
    </div>
  </div>
</section>

            
          )}

          {/* Restaurant Location Section */}
          {activeSection === "restaurant" && (
             <section className="restaurant-location-section">
    <h2 className="restaurant-location-title">Saved Restaurant Locations</h2>

    <div className="restaurant-location-card">
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipOMo8exubNSOxkGPhBrhEifsanC4jTDJ4ynamC2=w141-h235-n-k-no-nu"
        alt="Bettiah Harivatika"
        className="restaurant-location-image"
      />

      <div className="restaurant-location-info">
        <h3 className="restaurant-location-name">Nine To Nine Restaurant </h3>
        <p className="restaurant-location-address">
          Near Harivatika Park, Main Road, Bettiah, Bihar 845438
        </p>
        <p className="restaurant-location-time">
          🕒 Open: 10:00 AM - 10:30 PM
        </p>
        <p className="restaurant-location-phone">📞 +91 9876543210</p>
        <div className="restaurant-location-tags">
          <span className="restaurant-location-tag">Pure Veg</span>
           <span className="restaurant-location-tag">non Veg</span>
          <span className="restaurant-location-tag">Family Friendly</span>
          
        </div>
        <button className="restaurant-location-edit-btn">Edit Location</button>
      </div>
    </div>
  </section>
          )}
{activeSection === "favourites" && (
  <section className="favourites-section">
    <h2 className="favourites-title">Your Favourites</h2>
    <div className="favourites-grid">

      {/* Favourite Item 1 */}
      <div className="favourite-card">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Margherita Pizza"
          className="favourite-image"
        />
        <div className="favourite-info">
          <h3 className="favourite-name">Margherita Pizza</h3>
          <p className="favourite-restaurant">Pizza Hut</p>
          <div className="favourite-meta">
            <span className="badge veg">Veg</span>
            <span className="price">₹149</span>
            <span className="rating">⭐ 4.5</span>
          </div>
        </div>
        <FaHeart className="heart-icon filled" />
      </div>

      {/* Favourite Item 2 */}
      <div className="favourite-card">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/367b2c14cf227584027d885958fe2853"
          alt="Chicken Biryani"
          className="favourite-image"
        />
        <div className="favourite-info">
          <h3 className="favourite-name">Chicken Biryani</h3>
          <p className="favourite-restaurant">Biryani Blues</p>
          <div className="favourite-meta">
            <span className="badge nonveg">Non-Veg</span>
            <span className="price">₹229</span>
            <span className="rating">⭐ 4.7</span>
          </div>
        </div>
        <FaHeart className="heart-icon filled" />
      </div>

    </div>
  </section>
)}

          {/* Payments Section */}
          {activeSection === "payments" && (
            <section className="section-content">
              <h2>Payment Methods</h2>
              <p>No payment methods linked to your account.</p>
            </section>
          )}

          {/* Addresses Section */}
          {activeSection === "addresses" && (
            <section className="section-content">
              <h2>Saved Addresses</h2>
              <p>No addresses found in your account.</p>
            </section>
          )}

          {/* Settings Section */}
          {activeSection === "settings" && (
            <section className="account-settings-section">
    <h2 className="settings-title">Account Settings</h2>
    <p className="settings-subtext">Manage your profile, privacy, and preferences.</p>

    <div className="settings-grid">

      {/* Profile Settings */}
      <div className="settings-card">
        <h3>👤 Profile Information</h3>
        <p>Update your name, phone number, and email address.</p>
        <button className="settings-btn">Edit Profile</button>
      </div>

      {/* Password */}
      <div className="settings-card">
        <h3>🔒 Change Password</h3>
        <p>Change your account password to keep it secure.</p>
        <button className="settings-btn">Change Password</button>
      </div>

      {/* Notifications */}
      <div className="settings-card">
        <h3>🔔 Notifications</h3>
        <p>Manage email and push notifications for orders and offers.</p>
        <button className="settings-btn">Notification Settings</button>
      </div>

      {/* Address */}
      <div className="settings-card">
        <h3>📍 Saved Addresses</h3>
        <p>Manage your saved delivery addresses.</p>
        <button className="settings-btn">Manage Addresses</button>
      </div>

      {/* Payments */}
      <div className="settings-card">
        <h3 className="head">💳 Payment Methods</h3>
        <p>Add or remove cards and UPI options for quick checkout.</p>
        <button className="settings-btn">Manage Payments</button>
      </div>

      {/* Language */}
     <div className="settings-card">
      <h3>🌐 {t("settings.language_preference")}</h3>
      <p>{t("settings.choose_language")}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button className="settings-btn" onClick={() => handleLanguageChange("en")}>
          English
        </button>
        <button className="settings-btn" onClick={() => handleLanguageChange("hi")}>
          हिन्दी
        </button>
      </div>
    </div>

      {/* Privacy */}
      <div className="settings-card">
        <h3>🛡️ Privacy Settings</h3>
        <p>Control how your data is used and shared.</p>
        <button className="settings-btn">Privacy Controls</button>
      </div>

      {/* Logout */}
      <div className="settings-card danger">
        <h3>🚪 Logout</h3>
        <p>Sign out from your account securely.</p>
        <button className="settings-btn danger-btn">Logout</button>
      </div>

    </div>
  </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
