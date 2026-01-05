import './ProductDetail.css';
import AddToCartButton from './AddToCartButton';

export default function ProductDetail({ product }) {
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}