'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function ForgotPasswordPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>Reset Your Password</h1>
              <p>Enter your phone number or email to receive a reset link</p>

              <form className="auth-form">
                <label>Phone Number or Email</label>
                <input type="text" placeholder="e.g. 0718959781 or john@example.com" required />

                <button type="submit" className="btn-primary full-width">
                  Send Reset Instructions
                </button>
              </form>

              <p className="auth-footer">
                Remember your password?{' '}
                <Link href="/account/signin" className="link-bold">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}