import React, { useState, useEffect } from 'react';
import './Carousel.css';
import Slide1 from './slide1.jpg'
import Slide2 from './slide2.jpg'
import Slide3 from './slide3.jpg'

const slides = [
  {
    image: Slide1,
    title: 'Slide 1 Title',
    description: 'This is the description for Slide 1.'
  },
  {
    image: Slide2,
    title: 'Slide 2 Title',
    description: 'This is the description for Slide 2.'
  },
  {
    image: Slide3,
    title: 'Slide 3 Title',
    description: 'This is the description for Slide 3.'
  }
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    // Automatically change the slide every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000); // Change the slide every 3 seconds
  
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    return (
      <div className="carousel">
        <div 
          className="carousel-slide" 
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="carousel-content">
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
          </div>
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>❮</button>
        <button className="carousel-button next" onClick={nextSlide}>❯</button>
      </div>
    );
  };

export default Carousel;
