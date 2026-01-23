import './ProductCard.css';
import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      
      {/* Product Image */}
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          priority={false}
        />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="price">Ksh {product.price.toLocaleString()}</p>

        <Link
          href={`/product/${product.id}`}
          className="view-details"
        >
          View Details
        </Link>

        <AddToCartButton product={product} />
      </div>

    </div>
  );
}
