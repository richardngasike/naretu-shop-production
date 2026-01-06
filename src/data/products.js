const products = [
  // Phones & Tablets (Expanded)
  { id: 1, name: 'Galaxy Z Fold 8', price: 71200, category: 'Phones & Tablets', image: '/products/samsung-z-fold-7.jpeg', description: 'Latest foldable smartphone with S-Pen support and AI features.' },
  { id: 2, name: 'iPhone 16 Pro Max', price: 1499, category: 'Phones & Tablets', image: '/products/iphone-16-promax.webp', description: 'Titanium design, A19 chip, 48MP camera system.' },
  { id: 3, name: 'Pixel 9 Pro', price: 999, category: 'Phones & Tablets', image: '/products/pixel-9-pro.jpeg', description: 'Google\'s flagship with pure Android and advanced AI.' },
  { id: 31, name: 'Samsung Galaxy S26 Ultra', price: 1399, category: 'Phones & Tablets', image: '/products/samsung-s28-ultra.jpeg', description: '200MP camera, Snapdragon 8 Elite, titanium frame.' },
  { id: 32, name: 'OnePlus 14 Pro', price: 899, category: 'Phones & Tablets', image: '/products/one-plus-pro.jpeg', description: '120W fast charging, Hasselblad camera tuning.' },

  // Appliances (Expanded)
  { id: 4, name: 'Smart Fridge 600L', price: 899, category: 'Appliances', image: '/products/smart-fridge-600l.webp', description: 'WiFi-enabled double door fridge with touchscreen and inventory tracking.' },
  { id: 5, name: 'High-Speed Blender Pro', price: 79, category: 'Appliances', image: '/products/high-speed-blender-pro.jpeg', description: '1500W motor, 10 speed settings, perfect for smoothies and soups.' },
  { id: 6, name: 'Automatic Washing Machine 10kg', price: 499, category: 'Appliances', image: '/products/automatic-washing-machine-10kg.webp', description: 'Inverter motor, steam wash, 14 programs.' },
  { id: 7, name: 'Air Fryer XL 8L', price: 129, category: 'Appliances', image: '/products/air-fryer-xl.webp', description: 'Digital touch control, 12 presets, healthy oil-free cooking.' },
  { id: 33, name: 'Microwave Oven Convection 32L', price: 249, category: 'Appliances', image: '/products/microwave.webp', description: 'Grill, bake, and microwave functions with smart sensors.' },
  { id: 34, name: 'Vacuum Cleaner Cordless', price: 399, category: 'Appliances', image: '/products/vacuum-cleaner-cordless.webp', description: '180W suction, 60-min runtime, HEPA filter.' },

  // Computing
  { id: 8, name: 'Gaming Laptop RTX 5090', price: 2499, category: 'Computing', image: '/products/gaming-laptop.webp', description: 'Intel i9, 64GB RAM, RTX 5090 GPU, 240Hz display.' },
  { id: 9, name: 'UltraBook Pro 16"', price: 1599, category: 'Computing', image: '/products/ultrabook-pro.webp', description: 'Lightweight, 20-hour battery, OLED display.' },
  { id: 10, name: 'Wireless Mechanical Keyboard', price: 149, category: 'Computing', image: '/products/mechanical-keyboard.jpeg', description: 'RGB backlit, hot-swappable switches.' },
  { id: 35, name: '27" 4K Monitor IPS', price: 599, category: 'Computing', image: '/products/monitor-ips.jpeg', description: '100% sRGB, HDR10, USB-C power delivery.' },
  { id: 36, name: 'External SSD 2TB', price: 189, category: 'Computing', image: '/products/external-ssd.jpeg', description: 'NVMe speeds up to 2000MB/s, rugged design.' },

  // Fashion
  { id: 11, name: 'Premium Leather Jacket', price: 299, category: 'Fashion', image: '/products/leather-jacket.jpg', description: 'Genuine leather, slim fit, winter collection.' },
  { id: 12, name: 'Designer Sneakers 2026', price: 189, category: 'Fashion', image: '/products/designer-sneakers.jpg', description: 'Limited edition comfort sneakers.' },
  { id: 37, name: 'Luxury Watch Automatic', price: 799, category: 'Fashion', image: '/products/luxury-watch.jpeg', description: 'Swiss movement, sapphire crystal, leather strap.' },
  { id: 38, name: 'Winter Coat Wool Blend', price: 349, category: 'Fashion', image: '/products/winter-coat.jpg', description: 'Tailored fit, water-resistant, premium wool.' },

  // Health & Beauty
  { id: 13, name: 'Electric Toothbrush Pro', price: 89, category: 'Health & Beauty', image: '/products/electric-toothbrush.webp', description: 'Sonic vibration, 5 modes, 30-day battery.' },
  { id: 14, name: 'Vitamin C Serum 30ml', price: 39, category: 'Health & Beauty', image: '/products/vitamin-serum.jpeg', description: 'Brightening and anti-aging formula.' },
  { id: 39, name: 'Hair Dryer Ionic Pro', price: 129, category: 'Health & Beauty', image: '/products/hair-dryer-pro.jpeg', description: 'Fast drying, frizz control, multiple heat settings.' },
  { id: 40, name: 'Massage Gun Deep Tissue', price: 199, category: 'Health & Beauty', image: '/products/massage-gun.jpeg', description: '6 heads, 30 speed levels, quiet operation.' },

  // TVs & Audio
  { id: 15, name: '4K Smart TV 65"', price: 799, category: 'TVs & Audio', image: '/products/4k-smart-tv.jpeg', description: 'OLED display, built-in streaming apps.' },
  { id: 16, name: 'Noise-Cancelling Headphones', price: 349, category: 'TVs & Audio', image: '/products/noise-cancelling-headphones.jpg', description: '40-hour battery, adaptive ANC.' },
  { id: 20, name: 'Wireless Earbuds Pro', price: 199, category: 'TVs & Audio', image: '/products/wireless-earbuds.jpg', description: 'Spatial audio, 30-hour battery.' },
  { id: 41, name: 'Soundbar with Subwoofer', price: 499, category: 'TVs & Audio', image: '/products/soundbar.jpg', description: 'Dolby Atmos, wireless sub, HDMI eARC.' },

  // Home & Office
  { id: 17, name: 'Robot Vacuum Cleaner', price: 399, category: 'Home & Office', image: '/products/roboy-vacuum-cleaner.jpeg', description: 'LiDAR navigation, auto-empty station.' },
  { id: 18, name: 'Ergonomic Office Chair', price: 279, category: 'Home & Office', image: '/products/office-chair.jpeg', description: 'Mesh back, lumbar support.' },
  { id: 28, name: 'LED Desk Lamp', price: 1559, category: 'Home & Office', image: '/products/desk-lamp.jpeg', description: 'Eye-caring, wireless charging base.' },

  // Gaming
  { id: 19, name: 'PlayStation 6', price: 599, category: 'Gaming', image: '/products/ps6-concept.jpg', description: 'Next-gen gaming console with ray tracing.' },
  { id: 42, name: 'Gaming Headset Wireless', price: 179, category: 'Gaming', image: '/products/gaming-headset.jpg', description: 'Surround sound, RGB lighting, detachable mic.' },

  // Supermarket & More
  { id: 21, name: 'Coffee Maker Automatic', price: 149, category: 'Supermarket', image: '/products/coffee-maker.jpg', description: 'Bean-to-cup, milk frother included.' },
  { id: 22, name: 'Fitness Smartwatch', price: 299, category: 'Health & Beauty', image: '/products/fitness-smartwatch.jpeg', description: 'ECG, blood oxygen, GPS.' },
  { id: 23, name: 'Portable Power Bank 50000mAh', price: 79, category: 'Phones & Tablets', image: '/products/powerbank.jpeg', description: 'Fast charging, multiple ports.' },
  { id: 24, name: 'Drone with 4K Camera', price: 20699, category: 'Computing', image: '/products/drone.jpeg', description: '60-min flight time, obstacle avoidance.' },
  { id: 25, name: 'Baby Stroller Premium', price: 399, category: 'Baby Products', image: '/products/baby-stroller.jpg', description: 'All-terrain, reversible seat.' },
  { id: 26, name: 'Electric Kettle 1.7L', price: 39, category: 'Appliances', image: '/products/electric-kettle-1.7l.jpeg', description: 'Temperature control, keep warm function.' },
  { id: 27, name: 'Yoga Mat Premium', price: 49, category: 'Health & Beauty', image: '/products/yoga-mat.jpeg', description: 'Non-slip, extra thick 8mm.' },
  { id: 29, name: 'Instant Pot Duo 8L', price: 139, category: 'Appliances', image: '/products/instant-pot.jpeg', description: '7-in-1 multi-cooker.' },
  { id: 30, name: 'Wireless Mouse Ergonomic', price: 39, category: 'Computing', image: '/products/wireless-keyboard.jpeg', description: 'Silent clicks, rechargeable.' },

  // Additional New Products
  { id: 43, name: 'Electric Scooter Foldable', price: 599, category: 'Unique Gadgets', image: '/products/electric-scooter.jpg', description: '25km/h top speed, 40km range, app control.' },
  { id: 44, name: 'Portable Projector 4K', price: 399, category: 'TVs & Audio', image: '/products/portable-projector.jpg', description: 'Android TV, 300" display, built-in speakers.' },
  { id: 45, name: 'Smart Doorbell Camera', price: 199, category: 'Home & Office', image: '/products/doorbell-camera.jpeg', description: '1080p HD, night vision, two-way audio.' },
  { id: 46, name: 'Air Purifier HEPA', price: 249, category: 'Home & Office', image: '/products/air-purifier.jpeg', description: 'Covers 500 sq ft, smart sensor, quiet mode.' },
  { id: 47, name: 'Electric Bike 2026', price: 201499, category: 'Unique Gadgets', image: '/products/electric-bike.jpeg', description: '750W motor, 80km range, full suspension.' },
  { id: 48, name: 'VR Headset Standalone', price: 799, category: 'Gaming', image: '/products/vr-headset.jpg', description: '6K display, hand tracking, no PC required.' },
];

export default products;