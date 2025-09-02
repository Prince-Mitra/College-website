import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

const images = [
  "/Image/collegegate.jpg", // public folder image
  "/Image/jharkhandcm.jpg",
  "/Image/back.jpg",
  "/Image/Droupadi.jpg",
  "/Image/fossile.jpg",
  "/Image/principal.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our College Gallery</h2>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <Motion.img
            key={index}
            src={img}
            alt={`gallery-${index}`}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            <Motion.img
              src={selectedImage}
              alt="enlarged"
              className="lightbox-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
