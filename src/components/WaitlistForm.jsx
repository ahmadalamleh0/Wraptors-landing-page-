import { useState } from 'react';
import { WHATSAPP_LINK } from '../config';
import styles from './WaitlistForm.module.css';

// Set VITE_WEB3FORMS_KEY in .env.local — get a free key at https://web3forms.com
const W3F_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';
const W3F_ENDPOINT = 'https://api.web3forms.com/submit';

const INITIAL_FIELDS = { name: '', email: '', phone: '', inquiry: '' };

export default function WaitlistForm({ isLaunched = false }) {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const submitLabel = isLaunched ? 'Request a Booking' : 'Join the Waitlist';
  const formSubject = isLaunched ? 'New Wraptors Dubai Booking Request' : 'New Wraptors Dubai Waitlist Submission';

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    const payload = {
      access_key: W3F_KEY,
      botcheck: '',
      subject: formSubject,
      from_name: 'Wraptors Dubai Waitlist',
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      message: fields.inquiry.trim() || '(none)',
    };

    try {
      const res = await fetch(W3F_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFields(INITIAL_FIELDS);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('[Waitlist] Submission failed:', err);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <p>You're on the list. We'll be in touch before launch.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Honeypot — hidden from real users, bots fill it in */}
      <input
        type="checkbox"
        name="botcheck"
        className={styles.botcheck}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="name"
          value={fields.name}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          value={fields.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone"
          autoComplete="tel"
          value={fields.phone}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="inquiry"
          placeholder="Vehicle / Inquiry (optional)"
          value={fields.inquiry}
          onChange={handleChange}
        />
      </div>

      <button className={styles.submit} type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : submitLabel}
      </button>

      {status === 'error' && (
        <p className={styles.error}>
          Something went wrong — please try again, or{' '}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.errorLink}
          >
            message us directly on WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
