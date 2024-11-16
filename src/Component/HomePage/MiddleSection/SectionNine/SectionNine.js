import React from 'react';
import './SectionNine.css';
import Pic from '../../../Delete Image/HEAD_GEAR_Narayanganj_Cover_Photos.webp';
import MapSection from './MapSection/MapSection';

const SectionNine = () => {
    return (
        <div className="SectionNine-container">
            <img src={Pic} alt="Responsive Image" className="SectionNine-image"/>
            <MapSection></MapSection>
        </div>
    );
};

export default SectionNine;
