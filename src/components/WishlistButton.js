'use client';

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './WishlistButton.css';

export default function WishlistButton({ product }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    // Later: save to real wishlist (localStorage, context, API...)
  };

  return (
    <button
      className={`wishlist-btn ${liked ? 'liked' : ''}`}
      onClick={handleClick}
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      title={liked ? "In wishlist" : "Add to wishlist"}
    >
      <FaHeart />
    </button>
  );
}