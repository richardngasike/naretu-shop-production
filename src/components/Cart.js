'use client';

import './Cart.css';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  // Safely update quantity: remove old item, add new with updated quantity
  const updateQuantity = (item, delta) => {
    const currentQty = item.quantity || 1;
    const newQty = currentQty + delta;

    if (newQty <= 0) {
      removeFromCart(item.cartId);
      return;
    }

    // Remove existing version
    removeFromCart(item.cartId);
    // Add updated version
    addToCart({ ...item, quantity: newQty });
  };

  // Calculate total in KSh
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Your Cart is Empty</h1>
        <p>Explore amazing deals and start adding items!</p>
        <Link href="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h1>

      <div className="cart-content">
        {/* Cart Items List */}
        <div className="cart-items">
          {cart.map((item) => {
            const qty = item.quantity || 1;
            return (
              <div key={item.cartId} className="cart-item-card">
                <div className="item-image-wrapper">
                  <Image
                    src={item.image || '/products/placeholder.jpg'}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="item-image"
                  />
                </div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">{formatPrice(item.price)}</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item, -1)} aria-label="Decrease quantity">
                    -
                  </button>
                  <span className="quantity-display">{qty}</span>
                  <button onClick={() => updateQuantity(item, 1)} aria-label="Increase quantity">
                    +
                  </button>
                </div>

                <p className="item-subtotal">{formatPrice(item.price * qty)}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.cartId)}
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <div className="summary-card">
            <h2>Order Summary</h2>

            <div className="summary-line">
              <span>Subtotal ({cart.length} items)</span>
              <span>{formatPrice(getTotal())}</span>
            </div>

            <div className="summary-line">
              <span>Delivery Fee</span>
              <span className="free-shipping">Free</span>
            </div>

            <div className="summary-line total">
              <strong>Total Amount</strong>
              <strong className="grand-total">{formatPrice(getTotal())}</strong>
            </div>

            {/* Payment Options - M-Pesa First (Kenya Priority) */}
            <div className="payment-options">
              <h3>Secure Payment Options</h3>

              <button className="pay-btn mpesa" onClick={() => alert('M-Pesa checkout coming soon!')}>
                <Image src="/icons/mpesa-logo.png" alt="M-Pesa" width={40} height={40} />
                Pay with M-Pesa
              </button>

              <button className="pay-btn card" onClick={() => alert('Card payment coming soon!')}>
                <Image src="/icons/card-logo.png" alt="Card" width={40} height={40} />
                Debit/Credit Card
              </button>

              <button className="pay-btn paypal" onClick={() => alert('PayPal checkout coming soon!')}>
                <Image src="/icons/paypal-logo.png" alt="PayPal" width={100} height={30} />
                Pay with PayPal
              </button>
            </div>

            <button
              className="checkout-btn"
              onClick={() => alert('Checkout feature launching soon! Stay tuned.')}
            >
              Proceed to Checkout
            </button>

            <Link href="/" className="continue-shopping-btn">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}