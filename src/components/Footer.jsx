import { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import {
  WHATSAPP_LINK,
  SOCIAL_LINKS,
  BRAND_NAME,
  PHONE_DISPLAY,
  PHONE_LINK,
  OPENING_TAGLINE,
} from '../config';
import footerBg from '../assets/footer-cars.jpg';
import footerBgDesktop from '../assets/footer-cars-desktop.jpg';
import { WhatsAppIcon, InstagramIcon, YouTubeIcon, WaitlistIcon } from './icons';
import styles from './Footer.module.css';

export default function Footer({ isLaunched = false }) {
  const imgRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const img = imgRef.current;
    if (!img) return;

    let frame = null;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = img.parentElement.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        img.style.transform = `translateY(${progress * 22}px) scale(1.01)`;
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
    <Reveal as="footer" className={styles.footer}>
      <img ref={imgRef} src={footerBgDesktop} alt="" className={`${styles.footerImage} ${styles.footerImageDesktop}`} aria-hidden="true" />
      <img src={footerBg} alt="" className={`${styles.footerImage} ${styles.footerImageMobile}`} aria-hidden="true" />
      <div className={styles.footerOverlay} aria-hidden="true" />

      <div className={styles.footerTop}>
        <p className={styles.footerBrand}>{BRAND_NAME}</p>
        {!isLaunched && (
          <p className={styles.footerTagline}>{OPENING_TAGLINE}</p>
        )}
      </div>

      <div className={styles.footerContent}>
        <nav className={styles.footerLinks}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className={styles.linkIcon} aria-hidden="true" />
            WhatsApp
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={styles.linkIcon} aria-hidden="true" />
            {SOCIAL_LINKS.instagramLabel}
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
            <YouTubeIcon className={styles.linkIcon} aria-hidden="true" />
            YouTube
          </a>
          <a href="#waitlist">
            <WaitlistIcon className={styles.linkIcon} aria-hidden="true" />
            {isLaunched ? 'Book Now' : 'Join Waitlist'}
          </a>
        </nav>

        <div className={styles.contactInfo}>
          <a href={PHONE_LINK} className={styles.phone}>
            {PHONE_DISPLAY}
          </a>
        </div>

        <span className={styles.footerBadge}>
          {isLaunched ? 'Now Open · Dubai' : 'Launching Soon'}
        </span>
      </div>
    </Reveal>
  );
}
