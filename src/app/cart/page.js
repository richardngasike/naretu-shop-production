import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';

export default function CartPage() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <Cart />
        </main>
      </div>
      <Footer />
    </div>
  );
}