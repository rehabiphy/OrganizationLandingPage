import { LogoMark } from './Logo.js';
import PlayStoreButton from './PlayStoreButton.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <LogoMark light />
              <span className="footer__company">Rehabiphy Health Technologies Private Limited</span>
            </div>
            <p className="footer__about">
              Building digital platforms for healthcare, personal health management, and community
              connectivity.
            </p>
            <PlayStoreButton variant="outline" />
            <p className="footer__legal">[Registered office address] · CIN: [CIN]</p>
          </div>
          <nav aria-label="Products" className="footer__col">
            <span className="footer__heading">PRODUCTS</span>
            <a href="#rehabefy">Rehabefy</a>
            <a href="#myhealthbook">MyHealthBook</a>
            <a href="#nukkd">NUKKD — Launching Soon</a>
          </nav>
          <nav aria-label="Company" className="footer__col">
            <span className="footer__heading">COMPANY</span>
            <a href="#about">About Us</a>
            <a href="#partners">Partnerships</a>
            <a href="#contact-form">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </nav>
        </div>
        <div className="footer__bottom">
          © {year} Rehabiphy Health Technologies Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
