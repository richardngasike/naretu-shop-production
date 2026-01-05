'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function SignInPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>Sign In to Naretu</h1>
              <p>Access your orders, wishlist, and more</p>

              <form className="auth-form">
                <label>Email or Phone Number</label>
                <input type="text" placeholder="e.g. john@example.com or 0718959781" required />

                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />

                <button type="submit" className="btn-primary full-width">
                  Sign In
                </button>
              </form>

              <div className="auth-footer">
                <Link href="/account/forgot-password">Forgot Password?</Link>
                <p>
                  New to Naretu?{' '}
                  <Link href="/account/signup" className="link-bold">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}