import { useState, useEffect } from "react";
import sliderimg1 from "../assets/EhSzJnlM6QK9l8bdNlE4.png";
import sliderimg2 from "../assets/kSFxjZ1awdRbMUH4G.png";
import sliderimg6 from "../assets/NyJYEC3BsWPf.png";
import sliderimg8 from "../assets/uZEVbiUXXFP0CZ3.png";
import "../css/slider.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import NavbarLinks from "./Navbar-links";

function Slider() {
  const images = [
    sliderimg2,
    sliderimg6,
    sliderimg1,
    sliderimg8
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full slider-department">
      <div className="header-navbar-content absolute top-0 z-50 w-full">
        <Header/>
        <NavbarLinks/>
      </div>
      <div className="absolute w-full h-full slider-wrapper">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="absolute w-full h-full slider-image"
        />
        <div className="overlay"></div>
      </div>
      <div className="container absolute z-10">
        <div className="slider-buttons">
          <div className="col-icon">
            <FontAwesomeIcon className="icon" onClick={prevSlide} icon={faChevronLeft} />
          </div>
          <div className="col-icon">
            <FontAwesomeIcon className="icon" onClick={nextSlide} icon={faChevronRight} />
          </div>
      </div>
      </div>
    </div>
  );
}

export default Slider;
