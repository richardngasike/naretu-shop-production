'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTiktok, FaInstagram, FaFacebookF, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Background Image Overlay */}
      <div className="footer-background" />

      <div className="footer-content">
        {/* Top Section: Company Info + Map */}
        <div className="footer-top">
          <div className="company-info">
            <h2>Naretu</h2>
            <p>Your trusted online shopping destination in Kenya. We deliver quality products at unbeatable prices with fast, reliable nationwide delivery.</p>
            
            <div className="contact-info">
              <p><FaMapMarkerAlt /> <strong>Location:</strong> Nairobi, Kenya</p>
              <p><FaPhone /> <strong>Phone:</strong> +254 718 959 781</p>
              <p><FaEnvelope /> <strong>Email:</strong> support@naretu.co.ke</p>
            </div>

            <div className="social-links-footer">
              <h3>Follow Us</h3>
              <div className="icons">
                <a href="https://tiktok.com/@naretu" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok />
                </a>
                <a href="https://instagram.com/naretu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com/naretu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://wa.me/254718959781" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Kenya Map - Nationwide Coverage */}
          <div className="operational-map">
            <h3>We Deliver Nationwide</h3>
            <p>Fast & reliable delivery to all 47 counties in Kenya</p>
            <div className="map-container">
              <Image
                src= './og-image.jpg'
                alt="Map of Kenya showing all 47 counties - Naretu delivers nationwide"
                width={500}
                height={354}
                className="kenya-map"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="bottom-links">
            <Link href="/about">About Us</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/returns">Returns & Refunds</Link>
            <Link href="/sell">Sell on Naretu</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="developer-credit">
            <p>
              © 2026 Naretu. All rights reserved. 
              Proudly developed by <a href="https://richardngasike.co.ke" target="_blank" rel="noopener noreferrer">Richard Ngasike</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}