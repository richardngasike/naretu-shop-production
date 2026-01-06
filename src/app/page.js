'use client';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BannerCarousel from '../components/BannerCarousel';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { CartProvider } from '../lib/CartContext';
import products from '../data/products';
import Head from 'next/head';

export default function Home() {
  const flashDeals = products.filter(p => p.price < 100).slice(0, 8);
  const bestSellers = products.sort((a, b) => b.price - a.price).slice(0, 8);
  const newArrivals = products.slice(-8);

  return (
    <CartProvider>
      <>
        <Head>
          <title>Naretu - Best Online Shopping in Kenya | Affordable Electronics, Gadgets & More</title>
          <meta
            name="description"
            content="Naretu is Kenya's top online shopping destination for affordable gadgets, computing devices, electronics, and unique products. Enjoy flash deals, free delivery, secure M-Pesa & card payments, and the best prices in 2026!"
          />
          <meta
            name="keywords"
            content="naretu, naretu shop, naretu online shopping, naretu kenya, online shopping kenya, buy gadgets kenya, cheap electronics kenya, mpesa payment shop, best online store kenya"
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Naretu - Kenya's #1 Online Shopping Store" />
          <meta
            property="og:description"
            content="Shop the latest deals on gadgets, electronics, and more at Naretu. Fast delivery across Kenya with secure payments."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.naretu.com/" /> {/* Replace with your actual domain */}
          <meta property="og:image" content="https://www.naretu.com/og-image.jpg" /> {/* Add an OG image */}
          <link rel="canonical" href="https://www.naretu.com/" />
        </Head>

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
      </>
    </CartProvider>
  );
}