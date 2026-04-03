import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import styles from './SpeakToUs.module.css'

const contacts = [
  {
    name: 'Allen Thomas',
    role: 'Producer/Director',
    phone: '+1 (416) 319 - 7342',
    email: 'smadefilms@gmail.com',
  },
]

export default function SpeakToUs() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${contacts[0].email}?subject=${encodeURIComponent(formData.subject || 'New Inquiry from Website')}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  }

  return (
    <main className={styles.page}>
      <ScrollReveal as="section" className={styles.section} once={false}>
        <div className={styles.contentWrapper}>
          
          {/* LEFT SIDE: Heading, Intro, and Contact Info */}
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>Talk to us</h2>
            
            <ScrollReveal delay={50} className={styles.introBlock} once={false}>
              <p>
                Got a story to tell or a project to pitch? We're always looking to collaborate with passionate creators.
              </p>
            </ScrollReveal>

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
          </div>

          {/* RIGHT SIDE: The Contact Form */}
          <ScrollReveal delay={200} className={styles.formContainer} once={false}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.inputRow}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className={styles.inputField} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className={styles.inputField} />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className={styles.inputField} />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required className={styles.textArea} rows="5"></textarea>
              <button type="submit" className={styles.submitBtn}>SEND MESSAGE ➔</button>
            </form>
          </ScrollReveal>

        </div>
      </ScrollReveal>
    </main>
  )
}