import React from 'react';
import './TrandingCap.css';
import Pic from '../../../../Delete Image/Screenshot_15.png';

const TrandingCap = () => {
    return (
        <div className="TrandingCap-container">
            <img
                src={Pic}
                alt="Tranding Image"
                className="TrandingCap-image"
            />
        </div>
    );
};

export default TrandingCap;
