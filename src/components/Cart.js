'use client';
import './Cart.css';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';
import { useState } from 'react';

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(''); // 'mpesa' or 'card'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');

  // Safely update quantity
  const updateQuantity = (item, delta) => {
    const currentQty = item.quantity || 1;
    const newQty = currentQty + delta;
    if (newQty <= 0) {
      removeFromCart(item.cartId);
      return;
    }
    removeFromCart(item.cartId);
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

  const openPaymentModal = (method) => {
    setSelectedMethod(method);
    setPaymentModalOpen(true);
  };

  const closeModal = () => {
    setPaymentModalOpen(false);
    setSelectedMethod('');
    setPhoneNumber('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setCardName('');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (selectedMethod === 'mpesa') {
      if (!phoneNumber.trim()) {
        alert('Please enter a valid phone number');
        return;
      }
      alert(`Initiating M-Pesa payment of ${formatPrice(getTotal())} to ${phoneNumber}... (Demo only)`);
    } else if (selectedMethod === 'card') {
      if (!cardNumber.trim() || !expiry.trim() || !cvv.trim() || !cardName.trim()) {
        alert('Please fill in all card details');
        return;
      }
      alert(`Processing card payment of ${formatPrice(getTotal())}... (Demo only)`);
    }
    closeModal();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Your Cart is Empty</h1>
        <p>Explore amazing deals and start adding items!</p>
        <Link href="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
        <div className='refresh'>Refresh if Cart not displaying</div>
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

            {/* Payment Options */}
            <div className="payment-options">
              <h3>Secure Payment Options</h3>
               <div className='payment-buttons'>
                <button className="pay-btn mpesa" onClick={() => openPaymentModal('mpesa')}>
                <Image src="/mpesa-logo.png" alt="M-Pesa" width={150} height={50} />
              </button>
              <button className="pay-btn card" onClick={() => openPaymentModal('card')}>
                <Image src="/card-logo-icon.png" alt="Card" width={200} height={100} />
              </button>
              <button className="pay-btn paypal" onClick={() => alert('PayPal checkout coming soon!')}>
                <Image src="/paypal.png" alt="PayPal" width={100} height={30} />
              </button>

               </div>
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

      {/* Payment Modal */}
      {paymentModalOpen && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>Complete Payment - {formatPrice(getTotal())}</h2>
            <p>Pay with {selectedMethod === 'mpesa' ? 'M-Pesa' : 'Credit/Debit Card'}</p>

            <form onSubmit={handlePaymentSubmit}>
              {selectedMethod === 'mpesa' && (
                <div className="form-group">
                  <label htmlFor="phone">M-Pesa Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="e.g. 07XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <small>Enter the phone number registered with M-Pesa</small>
                </div>
              )}

              {selectedMethod === 'card' && (
                <>
                  <div className="form-group">
                    <label htmlFor="cardName">Name on Card</label>
                    <input
                      type="text"
                      id="cardName"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      maxLength="19"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="expiry">Expiry Date</label>
                      <input
                        type="text"
                        id="expiry"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group half">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength="4"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="confirm-pay-btn">
                  Pay {formatPrice(getTotal())}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}