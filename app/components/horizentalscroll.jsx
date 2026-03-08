import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entering, setEntering] = useState(true); // New state to manage the entering slide

  const images = [
    "/github2.png",
    "/figma.png",
    "/github2.png",
    "/figma.png",
    "/github2.png",
    "/figma.png",
  ];

  useEffect(() => {
    const transitionNext = () => {
      setEntering(false);
      setTimeout(() => {
        setCurrentSlide((current) => (current + 1) % images.length);
        setEntering(true);
      }, 500); // Match this duration with your CSS transition
    };

    const interval = setInterval(transitionNext, 3000); // Change slide every 3000ms

    return () => clearInterval(interval);
  }, [images.length]);

  const slideStyles = (index) => {
    let baseStyles = "absolute block w-full transition-transform duration-500 ease-in-out";
    if (index === currentSlide) {
      return `${baseStyles} transform ${entering ? "translate-x-0" : "-translate-x-full"}`;
    }
    if ((index + 1) % images.length === currentSlide) {
      return `${baseStyles} transform ${entering ? "translate-x-full" : "translate-x-0"}`;
    }
    return `${baseStyles} hidden`;
  };

  return (
    <div className="relative w-full overflow-hidden" data-carousel="slide">
      <div className="relative h-56 md:h-96">
        {images.map((image, index) => (
          <img key={index} src={image} className={slideStyles(index)} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      {/* Indicators and Controls omitted for brevity */}
    </div>
  );
};

export default Carousel;
