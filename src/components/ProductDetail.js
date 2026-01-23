import './ProductDetail.css';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

export default function ProductDetail({ product }) {
  if (!product) {
    return <p className="product-not-found">Product not found</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">

        {/* Product Image */}
        <div className="product-detail-image">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Product Info */}
        <div className="product-detail-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">Ksh {product.price.toLocaleString()}</p>
          <p className="product-description">{product.description}</p>

          <AddToCartButton product={product} />
        </div>

      </div>
    </div>
  );
}
