import './Section.css';
import ProductCard from './ProductCard';

export default function Section({ title, products }) {
  return (
    <section className="content-section">
      <h2>{title}</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}