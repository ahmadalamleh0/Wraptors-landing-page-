import { useEffect, useRef } from 'react';
import Countdown from './Countdown';
import WaitlistForm from './WaitlistForm';
import Reveal from './Reveal';
import ServicesSection from './ServicesSection';
import BrandIntroSection from './BrandIntroSection';
import MapSection from './MapSection';
import Footer from './Footer';
import { LAUNCH_DATE, WHATSAPP_LINK, SOCIAL_LINKS } from '../config';
import heroBg from '../assets/hero-land.jpg';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
  const heroImgRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const heroImg = heroImgRef.current;
    if (!heroImg) return;

    let frame = null;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        heroImg.style.transform = `translateY(${window.scrollY * 0.08}px) scale(1.08)`;
        frame = null;
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className={styles.page}>
      {/* ── Hero: image + centered message only ── */}
      <section className={styles.heroSection}>
        <img ref={heroImgRef} src={heroBg} alt="" className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <Reveal as="h1" className={styles.headline}>
            <span className={styles.headlineMain}>Wraptors Dubai</span>
            <span className={styles.headlineAccent}>Coming Soon</span>
          </Reveal>

          <Reveal as="p" className={styles.intro} delay={100}>
            A new destination for luxury wraps, protection, and elevated automotive styling is coming to Dubai.
          </Reveal>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span className={styles.scrollLabel}>Scroll</span>
          <span className={styles.scrollLine} />
        </div>
      </section>

      <ServicesSection />

      <BrandIntroSection />

      {/* ── Countdown ── */}
      <section className={styles.countdownSection}>
        <Reveal>
          <Countdown targetDate={LAUNCH_DATE} />
        </Reveal>
      </section>

      <div className={styles.container}>
        {/* ── Waitlist / inquiry ── */}
        <Reveal as="section" id="waitlist" className={styles.formSection}>
          <h2 className={styles.formTitle}>Be First to Know</h2>
          <WaitlistForm />
        </Reveal>

        {/* ── WhatsApp / social links ── */}
        <Reveal className={styles.ctaRow}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            Contact on WhatsApp
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            Follow on Instagram
          </a>
        </Reveal>
      </div>

      <MapSection />

      <Footer />
    </main>
  );
}
