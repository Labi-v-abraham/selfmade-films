import { useState } from 'react'
import styles from './Navbar.module.css'

// Company wordmark
const CompanyLogo = () => (
  <svg
    viewBox="0 0 280 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.logo}
  >
    <text
      x="8"
      y="28"
      fontFamily="'Outfit', system-ui, sans-serif"
      fontSize="22"
      fontWeight="800"
      fill="white"
      letterSpacing="0.5"
    >
      SELFMADE FILMS
    </text>
    <text
      x="8"
      y="50"
      fontFamily="'Outfit', system-ui, sans-serif"
      fontSize="16"
      fontWeight="600"
      fill="white"
      letterSpacing="2"
    >
      Inc
    </text>
    <line x1="8" y1="6" x2="22" y2="0" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function Navbar({ isVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
      {/* Mobile Hamburger Button */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links Wrapper (Controls mobile slide-down overlay) */}
      <div className={`${styles.navMenuWrapper} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.heroText}>
          
          <span className={styles.navGroup}>
            <a
              href="#Our-films"
              onClick={closeMenu}
              className={`${styles.heroWord} ${styles.muted}`}
            >
              our films
            </a>
          </span>

          <span className={styles.navGroup}>
            <a
              href="#talk"
              onClick={closeMenu}
              className={`${styles.heroWord} ${styles.muted}`}
            >
              talk
            </a>
          </span>

          <span className={styles.navGroup}>
            <a
              href="#about-us"
              onClick={closeMenu}
              className={`${styles.heroWord} ${styles.muted}`}
            >
              about us
            </a>
          </span>
        </div>
      </div>

      {/* Logo (Stays visible on mobile header) */}
      <div className={styles.logoContainer}>
        <div className={styles.logoWordmark}>
          <a href="#home" onClick={closeMenu}>
            <CompanyLogo />
          </a>
        </div>
      </div>
    </header>
  )
}