import './Banner.css';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>NEW YEAR'S DEALS UNWRAPPED</h1>
        <p>Unique Products From $10</p>
      </div>
      <div className="banner-images">
        <img src="https://placehold.co/200x300" alt="Product 1" />
        <img src="https://placehold.co/200x300" alt="Product 2" />
        <img src="https://placehold.co/200x300" alt="Product 3" />
      </div>
      <div className="banner-side">
        <div>Chat Support</div>
        <div>Sell on Naretu</div>
      </div>
    </div>
  );
}