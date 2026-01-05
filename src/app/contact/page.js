'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import '@/app/account/account.css'; // Global import - works from anywhere

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="account-layout">
        <Sidebar />
        <main className="account-main">
          <div className="auth-container">
            <div className="auth-card">
              <h1>Contact Us</h1>
              <p className="welcome-text">We're here to help!</p>

              <div className="contact-info-large">
                <p><strong>Customer Support</strong></p>
                <p>📞 Phone: <a href="tel:+254718959781">+254 718 959 781</a></p>
                <p>📱 WhatsApp: <a href="https://wa.me/254718959781">Chat Now</a></p>
                <p>✉️ Email: support@naretu.co.ke</p>
                <p>⏰ Hours: Mon–Sat, 8AM–8PM | Sun, 10AM–6PM</p>
              </div>

              <div className="contact-info-large">
                <p><strong>Seller Support</strong></p>
                <p>📞 Phone: +254 700 123 456</p>
                <p>✉️ Email: sellers@naretu.co.ke</p>
              </div>

              <p>Follow us for updates and deals:</p>
              <div className="social-links-large">
                <a href="https://instagram.com/naretu">Instagram</a>
                <a href="https://tiktok.com/@naretu">TikTok</a>
                <a href="https://facebook.com/naretu">Facebook</a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}