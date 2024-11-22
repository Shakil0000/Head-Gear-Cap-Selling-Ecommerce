import React from 'react';
import './SectionThree.css';
import sec31 from '../../../Image/sec31.webp';
import sec32 from '../../../Image/sec32.webp';

const SectionThree = () => {
  return (
    <div className="sectionOne-container">
      <img src={sec31} alt="Image 1" className="sectionOne-image" />
      <img src={sec32} alt="Image 2" className="sectionOne-image" />
    </div>
  );
};

export default SectionThree;
