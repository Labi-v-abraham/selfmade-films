import ScrollReveal from '../components/ScrollReveal'
import styles from './AboutUs.module.css'

// 1. IMPORT JUST YOUR MAIN IMAGE HERE
// (You can change 'shot3.png' to whichever one you want to feature!)

import bts1 from '../assets/about/IMG_3173.webp'
import bts2 from '../assets/about/IMG_3175.webp'
import bts3 from '../assets/about/IMG_3178.webp'
import bts4 from '../assets/about/IMG_3193.webp'
import bts5 from '../assets/about/IMG_3196.webp'
import bts6 from '../assets/about/IMG_3199.webp'
import bts7 from '../assets/about/IMG_7946.webp'
import bts8 from '../assets/about/IMG_7990.webp'
import bts9 from '../assets/about/IMG_8569.webp'
import bts10 from '../assets/about/IMG_8570.webp'




const btsImages = [bts1, bts2, bts3, bts4, bts5, bts6, bts7, bts8, bts9, bts10];

export default function AboutUs() {
  return (
    <main className={styles.page}>
      <div className={styles.splitLayout}>
        
        {/* Left Side: About Us & Vision Content */}
        <div className={styles.leftContent}>
          <ScrollReveal as="section" className={styles.aboutSection} once={false}>
            <h2 className={styles.sectionTitle}>About us</h2>
            <p className={styles.aboutText}>
              SELFMADE FILMS Inc. is a Canadian independent entertainment company dedicated to high-impact, culturally resonant storytelling. Based in Toronto, Ontario, the company is owned and operated by first-generation immigrants who bring a unique, global perspective to the North American cinematic landscape. We specialize in developing and producing bold independent cinema in both feature and short narrative with a particular focus on bridging the gap between South Asian narratives and international audiences.
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

        {/* Right Side: The Single Image */}
        <aside className={styles.rightContent}>
          <ScrollReveal delay={150} className={styles.wallContainer} once={false}>
            {btsImages.map((imgSrc, index) => (
              <div key={index} className={styles.photoWrapper}>
                <img 
                  src={imgSrc} 
                  alt={`Selfmade Films BTS ${index + 1}`} 
                  className={styles.wallImage} 
                  loading="lazy"
                />
              </div>
            ))}
          </ScrollReveal>
        </aside>

      </div>
    </main>
  )
}