import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  const categoryData = [
    { name: "Biryani", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" },
    { name: "Pizzas", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" },
    { name: "Rolls", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png" },
    { name: "North Indian", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png" },
    { name: "Chinese", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png" },
    { name: "Chole Bhature", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png" },
    { name: "Dosa", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png" },
    { name: "Burgers", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png" },
  ];

  const restaurantData = [
    {
      name: "Domino's Pizza",
      rating: "4.4",
      time: "20–25 mins",
      desc: "Pizzas, Italian, Pastas, Desserts",
      area: "Kankarbagh",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/13/35970d8c-1035-47e1-bd10-044d3a79925f_620953.JPG",
      tag: "ITEMS AT ₹79"
    },
    {
      name: "Burger King",
      rating: "4.2",
      time: "35–40 mins",
      desc: "Burgers, American",
      area: "Lodipur",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/def06c05-b27b-4669-be62-4630f2ce1bbd_654087.jpg",
      tag: "60% OFF UPTO ₹110"
    },
    {
      name: "Pizza Hut",
      rating: "4.3",
      time: "20–25 mins",
      desc: "Pizzas",
      area: "Kankarbagh",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/5e386121-e864-4cfc-84ce-12ac9753edba_725082.JPG",
      tag: "ITEMS AT ₹59"
    },
    {
      name: "McDonald's",
      rating: "4.3",
      time: "30–35 mins",
      desc: "American",
      area: "Golambar",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/041acbd3-37b1-4d3c-9aa3-9aa86c67d584_254135.JPG",
      tag: "ITEMS AT ₹49"
    },
    {
      name: "NIC Ice Cream",
      rating: "4.6",
      time: "30–35 mins",
      desc: "Ice Cream, Desserts",
      area: "Kailash Puri Rd",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/fd27acd3-6d4d-4559-8a76-7ed421a5eb1f_712098.jpg"
    }
  ];

  return (
   <div className="homepage-container">
      {/* Category Section */}
     <section className="homepage-section">
  <h2 className="homepage-section-title">What's on your mind?</h2>
<div className="homepage-scroll-wrapper">
  <div className="homepage-scroll homepage-category-scroll">
    {categoryData.map((item, index) => (
      <div className="homepage-category-item" key={index}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    ))}
  </div>
</div>

</section>

<hr className="homepage-divider" />

<section className="homepage-section">
  <h2 className="homepage-section-title">Top restaurant chains in Patna</h2>
  <div className="homepage-scroll-wrapper">
  <div className="homepage-scroll homepage-restaurant-scroll">
    {restaurantData.map((res, index) => (
      <div className="homepage-restaurant-card" key={index}>
        <div className="homepage-restaurant-image">
          <img src={res.image} alt={res.name} />
          {res.tag && <div className="homepage-restaurant-tag">{res.tag}</div>}
        </div>
        <div className="homepage-restaurant-info">
          <h3>{res.name}</h3>
          <p className="homepage-rating-time">⭐ {res.rating} • {res.time}</p>
          <p className="homepage-desc">{res.desc}</p>
          <p className="homepage-area">{res.area}</p>
        </div>
      </div>
    ))}
  </div>
</div>

</section>

    </div>
  );
};
export default HomePage;
