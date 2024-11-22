import React, { useState } from "react";
import "./OrderTracker.css";

const OrderTracker = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("phoneNumber"); // Default search by phoneNumber
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      setErrorMessage("Please enter a valid input.");
      setOrderDetails(null);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `http://localhost:5000/orders/search?${searchType}=${searchInput.trim()}`
      );

      if (response.ok) {
        const data = await response.json();
        setOrderDetails(data);
      } else if (response.status === 404) {
        setErrorMessage("No orders found for the provided information.");
        setOrderDetails(null);
      } else {
        setErrorMessage("An error occurred. Please try again.");
        setOrderDetails(null);
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      setErrorMessage("Unable to fetch order details. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="OrderTracker-container">
      <h1 className="OrderTracker-heading">Order Tracker</h1>
      <div className="OrderTracker-input-section">
        <select
          className="OrderTracker-select"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="phoneNumber">Phone Number</option>
          <option value="orderTrackNumber">Order Tracking Number</option>
        </select>
        <input
          type="text"
          className="OrderTracker-input"
          placeholder={`Enter your ${searchType}`}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="OrderTracker-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="OrderTracker-result-section">
        {loading ? (
          <p className="OrderTracker-loading">Loading...</p>
        ) : errorMessage ? (
          <p className="OrderTracker-error">{errorMessage}</p>
        ) : orderDetails ? (
          <div className="OrderTracker-details">
            <p><strong>Phone Number:</strong> {orderDetails.phoneNumber}</p>
            <p><strong>Order Tracking Number:</strong> {orderDetails.orderTrackNumber}</p>
            <p><strong>Total:</strong> {orderDetails.total}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OrderTracker;
