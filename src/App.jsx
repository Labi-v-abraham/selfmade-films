import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import OurFilms from './pages/OurFilms';
import AboutUs from './pages/AboutUs';
import SpeakToUs from './pages/SpeakToUs';
import Loader from './components/Loader';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  // --- NEW: Scroll Spy and Refresh Fix ---
  useEffect(() => {
    // 1. FIX THE REFRESH BUG
    // If someone reloads the page with a hash (like #films), wait a tiny bit for 
    // React to render, then scroll them smoothly to that section.
    if (window.location.hash) {
      setTimeout(() => {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150); // 150ms delay gives React time to put the sections on the screen
    }

    // 2. THE SCROLL SPY (Updates URL as you scroll)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When a section hits the middle of the screen...
          if (entry.isIntersecting) {
            // Update the URL hash silently without making the page jump
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      // rootMargin dictates when the observer triggers. 
      // '-50% 0px -50% 0px' means it triggers when the section crosses the exact middle of the screen.
      { rootMargin: '-50% 0px -50% 0px' } 
    );

    // Find all sections that have an ID and tell the observer to watch them
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer if the component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array means this only runs once when the app loads
  // ---------------------------------------

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>
      
      <section id="intro">
        <Loader onComplete={() => setIntroFinished(true)} />
      </section>

      <Navbar isVisible={introFinished}/>

      <main>
        <ScrollReveal as="section" id="home" once={false}>
          <Hero />
        </ScrollReveal>

        
        <ScrollReveal as="section" id="about-us" once={false}>
          <AboutUs />
        </ScrollReveal>

        <hr className="glow-divider" />

        <ScrollReveal as="section" id="Our-films" once={false}>
          <OurFilms />
        </ScrollReveal>

        <hr className="glow-divider" />

        <ScrollReveal as="section" id="talk" once={false}>
          <SpeakToUs />
        </ScrollReveal>
      </main>


      <ScrollReveal as="div" once={false}>
        <Footer />
      </ScrollReveal>

    </div>
  );
}

export default App;