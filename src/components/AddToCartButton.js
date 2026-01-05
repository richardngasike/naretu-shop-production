'use client';

import { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import './AddToCartButton.css';
import { useCart } from '@/lib/CartContext'; // adjust path if needed

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdding || added) return;

    setIsAdding(true);

    // Small delay for visual feedback
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
      setAdded(true);

      // Reset "Added" state after 2 seconds
      setTimeout(() => setAdded(false), 2000);
    }, 400);
  };

  return (
    <button
      className={`add-to-cart-btn ${isAdding ? 'adding' : ''} ${added ? 'added' : ''}`}
      onClick={handleAddToCart}
      disabled={isAdding || added}
      aria-label={added ? 'Added to cart' : 'Add to cart'}
    >
      <span className="btn-icon">
        {added ? <FaCheck /> : <FaShoppingCart />}
      </span>
      <span className="btn-text">
        {added ? 'Added!' : isAdding ? 'Adding...' : 'Add to Cart'}
      </span>
    </button>
  );
}