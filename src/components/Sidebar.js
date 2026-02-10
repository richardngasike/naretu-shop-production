'use client';

import Link from 'next/link';
import './Sidebar.css';

const categories = [
  { name: 'All Products', icon: '🏪' },
  { name: 'Laptops', icon: '💻' },
  { name: 'Laptopstickers', icon: '🎉' },
  { name: 'Phones & Tablets', icon: '📱' },
  { name: 'Desktops', icon: '🖥️' },
  { name: 'Designs', icon: '🎨' },
  { name: 'TVs & Audio', icon: '📺' },
  { name: 'Appliances', icon: '🧊' },
  { name: 'Health & Beauty', icon: '💄' },
  { name: 'Home & Office', icon: '🏠' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Gaming', icon: '🎮' },
  { name: 'Books & Novels', icon: '📚' },
  { name: 'Softwares', icon: '💿' },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={onClose}>×</button>
          <div className="sidebar-title">Menu</div>
        </div>

        <div className="sidebar-content">
          {categories.map((cat, i) => {
            const href =
              cat.name === 'All Products'
                ? '/'
                : `/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;

            return (
              <Link key={i} href={href} className="sidebar-item" onClick={onClose}>
                <span className="icon">{cat.icon}</span>
                <span className="label">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
}