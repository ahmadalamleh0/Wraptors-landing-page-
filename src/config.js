// ──────────────────────────────────────────────────────────────────────────
// Wraptors Dubai — Coming Soon page settings
// Everything you're likely to change before/after launch lives here.
// ──────────────────────────────────────────────────────────────────────────

// Launch date/time used by the countdown. Update this when the real date
// is confirmed. Format: 'YYYY-MM-DDTHH:mm:ss+04:00' (+04:00 = Dubai/Gulf time).
export const LAUNCH_DATE = '2026-09-22T00:00:00+04:00';

// WhatsApp number in international format, digits only (no +, spaces, dashes).
export const WHATSAPP_NUMBER = '971502532392';
export const WHATSAPP_MESSAGE = "Hi Wraptors, I'd like to know more about the Dubai location.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Main phone number — shown as-is on the page, and used for the tel: link.
export const PHONE_DISPLAY = '+971 50 253 2392';
export const PHONE_LINK = 'tel:+971502532392';

// Studio address — shown in the footer and linked out to Google Maps.
export const ADDRESS = '32 9B St - Al Qouz Ind. Fourth - Al Quoz - Dubai - United Arab Emirates';
export const ADDRESS_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

// Social links — swap '#' for the real URLs when ready.
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/wraptors.toronto/?hl=en',
  tiktok: '#',
  youtube: 'https://www.youtube.com/@TorontoWraptors',
};

// Waitlist form submission endpoint.
// Leave empty to run in placeholder mode (shows a success message, logs to console).
// To go live, point this at a Formspree/Netlify Forms endpoint, e.g.
//   'https://formspree.io/f/your-form-id'
export const FORM_ENDPOINT = '';

export const BRAND_NAME = 'Wraptors Dubai';
