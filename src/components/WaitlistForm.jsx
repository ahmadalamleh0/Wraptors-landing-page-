import { useState } from 'react';
import { FORM_ENDPOINT } from '../config';
import styles from './WaitlistForm.module.css';

const INITIAL_FIELDS = { name: '', email: '', phone: '', inquiry: '' };

export default function WaitlistForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    // Placeholder mode: no endpoint configured yet, so just simulate success.
    // Once FORM_ENDPOINT is set in src/config.js, this will POST there instead
    // (works as-is with Formspree / Netlify Forms style endpoints).
    if (!FORM_ENDPOINT) {
      console.info('[Waitlist] Placeholder submission (no FORM_ENDPOINT set):', fields);
      setTimeout(() => {
        setStatus('success');
        setFields(INITIAL_FIELDS);
      }, 400);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFields(INITIAL_FIELDS);
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
          placeholder="Vehicle / Inquiry"
          value={fields.inquiry}
          onChange={handleChange}
        />
      </div>

      <button className={styles.submit} type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Join the Waitlist'}
      </button>

      {status === 'error' && (
        <p className={styles.error}>Something went wrong. Please try again, or message us on WhatsApp.</p>
      )}
    </form>
  );
}
