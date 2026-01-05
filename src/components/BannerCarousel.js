'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './BannerCarousel.css';

export default function BannerCarousel() {
  const banners = [
    {
      title: "NEW YEAR'S DEALS UNWRAPPED",
      subtitle: "Up to 70% Off on Appliances & Electronics",
      image: '/banner1.jpg',
    },
    {
      title: "TECH FEST 2026",
      subtitle: "Latest Phones, Laptops & Gadgets from $299",
      image: '/banner2.jpg',
    },
    {
      title: "FASHION REBOOT",
      subtitle: "Refresh Your Wardrobe – Free Shipping Nationwide",
      image: '/banner3.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, banners.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % banners.length);

  return (
    <div
      className="banner-carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="banner-carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <div key={i} className="banner-slide">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              priority={i === 0}
              className="banner-background"
            />

            <div className="banner-overlay" />

            <div className="banner-content">
              <h1>{banner.title}</h1>
              <p>{banner.subtitle}</p>
              <button className="shop-now-btn">SHOP NOW →</button>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow left" onClick={goToPrev}>
        ❮
      </button>
      <button className="carousel-arrow right" onClick={goToNext}>
        ❯
      </button>

      <div className="carousel-dots">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
