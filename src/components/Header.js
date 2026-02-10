'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTiktok, FaInstagram, FaFacebookF, FaWhatsapp, FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { useCart } from '@/lib/CartContext';
import products from '@/data/products';
import { useRouter } from 'next/navigation';
import './Header.css';

const mobileCategories = [
  { name: 'All Products', href: '/' },
  { name: 'Laptops', href: '/category/laptops' },
  { name: 'Laptop Stickers', href: '/category/laptopstickers' },
  { name: 'Phones & Tablets', href: '/category/phones-tablets' },
  { name: 'Desktops', href: '/category/desktops' },
  { name: 'Designs', href: '/category/designs' },
  { name: 'TVs & Audio', href: '/category/tvs-audio' },
  { name: 'Appliances', href: '/category/appliances' },
  { name: 'Health & Beauty', href: '/category/health-beauty' },
  { name: 'Home & Office', href: '/category/home-office' },
  { name: 'Fashion', href: '/category/fashion' },
  { name: 'Gaming', href: '/category/gaming' },
  { name: 'Books & Novels', href: '/category/books-novels' },
  { name: 'Softwares', href: '/category/softwares' },
];

export default function Header() {
  const { cart } = useCart();
  const cartCount = cart?.length || 0;
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const searchRef = useRef(null);

  // Search filtering logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const q = searchQuery.toLowerCase().trim();
    const filtered = products
      .filter(p =>
        p.name?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q)
      )
      .slice(0, 8);

    setSearchResults(filtered);
    setShowResults(true);
  }, [searchQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    setSearchQuery('');
    setShowResults(false);
    setShowMobileSearch(false);
    router.push(`/product/${id}`);
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(price);

  const toggleMobileMenu = () => setMobileMenuOpen(p => !p);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const openMobileSearch = () => {
    setShowMobileSearch(true);
    setShowResults(true); // show results if query exists
  };

  const closeMobileSearch = () => {
    setShowMobileSearch(false);
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <header className="site-header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <Link href="/sell" className="sell-link">Sell on Naretu</Link>
          <a href="tel:+254718959781" className="contact-phone">📞 +254 718 959 781</a>
          <div className="social-icons">
            <a href="https://tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://wa.me/254718959781" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="main-nav">
        <div className="nav-container">
          <Link href="/" className="logo-wrapper">
            <Image src="/naretulogo.png" alt="Naretu" width={150} height={55} priority className="logo" />
          </Link>

          {/* Desktop search */}
          <div className="search-desktop" ref={searchRef}>
            <div className="search-input-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="search"
                placeholder="Search products, brands, categories…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowResults(true)}
              />
            </div>

            {showResults && (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  searchResults.map(p => (
                    <div key={p.id} className="result-item" onClick={() => handleSelect(p.id)}>
                      <Image src={p.image || '/placeholder.jpg'} alt={p.name} width={44} height={44} />
                      <div className="result-text">
                        <div className="result-name">{p.name}</div>
                        <div className="result-price">{formatPrice(p.price)}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-results">No products found</div>
                )}
              </div>
            )}
          </div>

          {/* Desktop actions */}
          <div className="desktop-actions">
            <Link href="/account" className="action-link">Account</Link>
            <Link href="/wishlist" className="action-icon" title="Wishlist"><FaHeart /></Link>
            <Link href="/cart" className="action-icon cart" title="Cart">
              <FiShoppingCart />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>
          </div>

          {/* Mobile actions bar */}
          <div className="mobile-actions">
            <Link href="/wishlist" className="mobile-btn" title="Wishlist"><FaHeart /></Link>
            <Link href="/cart" className="mobile-btn cart" title="Cart">
              <FiShoppingCart />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>
            <button className="mobile-btn search-btn" onClick={openMobileSearch} title="Search">
              <FiSearch />
            </button>
            <button className="mobile-btn menu-btn" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen search overlay */}
      {showMobileSearch && (
        <div className="mobile-search-overlay">
          <div className="mobile-search-header">
            <button className="close-search" onClick={closeMobileSearch}><FaTimes /></button>
            <div className="mobile-search-input-wrapper" ref={searchRef}>
              <FiSearch className="search-icon" />
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          <div className="mobile-search-results">
            {searchResults.length > 0 ? (
              searchResults.map(p => (
                <div key={p.id} className="result-item" onClick={() => handleSelect(p.id)}>
                  <Image src={p.image || '/placeholder.jpg'} alt={p.name} width={50} height={50} />
                  <div className="result-text">
                    <div className="result-name">{p.name}</div>
                    <div className="result-price">{formatPrice(p.price)}</div>
                  </div>
                </div>
              ))
            ) : searchQuery.trim() ? (
              <div className="no-results">No products found</div>
            ) : null}
          </div>
        </div>
      )}

      {/* Mobile slide-out menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <button onClick={closeMobileMenu}><FaTimes /></button>
          <span>Menu</span>
        </div>
        <nav>
          {mobileCategories.map((cat, i) => (
            <Link key={i} href={cat.href} onClick={closeMobileMenu}>
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {mobileMenuOpen && <div className="backdrop" onClick={closeMobileMenu} />}
    </header>
  );
}