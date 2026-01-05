'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import '@/app/account/account.css'; // Global import - works from anywhere

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>About Naretu</h1>
              <p className="welcome-text">Kenya's Fastest Growing Online Marketplace</p>

              <p>
                Founded in 2025, <strong>Naretu</strong> is a proudly Kenyan e-commerce platform dedicated to bringing you the best products at unbeatable prices — with fast, reliable delivery across all 47 counties.
              </p>

              <h2>Our Mission</h2>
              <p>
                To empower Kenyan shoppers and sellers by providing a trusted, convenient, and affordable online shopping experience that connects communities nationwide.
              </p>

              <h2>Why Choose Naretu?</h2>
              <ul className="why-list">
                <li>✅ Nationwide delivery – from Nairobi to Turkana</li>
                <li>✅ Genuine products from verified sellers</li>
                <li>✅ Secure payments including M-Pesa</li>
                <li>✅ Easy returns & dedicated customer support</li>
                <li>✅ Best prices with daily deals</li>
              </ul>

              <h2>Our Promise</h2>
              <p>
                Every purchase on Naretu is backed by our commitment to quality, transparency, and customer satisfaction. Shop with confidence — you're family here.
              </p>

              <div className="signature">
                <p>— The Naretu Team 🇰🇪</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}