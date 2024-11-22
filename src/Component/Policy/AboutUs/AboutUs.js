import React from "react";
import "./AboutUs.css"; // External CSS file for styling

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <h1 className="aboutUs-heading">About Us</h1>
      <p className="aboutUs-text">
        <strong>Head Gear Limited</strong> is Bangladesh's premier destination for high-quality lifestyle products, 
        specializing in <strong>Top-Notch Caps</strong> across various segments. From premium <strong>baseball caps</strong> 
        to trendy <strong>trucker caps</strong>, we cater to diverse tastes and preferences.
      </p>
      <p className="aboutUs-text">
        As the country's <strong>first cap brand</strong>, we lead with innovation and pride ourselves on delivering 
        exceptional craftsmanship and style. Our mission is to redefine the online shopping experience, ensuring convenience 
        and satisfaction for our customers every step of the way.
      </p>

      <div className="aboutUs-section">
        <h2 className="aboutUs-subheading">Company Information</h2>
        <ul className="aboutUs-list">
          <li><strong>Trade License:</strong> 776 / 2022-2023</li>
          <li><strong>Email:</strong> contact@headgearbd.com</li>
          <li><strong>Registered Office:</strong> Sastapur, Fatullah, 1421, Narayanganj</li>
          <li><strong>Business No:</strong> C-184389/2022</li>
        </ul>
      </div>

      <div className="aboutUs-section">
        <h2 className="aboutUs-subheading">Our Managing Board</h2>
        <div className="aboutUs-board">
          <div className="aboutUs-member">
            <h3 className="aboutUs-role">Managing Director</h3>
            <p><strong>Imran Hossain</strong></p>
            <p>Email: <a href="mailto:hossain@headgearbd.com">hossain@headgearbd.com</a></p>
          </div>
          <div className="aboutUs-member">
            <h3 className="aboutUs-role">Chairman</h3>
            <p><strong>Iftekhar Ahmed Efad</strong></p>
            <p>Email: <a href="mailto:efad@headgearbd.com">efad@headgearbd.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
