import React from "react";
import "./ShippingPolicy.css"; // External CSS for styling

const ShippingPolicy = () => {
  return (
    <div className="shippingPolicy-container">
      <h1 className="shippingPolicy-title">Shipping Policy</h1>
      <p className="shippingPolicy-text">
        After receiving your order confirmation email, all orders are processed
        within 1 to 3 business days (excluding weekends and holidays). You will
        receive another notification when your order has shipped.
      </p>

      <h2 className="shippingPolicy-subtitle">Inside Dhaka</h2>
      <p className="shippingPolicy-text">
        <strong>Delivery Charge:</strong> 80 TK <br />
        <strong>Delivery Time:</strong> Maximum 2 business days
      </p>

      <h2 className="shippingPolicy-subtitle">Outside Dhaka</h2>
      <p className="shippingPolicy-text">
        <strong>Delivery Charge:</strong> 100 TK <br />
        <strong>Delivery Time:</strong> Maximum 5 business days
      </p>
    </div>
  );
};

export default ShippingPolicy;
