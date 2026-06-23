import Reveal from './Reveal';
import { CanadaFlag, USAFlag, SouthAfricaFlag, UAEFlag } from './flags';
import styles from './BrandIntroSection.module.css';

const LOCATIONS = [
  { name: 'Canada', Flag: CanadaFlag },
  { name: 'United States', Flag: USAFlag },
  { name: 'South Africa', Flag: SouthAfricaFlag },
  { name: 'UAE / Dubai', Flag: UAEFlag },
];

export default function BrandIntroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal as="p" className={styles.kicker}>Global Expansion</Reveal>

        <Reveal as="h2" className={styles.headline} delay={80}>
          From Toronto to Dubai
        </Reveal>

        <Reveal as="p" className={styles.body} delay={160}>
          Wraptors built its name on Toronto&rsquo;s streets, perfecting the craft of
          luxury wraps, paint protection, and automotive styling. Now that same
          standard arrives in Dubai, one more city in a growing global presence.
        </Reveal>

        <Reveal className={styles.route} delay={240}>
          <span className={styles.routeCity}>Toronto</span>
          <span className={styles.routeLine} aria-hidden="true">
            <span className={styles.routeDot} aria-hidden="true" />
          </span>
          <span className={styles.routeCity}>Dubai</span>
        </Reveal>

        <Reveal className={styles.locations} delay={320}>
          {LOCATIONS.map(({ name, Flag }) => (
            <span key={name} className={styles.locationPill}>
              <Flag className={styles.locationFlag} />
              {name}
            </span>
          ))}
        </Reveal>

        <Reveal as="p" className={styles.stat} delay={380}>
          17 locations across the globe
        </Reveal>
      </div>
    </section>
  );
}
