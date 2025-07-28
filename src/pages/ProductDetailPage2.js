import React, { useState, useEffect } from 'react';
import './ProductDetailPage2.css';
import WhiteFormalShirtImg from '../assets/images/WhiteFormalShirt.jpg';
import FormalNavyBluePantsImg from '../assets/images/FormalNavyBluePants.jpg';
import BrownFormalShoesImg from '../assets/images/BrownFormalShoes.png';
import CasualPinkShirtImg from '../assets/images/CasualPinkShirt.jpg';
import BeigePantImg from '../assets/images/BeigePant.jpg';
import CasualSneakersImg from '../assets/images/CasualSneakers.jpg';
import BlackTshirtImg from '../assets/images/BlackTshirt.jpg';
import BrownBeltImg from '../assets/images/BrownBelt.jpg';
import BrownMulesImg from '../assets/images/BrownMules.jpg';
import BrownShoulderBagImg from '../assets/images/BrownShoulderBag.jpg';
import PointedToeHeelsImg from '../assets/images/PointedToeHeels.jpg';
import BlackCamisoleImg from '../assets/images/BlackCamisole.jpg';
import HalterNeckSatinTopImg from '../assets/images/HalterNeckSatinTop.jpg';
import BlackLoafersImg from '../assets/images/BlackLoafers.jpg';
import MetallicClutchImg from '../assets/images/MetallicClutch.jpg';
import WhiteLongSleeveShirtImg from '../assets/images/WhiteLongSleeveShirt.jpg';

const ProductDetailPage2 = () => {
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
      { id: 3, name: "Black Camisole", image: BlackCamisoleImg },
      { id: 4, name: "Black T-Shirt", image: BlackTshirtImg },
      { id: 15, name: "Halter Neck Satin Top", image: HalterNeckSatinTopImg },
      { id: 15, name: "White Long Sleeve Shirt", image: WhiteLongSleeveShirtImg },
    ],
    bottoms: [
      { id: 5, name: "Formal Navy Blue Pants", image: FormalNavyBluePantsImg },
      { id: 6, name: "Dark Jeans", image: "https://m.media-amazon.com/images/I/511o67bcZAL._SX300_SY300_QL70_FMwebp_.jpg" },
      { id: 7, name: "Beige Pant", image: BeigePantImg },
      { id: 8, name: "Wide Leg Pants", image: "https://m.media-amazon.com/images/I/61i7RkC0CbL._SY879_.jpg" },
    ],
    footwear: [
      { id: 9, name: "Brown Formal Shoes", image: BrownFormalShoesImg },
      { id: 10, name: "Black Loafers", image: BlackLoafersImg },
      { id: 11, name: "Casual Sneakers", image: CasualSneakersImg },
      { id: 16, name: "Pointed Toe Heels", image: PointedToeHeelsImg },
      { id: 17, name: "Brown Mules", image: BrownMulesImg },
    ],
    accessories: [
      { id: 12, name: "Brown Shoulder Bag", image: BrownShoulderBagImg },
      { id: 13, name: "Metallic Clutch", image: MetallicClutchImg },
      { id: 14, name: "Brown Belt", image: BrownBeltImg },
    ],
  };

  const outfitSuggestions = [
    {
      id: 1,
      name: "Professional Power Look",
      occasion: "Work Meeting",
      confidence: 95,
      items: ["White Long Sleeve Shirt", "Brown Mules", "Brown Shoulder Bag", "Leather Bag"],
      compliment: "This combination screams confidence and professionalism! You'll absolutely nail that presentation! 💼✨",
    },
    {
      id: 2,
      name: "Smart Casual Chic",
      occasion: "Business Lunch",
      confidence: 92,
      items: ["Halter Neck Satin Top", "Pointed Toe Heels", "Metallic Clutch", "Gold Watch"],
      compliment: "Perfect balance of comfort and style! This look is effortlessly sophisticated and so you! 🌟",
    },
    {
      id: 3,
      name: "Elegant Evening",
      occasion: "Dinner Date",
      confidence: 88,
      items: ["Black Camisole", "Black Loafers", "Brown Belt", "Pearl Necklace"],
      compliment: "Absolutely stunning! This outfit will make you feel like the elegant, confident person you are! 💎",
    },
  ];

  const aiMessages = [
    "This skirt is a style essential! It goes with 12 tops in your wardrobe! 🎯",
    "Perfect choice! This skirt transitions seamlessly from day to night! ✨",
    "This olive skirt matches your style perfectly - modern, chic, and endlessly versatile! 💪",
    "Smart shopping! This piece will create 12+ new outfit combinations! 🔥",
    "Smart pick! This versatile skirt creates 20+ different looks! 👌",
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
    name: "Women's Satin High Waisted Maxi Skirts Hidden Elasticized Waistband A Line Long Skirt",
    price: 1599,
    image: "https://m.media-amazon.com/images/I/51mtwV0LgJL._AC_SX679_.jpg"
  };

  const productImages = [
      "https://m.media-amazon.com/images/I/51mtwV0LgJL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71HwF9poaJL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71W7ukEO7SL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71SBBDe9l+L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71dTZS5Vp+L._AC_SX679_.jpg"
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Army Green', 'Hot Pink', 'Cheetah Print', 'Irish Green', 'Black'];

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span>
        <span>&gt;</span>
        <span>Clothing & Accessories</span>
        <span>&gt;</span>
        <span>Women</span>
        <span>&gt;</span>
        <span>Skirts</span>
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
                This Skirt creates <span>11+ new outfits</span> with your existing wardrobe!
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
            Women's Satin High Waisted Maxi Skirts Hidden Elasticized Waistband A Line Long Skirt
          </h1>
          
          <div className="rating-section">
            <div className="stars">
              <span>★★★★☆</span>
              <span className="rating-count">4.2 out of 5 stars</span>
              <span className="review-count">1,234 ratings</span>
            </div>
          </div>

          <div className="price-section">
            <span className="current-price">₹1,599</span>
            <span className="original-price">₹2,199</span>
            <span className="discount">(-33%)</span>
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
              <span>Outoshe</span>
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
            <span className="price">₹1,599</span>
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
              <span>Sold by Outoshe</span>
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

export default ProductDetailPage2;