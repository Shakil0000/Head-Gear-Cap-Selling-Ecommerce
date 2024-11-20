import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/search?query=${query}`);
        if (!response.ok) {
          const message = await response.json();
          throw new Error(message.error || "Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  // Function to handle navigation to ProductDetails page
  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
  };


  return (
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
            <span className="NewArrival-originalPrice">${product.Price}</span>
            <span className="NewArrival-afterDiscount">${product.AfterDiscountPrice}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Search;
