import { useState, useEffect } from "react";
import sliderimg1 from "../assets/EhSzJnlM6QK9l8bdNlE4.png";
import sliderimg2 from "../assets/kSFxjZ1awdRbMUH4G.png";
import sliderimg6 from "../assets/NyJYEC3BsWPf.png";
import sliderimg8 from "../assets/uZEVbiUXXFP0CZ3.png";
import "../css/slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import NavbarLinks from "./Navbar-links";

function Slider() {
  const images = [sliderimg2, sliderimg6, sliderimg1, sliderimg8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div
      className="relative w-full slider-department"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header + Navbar */}
      <div className="absolute top-0 z-50 w-full header-navbar-content">
        <Header />
        <NavbarLinks />
      </div>

      {/* Slider Wrapper */}
      <div className="absolute w-full h-full slider-wrapper">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="absolute w-full h-full slider-image fade"
        />
        <div className="overlay"></div>
      </div>

      {/* Controls */}
      <div className="container absolute z-10">
        <div className="slider-buttons">
          <div className="col-icon">
            <FontAwesomeIcon
              className="icon"
              onClick={prevSlide}
              icon={faChevronLeft}
            />
          </div>
          <div className="col-icon">
            <FontAwesomeIcon
              className="icon"
              onClick={nextSlide}
              icon={faChevronRight}
            />
          </div>
        </div>

        {/* Indicators (Dots) */}
        <div className="slider-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
