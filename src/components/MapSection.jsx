import Reveal from './Reveal';
import { ADDRESS, ADDRESS_MAPS_LINK, BRAND_NAME } from '../config';
import { ExternalLinkIcon } from './icons';
import styles from './MapSection.module.css';

// Free Google Maps "embed" URL — no API key required for this format.
// t=h gives satellite imagery with road/place labels (hybrid view).
// Google shows its own marker + place label for the queried address, so we
// don't duplicate that with our own card — just a small "open in maps" link.
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=h&z=15&output=embed`;

export default function MapSection() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={styles.mapWrap}>
        <iframe
          src={MAP_EMBED_SRC}
          className={styles.mapFrame}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${BRAND_NAME} location map`}
        />
        <div className={styles.mapVignette} aria-hidden="true" />

        <a
          href={ADDRESS_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.openInMaps}
        >
          <ExternalLinkIcon className={styles.openInMapsIcon} aria-hidden="true" />
          Open in Maps
        </a>
      </div>
    </Reveal>
  );
}
