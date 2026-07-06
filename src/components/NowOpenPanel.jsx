import {
  BOOKING_WHATSAPP_LINK,
  PHONE_DISPLAY,
  PHONE_LINK,
  STORE_ADDRESS_LINE1,
  STORE_ADDRESS_LINE2,
  STORE_ADDRESS_MAPS,
  STORE_HOURS,
} from '../config';
import styles from './NowOpenPanel.module.css';

export default function NowOpenPanel() {
  return (
    <div className={styles.panel}>
      <p className={styles.kicker}>We&rsquo;re Open</p>
      <h2 className={styles.headline}>Now Open in Dubai</h2>

      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Location</span>
          <a
            href={STORE_ADDRESS_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.detailValue}
          >
            {STORE_ADDRESS_LINE1}<br />{STORE_ADDRESS_LINE2}
          </a>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Hours</span>
          <span className={styles.detailValue}>{STORE_HOURS}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <a
          href={BOOKING_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionPrimary}
        >
          Book via WhatsApp
        </a>
        <a href={PHONE_LINK} className={styles.actionSecondary}>
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
