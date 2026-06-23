import Reveal from './Reveal';
import styles from './ServicesSection.module.css';

import ppf from '../assets/services/ppf.jpg';
import starlight from '../assets/services/starlight.jpg';
import wrap from '../assets/services/wrap.jpg';
import ceramic from '../assets/services/ceramic.jpg';
import tint from '../assets/services/tint.jpg';
import widebody from '../assets/services/widebody.jpg';
import commercial from '../assets/services/commercial.jpg';

// Sizes drive the desktop editorial grid (see ServicesSection.module.css):
// row 1 = wide + standard + standard, row 2 = standard + standard + wide,
// row 3 = featured (full width). Mobile ignores size and stacks everything.
const SERVICES = [
  { name: 'Paint Protection Film', image: ppf, size: 'wide' },
  { name: 'Starlight', image: starlight, size: 'standard' },
  { name: 'Wrap', image: wrap, size: 'standard' },
  { name: 'Ceramic Coating', image: ceramic, size: 'standard' },
  { name: 'Window Tint', image: tint, size: 'standard' },
  { name: 'Wide Body Kits', image: widebody, size: 'wide' },
  { name: 'Commercial Wrap', image: commercial, size: 'featured' },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bigText} aria-hidden="true">COMING SOON</div>

      <Reveal as="p" className={styles.kicker}>Our Services</Reveal>

      <div className={styles.grid}>
        {SERVICES.map(({ name, image, size }, i) => (
          <Reveal
            key={name}
            className={`${styles.card} ${styles[size]}`}
            delay={Math.min(i * 70, 280)}
          >
            <img src={image} alt={name} className={styles.cardImage} loading="lazy" />
            <div className={styles.cardOverlay} aria-hidden="true" />
            <span className={styles.cardName}>{name}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
