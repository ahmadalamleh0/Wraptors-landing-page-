import Reveal from './Reveal';
import styles from './ServicesSection.module.css';

import ppf from '../assets/services/ppf.jpg';
import starlight from '../assets/services/starlight.jpg';
import wrap from '../assets/services/wrap.jpg';
import ceramic from '../assets/services/ceramic.jpg';
import tint from '../assets/services/tint.jpg';
import widebody from '../assets/services/widebody.jpg';
import commercial from '../assets/services/commercial.jpg';

const SERVICES = [
  {
    name: 'Paint Protection Film',
    image: ppf,
    size: 'wide',
    description: 'Invisible protection built to preserve paint against road wear, chips, and daily driving.',
  },
  {
    name: 'Starlight',
    image: starlight,
    size: 'standard',
    description: 'A luxury interior upgrade with a custom illuminated ceiling finish.',
  },
  {
    name: 'Wrap',
    image: wrap,
    size: 'standard',
    description: 'Premium color changes and custom finishes designed for a standout presence.',
  },
  {
    name: 'Ceramic Coating',
    image: ceramic,
    size: 'standard',
    description: 'Long-lasting gloss and hydrophobic protection for easier maintenance.',
  },
  {
    name: 'Window Tint',
    image: tint,
    size: 'standard',
    description: 'Refined privacy, heat rejection, and a sharper exterior profile.',
  },
  {
    name: 'Wide Body Kits',
    image: widebody,
    size: 'wide',
    description: 'Aggressive styling upgrades built for a stronger road presence.',
  },
  {
    name: 'Commercial Wrap',
    image: commercial,
    size: 'featured',
    description: 'Branded vehicle graphics designed to turn daily driving into visibility.',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bigText} aria-hidden="true">COMING SOON</div>

      <Reveal as="h2" className={styles.kicker}>Our Services</Reveal>

      <div className={styles.grid}>
        {SERVICES.map(({ name, image, size, description }, i) => (
          <Reveal
            key={name}
            className={`${styles.card} ${styles[size]}`}
            delay={Math.min(i * 70, 280)}
          >
            <img src={image} alt={name} className={styles.cardImage} loading="lazy" />
            <div className={styles.cardOverlay} aria-hidden="true" />
            <span className={styles.cardName}>{name}</span>
            <p className={styles.cardDesc}>{description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
