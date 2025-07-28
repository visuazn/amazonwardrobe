import React, { useState, useEffect } from 'react';
import './ProductDetailPage.css';
import WhiteFormalShirtImg from '../assets/images/WhiteFormalShirt.jpg';
import FormalNavyBluePantsImg from '../assets/images/FormalNavyBluePants.jpg';
import BrownFormalShoesImg from '../assets/images/BrownFormalShoes.png';
import CasualPinkShirtImg from '../assets/images/CasualPinkShirt.jpg';
import BeigePantImg from '../assets/images/BeigePant.jpg';
import CasualSneakersImg from '../assets/images/CasualSneakers.jpg';
import BlackTshirtImg from '../assets/images/BlackTshirt.jpg';
import HalterNeckSatinTopImg from '../assets/images/HalterNeckSatinTop.jpg';


const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showSmartWardrobe, setShowSmartWardrobe] = useState(false);

  // Smart Wardrobe Data
  const userWardrobe = {
    tops: [
      { id: 1, name: "White Formal Shirt", image: WhiteFormalShirtImg },
      { id: 2, name: "Casual Pink Shirt", image: CasualPinkShirtImg },
      { id: 3, name: "Halter Neck Satin Top", image: HalterNeckSatinTopImg },
      { id: 4, name: "Black T-Shirt", image: BlackTshirtImg },
    ],
    bottoms: [
      { id: 5, name: "Formal Navy Blue Pants", image: FormalNavyBluePantsImg },
      { id: 6, name: "Dark Jeans", image: "https://m.media-amazon.com/images/I/511o67bcZAL._SX300_SY300_QL70_FMwebp_.jpg" },
      { id: 7, name: "Beige Pant", image: BeigePantImg },
      { id: 8, name: "Wide Leg Pants", image: "https://m.media-amazon.com/images/I/61i7RkC0CbL._SY879_.jpg" },
    ],
    footwear: [
      { id: 9, name: "Brown Formal Shoes", image: BrownFormalShoesImg },
      { id: 10, name: "White Sneakers", image: "https://m.media-amazon.com/images/I/81lGxS2ZisL._SX679_.jpg" },
      { id: 11, name: "Casual Sneakers", image: CasualSneakersImg },
    ],
    accessories: [
      { id: 12, name: "Pearl Necklace", image: "https://m.media-amazon.com/images/I/71zfpkr4bYL._SL1500_.jpg" },
      { id: 13, name: "Leather Bag", image: "https://m.media-amazon.com/images/I/61s5L-k2UeL._AC_UL480_FMwebp_QL65_.jpg" },
      { id: 14, name: "Gold Watch", image: "https://m.media-amazon.com/images/I/81T9Nri1mPL._AC_UL480_FMwebp_QL65_.jpg" },
    ],
  };

  const outfitSuggestions = [
    {
      id: 1,
      name: "Professional Power Look",
      occasion: "Work Meeting",
      confidence: 95,
      items: ["White Formal Shirt", "Formal Navy Blue Pants", "Brown Formal Shoes", "Leather Bag"],
      compliment: "This combination screams confidence and professionalism! You'll absolutely nail that presentation! 💼✨",
    },
    {
      id: 2,
      name: "Smart Casual Chic",
      occasion: "Business Lunch",
      confidence: 92,
      items: ["Casual Pink Shirt", "Beige Pant", "Brown Formal Shoes", "Gold Watch"],
      compliment: "Perfect balance of comfort and style! This look is effortlessly sophisticated and so you! 🌟",
    },
    {
      id: 3,
      name: "Elegant Evening",
      occasion: "Dinner Date",
      confidence: 88,
      items: ["Black T-Shirt", "Formal Navy Blue Pants", "Casual Sneakers", "Pearl Necklace"],
      compliment: "Absolutely stunning! This outfit will make you feel like the elegant, confident person you are! 💎",
    },
  ];

  const aiMessages = [
    "This blazer is a wardrobe game-changer! It pairs with 10 items you already own!  🎯",
    "Excellent pick! This blazer will elevate your professional and casual looks effortlessly! ✨",
    "You've got impeccable taste! This blazer will be your new secret weapon for power dressing! 💪",
    "Smart investment! This versatile blazer unlocks 15+ new outfit combinations! 🔥",
    "This blazer fits your style to a T - sleek, sophisticated, and oh-so-versatile! 👌",
  ];

  const [selectedOutfit, setSelectedOutfit] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (showSmartWardrobe) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % aiMessages.length);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 4000);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [showSmartWardrobe]);

  const generateNewOutfits = () => {
    setSelectedOutfit((prev) => (prev + 1) % outfitSuggestions.length);
  };

  const product = {
    name: "JACK & JONES Men's Jprfranco Noos Blazer",
    price: 12799,
    image: "https://m.media-amazon.com/images/I/71YPlyjzMKL._AC_SY879_.jpg"
  };

  const productImages = [
      "https://m.media-amazon.com/images/I/71YPlyjzMKL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71J7fXFyMnL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/7109WVwZOyL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61o1Ylo019L._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/81LdJAHsXGL._AC_SY879_.jpg"
  ];

  const sizes = ['48', '50', '54', '60', '64'];
  const colors = ['Dark Navy', 'Haze', 'Oak', 'Cashmere', 'Black'];

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span>
        <span>&gt;</span>
        <span>Clothing & Accessories</span>
        <span>&gt;</span>
        <span>Men</span>
        <span>&gt;</span>
        <span>Suits & Blazers</span>
        {/* Smart Wardrobe Widget */}
      {showSmartWardrobe && (
        <div className="smart-wardrobe-widget">
          <div className="widget-overlay" onClick={() => setShowSmartWardrobe(false)}></div>
          <div className="widget-container">
            {/* Header */}
            <div className="widget-header">
              <div className="widget-title">
                <h2>✨ Smart Wardrobe Assistant</h2>
                <p>See how "{product.name}" works with your existing wardrobe</p>
              </div>
              <button className="close-btn" onClick={() => setShowSmartWardrobe(false)}>×</button>
            </div>

            <div className="widget-content">
              {/* Left Sidebar - User's Wardrobe */}
              <div className="wardrobe-sidebar">
                <h3>❤️ Your Wardrobe</h3>
                
                <div className="wardrobe-tabs">
                  <div className="tab-buttons">
                    <button className="tab-btn active">Tops</button>
                    <button className="tab-btn">Bottoms</button>
                    <button className="tab-btn">Shoes</button>
                    <button className="tab-btn">Access.</button>
                  </div>
                  
                  <div className="wardrobe-items">
                    {userWardrobe.tops.map((item) => (
                      <div key={item.id} className="wardrobe-item">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content - Outfit Combinations */}
              <div className="outfit-section">
                <div className="outfit-header">
                  <h3>Perfect Outfit Combinations</h3>
                  <button className="generate-btn" onClick={generateNewOutfits}>
                    🔄 Generate New
                  </button>
                </div>

                {/* Featured Product */}
                <div className="featured-product">
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p>₹{product.price}</p>
                    <span className="new-badge">New Addition</span>
                  </div>
                </div>

                {/* Outfit Suggestions */}
                <div className="outfit-suggestions">
                  {outfitSuggestions.map((outfit, index) => (
                    <div 
                      key={outfit.id} 
                      className={`outfit-card ${selectedOutfit === index ? 'selected' : ''}`}
                      onClick={() => setSelectedOutfit(index)}
                    >
                      <div className="outfit-card-header">
                        <h4>{outfit.name}</h4>
                        <span className="confidence-badge">{outfit.confidence}% match</span>
                      </div>
                      
                      <p className="occasion">{outfit.occasion}</p>
                      
                      <div className="outfit-items">
                        <div className="outfit-item featured">
                          <img src={product.image} alt={product.name} />
                          <span className="new-badge">New</span>
                        </div>
                        {outfit.items.slice(0, 3).map((item, idx) => {
                          const wardrobeItem = Object.values(userWardrobe).flat().find((w) => w.name === item);
                          return (
                            <div key={idx} className="outfit-item">
                              <img src={wardrobeItem?.image} alt={item} />
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="includes">Includes: {outfit.items.join(", ")}</div>
                      
                      {selectedOutfit === index && (
                        <div className="compliment">
                          <p>{outfit.compliment}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom AI Messages */}
            {showMessage && (
              <div className="ai-message">
                <div className="ai-avatar">⚡</div>
                <p>{aiMessages[currentMessage]}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="widget-actions">
              <div className="outfit-count">
                This blazer creates <span>12+ new outfits</span> with your existing wardrobe!
              </div>
              <div className="action-buttons">
                <button className="continue-btn" onClick={() => setShowSmartWardrobe(false)}>
                  Continue Shopping
                </button>
                <button className="add-cart-btn">
                  🛒 Add to Cart - ₹{product.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

      <div className="product-container">
        {/* Product Images */}
        <div className="product-images">
          <div className="image-thumbnails">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={productImages[selectedImage]} alt="Product" />
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1 className="product-title">
            JACK & JONES Men's Jprfranco Noos Blazer
          </h1>
          
          <div className="rating-section">
            <div className="stars">
              <span>★★★★☆</span>
              <span className="rating-count">4.2 out of 5 stars</span>
              <span className="review-count">1,234 ratings</span>
            </div>
          </div>

          <div className="price-section">
            <span className="current-price">₹12,799</span>
            <span className="original-price">₹19,999</span>
            <span className="discount">(-57%)</span>
          </div>

          <div className="delivery-info">
            <p><strong>FREE delivery</strong> by tomorrow, July 25</p>
            <p>Order within <span className="urgent">3 hrs 24 mins</span></p>
          </div>

          {/* Smart Wardrobe Feature */}
          <div className="smart-wardrobe-section">
            <div className="smart-wardrobe-card">
              <div className="smart-wardrobe-content">
                <div className="smart-wardrobe-text">
                  <h3>✨ See how this looks with your wardrobe</h3>
                  <p>Get personalized outfit combinations with your existing clothes</p>
                </div>
                <button 
                  className="smart-wardrobe-btn"
                  onClick={() => setShowSmartWardrobe(true)}
                >
                  ✨ Smart Wardrobe
                </button>
              </div>
            </div>
          </div>

          {/* Product Options */}
          <div className="product-options">
            <div className="option-group">
              <label>Size:</label>
              <div className="size-options">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Color:</label>
              <div className="color-options">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Quantity:</label>
              <select 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)}
                className="quantity-select"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>

          {/* Additional Info */}
          <div className="additional-info">
            <div className="info-item">
              <span className="info-label">Brand:</span>
              <span>JACK & JONES</span>
            </div>
            <div className="info-item">
              <span className="info-label">Material:</span>
              <span>Polyester,Viscose,elastane</span>
            </div>
            <div className="info-item">
              <span className="info-label">Care Instructions:</span>
              <span>Do not Wash</span>
            </div>
            <div className="info-item">
              <span className="info-label">Origin:</span>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Purchase Options Box */}
        <div className="purchase-box">
          <div className="purchase-price">
            <span className="price">₹12,799</span>
            <span className="shipping">FREE Shipping</span>
          </div>
          
          <div className="stock-info">
            <span className="in-stock">In Stock</span>
          </div>

          <div className="purchase-quantity">
            <label>Qty:</label>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          <div className="purchase-buttons">
            <button className="add-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>

          <div className="security-info">
            <div className="security-item">
              <span>🔒</span>
              <span>Secure transaction</span>
            </div>
            <div className="security-item">
              <span>📦</span>
              <span>Ships from Amazon</span>
            </div>
            <div className="security-item">
              <span>↩️</span>
              <span>Sold by JACK & JONES</span>
            </div>
          </div>

          <div className="wishlist-section">
            <button className="wishlist-btn">Add to Wish List</button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description">
        <h3>About this item</h3>
        <ul>
          <li>Premium Quality Cotton Blend Fabric</li>
          <li>Single Breasted Blazer</li>
          <li>Do not wash, do not tumble dry</li>
          <li>Iron at max 110°C, steam ironing can cause irreversible damage</li>
          <li>Regular fit</li>
          <li>Material composition: 78% polyester, 17% viscose, 5% elastane</li>
        </ul>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h3>Customers who viewed this item also viewed</h3>
        <div className="related-grid">
          {[1, 2, 3, 4].map(item => (
            <div key={item} className="related-item">
              <img src={`https://m.media-amazon.com/images/I/61dnF+ORF+L._SX679_.jpg`} alt="Related product" />
              <div className="related-info">
                <p>Similar Anarkali Kurta Set</p>
                <span className="related-price">₹999</span>
                <div className="related-rating">★★★★☆ (890)</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;