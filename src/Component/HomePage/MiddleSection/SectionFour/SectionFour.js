import React from 'react';
import './SectionFour.css';
import sec41 from '../../../Image/sec41.webp';
import sec42 from '../../../Image/sec42.webp';

const SectionFour = () => {
  return (
    <div className="sectionFour-wrapper">
      <div className="sectionFour-container">
        <div className="sectionFour-image1">
          <img src={sec41} alt="First" />
        </div>
        <div className="sectionFour-image2">
          <img src={sec42} alt="Second" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
