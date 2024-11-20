import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <div className="mainMenu-container">
      <span className="mainMenu-item">
        <Link to="/" className="mainMenu-item-link">Home</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/new-arrival" className="mainMenu-item-link">New Arrival</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/flash-sell" className="mainMenu-item-link">Flash Sell</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/top-pick" className="mainMenu-item-link">Top Pick</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/available-collection" className="mainMenu-item-link">Available Collection</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/dignified-collection" className="mainMenu-item-link">Dignified Collection</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/baseball-cap" className="mainMenu-item-link">Baseball Cap</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/pastel-pulse" className="mainMenu-item-link">Pastel Pulse</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/flat-visor" className="mainMenu-item-link">Flat Visor</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/high-crown" className="mainMenu-item-link">High Crown</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/trucker" className="mainMenu-item-link">Trucker</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/bucket-hut" className="mainMenu-item-link">Bucket Hut</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/head-gear-x-swing" className="mainMenu-item-link">Head Gear X Swing</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/head-gear-x-takeout" className="mainMenu-item-link">Head Gear X Takeout</Link>
      </span>
      <span className="mainMenu-item">
        <Link to="/order-tracker" className="mainMenu-item-link">Order Tracker</Link>
      </span>
    </div>
  );
};

export default MainMenu;
