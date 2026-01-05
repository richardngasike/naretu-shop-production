'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>Create Your Naretu Account</h1>
              <p>Join thousands shopping smarter in Kenya</p>

              <form className="auth-form">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. John Doe" required />

                <label>Phone Number</label>
                <input type="tel" placeholder="+254 718 959 781" required />

                <label>Email Address (Optional)</label>
                <input type="email" placeholder="john@example.com" />

                <label>Password</label>
                <input type="password" placeholder="Create a strong password" required />

                <label>Confirm Password</label>
                <input type="password" placeholder="Re-type password" required />

                <button type="submit" className="btn-primary full-width">
                  Create Account
                </button>
              </form>

              <p className="terms">
                By creating an account, you agree to Naretu's{' '}
                <Link href="/terms">Terms of Service</Link> and{' '}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>

              <p className="auth-footer">
                Already have an account?{' '}
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