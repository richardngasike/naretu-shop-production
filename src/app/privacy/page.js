'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import '@/app/account/account.css'; // Global import - works from anywhere

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>Privacy Policy</h1>
              <p className="welcome-text">Your privacy matters to us</p>

              <p>We collect only necessary information to provide you with the best shopping experience.</p>

              <h2>Information We Collect</h2>
              <ul className="why-list">
                <li>Name, phone number, and delivery address</li>
                <li>Email (optional)</li>
                <li>Order history and preferences</li>
                <li>Device and browsing information</li>
              </ul>

              <h2>How We Use It</h2>
              <p>To process orders, improve our service, send order updates, and offer personalized deals.</p>

              <h2>We Never</h2>
              <ul className="why-list">
                <li>Sell your personal data</li>
                <li>Share your details without consent</li>
                <li>Spam you with unwanted messages</li>
              </ul>

              <h2>Your Rights</h2>
              <p>You can access, update, or delete your data at any time via your account.</p>

              <p className="terms-note">
                Questions? Email us at privacy@naretu.co.ke
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}