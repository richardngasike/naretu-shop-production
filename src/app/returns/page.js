'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import '@/app/account/account.css';

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>Returns & Refunds Policy</h1>
              <p className="welcome-text">We want you to love your purchase</p>

              <div className="policy-highlight">
                <strong>Important:</strong> Items that have been used, opened, or removed from original sealed packaging cannot be returned. 
                This policy protects hygiene and product quality for all customers.
              </div>

              <h2>Return Window</h2>
              <p>
                You may request a return <strong>within 7 days</strong> from the date of delivery, 
                <em>only if the item is unused, in original packaging, and in new condition</em>.
              </p>

              <h2>Eligible for Return</h2>
              <ul className="why-list">
                <li>✅ Item arrived damaged or defective</li>
                <li>✅ Wrong item sent</li>
                <li>✅ Product significantly different from description</li>
                <li>✅ Sealed items still in original unopened packaging</li>
              </ul>

              <h2>Non-Returnable Items</h2>
              <ul className="why-list">
                <li>❌ Any item that has been used or worn</li>
                <li>❌ Underwear, swimwear, socks (hygiene reasons)</li>
                <li>❌ Personal care items (e.g., cosmetics, hair products, toothbrushes) once opened</li>
                <li>❌ Food, beverages, or perishable goods</li>
                <li>❌ Electronics with broken seal or activated warranty</li>
                <li>❌ Personalized or custom-made items</li>
                <li>❌ Digital products or software</li>
              </ul>

              <h2>How to Request a Return</h2>
              <p>
                Contact our support team within 7 days:<br />
                📞 <a href="tel:+254718959781">+254 718 959 781</a><br />
                ✉️ <a href="mailto:support@naretu.co.ke">support@naretu.co.ke</a>
              </p>
              <p>
                We’ll guide you through inspection and arrange free pickup if eligible.
              </p>

              <h2>Refunds</h2>
              <p>
                Approved refunds are processed within <strong>3–5 business days</strong> 
                back to your original payment method (M-Pesa, card, etc.).
              </p>

              <p className="terms-note">
                Thank you for understanding — this policy helps us maintain trust, hygiene, 
                and fair trading for everyone on Naretu.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}