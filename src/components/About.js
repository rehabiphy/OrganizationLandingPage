import { ABOUT_PILLARS } from '../data.js';
import { pillarIcons } from './Icons.js';

export default function About() {
  return (
    <section id="about" className="section section--white section--bordered">
      <div className="container about">
        <div className="split">
          <div className="split__head">
            <div className="eyebrow">ABOUT THE COMPANY</div>
            <h2 className="h2">Technology With a Purpose.</h2>
          </div>
          <div className="split__body body-lg">
            <p>
              Rehabiphy Health Technologies Private Limited is building a portfolio of digital
              products designed to address meaningful everyday challenges. Our approach combines
              technology, user-focused design, and scalable digital platforms to make rehabilitation
              more accessible, personal health information easier to manage, and local communities
              more connected.
            </p>
            <p>
              Through our growing product ecosystem, we aim to create practical digital experiences
              that deliver value to individuals, professionals, and communities.
            </p>
          </div>
        </div>

        <div className="grid grid--3">
          {ABOUT_PILLARS.map((p) => {
            const Icon = pillarIcons[p.icon];
            return (
              <div key={p.title} className={`card card--tint rh-card t-${p.product}`}>
                <span className="icon-tile">
                  <Icon />
                </span>
                <div className="card__title">{p.title}</div>
                <div className="card__text">{p.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
