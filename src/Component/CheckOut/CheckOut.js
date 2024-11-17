import React, { useState } from "react";
import "./CheckOut.css";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const { products } = location.state || {}; // Destructure products from location state
  const [couponCode, setCouponCode] = useState("");
  const [subtotal, setSubtotal] = useState(
    products?.reduce((total, product) => total + product.price * product.quantity, 0) || 0
  );
  const [shippingCost, setShippingCost] = useState(100); // Default shipping cost
  const total = subtotal + shippingCost;

  const handleApplyCoupon = () => {
    // Logic for applying coupon (adjust subtotal based on the coupon code)
    if (couponCode === "DISCOUNT10") {
      setSubtotal((prevSubtotal) => prevSubtotal * 0.9); // Example: 10% discount
    }
  };

  const handleShippingChange = (event) => {
    const value = event.target.value;
    if (value === "insideDhaka") {
      setShippingCost(80);
    } else if (value === "outsideDhaka") {
      setShippingCost(100);
    } else if (value === "sameDay") {
      setShippingCost(120);
    }
  };

  return (
    <div className="CheckOut-container">
      {/* Left Side */}
      <div className="CheckOut-left">
        <div className="CheckOut-section">
          <h2>Contact</h2>
          <input
            type="text"
            placeholder="Phone Number"
            className="CheckOut-input"
          />
        </div>
        <div className="CheckOut-section">
          <h2>Delivery</h2>
          <input type="text" placeholder="Country" className="CheckOut-input" />
          <input
            type="text"
            placeholder="Optional Name"
            className="CheckOut-input"
          />
          <input type="text" placeholder="Name" className="CheckOut-input" />
          <input type="text" placeholder="Address" className="CheckOut-input" />
          <input
            type="text"
            placeholder="Special Note (Optional)"
            className="CheckOut-input"
          />
          <input
            type="text"
            placeholder="City or District"
            className="CheckOut-input"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="CheckOut-input"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="CheckOut-input"
          />
        </div>
        <div className="CheckOut-section">
          <h2>Shipping Method</h2>
          <label>
            <input
              type="radio"
              name="shipping"
              value="insideDhaka"
              onChange={handleShippingChange}
            />
            Inside Dhaka (80 Taka)
          </label>
          <label>
            <input
              type="radio"
              name="shipping"
              value="outsideDhaka"
              onChange={handleShippingChange}
            />
            Outside Dhaka (100 Taka)
          </label>
          <label>
            <input
              type="radio"
              name="shipping"
              value="sameDay"
              onChange={handleShippingChange}
            />
            Same Day Delivery (120 Taka)
          </label>
        </div>
        <div className="CheckOut-section">
          <h2>Payment</h2>
          <label>
            <input type="radio" name="payment" value="cashOnDelivery" />
            Cash on Delivery 
          </label>
          <label>
            <input type="radio" name="payment" value="sslCommerz" />
            SSLCommerz (Unavailable Right Now)
          </label>
          <label>
            <input type="radio" name="payment" value="bkash" />
            bKash (Payment to 01617222451)
          </label>
          <label>
            <input type="radio" name="payment" value="nagad" />
            Nagad (Marchent Pay to 01819322200)
          </label>
        </div>
      </div>

      {/* Right Side */}
      <div className="CheckOut-right">
        {products &&
          products.map((product, index) => (
            <div className="Checkout-product" key={index}>
              {/* Column 1: Image */}
              <img
                src={`http://localhost:5000/uploads/${product.image}`}
                alt={product.title}
                className="Checkout-productImage"
              />

              {/* Column 2: Title */}
              <div className="Checkout-title">{product.title}</div>

              {/* Column 3: Price and Quantity */}
              <div className="Checkout-priceQuantity">
                <span>Price: ${product.price}</span>
                <span>Quantity: {product.quantity}</span>
              </div>
            </div>
          ))}
        <div className="Checkout-total">
          {/* Row 1: Coupon */}
          <div className="Checkout-row">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="Checkout-couponInput"
            />
            <button onClick={handleApplyCoupon} className="Checkout-applyButton">
              Apply
            </button>
          </div>

          {/* Row 2: Subtotal */}
          <div className="Checkout-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {/* Row 3: Shipping */}
          <div className="Checkout-row">
            <span>Shipping</span>
            <span>${shippingCost}</span>
          </div>

          {/* Row 4: Total */}
          <div className="Checkout-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Confirm Order Button */}
          <button className="Checkout-confirmButton">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
