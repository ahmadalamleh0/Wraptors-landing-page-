// Minimal line icons used for footer link buttons — single-color, stroke-based,
// no brand-logo replicas, just clean glyphs that read instantly at a glance.

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* speech-bubble silhouette with the classic bottom-left tail */}
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.5-1.2A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* handset / call glyph, same gesture as the WhatsApp mark */}
      <path
        d="M9 8.2c.4-.4 1-.4 1.3.1l.8 1.3c.2.3.1.7-.1.9l-.5.5c-.2.2-.2.5-.1.7.5.9 1.3 1.7 2.2 2.2.2.1.5.1.7-.1l.5-.5c.2-.2.6-.3.9-.1l1.3.8c.5.3.5.9.1 1.3-.6.6-1.5 1-2.4.7-1.7-.5-3.6-2.4-4.1-4.1-.3-.9.1-1.8.7-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5v5l5-2.5-5-2.5Z" fill="currentColor" />
    </svg>
  );
}

export function WaitlistIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3a4 4 0 0 0-4 4v3.3c0 .85-.3 1.67-.85 2.32L6 14.5h12l-1.15-1.88A4 4 0 0 1 16 10.3V7a4 4 0 0 0-4-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 17.3a2.5 2.5 0 0 0 5 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
