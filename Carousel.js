import React, { useState, useEffect } from "react";

const ACCESS_KEY = 'Your access key';
const count = 5; // Get 5 random photos

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=${count}`)
      .then(response => response.json())
      .then(data => {
        // Store the array of images in state
        setImages(data);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  }, []);

  const handleNextImage = () => {
    // Increment the current image index
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePreviousImage = () => {
    // Decrement the current image index
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentImage ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${image.urls.regular})`,
          }}
        >
          <div className="carousel-caption">
            <h3>{image.alt_description}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
      <div className="carousel-controls">
        <button onClick={handlePreviousImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
