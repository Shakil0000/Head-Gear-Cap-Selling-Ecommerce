// NewArrival.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./NewArrival.css";

function NewArrival() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/all/newArrival")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to handle navigation to ProductDetails page
  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <>
    <h1 className="NewArrival-h1">NEW ARRIVAL</h1>
      <div className="NewArrival-container">
        {products.map((product, index) => (
          <div
            key={index}
            className="NewArrival-box"
            onClick={() => handleProductClick(product.id)} // Navigate on click
          >
            <img
              src={`http://localhost:5000/uploads/${product.Pic}`}
              alt={product.Title}
              className="NewArrival-image"
            />
            <h3 className="NewArrival-title">{product.Title}</h3>
            <p className="NewArrival-price">
              <span className="NewArrival-originalPrice">
                Tk{product.Price}
              </span>
              <span className="NewArrival-afterDiscount">
                Now Tk {product.AfterDiscountPrice}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewArrival;
