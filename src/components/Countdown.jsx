import { Fragment, useEffect, useState } from 'react';
import styles from './Countdown.module.css';

function getTimeLeft(targetDate) {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className={styles.panel}>
      <p className={styles.kicker}>Launching In</p>

      <div className={styles.countdown} role="timer" aria-live="off">
        {UNITS.map(({ key, label }, i) => {
          const value = String(timeLeft[key]).padStart(2, '0');
          return (
            <Fragment key={key}>
              <div className={styles.unit}>
                <span className={styles.valueWrap}>
                  {/* remounting on value change retriggers the CSS tick-in animation */}
                  <span key={value} className={styles.value}>{value}</span>
                </span>
                <span className={styles.label}>{label}</span>
              </div>
              {i < UNITS.length - 1 && <span className={styles.divider} aria-hidden="true" />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
