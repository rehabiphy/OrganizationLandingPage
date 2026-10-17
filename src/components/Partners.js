import { useState } from 'react';
import { PARTNER_TYPES, INTEREST_OPTIONS } from '../data.js';

function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend yet: confirm on screen. Hook this up to your API / form service.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div id="contact-form" className="contact-form contact-form--done" role="status">
        <div className="contact-form__title">Thank you!</div>
        <p className="body">
          Your enquiry has been received. Our team will get back to you shortly.
        </p>
        <button type="button" className="btn btn--light btn--md rh-btn" onClick={() => setSent(false)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form id="contact-form" className="contact-form" aria-label="Partnership enquiry" onSubmit={onSubmit}>
      <div className="contact-form__title">Start a conversation</div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="cf-name" className="label">Name</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className="field" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-org" className="label">Organization</label>
          <input id="cf-org" name="organization" type="text" required autoComplete="organization" className="field" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-email" className="label">Work email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@company.com"
          className="field"
        />
      </div>
      <div className="form-field">
        <label htmlFor="cf-interest" className="label">Partnership interest</label>
        <select id="cf-interest" name="interest" required defaultValue="" className="field">
          <option value="">Select an option</option>
          {INTEREST_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="cf-msg" className="label">Message</label>
        <textarea id="cf-msg" name="message" required rows="5" className="field field--area" />
      </div>
      <label className="consent">
        <input type="checkbox" required />
        <span>
          I agree that Rehabiphy Health Technologies may use these details only to respond to this
          enquiry, as described in the <a href="#privacy">Privacy Policy</a>.
        </span>
      </label>
      <button type="submit" className="btn btn--dark btn--square btn--block rh-btn">
        Send enquiry
      </button>
    </form>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="section section--grey section--bordered">
      <div className="container partners">
        <div className="partners__copy">
          <div className="eyebrow">PARTNERSHIPS &amp; COLLABORATION</div>
          <h2 className="h2">Let's Build Something Meaningful Together.</h2>
          <p className="body">
            We welcome conversations with healthcare organizations, technology providers, wellness
            brands, local businesses, distribution partners, and other organizations interested in
            collaborating with our growing digital ecosystem.
          </p>
          <div className="chips">
            {PARTNER_TYPES.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <div className="btn-row">
            <a href="#contact-form" className="btn btn--dark btn--lg rh-btn">Become a Partner</a>
            <a href="#contact-form" className="btn btn--light btn--lg rh-btn">Contact Our Team</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
