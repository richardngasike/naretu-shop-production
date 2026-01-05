import './DealsSection.css';
import ProductCard from './ProductCard';

export default function DealsSection({ products }) {
  return (
    <section className="deals-section">
      <h2>Featured Deals</h2>
      <div className="deals-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}