import React, { useState } from "react";
import "./carousel.scss";
import { ICarouselProps } from "@/types";

const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentImageIndex((currentImageIndex + 1) % images.length);
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [currentImageIndex, images.length]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel__view">
        <button
          className="carousel__arrow carousel__arrow--left"
          onClick={() =>
            setCurrentImageIndex(
              (currentImageIndex - 1 + images.length) % images.length
            )
          }
        >
          <img src="left_arrow.png" alt="previous" />
        </button>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel__item ${
              currentImageIndex === index ? "carousel__item--active" : ""
            }`}
          >
            <img
              src={image.base64}
              alt={image.title}
              className="carousel__image"
            />
            <div className="carousel__title">
              {image.id}. {image.title}
            </div>
          </div>
        ))}
        <button
          className="carousel__arrow carousel__arrow--right"
          onClick={() =>
            setCurrentImageIndex((currentImageIndex + 1) % images.length)
          }
        >
          <img src="right_arrow.png" alt="next" />
        </button>
      </div>
      <div className="carousel__dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel__dot ${
              currentImageIndex === index ? "carousel__dot--active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
