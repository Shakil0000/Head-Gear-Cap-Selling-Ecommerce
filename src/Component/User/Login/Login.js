import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    const storedId = sessionStorage.getItem("userId");
  
    if (storedEmail && storedId) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("userEmail", data.email); // Store email
        sessionStorage.setItem("userId", data.id); // Store user ID
        alert("Login successful!");
        // Redirect to a different page after login, if needed
        navigate("/profile");
        window.location.reload();
      } else if (response.status === 404) {
        alert("User not found. Please create an account.");
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-links">
        <button
          className="login-link-button"
          onClick={() => navigate("/create-account")}
        >
          Create Account
        </button>
        <button
          className="login-link-button"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password
        </button>
      </div>
    </div>
  );
};

export default Login;
