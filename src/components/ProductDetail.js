// components/ProductDetail.jsx
import './ProductDetail.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AddToCartButton from './AddToCartButton';
import { FiShare2, FiHeart } from 'react-icons/fi';
import Link from 'next/link';

export default function ProductDetail({ product }) {
  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images?.[0] || product.image);
  const [activeTab, setActiveTab] = useState('description');

  const price = selectedVariant?.price || product.price;
  const originalPrice = selectedVariant?.originalPrice || product.originalPrice;
  const stock = selectedVariant?.stock ?? product.stock ?? 0;
  const inStock = stock > 0;
  const lowStock = inStock && stock <= 5;

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    if (variant?.image) setMainImage(variant.image);
  };

  const increaseQty = () => {
    if (quantity < stock) setQuantity((q) => q + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  // Optional smooth scroll to top on variant change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedVariant]);

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <Link href="/">Home</Link> /{' '}
          <Link href={`/category/${product.category?.toLowerCase() || 'all'}`}>
            {product.category || 'Category'}
          </Link>{' '}
          / <span>{product.name}</span>
        </nav>

        <div className="product-main-grid">
          {/* Images */}
          <div className="product-images-section">
            <div className="main-image-container">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="main-image"
                priority
              />
            </div>

            {product.images?.length > 1 && (
              <div className="thumbnail-row">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                    onClick={() => setMainImage(img)}
                    type="button"
                    aria-label={`View image ${idx + 1}`}
                  >
                    <Image src={img} alt="" width={90} height={90} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>

            <div className="price-block">
              <div className="current-price">KSh {price.toLocaleString()}</div>
              {originalPrice && originalPrice > price && (
                <div className="price-comparison">
                  <span className="old-price">KSh {originalPrice.toLocaleString()}</span>
                  <span className="discount-badge">
                    {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
                  </span>
                </div>
              )}
            </div>

            <div className={`stock-indicator ${inStock ? 'in-stock' : 'out-of-stock'}`}>
              {inStock ? (
                lowStock ? (
                  <span>Only {stock} left – order soon!</span>
                ) : (
                  <span>In Stock</span>
                )
              ) : (
                <span>In stock...</span>
              )}
            </div>

            {/* Variants */}
            {product.variants?.length > 0 && (
              <div className="variants-container">
                {product.colors?.length > 0 && (
                  <div className="variant-row color-row">
                    <label>Color</label>
                    <div className="color-options">
                      {product.colors.map((color) => {
                        const variant = product.variants.find((v) => v.color === color);
                        return (
                          <button
                            key={color}
                            className={`color-circle ${selectedVariant?.color === color ? 'selected' : ''}`}
                            style={{ backgroundColor: color.toLowerCase() }}
                            onClick={() => variant && handleVariantChange(variant)}
                            title={color}
                            type="button"
                            aria-label={`Select ${color}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {product.sizes?.length > 0 && (
                  <div className="variant-row size-row">
                    <label>Size</label>
                    <div className="size-options">
                      {product.sizes.map((size) => {
                        const variant = product.variants.find((v) => v.size === size);
                        const available = variant?.stock > 0;
                        return (
                          <button
                            key={size}
                            className={`size-pill ${selectedVariant?.size === size ? 'selected' : ''} ${
                              !available ? 'disabled' : ''
                            }`}
                            onClick={() => available && handleVariantChange(variant)}
                            disabled={!available}
                            type="button"
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quantity & Actions */}
            {inStock && (
              <div className="purchase-controls">
                <div className="quantity-field">
                  <label htmlFor="qty">Qty</label>
                  <div className="qty-buttons">
                    <button onClick={decreaseQty} disabled={quantity <= 1} type="button">
                      −
                    </button>
                    <input
                      id="qty"
                      type="number"
                      min="1"
                      max={stock}
                      value={quantity}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (val >= 1 && val <= stock) setQuantity(val);
                      }}
                    />
                    <button onClick={increaseQty} disabled={quantity >= stock} type="button">
                      +
                    </button>
                  </div>
                </div>

                <div className="action-buttons">
                  <AddToCartButton
                    product={product}
                    variant={selectedVariant}
                    quantity={quantity}
                  />
                  <button className="wishlist-btn" type="button" title="Add to Wishlist">
                    <FiHeart />
                  </button>
                </div>
              </div>
            )}

            {!inStock && (
              <div className="out-of-stock-message">
                Contact us to place your order.
              </div>
            )}

            {/* Share & Trust signals */}
            <div className="extra-info">
              <div className="share-row">
                <span>Share:</span>
                <button className="share-btn">
                  <FiShare2 />
                </button>
              </div>

              <div className="trust-row">
                <div>✓ Free delivery over KSh 5,000</div>
        
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'specs' ? 'active' : ''}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (5)
            </button>
          </div>

          <div className="tab-panel">
            {activeTab === 'description' && (
              <div className="description-content">
                <p>{product.description || 'No description available.'}</p>
                <ul className="feature-list">
                  <li>High Quality Product</li>
                  <li>Fast delivery within Nairobi</li>
                  <li>Compatible with most devices</li>
                </ul>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="specs-content">
                <table className="specs-table">
                  <tbody>
                    <tr><th>Brand</th><td>{product.brand || 'N/A'}</td></tr>
                    <tr><th>Model</th><td>{product.model || 'N/A'}</td></tr>
                    <tr><th>Weight</th><td>{product.weight || 'N/A'}</td></tr>
                    <tr><th>Warranty</th><td>1 Year</td></tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-placeholder">
                <p>John Kimani - Naretu is Top-norch</p>
                <p>Kaguta - i Wish I knew Naretu long ago, saved my life!</p>
                <p>Josyy- I received my laptop on time!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sticky add-to-cart bar */}
      <div className="mobile-sticky-bar">
        <div className="price-qty">
          <div className="sticky-price">KSh {price.toLocaleString()}</div>
          {inStock && (
            <div className="mini-qty">
              <button onClick={decreaseQty} disabled={quantity <= 1}>−</button>
              <span>{quantity}</span>
              <button onClick={increaseQty} disabled={quantity >= stock}>+</button>
            </div>
          )}
        </div>
        {inStock && (
          <AddToCartButton
            product={product}
            variant={selectedVariant}
            quantity={quantity}
          />
        )}
      </div>
    </div>
  );
}