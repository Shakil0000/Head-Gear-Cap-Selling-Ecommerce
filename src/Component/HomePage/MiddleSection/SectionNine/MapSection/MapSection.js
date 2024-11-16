import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing map icon
import './MapSection.css';

const MapSection = () => {
    return (
        <div className="MapSection-container">
            <div className="MapSection-info">
                <h3>OUR STORE</h3>
                <p>Ground Floor, Momtaz Plaza, Opposite of District Jail Narayanganj 1421</p>
                <br/>
                <h3>CORPORATE OFFICE</h3>
                <p>Kuwaiti Moshjid road, Dhali Bari, Bashundhara, Dhaka-1229</p>
                <br/>
                <h3>CONTACT</h3>
                <p>☏ 09613-825800</p>
                <p>✉ support@headgearbd.com</p>
            </div>
            <button className="MapSection-button">
                <FaMapMarkerAlt className="MapSection-icon" />
                HEADGEAR
            </button>
        </div>
    );
};

export default MapSection;
