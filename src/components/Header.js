import { useEffect, useState } from 'react';
import Logo from './Logo.js';
import { MenuIcon } from './Icons.js';
import { NAV_LINKS } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape or when the screen grows to desktop size.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 861px)');
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <nav aria-label="Main" className="header__nav container">
        <Logo />

        <div className="header__links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="header__actions">
          <a href="#partners" className="btn btn--dark btn--sm rh-btn header__cta">
            Partner With Us
          </a>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <div className="container mobile-menu__inner">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#partners" className="btn btn--dark rh-btn" onClick={close}>
            Partner With Us
          </a>
        </div>
      </div>
    </header>
  );
}
