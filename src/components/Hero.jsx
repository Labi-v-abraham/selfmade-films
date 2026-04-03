import React, { useState, useEffect } from 'react';
import './Hero.css';
import image1 from '../assets/carousel/Shadows of the past v1.png';
import image2 from '../assets/carousel/Second FINAL.jpg';
import image4 from '../assets/carousel/PHOTO-2026-03-06-12-51-43.jpg';
import image5 from '../assets/carousel/PHOTO-2026-03-23-20-46-12.jpg';
import image6 from '../assets/carousel/IMG_8294.jpg';
import image7 from '../assets/carousel/IMG_8300.png';





import textpattern from '../assets/pattern/liquid glass.png';


// This handles the matrix/scramble effect when a slide becomes active
// This handles the matrix/scramble effect when a slide becomes active
const ShuffleText = ({ text, isActive }) => {
  const [displayText, setDisplayText] = useState('');
  
  // Removed numbers and symbols for a smoother, cleaner cinematic look
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (!isActive) {
      setDisplayText('');
      return;
    }

    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    // INCREASED to 50ms (from 30ms) to make the frame-rate of the text swapping smoother
    interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]; // The correct letter
            }
            // The random scrambling letter
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      // DECREASED to 1/12 (from 1/4) so the final word reveals much slower.
      // This gives it a really nice "eased" feeling as it decodes.
      iteration += 1 / 12; 
    }, 50); 

    return () => clearInterval(interval);
  }, [isActive, text]);

  return <span className="upcoming-badge">{displayText}</span>;
};

const slidesData = [
  { id: 1, image: image7},
  { id: 2, image: image2},
  { id: 3, image: image1},
  { id: 4, image: image4},
  { id: 5, image: image5},
  { id: 6, image: image6},


];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (newIndex) => {
    if (newIndex === activeIndex || isTransitioning) return;

    setIsTransitioning(true);
    setShowText(false); 

    setTimeout(() => {
      setActiveIndex(newIndex);
      setShowText(true); 
      setIsTransitioning(false);
    }, 400); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % slidesData.length;
      handleSlideChange(nextIndex);
    }, 4000);
    return () => clearTimeout(timer);
  }, [activeIndex, isTransitioning]); 

  const getPositionClass = (index) => {
    const total = slidesData.length;
    let offset = (index - activeIndex) % total;
    if (offset < 0) offset += total;

    if (offset > Math.floor(total / 2)) {
      offset -= total;
    }

    if (offset === 0) return 'pos-center';
    if (offset === 1) return 'pos-right-1';
    if (offset === -1) return 'pos-left-1';
    if (offset === 2) return 'pos-right-hidden';
    if (offset <= -2) return 'pos-left-hidden';

    return 'pos-hidden'; 
  };

  return (
    <div className="hero-carousel-container">
      <div className="carousel-track">
        {slidesData.map((slide, index) => {
          const positionClass = getPositionClass(index);
          const isActive = positionClass === 'pos-center';

          return (
            <div 
              key={slide.id} 
              className={`carousel-item ${positionClass}`}
              onClick={() => handleSlideChange(index)}
            >
              <div 
                className="item-bg" 
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              <div className={`item-content ${isActive && showText ? 'visible' : ''}`}>

                {/* UPCOMING SHUFFLE TEXT */}
                {slide.isUpcoming && (
                  <ShuffleText text="UPCOMING" isActive={isActive && showText} />
                )}
                <h2 
                  className="item-title"
                  style={{ backgroundImage: `url(${slide.pattern})` }}
                >
                  {slide.title}
                </h2>
                <div className="item-subtitle">
                  {slide.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
     
    </div>
  );
}