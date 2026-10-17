import PhoneFrame from './PhoneFrame.js';
import PlayStoreButton from './PlayStoreButton.js';
import { ArrowIcon } from './Icons.js';
import { PRODUCTS } from '../data.js';

const [rehabefy, myhealthbook, nukkd] = PRODUCTS;

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="pill">
            <span className="pill__dot" />
            ONE COMPANY. MULTIPLE DIGITAL PLATFORMS.
          </div>
          <h1 className="hero__title">Building Digital Products for a Better, More Connected Life.</h1>
          <p className="hero__lead">
            Rehabiphy Health Technologies Private Limited builds technology-driven platforms that help
            people improve their health, manage their medical information, and connect with
            opportunities in their local communities.
          </p>
          <div className="btn-row">
            <a href="#products" className="btn btn--dark btn--lg btn--shadow rh-btn">
              Explore Our Products <ArrowIcon />
            </a>
            <a href="#partners" className="btn btn--light btn--lg rh-btn">
              Partner With Us
            </a>
          </div>
          <div className="hero__store">
            <PlayStoreButton />
            <span className="hero__store-note">Rehabefy is available on Android</span>
          </div>
          <ul className="hero__legend">
            <li className="t-rehabefy">
              <span className="swatch" />
              Rehabefy
            </li>
            <li className="t-myhealthbook">
              <span className="swatch" />
              MyHealthBook
            </li>
            <li className="t-nukkd">
              <span className="swatch" />
              NUKKD · launching soon
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="phones">
            <div className="phones__item phones__item--left rh-float-a t-myhealthbook">
              <PhoneFrame src={myhealthbook.screen} alt={myhealthbook.screenAlt} size="sm" />
              <div className="phones__label">MyHealthBook</div>
            </div>
            <div className="phones__item phones__item--right rh-float-b t-nukkd">
              <PhoneFrame src={nukkd.screen} alt={nukkd.screenAlt} size="sm" />
              <div className="phones__label">NUKKD</div>
            </div>
            <div className="phones__item phones__item--center rh-float-c t-rehabefy">
              <PhoneFrame src={rehabefy.screen} alt={rehabefy.screenAlt} size="lg" />
              <div className="phones__label">Rehabefy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
