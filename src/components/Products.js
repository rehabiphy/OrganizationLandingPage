import ProductCard from './ProductCard.js';
import { PRODUCTS } from '../data.js';

export default function Products() {
  return (
    <section id="products" className="section section--grey">
      <div className="container products__head">
        <div className="eyebrow">OUR PRODUCTS</div>
        <h2 className="h2 h2--xl">Three Products. One Technology Vision.</h2>
        <p className="body-lg products__lead">
          Explore our growing portfolio of digital platforms, each designed to solve a different
          problem while sharing a common commitment to useful, accessible technology.
        </p>
      </div>

      <div className="container products__list">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
