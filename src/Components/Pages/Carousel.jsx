import React, { useState, useEffect } from 'react';
import carousel1 from "../assets/photos/carousel1.png";
import carousel2 from "../assets/photos/carousel2.png";
// import carousel3 from "../assets/photos/carousel3.jpg";
import carousel4 from "../assets/photos/carousel4.png";

const images = [
  carousel1,
  carousel2,
  // carousel3,
  carousel4
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative container max-w-7xl mx-auto mt-5">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-80 object-cover transition-transform duration-500"
          style={{ objectFit: 'cover' }}
        />
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md focus:outline-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
