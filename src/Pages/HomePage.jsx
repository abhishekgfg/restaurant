import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HomePage.css";
// import banner1 from "../Images/food-menu-restaurant-social-media-cover-template.png";
import banner1 from "../Images/Orange White Cooking Recipe YouTube Thumbnail.png";
import banner2 from "../Images/Black and Green Modern Delicious Burger Banner.png";
import banner3 from "../Images/Orange And White Illustrative Chicken Biryani Promotion Banner.png";
// import TestimonialPage from "./TestimonialPage";

const HomePage = () => {
  const bannerImages = [
     {
    url: banner1,
    // title: "Hot & Fresh Pizzas",
    // button: "View Menu",
  },
    {
      url: banner2,
      // title: "Hot & Fresh Pizzas",
      // button: "View Menu",
    },
    {
      url: banner3,
      // title: "Authentic Biryani Feast",
      // button: "Explore Deals",
    },
  ];

  const categoryData = [
  { name: "Biryani", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" },
  { name: "Pizzas", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" },
  { name: "Rolls", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png" },
  { name: "North Indian", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png" },
  { name: "Chinese", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png" },
  { name: "Chole Bhature", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png" },
  { name: "Dosa", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png" },
  { name: "Burgers", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png" },
  { name: "TEA", image: "" },
  { name: "COFFEE", image: "" },
  { name: "МОСКTAIL", image: "" },
  { name: "BEVERAGES", image: "" },
  { name: "BREAKFAST", image: "" },
  { name: "ROLL", image: "" },
  { name: "BURGER", image: "" },
  { name: "NOODLE'S", image: "" },
  { name: "SOUP", image: "" },
  { name: "RICE & PULAО", image: "" },
  { name: "DAL", image: "" },
  { name: "SEASONAL VEGETABLE", image: "" },
  { name: "PARATНА", image: "" },
  { name: "9 TO 9 SPECIAL TANDOORI", image: "" },
  { name: "9 TO 9 STARTER'S", image: "" },
  { name: "CHICKEN MAIN COURSE", image: "" },
  { name: "MAIN COURSE", image: "" },
  { name: "9 TO 9 FAST FOOD COMBO", image: "" },
  { name: "ADD ON", image: "" },
  { name: "9 TO 9 SPECIAL THALI", image: "" },
  { name: "9 TO 9 SPECIAL CHICKEN THALI", image: "" },
  { name: "9 TO 9 SPECIAL COMВО", image: "" },
  { name: "SHAKE", image: "" },
  { name: "RECOMANDED", image: "" },
  { name: "MOMO'S", image: "" },
  { name: "SOUTH INDIAN", image: "" },
  { name: "MUSHROOM SPECIAL", image: "" },
  { name: "EGG SPECIAL", image: "" }
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
      time: "30–35 mins ",
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false
  };



  const hotProducts = [
  {
    name: "Normal Tea",
    price: 20,
    desc: "Deliciously brewed Normal Tea to brighten your day.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/def06c05-b27b-4669-be62-4630f2ce1bbd_654087.jpg",
  },
  {
    name: "Burger",
    price: 30,
    desc: "Deliciously brewed Masala Tea to brighten your day.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/5e386121-e864-4cfc-84ce-12ac9753edba_725082.JPG",
  },
  {
    name: "Pizza  ",
    price: 30,
    desc: "Deliciously brewed Ginger Tea to brighten your day.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/5e386121-e864-4cfc-84ce-12ac9753edba_725082.JPG",
  },
  {
    name: "Cold Coffee",
    price: 40,
    desc: "Chilled cold coffee to refresh your mood.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/5e386121-e864-4cfc-84ce-12ac9753edba_725082.JPG",
  },
  {
    name: "Pizza",
    price: 25,
    desc: "Fresh lemon soda with a fizzy twist.",
    image: "https://via.placeholder.com/150?text=Lemon+Soda",
  },
  {
    name: "Oreo Shake",
    price: 50,
    desc: "Creamy oreo shake for cookie lovers.",
    image: "https://via.placeholder.com/150?text=Oreo+Shake",
  },
  {
    name: "Strawberry Shake",
    price: 45,
    desc: "Sweet strawberry shake with real fruit.",
    image: "https://via.placeholder.com/150?text=Strawberry+Shake",
  },
  {
    name: "Mango Lassi",
    price: 35,
    desc: "Chilled mango lassi made with fresh yogurt.",
    image: "https://via.placeholder.com/150?text=Mango+Lassi",
  },
   {
    name: "Lemon Soda",
    price: 25,
    desc: "Fresh lemon soda with a fizzy twist.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/def06c05-b27b-4669-be62-4630f2ce1bbd_654087.jpg",
  },
  {
    name: "Oreo Shake",
    price: 50,
    desc: "Creamy oreo shake for cookie lovers.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ed517d693c01179f5a25d5320ce9fcab",
  },
 
];


  return (
  <div className="homepage-container">
    
      {/* Banner Slider Section */}
      <div className="homepage-banner-wrapper">
        <Slider {...sliderSettings} className="homepage-banner-slider">
          {bannerImages.map((item, index) => (
            <div className="homepage-banner-slide" key={index}>
              <img src={item.url} alt={`Banner ${index}`} />
              {/* <div className="homepage-banner-overlay">
                <h2>{item.title}</h2>
                <button>{item.button}</button>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>

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
<section className="more-on-swiggy-section">
  {/* Top Banner */}
  <div className="swiggy-banner">
    <div className="banner-text">
      <h3>
        FREE deliveries with <span className="bold-orange">one</span>
      </h3>
      <p>
        at just <span className="bold-orange">₹1 for a month!</span>
      </p>
      <button className="order-now-btn">Order Now</button>
    </div>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBtchYElxtkw_F6R6xluQE-crRNQyzhphPQ&s"
      alt="Banner"
      className="banner-image"
    />
  </div>

  {/* Section Title */}
  <h2 className="more-on-title">More from 9 to 9</h2>

  {/* Scrollable Feature Cards */}
  <div className="swiggy-features-scroll">
    <div className="swiggy-feature-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEgG4CqTPF3ijGM5hHaTWbdU4KaUlq3Lj1Q&s" alt="Offer Zone" />
      <p>OFFER<br />ZONE</p>
    </div>
    <div className="swiggy-feature-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4Q1N6Dl1fiqMQX8Q-pTxi54AgZ-XtkJzOQ&s" alt="Bolt" />
      <p>BOLT<br />FOOD IN 10 MINS</p>
    </div>
    <div className="swiggy-feature-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4Q1N6Dl1fiqMQX8Q-pTxi54AgZ-XtkJzOQ&s" alt="Bolt" />
      <p>BOLT<br />FOOD IN 10 MINS</p>
    </div>
  </div>
</section>

      <hr className="homepage-divider" />

      {/* Restaurant Section */}
      <section className="homepage-section">
        <h2 className="homepage-section-title">Explore menu</h2>
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
      {/* <TestimonialPage /> */}
           <section className="hot-products-wrapper">
      <div className="hot-products-header">
        <h2>Hot Products</h2>
        <a href="#" className="see-all-link">See All</a>
      </div>
      <div className="hot-products-list">
        {hotProducts.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-img">
              <img src={item.image} alt={item.name} />
              <span className="add-tag">ADD</span>
            </div>
            <div className="product-details">
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <p className="desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
<section className="testimonial-section">
  <div className="testimonial-header">
    <h2>What Customers Say</h2>
   
  </div>

  <div className="testimonial-slider">
    <div className="testimonial-card">
      <div className="user-info">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Riya Sharma" />
        <div>
          <h4>Riya Sharma</h4>
          <span>Delhi</span>
        </div>
      </div>
      <p>
        Amazing food! Delivered hot and fresh every time. Loved the combos and
        the taste is unbeatable.
      </p>
    </div>

    <div className="testimonial-card">
      <div className="user-info">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aman Verma" />
        <div>
          <h4>Aman Verma</h4>
          <span>Mumbai</span>
        </div>
      </div>
      <p>
        Very convenient service. Fast delivery and excellent quality. Totally
        satisfied with the meals!
      </p>
    </div>

    <div className="testimonial-card">
      <div className="user-info">
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Neha Kapoor" />
        <div>
          <h4>Neha Kapoor</h4>
          <span>Bangalore</span>
        </div>
      </div>
      <p>
        Loved the dineout offers! Food is tasty and staff is very polite. Will
        definitely come back!
      </p>
    </div>

    <div className="testimonial-card">
      <div className="user-info">
        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Raj Malhotra" />
        <div>
          <h4>Raj Malhotra</h4>
          <span>Hyderabad</span>
        </div>
      </div>
      <p>
        Excellent packaging and super fast delivery. The app is easy to use and
        the deals are great.
      </p>
    </div>

    <div className="testimonial-card">
      <div className="user-info">
        <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Priya Nair" />
        <div>
          <h4>Priya Nair</h4>
          <span>Chennai</span>
        </div>
      </div>
      <p>
        The food is flavorful and they have great vegetarian options. Also
        impressed by the hygiene.
      </p>
    </div>

    <div className="testimonial-card">
      <div className="user-info">
        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="Deepak Singh" />
        <div>
          <h4>Deepak Singh</h4>
          <span>Kolkata</span>
        </div>
      </div>
      <p>
        Quick service and great user experience. I order regularly and it’s
        always consistent!
      </p>
    </div>
  </div>
</section>

    </div>
    
  );
  
};

export default HomePage;
