import React from 'react';
import './SectionEight.css';
import sec81 from '../../../Image/sec81.webp';
import sec82 from '../../../Image/sec82.webp';

const SectionEight = () => {
    return (
        <div className="SectionEight-container">
            <div className="SectionEight-grid">
                <img src={sec81} alt="Image 1" className="SectionEight-image" />
                <img src={sec82} alt="Image 2" className="SectionEight-image" />
            </div>
            <h2 className="SectionEight-heading">What are you waiting for? Choose Now!</h2>
        </div>
    );
};

export default SectionEight;
