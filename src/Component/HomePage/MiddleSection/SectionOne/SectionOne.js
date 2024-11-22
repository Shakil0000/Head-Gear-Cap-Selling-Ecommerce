import React from 'react';
import './SectionOne.css';
import sec11 from '../../../Image/Sec11.webp';
import sec12 from '../../../Image/Sec12.webp';

const SectionOne = () => {
  return (
    <div className="sectionOne-container">
      <img src={sec11} alt="Image 1" className="sectionOne-image" />
      <img src={sec12} alt="Image 2" className="sectionOne-image" />
    </div>
  );
};

export default SectionOne;
