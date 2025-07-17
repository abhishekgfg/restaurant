import React, { useState, useEffect } from 'react';

import '../styles/CartPage.css';
import { MdLocationOn } from 'react-icons/md';
const handlePayment = () => {
  const options = {
    key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key
    amount: grandTotal * 100, // Amount is in paise
    currency: "INR",
    name: "Nine to Nine Restaurant",
    description: "Order Payment",
    handler: function (response) {
      alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
      // Optionally redirect or save response to DB
    },
    prefill: {
      name: "Abhishek Kumar",
      email: "abhishek@example.com",
      contact: "6202000340"
    },
    notes: {
      address: "Green Residency, Patna"
    },
    theme: {
      color: "#fc8019"
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

;


const dummyCart = [
  {
    id: 1,
    name: 'Paneer Manchurian',
    price: 379,
    quantity: 1,
    image: 'https://source.unsplash.com/100x100/?paneer',
  },
  {
    id: 2,
    name: 'Veg Chilly Garlic Fried Rice',
    price: 319,
    quantity: 1,
    image: 'https://source.unsplash.com/100x100/?fried-rice',
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(dummyCart);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCouponSidebarOpen, setIsCouponSidebarOpen] = useState(false);

  const incrementQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);
}, [])
  const decrementQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const itemTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 23;
  const gst = 46.7;
  const grandTotal = itemTotal + deliveryFee + gst;

  const handleGetLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude);
        // You can set this to a map or use reverse geocoding here
      },
      error => {
        alert("Location access denied or unavailable.");
        console.error("Error:", error);
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};


  return (
    <div className="cart-layout">

      {/* LEFT ADDRESS SIDEBAR */}
      <div className={`sidebar1 ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar1-header">
          <button className="close-btn1" onClick={() => setIsSidebarOpen(false)}>×</button>
          <h3>Save delivery address</h3>
        </div>
        <div className="sidebar1-scroll">
       <div className="map-container" id="map">
  Loading map...
</div>


<div className="sync-location-wrapper">
  <button className="sync-location-btn" onClick={handleGetLocation}>
    📍 Sync Location
  </button>
</div>

          <div className="address-form">
            <label>Address</label>
            <input type="text" placeholder="Auto-filled address or type manually" />
            <label>Door / Flat No.</label>
            <input type="text" placeholder="House / Flat Number" />
            <label>Landmark</label>
            <input type="text" placeholder="Nearby landmark (optional)" />
            <label>City</label>
            <input type="text" placeholder="City" />
            <label>Pincode</label>
            <input type="text" placeholder="6-digit ZIP Code" maxLength={6} />
            <label>Address Type</label>
            <div className="address-type-options">
              <label><input type="radio" name="addressType" value="Home" /> Home</label>
              <label><input type="radio" name="addressType" value="Work" /> Work</label>
              <label><input type="radio" name="addressType" value="Other" /> Other</label>
            </div>
            <button className="save-address-btn" onClick={() => setIsSidebarOpen(false)}>
              SAVE ADDRESS & PROCEED
            </button>
          </div>
        </div>
      </div>

      {/* COUPON SIDEBAR */}
   <div className={`coupon-sidebar ${isCouponSidebarOpen ? 'open' : ''}`}>
  <div className="sidebar1-header">
    <button className="close-btn1" onClick={() => setIsCouponSidebarOpen(false)}>×</button>
    <h3>Apply Coupon</h3>
  </div>
  <div className="sidebar1-scroll">
    <div className="coupon-input-group">
      <input type="text" placeholder="Enter coupon code" />
      <button className="apply-btn">APPLY</button>
    </div>
    <h4>Available Coupons</h4>
    <div className="coupon-card">
      <div className="code-tag">FLATDEAL</div>
      <div className="coupon-info">
        <h5>Flat Rs.80 off</h5>
        <p>Use code FLATDEAL on orders above ₹499</p>
      </div>
      <button className="coupon-apply-btn">APPLY</button>
    </div>
          
        </div>
      </div>

      {/* LEFT SIDE */}
   <div className="cart-left">
  <div className="login-strip">👤 Abhishek Kumar | 6202000340</div>

  <div className="step-box address-section">
    <MdLocationOn className="location-icon2" />
    <div>
      <h3>Add a delivery address</h3>
      <p>You seem to be in a new location</p>

      {/* Sample Delivery Address Card */}
      <div className="address-card sample-address">
        <div className="address-card-title">
          <MdLocationOn className="location-icon" />
          <div>
            <p className="address-title">Home</p>
            <p className="address-text">401, Green Residency, Near City Mall, Patna - 800001</p>
          </div>
        </div>
        <button className="change-address-btn">Change</button>
      </div>

      {/* Add New Address Card */}
      <div className="address-card">
        <div className="address-card-title">
          <MdLocationOn className="location-icon" />
          <p>Add New Address</p>
        </div>
        <button className="add-new-btn" onClick={() => setIsSidebarOpen(true)}>ADD MORE</button>
      </div>
    </div>
  </div>

  {/* Payment Section */}
  <div className="payment-card">
    <h4>Choose Payment Method</h4>
    <div className="payment-options">
      <button>PhonePe</button>
      <button>GPay</button>
      <button>Paytm</button>
      <button>Credit / Debit Card</button>
      <button>UPI</button>
      <button>Cash on Delivery</button>
    </div>
  </div>
</div>

      {/* RIGHT SIDE */}
      <div className="cart-right">
        <div className="restaurant-info">
          <img
            src="http://localhost:5173/src/assets/nine-to-nine-logo.png"
            alt="restaurant"
          />
        </div>

        <div className="cart-scroll-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <p className="veg-icon">🟢</p>
                  <p>{item.name}</p>
                  <span className="customize">Customize &rsaquo;</span>
                </div>
                <div className="qty-price">
                  <div className="qty-box">
                    <button onClick={() => decrementQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQty(item.id)}>+</button>
                  </div>
                  <div className="price">₹{item.price * item.quantity}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="extras">
            <div className="no-contact">
              <input type="checkbox" />
              <div>
                <strong>No-contact Delivery</strong>
                <p>Partner will place the order outside your door</p>
              </div>
            </div>

            <div className="bill-box">
              <div
                className="bill-row coupon-row"
                onClick={() => setIsCouponSidebarOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                🏷️ Apply Coupon
              </div>
              <h4>Bill Details</h4>
              <div className="bill-row"><span>Item Total</span><span>₹{itemTotal}</span></div>
              <div className="bill-row"><span>Delivery Fee</span><span>₹{deliveryFee}</span></div>
              <div className="bill-row"><span>GST</span><span>₹{gst.toFixed(2)}</span></div>
            </div>
          </div>
        </div>

       <div className="to-pay">
  <h4>TO PAY</h4>
 <span style={{ marginTop: '20px', display: 'inline-block' }}>₹{grandTotal}</span>

  <button className="pay-now-btn" onClick={handlePayment}>Proceed to Pay</button>
</div>


        <div className="note-box">
          <h5>Review your order and address details to avoid cancellations</h5>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
