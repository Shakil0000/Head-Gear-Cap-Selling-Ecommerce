import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Add logic to handle password reset via Node.js backend
    console.log("Reset Password for Email:", email);
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Forgot Password</h1>
      <form className="forgot-password-form" onSubmit={handlePasswordReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="forgot-password-input"
        />
        <button type="submit" className="forgot-password-button">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
