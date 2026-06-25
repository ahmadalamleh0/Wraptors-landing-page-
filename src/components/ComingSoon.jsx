import Countdown from './Countdown';
import WaitlistForm from './WaitlistForm';
import Reveal from './Reveal';
import ServicesSection from './ServicesSection';
import BrandIntroSection from './BrandIntroSection';
import HeroVideo from './HeroVideo';
import Footer from './Footer';
import { LAUNCH_DATE, WHATSAPP_LINK, SOCIAL_LINKS } from '../config';
import heroPoster from '../assets/hero-poster.webp';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
  return (
    <main className={styles.page}>
      {/* ── Hero: video background + centered message only ── */}
      <section className={styles.heroSection}>
        <HeroVideo src="/hero-video.mp4" poster={heroPoster} className={styles.heroImage} />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            <span className={styles.headlineMain}>Wraptors Dubai</span>
            <span className={styles.headlineAccent}>Coming Soon</span>
          </h1>

          <p className={styles.intro}>
            A new destination for luxury wraps, protection, and elevated automotive styling is coming to Dubai.
          </p>
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

      <Footer />
    </main>
  );
}
