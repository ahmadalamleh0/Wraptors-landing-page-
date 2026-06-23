import React from 'react';
import styles from './DubaiEditionLine.module.css';

// Straight, engraved "DUBAI [flag] EDITION" mark — sits between the logo
// and the WRAPTORS MAFIA wordmark. No arc, no color treatment on the text.
const DubaiEditionLine = React.forwardRef(({ className }, ref) => (
  <div ref={ref} className={`${styles.line} ${className || ''}`}>
    <span className={styles.word}>Dubai</span>

    <svg className={styles.flag} viewBox="0 0 26 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0" y="0" width="6.5" height="16" fill="#CE1126" />
      <rect x="6.5" y="0" width="19.5" height="5.34" fill="#00732F" />
      <rect x="6.5" y="5.33" width="19.5" height="5.34" fill="#f5f3ef" />
      <rect x="6.5" y="10.66" width="19.5" height="5.34" fill="#0b0b0c" />
      <rect x="0" y="0" width="26" height="16" fill="none" stroke="rgba(245,243,239,0.35)" strokeWidth="0.6" />
    </svg>

    <span className={styles.word}>Edition</span>
  </div>
));

DubaiEditionLine.displayName = 'DubaiEditionLine';
export default DubaiEditionLine;
