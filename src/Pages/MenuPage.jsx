import React, { useState } from "react";
import "../styles/MenuPage.css";
import CategoryGrid from "../Components/CategoryGrid";

const teaMenu = [
  { name: "Normal Tea", price: 20, image: "https://img.freepik.com/free-photo/cup-tea-with-mint-leaves-dark-background_123827-21024.jpg" },
  { name: "Masala Tea", price: 30, image: "https://img.freepik.com/free-photo/masala-tea-traditional-indian-drink-with-spices-dark-table_2829-10667.jpg" },
  { name: "Ginger Tea", price: 30, image: "https://img.freepik.com/premium-photo/ginger-tea-with-lemon-wooden-table_88281-1342.jpg" },
  { name: "Eilaichi Tea", price: 35, image: "https://img.freepik.com/premium-photo/indian-chai-glass_75648-1116.jpg" },
  { name: "Ginger Eilaichi Tea", price: 40, image: "https://img.freepik.com/premium-photo/indian-masala-chai-spicy-milk-tea_57665-14715.jpg" },
  { name: "Chocolate Tea", price: 45, image: "https://img.freepik.com/free-photo/close-up-delicious-chocolate-drink_23-2149436068.jpg" },
  { name: "Lemon Tea", price: 25, image: "https://img.freepik.com/premium-photo/hot-lemon-tea-isolated-white-background_252965-195.jpg" },
  { name: "Green Tea", price: 25, image: "https://img.freepik.com/free-photo/cup-green-tea-with-leaves_111797-171.jpg" },
  { name: "Kulhad Tea", price: 30, image: "https://img.freepik.com/premium-photo/indian-chai-kulhad-pottery-cup_75648-1118.jpg" },
  { name: "Tandoori Tea", price: 50, image: "https://img.freepik.com/premium-photo/tandoori-chai-indian-clay-pot-cup-filled-with-hot-milk-tea_72636-1104.jpg" }
];

const sectionTitles = [
  "Chaye",
  "Coffee",
  "Biryani",
  "Pizzas",
  "North Indian",
  "Chinese",
  "Chole Bhature",
  "Dosa",
  "Burgers",
  "Shake"
];

const MenuPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleSeeAll = (title) => {
    setOpenSection(title);
  };

  const closeModal = () => {
    setOpenSection(null);
  };

  return (
    <div className="menu-page1">
      <h2 className="section-title">Browse Categories</h2>
      <CategoryGrid />

      <div className="menu-header">
        <hr className="menu-line" />
        <h4>MENU</h4>
        <hr className="menu-line" />
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search for dishes" />
        <span className="search-icon">🔍</span>
      </div>

      <div className="veg-tag"></div>

      {sectionTitles.map((title, idx) => (
        <div className="menu-section" key={idx}>
          <div className="menu-section-header">
            <h3>{title}</h3>
            <span className="see-all" onClick={() => handleSeeAll(title)}>See All</span>
          </div>
          <div className="horizontal-scroll">
            {teaMenu.map((dish, index) => (
              <div className="dish-card" key={index}>
                <div className="dish-image-container">
                  <img src={dish.image} alt={dish.name} />
                  <div className="add-button">ADD</div>
                </div>
                <div className="dish-info">
                  <h4>{dish.name}</h4>
                  <p className="dish-price">₹{dish.price}</p>
                  <p className="dish-desc">Deliciously brewed {dish.name} to brighten your day.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for "See All" */}
      {openSection && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{openSection}</h2>
              <button onClick={closeModal} className="close-button">✖</button>
            </div>
            <div className="modal-grid">
              {teaMenu.map((dish, index) => (
                <div className="dish-card" key={index}>
                  <div className="dish-image-container">
                    <img src={dish.image} alt={dish.name} />
                    <div className="add-button">ADD</div>
                  </div>
                  <div className="dish-info">
                    <h4>{dish.name}</h4>
                    <p className="dish-price">₹{dish.price}</p>
                    <p className="dish-desc">Deliciously brewed {dish.name} to brighten your day.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
