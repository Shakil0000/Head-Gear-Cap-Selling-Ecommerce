import React from 'react';
import './SectionTwo.css';
import sec21 from '../../../Image/sec21.webp';
import sec22 from '../../../Image/sec22.webp';
import sec23 from '../../../Image/sec23.webp';
import sec24 from '../../../Image/sec24.webp';

const SectionTwo = () => {
  return (
    <div className="sectionTwo-container">
      <img src={sec21} alt="Image 1" className="sectionTwo-image" />
      <img src={sec22} alt="Image 2" className="sectionTwo-image" />
      <img src={sec23} alt="Image 3" className="sectionTwo-image" />
      <img src={sec24} alt="Image 4" className="sectionTwo-image" />
    </div>
  );
};

export default SectionTwo;

