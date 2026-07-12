import { useEffect } from 'react';
import Countdown from './Countdown';
import NowOpenPanel from './NowOpenPanel';
import WaitlistForm from './WaitlistForm';
import Reveal from './Reveal';
import ServicesSection from './ServicesSection';
import BrandIntroSection from './BrandIntroSection';
import HeroVideo from './HeroVideo';
import Footer from './Footer';
import {
  LAUNCH_DATE,
  OPENING_TAGLINE,
  WHATSAPP_LINK,
  BOOKING_WHATSAPP_LINK,
  SOCIAL_LINKS,
} from '../config';
import heroPoster from '../assets/hero-poster.webp';
import heroPosterDesktop from '../assets/hero-poster-desktop.png';
import styles from './ComingSoon.module.css';

const isLaunched = Date.now() >= new Date(LAUNCH_DATE).getTime();

export default function ComingSoon() {
  useEffect(() => {
    if (isLaunched) {
      document.title = 'Wraptors Dubai — Luxury Wraps, PPF & Styling. Now Open in Dubai.';
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.content = 'Wraptors Dubai is now open — luxury wraps, paint protection film, ceramic coating, and custom automotive styling in Dubai.';
    }
  }, []);

  return (
    <main className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.heroSection}>
        <HeroVideo
          src="/hero-video.mp4"
          poster={heroPoster}
          desktopSrc="/hero-video-desktop.mp4"
          desktopPoster={heroPosterDesktop}
          className={styles.heroImage}
        />

        <div className={styles.heroCta}>
          <h1 className={styles.heroH1}>
            Luxury Vehicle Wraps &amp; Paint Protection —{' '}
            {isLaunched ? 'Now Open in Dubai' : 'Coming to Dubai'}
          </h1>
          <div className={styles.heroCtaButtons}>
            <a href="#waitlist" className={styles.heroCtaPrimary}>
              {isLaunched ? 'Book Your Vehicle' : 'Join the Waitlist'}
            </a>
            <a
              href={isLaunched ? BOOKING_WHATSAPP_LINK : WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCtaSecondary}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span className={styles.scrollLabel}>Scroll</span>
          <span className={styles.scrollLine} />
        </div>
      </section>

      <ServicesSection />

      <BrandIntroSection />

      {/* ── Countdown / Now Open ── */}
      <section className={styles.countdownSection}>
        <div className={styles.countdownInner}>
          <Reveal>
            {isLaunched ? (
              <NowOpenPanel />
            ) : (
              <>
                <Countdown targetDate={LAUNCH_DATE} />
                <p className={styles.openingTagline}>{OPENING_TAGLINE}</p>
              </>
            )}
          </Reveal>
        </div>
      </section>

      <div className={styles.container}>
        {/* ── Waitlist / Booking ── */}
        <Reveal as="section" id="waitlist" className={styles.formSection}>
          <h2 className={styles.formTitle}>
            {isLaunched ? 'Book Your Vehicle' : 'Be First to Know'}
          </h2>
          <WaitlistForm isLaunched={isLaunched} />
        </Reveal>

        {/* ── Social CTAs ── */}
        <Reveal className={styles.ctaRow}>
          <a
            href={isLaunched ? BOOKING_WHATSAPP_LINK : WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            {isLaunched ? 'Book via WhatsApp' : 'Contact on WhatsApp'}
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            {SOCIAL_LINKS.instagramLabel}
          </a>
        </Reveal>
      </div>

      <Footer isLaunched={isLaunched} />
    </main>
  );
}
