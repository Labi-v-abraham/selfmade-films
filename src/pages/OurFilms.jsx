import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import styles from './OurFilms.module.css'
import avan from '../assets/films/avan.png'
import shawdowimg from '../assets/films/hqdefault.png'



import adayalam from '../assets/upcoming/IMG_7970.jpg'
import jeevan from '../assets/upcoming/jeevan.jpeg'
import ant from '../assets/upcoming/ant.jpeg'


import away from '../assets/development/away.png'
// import ele from '../assets/development/ele.jpeg'




// 1. Upcoming Films Data
const upcoming = [
  { id: 1, title: 'Adayalam', thumb: adayalam, youtubeLink: null, color: '#2a2a2a' },
  { id: 2, title: 'An Ode to black ants', thumb: ant, youtubeLink: null, color: '#2a2a2a' },
  { id: 3, title: 'Jeevan Marana Porattam', thumb: jeevan, youtubeLink: 'https://www.imdb.com/title/tt37807271/', color: '#2a2a2a' },

]

// 2. Flattened Data: All released films
const allFilms = [
  { id: 1, title: 'Avanum Avalum', thumb: avan, youtubeLink: 'https://www.youtube.com/watch?v=YocNLRqP2fQ&t=1s', color: '#2a2a2a' },
  { id: 2, title: 'Shadows of the past', thumb: shawdowimg, youtubeLink: 'https://www.youtube.com/watch?v=OMNb5Oj8MZg', color: '#2a2a2a' },

]

const inDevelopment = [
  { id: 1, title: 'An open gate away', thumb: away, youtubeLink: null, color: '#2a2a2a' },
  // { id: 2, title: 'My father walks with elephants', thumb: ele, youtubeLink: null, color: '#2a2a2a' },


]

const FILMS_PER_PAGE = 8

function FilmCard({ film }) {
  const handleClick = (e) => {
    if (!film.youtubeLink) {
      e.preventDefault();
    }
  }
  return (
    <a 
      href={film.youtubeLink || '#'} 
      onClick={handleClick}
      target={film.youtubeLink ? "_blank" : "_self"} 
      rel="noopener noreferrer"
      className={styles.filmCardWrapper}
    >
      <div className={styles.filmCard}>
        <div className={styles.thumbnail} style={{ backgroundColor: film.color }}>
          {/* RENDER IMAGE IF IT EXISTS */}
          {film.thumb && (
            <img src={film.thumb} alt={film.title} className={styles.thumbnailImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
          {film.label && (
            <div className={styles.thumbnailLabel}>
              {film.label.split('\n').map((line, i) => (
                <span key={i} className={styles.labelLine}>{line}</span>
              ))}
              {film.labelSub && <span className={styles.labelSub}>{film.labelSub}</span>}
            </div>
          )}
          <div className={styles.watermark}>SELFMADE FILMS Inc</div>
        </div>
        <p className={styles.filmTitle}>{film.title}</p>
      </div>
    </a>
  )
}

export default function OurFilms() {
  const [currentPage, setCurrentPage] = useState(0)

  const totalFilms = allFilms.length
  const maxPage = Math.ceil(totalFilms / FILMS_PER_PAGE) - 1

  const handlePrev = () => {
    setCurrentPage(prev => (prev <= 0 ? maxPage : prev - 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => (prev >= maxPage ? 0 : prev + 1))
  }

  // Calculate which films to show on the current page
  const start = currentPage * FILMS_PER_PAGE
  const visibleFilms = allFilms.slice(start, start + FILMS_PER_PAGE)

  // Only show navigation arrows if there are more than 8 films
  const showNavigation = totalFilms > FILMS_PER_PAGE

  return (
    <main className={styles.page}>
      
      {/* --- UPCOMING FILMS SECTION --- */}
      {upcoming && upcoming.length > 0 && (
        <ScrollReveal as="section" className={styles.section} style={{ marginBottom: '80px' }} once={false}>
          <div className={styles.directorHeader}>
            <h2 className={styles.directorName} style={{ color: '#fff', fontSize: '24px' }}>
              Upcoming
            </h2>
          </div>

          <div className={styles.filmGrid}>
            <div className={styles.gridInner}>
              {upcoming.map((film, i) => (
                <ScrollReveal key={`upcoming-${film.id}`} delay={i * 70} className={styles.filmCardReveal}>
                  <FilmCard film={film} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* --- RELEASED FILMS SECTION --- */}
      <ScrollReveal as="section" className={styles.section} once={false}>
        <div className={styles.directorHeader}>
          <h2 className={styles.directorName} style={{ color: '#fff', fontSize: '24px' }}>
            Released
          </h2>
        </div>

        <div className={styles.filmGrid}>
          
          {showNavigation && (
            <button
              className={`${styles.navBtn} ${styles.navLeft}`}
              onClick={handlePrev}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          <div className={styles.gridInner}>
            {visibleFilms.map((film, i) => (
              <ScrollReveal key={`released-${film.id}`} delay={i * 70} className={styles.filmCardReveal} once={false}>
                <FilmCard film={film} />
              </ScrollReveal>
            ))}
          </div>

          {showNavigation && (
            <button
              className={`${styles.navBtn} ${styles.navRight}`}
              onClick={handleNext}
              aria-label="Next"
            >
              ›
            </button>
          )}

        </div>
      </ScrollReveal>
      

      {/* --- IN DEVELOPMENT FILMS SECTION --- */}
      {inDevelopment && inDevelopment.length > 0 && (
        <ScrollReveal as="section" className={styles.section} style={{ marginBottom: '80px' }} once={false}>
          <div className={styles.directorHeader}>
            <h2 className={styles.directorName} style={{ color: '#fff', fontSize: '24px' }}>
              In Development
            </h2>
          </div>

          <div className={styles.filmGrid}>
            <div className={styles.gridInner}>
              {inDevelopment.map((film, i) => (
                <ScrollReveal key={`inDevelopment-${film.id}`} delay={i * 70} className={styles.filmCardReveal}>
                  <FilmCard film={film} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </main>
  )
}