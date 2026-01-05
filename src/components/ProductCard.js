import './ProductCard.css';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Ksh{product.price}</p>
      <Link href={`/product/${product.id}`}>View Details</Link>
      <AddToCartButton product={product} />
    </div>
  );
}