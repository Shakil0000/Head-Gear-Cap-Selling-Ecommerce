import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Cart.css"; // External CSS for styling

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate(); // Initialize navigate function

  // Retrieve cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("headGearShakilCart")) || [];
    setCartItems(storedCart);
    calculateTotalPrice(storedCart);
  }, []);

  // Function to handle quantity change
  const handleQuantityChange = (index, type) => {
    const updatedCart = [...cartItems];
    if (type === "increase") {
      updatedCart[index].quantity += 1;
    } else if (type === "decrease") {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        // Remove item if quantity is 1 and user clicks the - button
        updatedCart.splice(index, 1);
      }
    }
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
    // Store the updated cart back to localStorage
    localStorage.setItem("headGearShakilCart", JSON.stringify(updatedCart));
  };

  // Function to calculate total price
  const calculateTotalPrice = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalPrice(total);
  };

  // Function to handle checkout button click
  const handleCheckout = () => {
    // Navigate to the checkout page with the cart items
    navigate("/checkout", {
      state: {
        products: cartItems,
        totalPrice: totalPrice,
      },
    });
  };

  return (
    <div className="Cart-container">
      {/* Display the cart items */}
      <div className="Cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="Cart-item">
              <div className="Cart-itemRow">
                {/* Product Image */}
                <img
                  src={`http://localhost:5000/uploads/${item.image}`}
                  alt={item.title}
                  className="Cart-itemImage"
                />
                <div className="Cart-itemDetails">
                  {/* Product Title */}
                  <h3>{item.title}</h3>
                </div>
              </div>

              {/* Quantity Control */}
              <div className="Cart-itemQuantity">
                <button
                  onClick={() => handleQuantityChange(index, "decrease")}
                  className="Cart-quantityButton"
                >
                  -
                </button>
                <span className="Cart-quantityNumber">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(index, "increase")}
                  className="Cart-quantityButton"
                >
                  +
                </button>
              </div>

              {/* Price */}
              <div className="Cart-itemPrice">{item.price} Taka</div>
            </div>
          ))
        )}
      </div>
      <div className="Cart-subtotal">
        {/* Subtotal and total amount */}
        <div className="Cart-subtotal-header">
          <span>Subtotal</span>
          <span>${totalPrice}</span>
        </div>

        <p>Taxes and shipping calculated at checkout</p>

        <span>
          <input type="checkbox" /> I agree with the terms and conditions,
          privacy policy, return refund policy.
        </span>
        <br />
        <button onClick={handleCheckout}>Check Out</button>
      </div>
    </div>
  );
}

export default Cart;
