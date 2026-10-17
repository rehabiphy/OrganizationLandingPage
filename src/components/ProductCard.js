import { useState } from 'react';
import PhoneFrame from './PhoneFrame.js';
import PlayStoreButton from './PlayStoreButton.js';
import { ArrowIcon, CheckIcon, HealthBookIcon } from './Icons.js';
import { PLAY_STORE_URL } from '../data.js';

function ProductIcon({ product }) {
  if (product.logo) {
    return <img src={product.logo} alt={`${product.name} logo`} className="product__logo" />;
  }
  if (product.icon === 'healthbook') {
    return (
      <span className="product__logo product__logo--tile">
        <HealthBookIcon />
      </span>
    );
  }
  return (
    <span className="product__logo product__logo--nukkd" aria-hidden="true">
      n<span>d</span>
    </span>
  );
}

function LaunchForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form className="launch-form" aria-label="Get NUKKD launch updates" onSubmit={onSubmit}>
      <label htmlFor="nukkd-email" className="label">
        Get launch updates
      </label>
      {sent ? (
        <p className="form-success" role="status">
          Thanks! We'll email you when NUKKD launches in your area.
        </p>
      ) : (
        <div className="launch-form__row">
          <input
            id="nukkd-email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="field"
          />
          <button type="submit" className="btn btn--product btn--square rh-btn">
            Get Launch Updates
          </button>
        </div>
      )}
      <div className="hint">One email when NUKKD launches in your area. Unsubscribe anytime.</div>
    </form>
  );
}

export default function ProductCard({ product }) {
  return (
    <article
      id={product.id}
      className={`product t-${product.id} ${product.reverse ? 'product--reverse' : ''}`}
    >
      <div className="product__content">
        <div className="product__meta">
          <ProductIcon product={product} />
          <div className="product__category">{product.category.toUpperCase()}</div>
          {product.launchingSoon && (
            <span className="badge">
              <span className="badge__dot" />
              LAUNCHING SOON
            </span>
          )}
        </div>

        <div>
          <h3 className="product__name">{product.name}</h3>
          <div className="product__tagline">{product.tagline}</div>
        </div>

        <p className="product__desc">{product.description}</p>

        <ul className="checklist">
          {product.features.map((f) => (
            <li key={f}>
              <span className="checklist__icon">
                <CheckIcon />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {product.launchingSoon && <LaunchForm />}

        {product.cta && (
          <div className="btn-row">
            {product.playStore ? (
              <>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--product btn--md rh-btn"
                >
                  {product.cta} <ArrowIcon />
                </a>
                <PlayStoreButton />
              </>
            ) : (
              <a href={`#${product.id}`} className="btn btn--product btn--md rh-btn">
                {product.cta} <ArrowIcon />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="product__visual">
        <PhoneFrame src={product.screen} alt={product.screenAlt} size="md" />
      </div>
    </article>
  );
}
