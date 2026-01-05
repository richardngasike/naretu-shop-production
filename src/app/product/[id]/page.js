'use client';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductDetail from '../../../components/ProductDetail';
import products from '../../../data/products';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <ProductDetail product={product} />
        </main>
      </div>
      <Footer />
    </div>
  );
}