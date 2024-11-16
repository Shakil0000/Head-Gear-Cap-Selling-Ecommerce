import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import './ProductDetails.css'; // External CSS file for styling

function ProductDetails({ toggleCart }) {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // For navigation to the Checkout page

  useEffect(() => {
    fetch(`http://localhost:5000/productDetails/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  const handleBuyNow = () => {
    // Assume you're adding the product to an array
    const productsArray = [{
      id: product.id,
      image: product.Pic,
      title: product.Title,
      price: product.AfterDiscountPrice,
      quantity: 1, // Default quantity
    }];

    // Navigate to the Checkout page with the array of products
    navigate('/checkout', {
      state: {
        products: productsArray,
      },
    });
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetails-container">
      {/* First Row - Two Images */}
      <div className="ProductDetails-imageRow">
        <img src={`http://localhost:5000/uploads/${product.Pic}`} alt={product.Title} className="ProductDetails-mainImage" />
        <img src={`http://localhost:5000/uploads/${product.ExtraPic1}`} alt={`${product.Title} extra`} className="ProductDetails-mainImage" />
      </div>

      {/* Second Row - Left and Right Sections with Margin and Justification */}
      <div className="ProductDetails-mainSection">
        {/* Left Section - Product Details */}
        <div className="ProductDetails-left">
          <h1>{product.Title}</h1>
          <p>Stock: {product.Stock}</p>
          <p className="ProductDetails-price">
            Price: <span className="ProductDetails-lineThrough">${product.Price}</span> ${product.AfterDiscountPrice}
          </p>
          <div className="ProductDetails-buttons">
            <button onClick={toggleCart} className="ProductDetails-addToCart">Add to Cart</button>
            <button onClick={handleBuyNow} className="ProductDetails-buyNow">Buy It Now</button>
          </div>
          <div className="ProductDetails-info">
            <p>🚚 Inside Dhaka: Delivery within 1-2 working days</p>
            <p>🚚 Outside Dhaka: Delivery within 2-5 working days</p>
            <p>⭐ High-quality Products</p>
            <p>🔄 Easy returns</p>
            <p>💵 Cash on Delivery Available</p>
          </div>
        </div>

        {/* Right Section - Description and Social Share with Icons */}
        <div className="ProductDetails-right">
          <p>{product.Description}</p>
          <div className="ProductDetails-shareButtons">
            <button className="ProductDetails-share facebook"><FaFacebook /> Share on Facebook</button>
            <button className="ProductDetails-share twitter"><FaTwitter /> Share on Twitter</button>
            <button className="ProductDetails-share pinterest"><FaPinterest /> Share on Pinterest</button>
          </div>
        </div>
      </div>

      {/* Third and Fourth Rows - Additional Images */}
      <div className="ProductDetails-extraImagesRow">
        <img src={`http://localhost:5000/uploads/${product.ExtraPic2}`} alt={`${product.Title} extra 2`} className="ProductDetails-extraImage" />
        <img src={`http://localhost:5000/uploads/${product.ExtraPic3}`} alt={`${product.Title} extra 3`} className="ProductDetails-extraImage" />
      </div>
      <div className="ProductDetails-extraImagesRow">
        <img src={`http://localhost:5000/uploads/${product.ExtraPic4}`} alt={`${product.Title} extra 4`} className="ProductDetails-extraImage" />
        <img src={`http://localhost:5000/uploads/${product.ExtraPic1}`} alt={`${product.Title} extra 4`} className="ProductDetails-extraImage" />
      </div>
    </div>
  );
}

export default ProductDetails;
