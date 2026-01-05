'use client';

import { useState, useEffect, useRef } from 'react';
import './Header.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaTiktok, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '@/lib/CartContext';
import products from '@/data/products'; // Import all products
import { useRouter } from 'next/navigation';

export default function Header() {
  const { cart } = useCart();
  const cartCount = cart.length;
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  // Live filtering as user types
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
      setShowDropdown(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );

    setFilteredProducts(results.slice(0, 8)); // Limit to 8 results
    setShowDropdown(true);
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductClick = (productId) => {
    setSearchQuery('');
    setShowDropdown(false);
    router.push(`/product/${productId}`);
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <header className="header" ref={searchRef}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <Link href="/sell" className="top-item">Sell on Naretu</Link>
          <a href="tel:+254718959781" className="top-item phone-item">
            📞 +254718959781
          </a>
          <div className="social-links">
            <a href="https://tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/254718959781" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="main-header-content">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image
              src="/naretulogo.png"
              alt="Naretu Logo"
              width={180}
              height={100}
              priority
            />
          </Link>

          {/* Search Bar with Dropdown */}
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowDropdown(true)}
              />
              <button className="search-btn" onClick={() => setShowDropdown(true)}>
                🔍
              </button>
            </div>

            {/* Floating Search Results Dropdown */}
            {showDropdown && filteredProducts.length > 0 && (
              <div className="search-dropdown">
                <div className="dropdown-header">
                  <span>{filteredProducts.length} results found</span>
                </div>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="search-result-item"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <Image
                      src={product.image || '/products/placeholder.jpg'}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="result-image"
                    />
                    <div className="result-details">
                      <h4>{product.name}</h4>
                      <p className="result-price">{formatPrice(product.price)}</p>
                      <p className="result-category">{product.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {showDropdown && filteredProducts.length === 0 && searchQuery && (
              <div className="search-dropdown empty">
                <p>No products found for "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Right Links */}
          <div className="user-actions">
            <Link href="/account" className="action-link">Account</Link>
            <Link href="/help" className="action-link">Help</Link>
            <Link href="/cart" className="action-link cart-link">
              Cart
              {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}