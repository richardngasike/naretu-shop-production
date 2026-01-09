import './globals.css';
import Providers from './Providers';

export const metadata = {
  // Primary SEO Tags
  title: {
    default: 'Naretu - Kenya\'s Best Online Shopping Destination',
    template: '%s | Naretu Kenya',
  },
  description: 'Shop the best deals in Kenya on phones, fashion, appliances, electronics, beauty, and more. Fast nationwide delivery, secure payments with M-Pesa, and easy returns. Your trusted online store.',
  
  // Open Graph / Social Media (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: 'Naretu - Shop Online in Kenya with Fast Delivery',
    description: 'Best prices on mobiles, fashion, home appliances, electronics & more. Nationwide delivery across all 47 counties. Pay safely with M-Pesa.',
    url: 'https://naretu.com',
    siteName: 'Naretu',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Naretu - Kenya\'s Leading Online Marketplace',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Naretu - Online Shopping Kenya',
    description: 'Best deals on phones, fashion, appliances & more. Fast delivery nationwide.',
    images: ['/og-image.jpg'],
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Viewport & Mobile
  viewport: 'width=device-width, initial-scale=1',

  // Canonical URL
  alternates: {
    canonical: 'https://naretu.com',
  },

  // Additional Keywords (helps Google understand context)
  keywords: 'naretu online shopping Kenya, naretu, naretu, naretu buy phones online, naretu fashion Kenya, appliances Nairobi, M-Pesa payment, nationwide delivery Kenya, cheap electronics Kenya, Naretu buy online, naretu online shop, naretu samburu, naretu kenya',

  // Theme Color (for browser UI)
  themeColor: '#007bff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest for PWA (optional future) */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}