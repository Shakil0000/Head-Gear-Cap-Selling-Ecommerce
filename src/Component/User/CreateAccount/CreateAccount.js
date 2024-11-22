import React, { useEffect, useState } from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    const storedId = sessionStorage.getItem("userId");
  
    if (storedEmail && storedId) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/createAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Account created successfully!");
        setFormData({ name: "", email: "", password: "" }); // Clear the form
      } else {
        alert("Error creating account. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  return (
    <div className="create-account-container">
      <h1 className="create-account-title">Create Account</h1>
      <form className="create-account-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
          className="create-account-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
          className="create-account-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
          className="create-account-input"
        />
        <button type="submit" className="create-account-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
