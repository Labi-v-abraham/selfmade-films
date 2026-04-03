import { useState, useEffect, useRef } from 'react'
import styles from './Loader.module.css'

export default function Loader({ onComplete }) {
  const [showArrow, setShowArrow] = useState(false)
  const [scrollStyle, setScrollStyle] = useState({ opacity: 1, blur: 0 })
  
  const videoRef = useRef(null)

  // 1. SCROLL EFFECT: Calculates fade and blur as you scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Fades from 1 to 0 over the first 600px of scrolling
      const newOpacity = Math.max(1 - scrollY / 600, 0)
      
      // Increases blur from 0px to 12px over the same distance
      const newBlur = Math.min(scrollY / 50, 12) 
      
      setScrollStyle({ opacity: newOpacity, blur: newBlur })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 2. OBSERVER EFFECT: Plays video when visible, pauses when scrolled away
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.currentTime = 0
          videoElement.play().catch(e => console.log("Autoplay blocked:", e))
        } else {
          videoElement.pause()
        }
      },
      { threshold: 0.2 } 
    )

    observer.observe(videoElement)
    return () => observer.disconnect()
  }, [])

  // 3. HANDLERS
  const handleVideoEnd = () => {
    setShowArrow(true)
    onComplete() 
  }

  const handleScrollDown = () => {
    const heroSection = document.getElementById('home')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.loaderContainer}>
      
      {/* The Video Layer */}
      <video
        ref={videoRef}
        className={styles.video}
        muted
        playsInline
        onEnded={handleVideoEnd}
        onError={handleVideoEnd}
        style={{ 
          opacity: scrollStyle.opacity, 
          filter: `blur(${scrollStyle.blur}px)`,
          transition: 'none' // We disable CSS transitions so it instantly follows the scroll wheel!
        }}
      >
        <source src="/logo.mp4" type="video/mp4" />
      </video>

      {/* The Arrow Layer */}
      <button
        className={`${styles.scrollArrow} ${showArrow ? styles.visible : ''}`}
        onClick={handleScrollDown}
        style={{ 
          opacity: scrollStyle.opacity, // The arrow fades out with the video
          transition: 'none' 
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

    </div>
  )
}