'use client';

import { CartProvider } from '@/lib/CartContext';
// If your project doesn't use the src/ folder, use: import { CartProvider } from '../lib/CartContext';

export default function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}