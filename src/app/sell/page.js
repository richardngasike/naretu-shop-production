'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import '@/app/account/account.css'; // Global import - works from anywhere


export default function SellPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>Sell on Naretu</h1>
              <p className="welcome-text">Reach thousands of buyers across Kenya</p>

              <h2>Why Sell with Us?</h2>
              <ul className="why-list">
                <li>✅ Access to millions of Kenyan shoppers</li>
                <li>✅ Low commission rates</li>
                <li>✅ Nationwide logistics support</li>
                <li>✅ Marketing tools & promotions</li>
                <li>✅ Easy dashboard to manage inventory</li>
              </ul>

              <h2>How to Start</h2>
              <p>
                1. Register as a seller<br />
                2. List your products<br />
                3. We handle delivery<br />
                4. Get paid weekly
              </p>

              <Link href="/contact" className="btn-primary">
                Contact Sales Team
              </Link>

              <p className="terms-note">
                Ready to grow your business? Join Kenya's fastest-growing marketplace today.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}