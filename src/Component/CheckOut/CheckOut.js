import React from "react";
import "./CheckOut.css";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const { products } = location.state || {}; // Destructure products from location state

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
            <input type="radio" name="shipping" value="insideDhaka" />
            Inside Dhaka
          </label>
          <label>
            <input type="radio" name="shipping" value="outsideDhaka" />
            Outside Dhaka
          </label>
          <label>
            <input type="radio" name="shipping" value="sameDay" />
            Same Day Delivery
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
            SSLCommerz
          </label>
          <label>
            <input type="radio" name="payment" value="bkash" />
            bKash
          </label>
          <label>
            <input type="radio" name="payment" value="nagad" />
            Nagad
          </label>
        </div>
        <div className="CheckOut-section">
          <h2>Billing Address</h2>
          <label>
            <input type="radio" name="billingAddress" value="sameAsShipping" />
            Same as Shipping Address
          </label>
          <label>
            <input
              type="radio"
              name="billingAddress"
              value="differentBilling"
            />
            Use a Different Billing Address
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
      </div>
    </div>
  );
};

export default CheckOut;
