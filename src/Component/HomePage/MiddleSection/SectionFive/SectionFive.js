import React from 'react';
import './SectionFive.css';
import sec51 from '../../../Image/sec51.webp';
import sec52 from '../../../Image/sec52.webp';
import sec53 from '../../../Image/sec53.webp';
import sec54 from '../../../Image/sec54.webp';

const SectionFive = () => {
  return (
    <div className="sectionFive-wrapper">
      <div className="sectionFive-container">
        <div className="sectionFive-image">
          <img src={sec51} alt="First" />
        </div>
        <div className="sectionFive-image">
          <img src={sec52} alt="Second" />
        </div>
        <div className="sectionFive-image">
          <img src={sec53} alt="Third" />
        </div>
        <div className="sectionFive-image">
          <img src={sec54} alt="Fourth" />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
