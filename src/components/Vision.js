import { LogoMark } from './Logo.js';
import { PRODUCTS, PLAY_STORE_URL } from '../data.js';

export default function Vision() {
  return (
    <section id="vision" className="section section--navy">
      <div className="container vision">
        <div className="split split--end">
          <div className="split__head">
            <div className="eyebrow eyebrow--gold">OUR VISION</div>
            <h2 className="h2">Building an Ecosystem of Useful Digital Experiences.</h2>
          </div>
          <div className="split__body vision__body">
            <p>
              We believe technology should make everyday tasks simpler and more accessible. Our
              vision is to build a portfolio of digital platforms that address different user needs
              while maintaining a consistent focus on usability, innovation, and long-term value.
            </p>
            <p>
              From rehabilitation and personal health management to neighbourhood connectivity, each
              product represents a distinct opportunity to create meaningful digital experiences.
            </p>
          </div>
        </div>

        <div
          className="eco"
          role="img"
          aria-label="Diagram: Rehabiphy Health Technologies is the parent company of three products — Rehabefy, MyHealthBook and NUKKD"
        >
          <div className="eco__parent">
            <LogoMark size={44} light />
            <div className="eco__parent-text">
              <span className="eco__parent-name">Rehabiphy Health Technologies</span>
              <span className="eco__parent-sub">Parent company · Private Limited</span>
            </div>
          </div>
          <div className="eco__stem" />
          <div className="eco__children">
            <div className="eco__bar" />
            <div className="eco__grid">
              {PRODUCTS.map((p) => (
                <div key={p.id} className={`eco__col t-${p.id}`}>
                  <div className="eco__drop" />
                  <div className="eco__card">
                    <span className="eco__name">{p.name}</span>
                    <span className="eco__desc">{p.short}</span>
                    {p.playStore ? (
                      <a
                        href={PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eco__status eco__status--link"
                      >
                        LIVE · GOOGLE PLAY ↗
                      </a>
                    ) : (
                      <span className={`eco__status ${p.launchingSoon ? 'eco__status--soon' : ''}`}>
                        {p.status.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
