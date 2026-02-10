'use client';

import { useState } from 'react';
import { FaShoppingCart, FaCheck, FaHeart } from 'react-icons/fa';
import './AddToCartButton.css';
import { useCart } from '@/lib/CartContext';

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdding || justAdded) return;

    setIsAdding(true);

    // Simulate network / animation delay
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
      setJustAdded(true);

      // Reset after feedback
      setTimeout(() => setJustAdded(false), 1800);
    }, 500);
  };

  return (
    <button
      className={`cart-btn ${isAdding ? 'adding' : ''} ${justAdded ? 'added' : ''}`}
      onClick={handleAddToCart}
      disabled={isAdding || justAdded}
      aria-label={justAdded ? 'Added to cart' : 'Add to cart'}
      title={justAdded ? 'Added!' : 'Add to cart'}
    >
      {justAdded ? <FaCheck /> : <FaShoppingCart />}
    </button>
  );
}