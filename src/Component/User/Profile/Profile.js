import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [orders, setOrders] = useState([]); // Holds the array of orders
  const [loading, setLoading] = useState(true); // For loading state
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  // Fetch order data on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) {
        // Redirect to login if no userId exists
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/orders/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setOrders(data); // Set the array of orders
        } else {
          setOrders([]); // No orders found
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId, navigate]);

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userEmail");
    navigate("/login"); // Redirect to login page
    window.location.reload();
  };

  return (
    <div className="Profile-container">
      <div className="Profile-card">
        <h1 className="Profile-title">Your Profile</h1>
        <p className="Profile-email">
          <strong>Email:</strong> {sessionStorage.getItem("userEmail")}
        </p>
        <button className="Profile-logout-btn" onClick={handleLogout}>
          Logout
        </button>

        <div className="Profile-orders-section">
          {loading ? (
            <p>Loading your orders...</p>
          ) : orders.length > 0 ? (
            <div className="Profile-order-list">
              {orders.map((order, index) => (
                <div key={index} className="Profile-order-item">
                  <p>
                    <strong>Phone Number:</strong> {order.phoneNumber}
                  </p>
                  <p>
                    <strong>Order Tracking Number:</strong> {order.orderTrackNumber}
                  </p>
                  <p>
                    <strong>Total: Tk </strong> {order.total}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No orders found for this user.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
