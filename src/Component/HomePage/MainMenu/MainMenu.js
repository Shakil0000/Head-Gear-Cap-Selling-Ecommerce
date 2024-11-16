import React from 'react';
import './MainMenu.css';

const MainMenu = () => {
  const menuItems = [
    "Home", "New Arrival", "Flash Sell", "Top Pick", "Available Collection",
    "Dignified Collection", "Baseball Cap", "Pastel Pulse", "Flat Visor",
    "High Crown", "Trucker", "Bucket Hut", "Head Gear X Swing", 
    "Head Gear X Takeout", "Order Tracker"
  ];

  return (
    <div className="mainMenu-container">
      {menuItems.map((item, index) => (
        <span key={index} className="mainMenu-item">
          {item}
        </span>
      ))}
    </div>
  );
};

export default MainMenu;
