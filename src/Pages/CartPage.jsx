import React, { useState } from 'react';
import '../styles/CartPage.css';

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

  return (
    <div className="cart-layout">

      {/* LEFT ADDRESS SIDEBAR */}
      <div className={`sidebar1 ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar1-header">
          <button className="close-btn1" onClick={() => setIsSidebarOpen(false)}>×</button>
          <h3>Save delivery address</h3>
        </div>
        <div className="sidebar1-scroll">
          <div className="map-container">
            🗺️ Google Map Placeholder
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
          <div className="step-icon">📍</div>
          <div>
            <h3>Add a delivery address</h3>
            <p>You seem to be in a new location</p>
            <div className="address-card">
              <p>📍 Add New Address</p>
              <button onClick={() => setIsSidebarOpen(true)}>ADD NEW</button>
            </div>
          </div>
        </div>
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
          <span>₹{grandTotal}</span>
        </div>

        <div className="note-box">
          <h5>Review your order and address details to avoid cancellations</h5>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
