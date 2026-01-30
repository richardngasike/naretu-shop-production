
import './ProductDetail.css';
import Image from 'next/image';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';

export default function ProductDetail({ product }) {
  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  // Example: variants structure → adapt to your actual product data
  // product.variants = [{ id:1, color:'Black', size:'M', price:2499, stock:12, image:'/black-m.jpg' }, ...]
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images?.[0] || product.image);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    if (variant.image) setMainImage(variant.image);
  };

  const increaseQty = () => {
    if (quantity < (selectedVariant?.stock || 999)) setQuantity(qty => qty + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(qty => qty - 1);
  };

  const price = selectedVariant?.price || product.price;
  const inStock = (selectedVariant?.stock ?? product.stock ?? 0) > 0;

  return (
    <div className="product-detail-container">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        Home / {product.category || 'Category'} / <span>{product.name}</span>
      </nav>

      <div className="product-layout">
        {/* Left: Images */}
        <div className="product-images">
          <div className="main-image-wrapper">
            <Image
              src={mainImage}
              alt={product.name}
              width={300}
              height={300}
              priority
              className="main-product-image"
            />
          </div>

          {product.images?.length > 1 && (
            <div className="thumbnail-gallery">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                  onClick={() => setMainImage(img)}
                  type="button"
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    width={100}
                    height={100}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Actions */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="price-section">
            <span className="current-price">Ksh {price.toLocaleString()}</span>
            {product.originalPrice && price < product.originalPrice && (
              <>
                <span className="original-price">Ksh {product.originalPrice.toLocaleString()}</span>
                <span className="discount">
                  {Math.round((1 - price / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          {/* Stock status */}
          <div className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
            {inStock ? `In Stock (${selectedVariant?.stock || product.stock || '?'})` : 'Out of Stock'}
          </div>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="variants">
              {/* Colors */}
              {product.colors?.length > 0 && (
                <div className="variant-group">
                  <label>Color:</label>
                  <div className="color-swatches">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`color-swatch ${selectedVariant?.color === color ? 'active' : ''}`}
                        style={{ backgroundColor: color.toLowerCase() }}
                        onClick={() => {
                          const variant = product.variants.find(v => v.color === color);
                          if (variant) handleVariantChange(variant);
                        }}
                        title={color}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes?.length > 0 && (
                <div className="variant-group">
                  <label>Size:</label>
                  <div className="size-buttons">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-btn ${selectedVariant?.size === size ? 'active' : ''}`}
                        onClick={() => {
                          const variant = product.variants.find(v => v.size === size);
                          if (variant) handleVariantChange(variant);
                        }}
                        disabled={!product.variants.some(v => v.size === size && v.stock > 0)}
                        type="button"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quantity */}
          {inStock && (
            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="qty-controls">
                <button onClick={decreaseQty} disabled={quantity <= 1} type="button">-</button>
                <span>{quantity}</span>
                <button onClick={increaseQty} disabled={quantity >= (selectedVariant?.stock || 999)} type="button">+</button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="product-actions">
            <AddToCartButton
              product={product}
              variant={selectedVariant}
              quantity={quantity}
              disabled={!inStock}
            />

            <button className="wishlist-btn" type="button">
              ♡ Add to Wishlist
            </button>
          </div>

          {/* Trust signals */}
          <div className="trust-badges">
            <div>✓ Free Shipping on orders over Ksh 5,000</div>
            <div>✓ 7-Day Easy Returns</div>
            <div>✓ Secure Payment</div>
          </div>

          {/* Social share (basic) */}
          <div className="social-share">
            Share: 
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Tabs / Extra Info */}
      <div className="product-tabs">
        <div className="tabs-header">
          <button className="tab active">Description</button>
          <button className="tab">Specifications</button>
          <button className="tab">Reviews (0)</button>
        </div>

        <div className="tab-content">
          <div className="description">
            <p>{product.description}</p>
            {/* You can add more rich content here – bullet points, tables, etc. */}
            <ul>
              <li>High-quality material</li>
              <li>Comfortable fit</li>
              <li>Made in Kenya</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products (placeholder) */}
      <section className="related-products">
        <h2>You May Also Like</h2>
        <div className="related-grid">
          {/* Render 4 related product cards here in real implementation */}
          <div className="placeholder-card">Related Product 1</div>
          <div className="placeholder-card">Related Product 2</div>
          <div className="placeholder-card">Related Product 3</div>
          <div className="placeholder-card">Related Product 4</div>
        </div>
      </section>
    </div>
  );
}