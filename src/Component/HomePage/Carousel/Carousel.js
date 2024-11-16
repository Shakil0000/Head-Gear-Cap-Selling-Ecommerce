import React, { useEffect, useState } from 'react';
import './Carousel.css';
import pic1 from './CaroselImage/Carosel 1.webp';
import pic2 from './CaroselImage/Carosel 2.webp';

const Carosel = () => {
  const images = [
    pic1,
    pic2
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carosel-container">
      <img
        src={images[currentImageIndex]}
        alt={`Carosel ${currentImageIndex + 1}`}
        className="carosel-image"
      />
    </div>
  );
};

export default Carosel;
