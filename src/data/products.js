const products = [
  // Phones & Tablets (Expanded)
  { 
    id: 1, 
    name: 'Galaxy Z Fold 8', 
    price: 185000, 
    category: 'Phones & Tablets', 
    image: '/products/samsung-z-fold-7.jpeg', 
    description: 'Revolutionary foldable smartphone with a massive 8-inch inner AMOLED display, built-in S-Pen support, powerful Snapdragon processor, advanced Galaxy AI features for multitasking, photo editing, and productivity on the go. Perfect for professionals and power users who want phone + tablet in one device.' 
  },
  { 
    id: 2, 
    name: 'iPhone 16 Pro Max', 
    price: 169000, 
    category: 'Phones & Tablets', 
    image: '/products/iphone-16-promax.webp', 
    description: 'Premium titanium-built flagship with stunning 6.9-inch Super Retina XDR display, A19 Bionic chip for lightning performance, pro-grade 48MP triple camera system with advanced computational photography, 4K video at 120fps, and exceptional battery life. Ideal for photography enthusiasts, content creators, and Apple ecosystem lovers.' 
  },
  { 
    id: 3, 
    name: 'Pixel 9 Pro', 
    price: 118000, 
    category: 'Phones & Tablets', 
    image: '/products/pixel-9-pro.jpeg', 
    description: 'Google\'s cleanest Android flagship featuring a brilliant 6.3-inch OLED display with 120Hz refresh, Tensor G4 chip with excellent AI capabilities (Magic Editor, Best Take, Audio Magic Eraser), outstanding 50MP triple camera tuned by Google, and 7 years of software updates. Great for photography purists and those who prefer stock Android experience.' 
  },
  { 
    id: 31, 
    name: 'Samsung Galaxy S26 Ultra', 
    price: 165000, 
    category: 'Phones & Tablets', 
    image: '/products/samsung-s28-ultra.jpeg', 
    description: 'Ultimate Android flagship with massive 200MP main camera, periscope zoom lens, S Pen included, Snapdragon 8 Elite processor, titanium frame, and vibrant 6.9-inch QHD+ AMOLED display. Built for creators, gamers, and anyone who wants the absolute best Samsung has to offer.' 
  },
  { 
    id: 32, 
    name: 'OnePlus 14 Pro', 
    price: 105000, 
    category: 'Phones & Tablets', 
    image: '/products/one-plus-pro.jpeg', 
    description: 'Blazing-fast flagship with ultra-smooth 120Hz LTPO display, 120W SUPERVOOC charging (full in ~25 mins), Hasselblad-tuned quad camera system, powerful Snapdragon processor, and clean OxygenOS. Excellent value for performance lovers who want speed without compromise.' 
  },

  // Appliances (Expanded)
  { 
    id: 4, 
    name: 'Smart Fridge 600L', 
    price: 95000, 
    category: 'Appliances', 
    image: '/products/smart-fridge-600l.webp', 
    description: 'Spacious double-door smart refrigerator with WiFi connectivity, intuitive touchscreen interface, internal cameras for inventory viewing via app, auto temperature zones, energy-efficient inverter compressor, and smart home integration. Keeps your groceries fresh and organized effortlessly.' 
  },
  { 
    id: 5, 
    name: 'High-Speed Blender Pro', 
    price: 9500, 
    category: 'Appliances', 
    image: '/products/high-speed-blender-pro.jpeg', 
    description: 'Powerful 1500W blender with diamond-shaped blades for silky smoothies, soups, nut butters, and ice crushing in seconds. 10 speed levels + pulse, BPA-free jug, self-cleaning mode – perfect for health-conscious families and home chefs.' 
  },
  { 
    id: 6, 
    name: 'Automatic Washing Machine 10kg', 
    price: 52000, 
    category: 'Appliances', 
    image: '/products/automatic-washing-machine-10kg.webp', 
    description: 'Large-capacity front-load washer with quiet inverter motor, steam wash for allergy care, 14 smart programs, turbo wash option, and energy-efficient A+++ rating. Ideal for medium to large Kenyan households.' 
  },
  { 
    id: 7, 
    name: 'Air Fryer XL 8L', 
    price: 14500, 
    category: 'Appliances', 
    image: '/products/air-fryer-xl.webp', 
    description: 'Extra-large 8L capacity air fryer with rapid air technology, digital touch controls, 12 one-touch presets (fry, grill, bake, roast), and up to 90% less oil for healthier meals. Great for families wanting crispy food without deep frying.' 
  },
  { 
    id: 33, 
    name: 'Microwave Oven Convection 32L', 
    price: 28500, 
    category: 'Appliances', 
    image: '/products/microwave.webp', 
    description: 'Versatile 32L convection microwave with grill, bake, and defrost functions, smart sensor cooking, child lock, and stylish stainless-steel finish. Perfect all-in-one kitchen appliance for reheating, baking small cakes, and grilling.' 
  },
  { 
    id: 34, 
    name: 'Vacuum Cleaner Cordless', 
    price: 42000, 
    category: 'Appliances', 
    image: '/products/vacuum-cleaner-cordless.webp', 
    description: 'Lightweight cordless stick vacuum with powerful 180W suction, up to 60 minutes runtime, HEPA filtration for allergies, multiple attachments, and easy wall-mount charging. Makes cleaning quick and effortless in any home.' 
  },

  // Computing
  { 
    id: 8, 
    name: 'Gaming Laptop RTX 5090', 
    price: 320000, 
    category: 'Computing', 
    image: '/products/gaming-laptop.webp', 
    description: 'Beast-mode gaming/creator laptop with latest Intel Core i9, 64GB DDR5 RAM, NVIDIA RTX 5090 GPU, 240Hz QHD+ display, RGB keyboard, advanced cooling, and massive storage. Built for serious gamers and video editors.' 
  },
  { 
    id: 9, 
    name: 'UltraBook Pro 16"', 
    price: 185000, 
    category: 'Computing', 
    image: '/products/ultrabook-pro.webp', 
    description: 'Sleek, lightweight 16-inch ultrabook with stunning OLED display, up to 20-hour battery life, powerful processor, Thunderbolt ports, and premium aluminum build. Perfect for professionals, students, and frequent travelers.' 
  },
  { 
    id: 10, 
    name: 'Wireless Mechanical Keyboard', 
    price: 16500, 
    category: 'Computing', 
    image: '/products/mechanical-keyboard.jpeg', 
    description: 'Premium wireless mechanical keyboard with customizable RGB lighting, hot-swappable switches, long battery life, and compact layout. Delivers satisfying typing for gamers and programmers alike.' 
  },
  { 
    id: 35, 
    name: '27" 4K Monitor IPS', 
    price: 62000, 
    category: 'Computing', 
    image: '/products/monitor-ips.jpeg', 
    description: 'Crisp 27-inch 4K UHD IPS monitor with 100% sRGB color accuracy, HDR10 support, USB-C power delivery & data, 75Hz refresh, and slim bezels. Excellent for work, design, and entertainment.' 
  },
  { 
    id: 36, 
    name: 'External SSD 2TB', 
    price: 22000, 
    category: 'Computing', 
    image: '/products/external-ssd.jpeg', 
    description: 'Ultra-fast 2TB portable NVMe SSD with read/write speeds up to 2000MB/s, USB-C compatibility, rugged shock-resistant design, and compact size. Ideal for backups, video editing, and fast file transfers.' 
  },

  // Fashion (prices kept realistic for premium items in Kenya)
  { 
    id: 11, 
    name: 'Premium Leather Jacket', 
    price: 32000, 
    category: 'Fashion', 
    image: '/products/leather-jacket.jpg', 
    description: 'Genuine full-grain leather jacket with slim modern fit, quilted lining for warmth, zippered pockets, and classic biker styling. Timeless piece for winter layering and urban style.' 
  },
  { 
    id: 12, 
    name: 'Designer Sneakers 2026', 
    price: 22000, 
    category: 'Fashion', 
    image: '/products/designer-sneakers.jpg', 
    description: 'Limited-edition premium comfort sneakers with cushioned sole, breathable upper, durable stitching, and stylish colorways. Perfect everyday wear with a touch of luxury.' 
  },
  { 
    id: 37, 
    name: 'Luxury Watch Automatic', 
    price: 85000, 
    category: 'Fashion', 
    image: '/products/luxury-watch.jpeg', 
    description: 'Elegant automatic mechanical watch with Swiss movement, scratch-resistant sapphire crystal, genuine leather strap, and water resistance. Statement piece for business and formal occasions.' 
  },
  { 
    id: 38, 
    name: 'Winter Coat Wool Blend', 
    price: 38000, 
    category: 'Fashion', 
    image: '/products/winter-coat.jpg', 
    description: 'Sophisticated wool-blend overcoat with tailored fit, soft lining, water-resistant finish, and classic lapel design. Keeps you warm and stylish during Nairobi\'s cooler months.' 
  },

  // Health & Beauty
  { 
    id: 13, 
    name: 'Electric Toothbrush Pro', 
    price: 9500, 
    category: 'Health & Beauty', 
    image: '/products/electric-toothbrush.webp', 
    description: 'Advanced sonic electric toothbrush with 5 brushing modes, pressure sensor, long 30-day battery, timer, and replacement brush heads included. Helps achieve dentist-clean teeth at home.' 
  },
  { 
    id: 14, 
    name: 'Vitamin C Serum 30ml', 
    price: 4500, 
    category: 'Health & Beauty', 
    image: '/products/vitamin-serum.jpeg', 
    description: 'Potent 20% Vitamin C + E + Ferulic acid serum for brightening, fading dark spots, boosting collagen, and protecting against free radicals. Lightweight, fast-absorbing formula for glowing skin.' 
  },
  { 
    id: 39, 
    name: 'Hair Dryer Ionic Pro', 
    price: 14500, 
    category: 'Health & Beauty', 
    image: '/products/hair-dryer-pro.jpeg', 
    description: 'Professional ionic hair dryer with fast drying, frizz-reducing technology, multiple heat/speed settings, cool shot button, and concentrator nozzle. Leaves hair smooth, shiny, and healthy.' 
  },
  { 
    id: 40, 
    name: 'Massage Gun Deep Tissue', 
    price: 22000, 
    category: 'Health & Beauty', 
    image: '/products/massage-gun.jpeg', 
    description: 'Powerful percussion massage gun with 6 interchangeable heads, 30 speed levels, long battery, quiet brushless motor, and carrying case. Relieves muscle soreness, improves recovery after workouts.' 
  },

  // TVs & Audio
  { 
    id: 15, 
    name: '4K Smart TV 65"', 
    price: 95000, 
    category: 'TVs & Audio', 
    image: '/products/4k-smart-tv.jpeg', 
    description: 'Immersive 65-inch 4K OLED Smart TV with vibrant colors, deep blacks, Dolby Vision/Atmos, built-in streaming apps (Netflix, YouTube, Showmax), voice control, and sleek design. Cinema experience at home.' 
  },
  { 
    id: 16, 
    name: 'Noise-Cancelling Headphones', 
    price: 38000, 
    category: 'TVs & Audio', 
    image: '/products/noise-cancelling-headphones.jpg', 
    description: 'Premium over-ear headphones with industry-leading active noise cancellation, 40-hour battery life, spatial audio, crystal-clear calls, and comfortable fit. Perfect for travel, work, and music lovers.' 
  },
  { 
    id: 20, 
    name: 'Wireless Earbuds Pro', 
    price: 22000, 
    category: 'TVs & Audio', 
    image: '/products/wireless-earbuds.jpg', 
    description: 'True wireless earbuds with active noise cancellation, spatial audio, touch controls, IPX4 sweat resistance, and up to 30 hours total battery with case. Great sound and comfort for daily use.' 
  },
  { 
    id: 41, 
    name: 'Soundbar with Subwoofer', 
    price: 55000, 
    category: 'TVs & Audio', 
    image: '/products/soundbar.jpg', 
    description: 'Premium Dolby Atmos soundbar with wireless subwoofer, HDMI eARC, Bluetooth, multiple sound modes, and wall-mountable design. Elevates movie nights and music listening dramatically.' 
  },

  // Home & Office
  { 
    id: 17, 
    name: 'Robot Vacuum Cleaner', 
    price: 45000, 
    category: 'Home & Office', 
    image: '/products/roboy-vacuum-cleaner.jpeg', 
    description: 'Smart robot vacuum with LiDAR mapping, auto-empty station, app control, no-go zones, and powerful suction. Keeps floors clean automatically – ideal for busy households.' 
  },
  { 
    id: 18, 
    name: 'Ergonomic Office Chair', 
    price: 32000, 
    category: 'Home & Office', 
    image: '/products/office-chair.jpeg', 
    description: 'Breathable mesh ergonomic chair with adjustable lumbar support, 3D armrests, reclining function, and sturdy base. Reduces back strain during long work/study hours.' 
  },
  { 
    id: 28, 
    name: 'LED Desk Lamp', 
    price: 8500, 
    category: 'Home & Office', 
    image: '/products/desk-lamp.jpeg', 
    description: 'Eye-friendly LED desk lamp with adjustable brightness/color temperature, touch controls, wireless phone charging pad, and flexible arm. Perfect for reading, studying, or office work.' 
  },

  // Gaming
  { 
    id: 19, 
    name: 'PlayStation 6', 
    price: 95000, 
    category: 'Gaming', 
    image: '/products/ps5.webp', 
    description: 'Next-generation console with ultra-fast SSD, ray tracing, 8K support, haptic feedback controller, and exclusive titles. Delivers immersive gaming like never before.' 
  },
  { 
    id: 42, 
    name: 'Gaming Headset Wireless', 
    price: 19500, 
    category: 'Gaming', 
    image: '/products/headset-w.webp', 
    description: 'Wireless gaming headset with 7.1 surround sound, RGB lighting, noise-canceling mic, 30-hour battery, and comfortable ear cups. Enhances every gaming session.' 
  },

  // Supermarket & More (adjusted realistic prices)
  { 
    id: 21, 
    name: 'Coffee Maker Automatic', 
    price: 16500, 
    category: 'Supermarket', 
    image: '/products/coffee-maker.jpg', 
    description: 'Fully automatic bean-to-cup machine with built-in grinder, milk frother, one-touch espresso/cappuccino, and easy cleaning. Fresh coffee every morning at home.' 
  },
  { 
    id: 22, 
    name: 'Fitness Smartwatch', 
    price: 32000, 
    category: 'Health & Beauty', 
    image: '/products/fitness-smartwatch.jpeg', 
    description: 'Advanced smartwatch with heart rate, ECG, SpO2, GPS tracking, sleep analysis, 100+ sports modes, and long battery. Your personal fitness and health companion.' 
  },
  { 
    id: 23, 
    name: 'Portable Power Bank 50000mAh', 
    price: 8500, 
    category: 'Phones & Tablets', 
    image: '/products/powerbank.jpeg', 
    description: 'High-capacity 50,000mAh power bank with fast charging (PD & QC), multiple ports, LED display, and durable build. Keeps devices powered during travel or blackouts.' 
  },
  { 
    id: 24, 
    name: 'Drone with 4K Camera', 
    price: 85000, 
    category: 'Computing', 
    image: '/products/drone.jpeg', 
    description: 'Professional-grade drone with 4K stabilized camera, 60-minute flight time, GPS return-to-home, obstacle avoidance, and foldable design. Capture stunning aerial footage.' 
  },
  { 
    id: 25, 
    name: 'Baby Stroller Premium', 
    price: 45000, 
    category: 'Baby Products', 
    image: '/products/baby-stroller.jpg', 
    description: 'All-terrain premium stroller with reversible seat, large canopy, shock absorption, one-hand fold, and storage basket. Comfortable and safe for growing babies.' 
  },
  { 
    id: 26, 
    name: 'Electric Kettle 1.7L', 
    price: 4500, 
    category: 'Appliances', 
    image: '/products/electric-kettle-1.7l.jpeg', 
    description: 'Fast-boil 1.7L electric kettle with temperature presets, keep-warm function, auto shut-off, and stylish stainless steel body. Boils water in minutes for tea/coffee.' 
  },
  { 
    id: 27, 
    name: 'Yoga Mat Premium', 
    price: 5500, 
    category: 'Health & Beauty', 
    image: '/products/yoga-mat.jpeg', 
    description: 'Extra-thick 8mm non-slip yoga mat with alignment lines, excellent cushioning, and eco-friendly material. Ideal for yoga, pilates, workouts, and floor exercises.' 
  },
  { 
    id: 29, 
    name: 'Instant Pot Duo 8L', 
    price: 16500, 
    category: 'Appliances', 
    image: '/products/instant-pot.jpeg', 
    description: 'Versatile 8L 7-in-1 multi-cooker (pressure cook, slow cook, rice, yogurt, sauté, steam, warm). Saves time and space in the kitchen.' 
  },
  { 
    id: 30, 
    name: 'Wireless Mouse Ergonomic', 
    price: 4500, 
    category: 'Computing', 
    image: '/products/wireless-mouse.jpeg', 
    description: 'Comfortable ergonomic wireless mouse with silent clicks, adjustable DPI, rechargeable battery, and USB receiver. Reduces wrist strain during long computer use.' 
  },

  // Additional New Products
  { 
    id: 43, 
    name: 'Electric Scooter Foldable', 
    price: 65000, 
    category: 'Unique Gadgets', 
    image: '/products/electric-scooter.jpg', 
    description: 'Compact foldable electric scooter with 25km/h max speed, 40km range, strong brakes, LED lights, and app connectivity. Fun and eco-friendly urban commuting.' 
  },
  { 
    id: 44, 
    name: 'Portable Projector 4K', 
    price: 45000, 
    category: 'TVs & Audio', 
    image: '/products/portable-projector.jpg', 
    description: 'Compact 4K portable projector with Android TV, up to 300-inch screen, built-in speakers, autofocus, and battery option. Movie nights anywhere.' 
  },
  { 
    id: 45, 
    name: 'Smart Doorbell Camera', 
    price: 22000, 
    category: 'Home & Office', 
    image: '/products/doorbell-camera.jpeg', 
    description: '1080p HD smart video doorbell with night vision, two-way audio, motion detection, cloud/local storage, and easy app access. Enhanced home security.' 
  },
  { 
    id: 46, 
    name: 'Air Purifier HEPA', 
    price: 28000, 
    category: 'Home & Office', 
    image: '/products/air-purifier.jpeg', 
    description: 'Effective HEPA air purifier for up to 500 sq ft, real-time air quality sensor, quiet sleep mode, filter replacement indicator, and smart app control. Breathe cleaner air at home.' 
  },
  { 
    id: 47, 
    name: 'Electric Bike 2026', 
    price: 185000, 
    category: 'Unique Gadgets', 
    image: '/products/electric-bike.jpeg', 
    description: 'Powerful 750W electric bicycle with 80km range, full suspension, pedal assist, LCD display, and lights. Great for commuting, fitness, or leisure rides around Nairobi.' 
  },
  { 
    id: 48, 
    name: 'VR Headset Standalone', 
    price: 85000, 
    category: 'Gaming', 
    image: '/products/vr-headset.webp', 
    description: 'All-in-one standalone VR headset with 6K resolution display, inside-out tracking, hand controllers, vast game library, and immersive experiences. Step into virtual worlds without a PC.' 
  },
];

export default products;