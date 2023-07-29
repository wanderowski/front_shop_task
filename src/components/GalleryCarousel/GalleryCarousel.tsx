import React, { useState } from "react";
import "./galleryCarousel.scss";
import { IGalleryCarouselProps } from "@/types";

const GalleryCarousel: React.FC<IGalleryCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goNext = () => {
    if (activeIndex < images.length - 5) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="gallery-carousel">
      <button
        className="gallery-carousel__arrow gallery-carousel__arrow--left"
        onClick={goPrev}
        disabled={activeIndex === 0}
      >
        <img src="/gallery-images/arrow-left.png"></img>
      </button>

      <div className="gallery-carousel__window">
        <ul
          className="gallery-carousel__track"
          style={{
            transform: `translateX(-${(activeIndex * 100) / 5}%)`,
          }}
        >
          {images.map((slide, index) => (
            <li className="gallery-carousel__slide" key={index}>
              <div className="gallery-carousel__overlay">
                <div className="gallery-carousel__overlay-content">
                  <h3>{slide.title}</h3>
                  <p>${slide.price}</p>
                  <button className="gallery-carousel__view-button">
                    View
                  </button>
                </div>
              </div>
              <img
                className="gallery-carousel__image"
                src={slide.base64}
                alt={slide.title}
              />
            </li>
          ))}
        </ul>
      </div>

      <button
        className="gallery-carousel__arrow gallery-carousel__arrow--right"
        onClick={goNext}
        disabled={activeIndex === images.length - 5}
      >
        <img src="/gallery-images/arrow-right.png"></img>
      </button>
    </div>
  );
};

export default GalleryCarousel;
