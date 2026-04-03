import ScrollReveal from '../components/ScrollReveal'
import styles from './SpeakToUs.module.css'

const contacts = [
  {
    name: 'Allen Thomas',
    role: 'Producer/Director',
    phone: '+1 (416) 319 - 7342',
    email: 'smadefilms@gmail.com',
  },
  // {
  //   name: 'Marjorie rodrigues',
  //   role: 'Producer for Rajiv rao',
  //   phone: '+91 98863 78800',
  //   email: 'marj.nirvana@nirvanafilms.com',
  // },
  // {
  //   name: 'Nandini gowda',
  //   role: 'Producer for Prakash varma and Swaroop Kumar',
  //   phone: '+91 98442 27668',
  //   email: 'nandinigowda@nirvanafilms.com',
  // },
  // {
  //   name: 'Ranjan bhowmick',
  //   role: 'Producer for Kishore iyyar',
  //   phone: '+91 98000 37507',
  //   email: 'ranjan@nirvanafilms.com',
  // },
]

export default function SpeakToUs() {
  return (
    <main className={styles.page}>
      <ScrollReveal as="section" className={styles.section} once={false}>
        <h2 className={styles.sectionTitle}>Talk to us</h2>
        <ScrollReveal delay={50} className={styles.introBlock} once={false}>
          <p>
            Got a story to tell or a project to pitch? We're always looking to collaborate with passionate creators.
          </p>
          <p className={styles.locationText}>
            17B - 6 Rosebank Dr Scarborough ON M1B 0A1 Canada 
          </p>
        </ScrollReveal>
        <br />
        <div className={styles.contactList}>
          {contacts.map((c, i) => (
            <ScrollReveal key={c.email} delay={i * 100} className={styles.contactBlock} once={false}>
              <p className={styles.contactName}>{c.name} – {c.role}:</p>
              <p className={styles.contactDetail}>
                <a href={`tel:${c.phone.replace(/\s/g,'')}`}>{c.phone}</a>
              </p>
              <p className={styles.contactDetail}>
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </p>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </main>
  )
}
