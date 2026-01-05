'use client';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import Section from '../../../components/Section';
import products from '../../../data/products';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const { slug } = useParams();

  // Convert slug back to original category name (e.g., "phones-tablets" → "Phones & Tablets")
  const categoryName = slug
    .replace(/-/g, ' & ')           // "phones-tablets" → "phones & tablets"
    .split(' & ')                   // → ["phones", "tablets"]
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each
    .join(' & ');                   // → "Phones & Tablets"

  // Exact match on category name
  const categoryProducts = products.filter(p => p.category === categoryName);

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px', color: '#007bff' }}>
            {categoryName}
          </h1>
          {categoryProducts.length > 0 ? (
            <Section products={categoryProducts} />
          ) : (
            <p>No products found in this category yet.</p>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}