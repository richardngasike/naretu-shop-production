'use client';

import { useState } from 'react';
import './Sidebar.css';
import Link from 'next/link';

const categories = [
  { name: 'All Products', icon: '🏪' },
  { name: 'Phones & Tablets', icon: '📱' },
  { name: 'Computing', icon: '💻' },
  { name: 'TVs & Audio', icon: '📺' },
  { name: 'Appliances', icon: '🧊' },
  { name: 'Health & Beauty', icon: '💄' },
  { name: 'Home & Office', icon: '🏠' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Gaming', icon: '🎮' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      {/* Floating Hamburger Button - Mobile Only */}
      <button
        className="mobile-menu-btn"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-content">
          {categories.map((cat, index) => {
            // Special case: "All Products" links to homepage
            const href =
              cat.name === 'All Products'
                ? '/'
                : `/category/${cat.name.toLowerCase().replace(/ & /g, '-')}`;

            return (
              
              <Link
                key={index}
                href={href}
                className="sidebar-item"
                onClick={handleLinkClick}
              >
                <span className="icon">{cat.icon}</span>
                <span className="label">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}