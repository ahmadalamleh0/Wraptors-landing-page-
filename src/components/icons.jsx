// Minimal line icons used for footer link buttons — single-color, stroke-based,
// no brand-logo replicas, just clean glyphs that read instantly at a glance.
// WhatsAppIcon is the one exception: rendered in the real brand colors since
// that green-circle-plus-handset mark is what makes it instantly recognizable.

export function WhatsAppIcon({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...rest}>
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        d="M8.4 7.7c.4-.4 1-.4 1.3.1l1 1.6c.2.4.2.8-.1 1.1l-.6.7c-.2.2-.2.6 0 .8.7 1.1 1.7 2.1 2.8 2.8.2.2.6.1.8-.1l.7-.6c.3-.3.7-.3 1.1-.1l1.6 1c.5.3.6.9.1 1.3-.7.7-1.8 1.2-2.9.8-2.1-.6-4.4-2.9-5-5-.4-1.1.1-2.2.8-2.9Z"
        fill="#fff"
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

export function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9.5 5.5h-3A2 2 0 0 0 4.5 7.5v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 4.5h5v5M19.2 4.8l-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
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
