import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
  "./Image/collegegate.jpg", 
  "./Image/collegeIMG.jpg",
  "./Image/collegeimg2.jpg",
  "./Image/fossile.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="slider">
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default ImageSlider;
