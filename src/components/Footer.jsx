import ScrollReveal from './ScrollReveal'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <ScrollReveal as="footer" className={styles.footer}>
      
      {/* 1. Archive Section (Folder + Button) */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '24px', 
        marginBottom: '60px',
        marginTop: '20px'
      }}>
        
        <button className={styles.archiveBtn}>selfmade films inc archive</button>
      </div>

      {/* 2. Social Row (Untouched) */}
      <div className={styles.socialRow}>
        <p className={styles.followText}>follow us at</p>
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/self_made_films?igsh=MWwwd3BldDRhbXcxMA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              width="40"
              height="40"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <div className={styles.divider} />
          <a
            href="https://www.youtube.com/@theselfmadefilms"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              width="40"
              height="40"
            >
              <rect x="2" y="5" width="20" height="14" rx="4" />
              <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}