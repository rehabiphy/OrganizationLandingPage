import { WHY_ITEMS } from '../data.js';

export default function Why() {
  return (
    <section className="section section--white">
      <div className="container why">
        <div className="why__head">
          <div className="eyebrow">WHY OUR PRODUCTS</div>
          <h2 className="h2 h2--sm">Built around real needs, designed to grow.</h2>
        </div>
        <div className="grid grid--4">
          {WHY_ITEMS.map((item, i) => (
            <div key={item.title} className="card card--outline rh-card">
              <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="card__title card__title--sm">{item.title}</div>
              <div className="card__text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
