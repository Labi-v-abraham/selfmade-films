import { useState } from 'react'
import {
  IconClapboard,
  IconDirectorChair,
  IconFilmReel,
  IconFilmStrip,
  IconMegaphone,
  IconSoundWaves,
  IconSparkle,
  IconSpotlight,
  IconTripod,
  IconVideoCamera,
} from './NavbarIcons'
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={styles.header}>
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

      {/* Desktop Left Decorative Icons (Hidden on mobile) */}
      <div className={styles.navDecorScatter} aria-hidden>
        <IconFilmReel className={`${styles.navIcon} ${styles.scatterIcon} ${styles.decorA}`} />
        <IconSparkle className={`${styles.navIcon} ${styles.scatterIcon} ${styles.decorB}`} />
        <IconVideoCamera className={`${styles.navIcon} ${styles.scatterIcon} ${styles.decorC}`} />
        <IconTripod className={`${styles.navIcon} ${styles.scatterIcon} ${styles.decorD}`} />
      </div>

      {/* Navigation Links Wrapper (Controls mobile slide-down overlay) */}
      <div className={`${styles.navMenuWrapper} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.heroText}>
          
          <span className={styles.navGroupScatter}>
            <a
              href="#Our-films"
              onClick={closeMenu}
              className={`${styles.heroWord} ${styles.muted}`}
            >
              our films
            </a>
            <IconFilmStrip className={`${styles.navIcon} ${styles.scatterIcon} ${styles.filmsA}`} />
            <IconFilmReel className={`${styles.navIcon} ${styles.scatterIcon} ${styles.filmsB}`} />
            <IconSparkle className={`${styles.navIcon} ${styles.scatterIcon} ${styles.filmsC}`} />
          </span>

          <span className={styles.navGroupScatter}>
            <a
              href="#talk"
              onClick={closeMenu}
              className={`${styles.heroWord} ${styles.muted}`}
            >
              talk
            </a>
            <IconSpotlight className={`${styles.navIcon} ${styles.scatterIcon} ${styles.connectA}`} />
            <IconSoundWaves className={`${styles.navIcon} ${styles.scatterIcon} ${styles.connectB}`} />
            <IconMegaphone className={`${styles.navIcon} ${styles.scatterIcon} ${styles.connectC}`} />
            <IconVideoCamera className={`${styles.navIcon} ${styles.scatterIcon} ${styles.connectD}`} />
          </span>

          <span className={styles.navGroupScatter}>
            <a
              href="#about-us"
              onClick={closeMenu}
              className={`${styles.heroWord} ${styles.muted}`}
            >
              about us
            </a>
            <IconClapboard className={`${styles.navIcon} ${styles.scatterIcon} ${styles.studioA}`} />
            <IconDirectorChair className={`${styles.navIcon} ${styles.scatterIcon} ${styles.studioB}`} />
            <IconTripod className={`${styles.navIcon} ${styles.scatterIcon} ${styles.studioC}`} />
            <IconSparkle className={`${styles.navIcon} ${styles.scatterIcon} ${styles.studioD}`} />
          </span>
        </div>
      </div>

      {/* Logo (Stays visible on mobile header) */}
      <div className={styles.logoScatter}>
        <div className={styles.logoWordmark}>
          <a href="#home" onClick={closeMenu}>
            <CompanyLogo />
          </a>
        </div>
        <IconSparkle className={`${styles.navIcon} ${styles.scatterIcon} ${styles.logoA}`} />
        <IconSpotlight className={`${styles.navIcon} ${styles.scatterIcon} ${styles.logoB}`} />
        <IconFilmReel className={`${styles.navIcon} ${styles.scatterIcon} ${styles.logoC}`} />
      </div>
    </header>
  )
}