import './ProductCard.css';
import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';
import WishlistButton from './WishlistButton';   // ← new component

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`} className="product-image-link">
        <div className="product-image-wrapper">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 480px) 45vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="product-image object-cover transition-transform duration-500 group-hover:scale-105"
            quality={82}
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </Link>

    
      <div className="product-content">
        <h3 className="product-title">
          <Link href={`/product/${product.id}`} className="line-clamp-2">
            {product.name}
          </Link>
        </h3>

        <div className="price-row">
          <span className="current-price">
            KSh {product.price.toLocaleString()}
          </span>
        </div>

        {/* Centered action buttons: cart + wishlist */}
        <div className='buttons-bg'>
           <div className="action-area">
          <div className="action-buttons">
            <WishlistButton product={product} />
            <AddToCartButton product={product} title='Add to Cart' />          
          </div>
            <Link href={`/product/${product.id}`} className="details-btn-link">
           <button className='details-btn' title='Product Details'>Details</button>
           </Link>  
        </div>      
        </div>
      </div>
    </div>
  );
}