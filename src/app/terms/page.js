'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import '@/app/account/account.css'; // Global import - works from anywhere


export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>Terms of Service</h1>
              <p className="welcome-text">Last updated: January 2026</p>

              <p>By using Naretu.co.ke, you agree to these terms. Please read them carefully.</p>

              <h2>1. Use of Service</h2>
              <p>You must be 18 years or older to use Naretu. You are responsible for maintaining the confidentiality of your account.</p>

              <h2>2. Orders & Payments</h2>
              <p>All prices are in Kenyan Shillings (KSh). We accept M-Pesa, cards, and other secure methods. Orders are subject to acceptance and availability.</p>

              <h2>3. Delivery</h2>
              <p>We deliver to all 47 counties in Kenya. Delivery times vary by location. Free delivery on orders above KSh 5,000 in major towns.</p>

              <h2>4. Returns & Refunds</h2>
              <p>7-day return policy for defective or wrong items. See our <Link href="/returns" className="link-bold">Returns Policy</Link> for details.</p>

              <h2>5. Seller Terms</h2>
              <p>Sellers must provide accurate product information and ship on time. See <Link href="/sell" className="link-bold">Sell on Naretu</Link>.</p>

              <p className="terms-note">
                We reserve the right to update these terms. Continued use constitutes acceptance.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}