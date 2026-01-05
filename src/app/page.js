'use client';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BannerCarousel from '../components/BannerCarousel';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { CartProvider } from '../lib/CartContext';
import products from '../data/products';

export default function Home() {
  const flashDeals = products.filter(p => p.price < 100).slice(0, 8);
  const bestSellers = products.sort((a, b) => b.price - a.price).slice(0, 8);
  const newArrivals = products.slice(-8);

  return (
    <CartProvider>
      <div>
        <Header />
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <main style={{ flex: 1, padding: '20px' }}>
            <BannerCarousel />

            <Section title="⚡ Flash Deals - Limited Time!" products={flashDeals} />
            <Section title="🔥 Best Sellers" products={bestSellers} />
            <Section title="🆕 New Arrivals 2026" products={newArrivals} />
            <Section title="🏆 Top Rated Products" products={products.slice(5, 13)} />
            <Section title="💡 Unique Gadgets" products={products.filter(p => p.category === 'Computing').slice(0, 6)} />
          </main>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}