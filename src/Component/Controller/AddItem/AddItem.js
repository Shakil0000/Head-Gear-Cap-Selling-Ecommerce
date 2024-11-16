import React, { useState } from 'react';
import axios from 'axios';
import './AddItem.css';  // Import the CSS for styling

const AddItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: 'New Arrival',  // Default category value is empty
    pic: null,
    stock: '',
    discount: '',
    afterDiscountPrice: '',
    description: '',
    extraPic1: null,
    extraPic2: null,
    extraPic3: null,
    extraPic4: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object to handle file uploads
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/addProduct', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        alert('Item added successfully!');
      } else {
        alert('Failed to add item.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('There was an error adding the item.');
    }
  };

  return (
    <div className="AddItem-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="AddItem-form">
        <div className="AddItem-formGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="AddItem-formGroup">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Category dropdown */}
        <div className="AddItem-formGroup">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="New Arrival">New Arrival</option>
            <option value="Flash Sell">Flash Sell</option>
            <option value="Top Pick">Top Pick</option>
            <option value="Available Collection">Available Collection</option>
            <option value="Dignified Collection">Dignified Collection</option>
            <option value="Baseball Cap">Baseball Cap</option>
            <option value="Pastel Pulse">Pastel Pulse</option>
            <option value="Flat Visor">Flat Visor</option>
            <option value="High Crown">High Crown</option>
            <option value="Trucker">Trucker</option>
            <option value="Bucket Hut">Bucket Hut</option>
            <option value="Head Gear X Swing">Head Gear X Swing</option>
            <option value="Head Gear X Takeout">Head Gear X Takeout</option>
            <option value="Order Tracker">Order Tracker</option>
          </select>
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="pic">Product Image</label>
          <input
            type="file"
            name="pic"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="afterDiscountPrice">After Discount Price</label>
          <input
            type="number"
            name="afterDiscountPrice"
            value={formData.afterDiscountPrice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="extraPic1">Extra Image 1</label>
          <input
            type="file"
            name="extraPic1"
            onChange={handleFileChange}
          />
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="extraPic2">Extra Image 2</label>
          <input
            type="file"
            name="extraPic2"
            onChange={handleFileChange}
          />
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="extraPic3">Extra Image 3</label>
          <input
            type="file"
            name="extraPic3"
            onChange={handleFileChange}
          />
        </div>

        <div className="AddItem-formGroup">
          <label htmlFor="extraPic4">Extra Image 4</label>
          <input
            type="file"
            name="extraPic4"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="AddItem-submitButton">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddItem;
