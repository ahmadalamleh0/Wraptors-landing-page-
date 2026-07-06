// ──────────────────────────────────────────────────────────────────────────
// Wraptors Dubai — site-wide settings
// Everything you're likely to change before/after launch lives here.
// ──────────────────────────────────────────────────────────────────────────

// Launch date/time. Format: 'YYYY-MM-DDTHH:mm:ss+04:00' (Dubai/Gulf time).
// The site automatically switches from "coming soon" to "open" on this date —
// no code changes needed on launch day.
export const LAUNCH_DATE = '2026-09-22T00:00:00+04:00';

// Short copy that appears near the countdown and in the footer.
export const OPENING_TAGLINE = 'Opening September 2026 · Dubai';

// ── Contact ───────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = '971502532392';
export const WHATSAPP_MESSAGE = "Hi Wraptors, I'd like to know more about the Dubai location.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const BOOKING_MESSAGE = "Hi Wraptors Dubai, I'd like to book a service.";
export const BOOKING_WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`;

export const PHONE_DISPLAY = '+971 50 253 2392';
export const PHONE_LINK = 'tel:+971502532392';

// ── Post-launch store info — fill in before launch day ────────────────────

export const STORE_ADDRESS_LINE1 = 'Address TBC';  // e.g. 'Unit 4, Al Quoz Industrial Area 1'
export const STORE_ADDRESS_LINE2 = 'Dubai, UAE';
export const STORE_ADDRESS_MAPS = 'https://maps.google.com/?q=Wraptors+Dubai';
export const STORE_HOURS = 'Mon – Sat · 10:00 AM – 7:00 PM';

// ── Social links ──────────────────────────────────────────────────────────
// instagram points to the Toronto account — update to Dubai when @wraptorsdubai is live.
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/wraptors.toronto/?hl=en',
  instagramLabel: 'Follow Wraptors Toronto',
  tiktok: '#',
  youtube: 'https://www.youtube.com/@TorontoWraptors',
};

// ── Misc ──────────────────────────────────────────────────────────────────

export const BRAND_NAME = 'Wraptors Dubai';

// Waitlist form submission (Web3Forms). Set VITE_WEB3FORMS_KEY in .env.local.
// Kept here for reference; the component reads the env var directly.
export const FORM_ENDPOINT = '';
