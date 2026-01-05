'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import './account.css';

export default function AccountPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="account-container">
            <h1>My Account</h1>
            <p className="welcome-text">Welcome to your Naretu account!</p>

            <div className="account-options">
              <div className="option-card">
                <h2>👤 New Customer?</h2>
                <p>Create an account to enjoy faster checkout, order tracking, and exclusive deals.</p>
                <Link href="/account/signup" className="btn-primary">
                  Create Account
                </Link>
              </div>

              <div className="option-card">
                <h2>🔑 Already have an account?</h2>
                <p>Sign in to access your orders, wishlist, and personalized recommendations.</p>
                <Link href="/account/signin" className="btn-secondary">
                  Sign In
                </Link>
              </div>
            </div>

            <div className="help-links">
              <Link href="/account/forgot-password">Forgot Password?</Link>
              <Link href="/help">Need Help?</Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}