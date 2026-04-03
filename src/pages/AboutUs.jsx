import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import styles from './AboutUs.module.css'

// 1. IMPORT YOUR 3 MOVIE IMAGES HERE
import shot1 from '../assets/about/shot3.png'
import shot2 from '../assets/about/shot2.png'
import shot3 from '../assets/about/shot.png'
import shot4 from '../assets/about/shot4.png'
import shot5 from '../assets/about/shot1.png'



export default function AboutUs() {
  // 2. CREATE THE DECK STATE
  const [deck, setDeck] = useState([
    { id: 1, src: shot1, alt: 'Film shot 1' },
    { id: 2, src: shot2, alt: 'Film shot 2' },
    { id: 3, src: shot3, alt: 'Film shot 3' },
    { id: 4, src: shot4, alt: 'Film shot 4' },
    { id: 5, src: shot5, alt: 'Film shot 5' },


  ]);

  // 3. THE CLICK HANDLER: Moves the top card to the back
  const handleDeckClick = () => {
    setDeck((prevDeck) => {
      const newDeck = [...prevDeck];
      const topCard = newDeck.shift(); // Removes the first card
      newDeck.push(topCard);           // Puts it at the end
      return newDeck;
    });
  };

  return (
    <main className={styles.page}>
      <div className={styles.splitLayout}>
        
        {/* Left Side: About Us & Vision Content */}
        <div className={styles.leftContent}>
          <ScrollReveal as="section" className={styles.aboutSection} once={false}>
            <h2 className={styles.sectionTitle}>About us</h2>
            <p className={styles.aboutText}>
              SELFMADE FILMS Inc. is a Canadian independent entertainment company dedicated to high-impact, culturally resonant storytelling. Based in Scarborough, Ontario, the company is owned and operated by first-generation immigrants who bring a unique, global perspective to the North American cinematic landscape. We specialize in developing and producing bold independent cinema in both feature and short narrative with a particular focus on bridging the gap between South Asian narratives and international audiences.
            </p>
            <br />
            <p className={styles.aboutText}>
              Our portfolio spans a diverse range of projects, from international indie co-productions to original South Asian features developed and shot right here in Ontario. Whether through global partnerships or local independent initiatives, our mission remains the same: to champion underrepresented voices and deliver professional-grade cinema that reflects the complexities of the modern immigrant experience.
            </p>
            
            <h2 className={`${styles.sectionTitle} ${styles.spacingTop}`}>Our Vision</h2>
            <p className={styles.aboutText}>
              To be a premier hub for independent creators. We provide a global stage where "self-made" stories thrive, producing cinema that is as visually stunning as it is emotionally profound.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Side: The Interactive Deck of Cards */}
        <aside className={styles.rightContent}>
          <ScrollReveal delay={150} className={styles.stackContainer} once={false}>
            
            {/* The clickable deck container */}
            <div className={styles.deckContainer} onClick={handleDeckClick}>
              {deck.map((card, index) => (
                <img 
                  key={card.id} 
                  src={card.src} 
                  alt={card.alt} 
                  className={`${styles.deckCard} ${styles[`cardPosition${index}`]}`} 
                />
              ))}
              <div className={styles.clickBadge}>
                CLICK TO CYCLE ➔
              </div>
            </div>

            <div className={styles.stackCaption}>
              <h3>THE SELFMADE LENS</h3>
              <p>Bold narratives crafted outside the traditional studio system. Click to cycle.</p>
            </div>

          </ScrollReveal>
        </aside>

      </div>
    </main>
  )
}