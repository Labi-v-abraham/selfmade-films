import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import image1 from '../assets/carousel/Shadows of the past v1.webp';
import image2 from '../assets/carousel/Second FINAL.webp';
import image4 from '../assets/carousel/PHOTO-2026-03-06-12-51-43.webp';
import image5 from '../assets/carousel/PHOTO-2026-03-23-20-46-12.webp';
import image6 from '../assets/carousel/IMG_8294.webp';
import image7 from '../assets/carousel/IMG_8300.webp';
import image8 from '../assets/carousel/elephant.webp';

import textpattern from '../assets/pattern/liquidglass.webp';

const slidesData = [
  { id: 1, image: image7 },
  { id: 2, image: image2 },
  { id: 3, image: image1 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image8 },

];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [isPaused, setIsPaused] = useState(false);
  const wasPaused = useRef(false);
  
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

  // --- TIMER WITH MEMORY ---
  useEffect(() => {
    // 1. If paused, remember that we stopped!
    if (isPaused) {
      wasPaused.current = true;
      return;
    }

    // 2. If we just unpaused, only wait 1 second to resume.
    // Otherwise, use the standard 4 seconds.
    let currentDelay = 4000;
    if (wasPaused.current) {
      currentDelay = 1000;
      wasPaused.current = false; // Reset the memory
    }

    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % slidesData.length;
      handleSlideChange(nextIndex);
    }, currentDelay);
    
    return () => clearTimeout(timer);
  }, [activeIndex, isTransitioning, isPaused]); 

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
              
              // Hover and Touch events are on the cards!
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div 
                className="item-bg" 
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              <div className={`item-content ${isActive && showText ? 'visible' : ''}`}>
                <h2 
                  className="item-title"
                  style={{ backgroundImage: `url(${textpattern})` }}
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