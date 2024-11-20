import React, { useState } from "react";
import "./CheckOut.css";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const { products } = location.state || {};
  const [couponCode, setCouponCode] = useState("");
  const [subtotal, setSubtotal] = useState(
    products?.reduce((total, product) => total + product.price * product.quantity, 0) || 0
  );
  const [shippingCost, setShippingCost] = useState(100); // Default shipping cost
  const total = subtotal + shippingCost;

  const handleApplyCoupon = () => {
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

  const handleConfirmOrder = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;

    const orderDetails = {
      phoneNumber: form.phone.value,
      orderTrackNumber: `ORD-${Date.now()}`,
      orderInformation: {
        contact: form.phone.value,
        delivery: {
          country: form.country.value,
          optionalName: form.optionalName.value,
          name: form.name.value,
          address: form.address.value,
          specialNote: form.specialNote.value,
          cityOrDistrict: form.cityOrDistrict.value,
          postalCode: form.postalCode.value,
          phone: form.secondaryPhone.value,
        },
        shippingMethod: form.shipping.value,
        paymentMethod: form.payment.value,
        products: products,
        subtotal: subtotal.toFixed(2),
        shippingCost: shippingCost,
        total: total.toFixed(2),
      },
    };

    try {
      const response = await fetch("http://localhost:5000/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Order created successfully! Order Track Number: ${data.orderTrackNumber}`);
        window.location.reload(); 
      } else {
        alert("Failed to create order.");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred while creating the order.");
    }
  };

  return (
    <div className="CheckOut-container">
      {/* Left Side */}
      <form className="CheckOut-left" onSubmit={handleConfirmOrder}>
        <div className="CheckOut-section">
          <h2>Contact</h2>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="CheckOut-input"
            required
          />
        </div>
        <div className="CheckOut-section">
          <h2>Delivery</h2>
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="CheckOut-input"
            required
          />
          <input
            type="text"
            name="optionalName"
            placeholder="Optional Name"
            className="CheckOut-input"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="CheckOut-input"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="CheckOut-input"
            required
          />
          <input
            type="text"
            name="specialNote"
            placeholder="Special Note (Optional)"
            className="CheckOut-input"
          />
          <input
            type="text"
            name="cityOrDistrict"
            placeholder="City or District"
            className="CheckOut-input"
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            className="CheckOut-input"
            required
          />
          <input
            type="text"
            name="secondaryPhone"
            placeholder="Phone Number"
            className="CheckOut-input"
            required
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
              required
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
            <input type="radio" name="payment" value="cashOnDelivery" required />
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
            Nagad (Merchant Pay to 01819322200)
          </label>
        </div>
        <button type="submit" className="Checkout-confirmButton">
          Confirm Order
        </button>
      </form>

      {/* Right Side */}
      <div className="CheckOut-right">
        {products &&
          products.map((product, index) => (
            <div className="Checkout-product" key={index}>
              <img
                src={`http://localhost:5000/uploads/${product.image}`}
                alt={product.title}
                className="Checkout-productImage"
              />
              <div className="Checkout-title">{product.title}</div>
              <div className="Checkout-priceQuantity">
                <span>Price: Tk {product.price}</span>
                <span>Quantity: {product.quantity}</span>
              </div>
            </div>
          ))}
        <div className="Checkout-total">
          <div className="Checkout-row">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="Checkout-couponInput"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="Checkout-applyButton"
            >
              Apply
            </button>
          </div>
          <div className="Checkout-row">
            <span>Subtotal</span>
            <span>Tk {subtotal.toFixed(2)}</span>
          </div>
          <div className="Checkout-row">
            <span>Shipping</span>
            <span>Tk {shippingCost}</span>
          </div>
          <div className="Checkout-row">
            <span>Total</span>
            <span>Tk {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
