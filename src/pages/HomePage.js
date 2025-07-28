import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  // Function to handle product clicks
  const handleProductClick = (productAlt) => {
    if (productAlt === "Bodycon Dress") {
      navigate('/product2');
    } else if (productAlt === "Men Blazer") {
      navigate('/product');
    }
    // You can add more conditions here for other products if needed
  };

  return (
    <div className="homepage">
      {/* Hero Banner */}
      <div className="hero-banner">
        <Link to="/recommendations" className="banner-link">
          <img 
            src="https://m.media-amazon.com/images/I/71qntBcTtBL._SL1500_.jpg"
            alt="Smart Recommendations - Right Product, Right Time"
            className="banner-image"
          />
          <div className="banner-overlay">
            <div className="banner-content">
              <h1>Smart Wardrobe</h1>
              <p>Dress Sustainably, Style Infinitely: AI-Powered Wardrobe Planning</p>
              <button className="cta-button">Try now !</button>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Pick up where you left off */}
        <div className="content-section">
          <h2>Pick up where you left off</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/61dnF+ORF+L._SX679_.jpg" alt="Anarkali Kurta" />
              <span>ESTELA Women Red...</span>
            </div>
            <div 
              className="product-item" 
              onClick={() => handleProductClick("Men Blazer")}
              style={{ cursor: 'pointer' }}
            >
              <img src="https://m.media-amazon.com/images/I/71YPlyjzMKL._AC_SY879_.jpg" alt="Men Blazer" />
              <span>JACK & JONES Men's Blazer...</span>
            </div>
            <div 
              className="product-item" 
              onClick={() => handleProductClick("Bodycon Dress")}
              style={{ cursor: 'pointer' }}
            >
              <img src="https://m.media-amazon.com/images/I/51mtwV0LgJL._AC_SX679_.jpg" alt="Bodycon Dress" />
              <span>High Waisted Maxi Skirts...</span>
            </div>
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/71M5Y9eocIL._SY879_.jpg" alt="Crew Polo" />
              <span>AMERICAN CREW Men's Regular...</span>
            </div>
          </div>
          <Link to="/recommendations" className="see-more">See more</Link>
        </div>

        {/* Categories to explore */}
        <div className="content-section">
          <h2>Categories to explore</h2>
          <div className="category-grid">
            <div className="category-item">
              <img src="https://m.media-amazon.com/images/I/81jhC8GUCLL._SL1500_.jpg" alt="Lunch boxes" />
              <span>Lunch boxes</span>
            </div>
            <div className="category-item">
              <img src="https://m.media-amazon.com/images/I/511o67bcZAL._SX300_SY300_QL70_FMwebp_.jpg" alt="Jars & containers" />
              <span>Jars & containers</span>
            </div>
            <div className="category-item">
              <img src="https://m.media-amazon.com/images/I/81AoULGsKKL._SL1500_.jpg" alt="Flat bed sheets" />
              <span>Flat bed sheets</span>
            </div>
            <div className="category-item">
              <img src="https://m.media-amazon.com/images/I/61i7RkC0CbL._SY879_.jpg" alt="Regular Fit Flexi" />
              <span>Symbol Premium Men's...</span>
            </div>
          </div>
        </div>

        {/* Deals related to items you've saved */}
        <div className="content-section">
          <h2>Deals related to items you've saved</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/51bVN8GfoEL._SX300_SY300_QL70_FMwebp_.jpg" alt="Educational Toy" />
              <span>Educational Board Game</span>
              <div className="price">₹899 <span className="original-price">₹1,299</span></div>
            </div>
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/81lGxS2ZisL._SX679_.jpg" alt="Echo Device" />
              <span>Amazon Echo Dot</span>
              <div className="price">₹3,499 <span className="original-price">₹4,499</span></div>
            </div>
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/71f3TKbgtHL._SL1500_.jpg" alt="Digital Frame" />
              <span>Digital Photo Frame</span>
              <div className="price">₹2,199 <span className="original-price">₹2,999</span></div>
            </div>
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/71zfpkr4bYL._SL1500_.jpg" alt="Headset" />
              <span>Wireless Headphones</span>
              <div className="price">₹1,299 <span className="original-price">₹1,999</span></div>
            </div>
          </div>
          <span className="see-all">See all deals</span>
        </div>

        {/* Buy again */}
        <div className="content-section">
          <h2>Buy again</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/81JR4RS3GdL._SL1500_.jpg" alt="Microfiber Cloth" />
              <span>ShineXPro Microfiber Cloth</span>
            </div>
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/51sEEZ7M1sL._SL1200_.jpg" alt="Toner" />
              <span>Minimalist 8% Glycolic Acid</span>
            </div>
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/51nj-aOh4WL._SL1080_.jpg" alt="Shampoo" />
              <span>L'Oréal Paris Hyaluron</span>
            </div>
            <div className="product-item">
              <img src="https://m.media-amazon.com/images/I/41ju7hakwUL._SL1000_.jpg" alt="Hair Mask" />
              <span>Dove Deep Repair ...</span>
            </div>
          </div>
          <span className="see-more">More in Buy Again</span>
        </div>
      </div>

      {/* Smart Recommendations Feature */}
      <div className="feature-section">
        <div className="feature-content">
          <h2>Introducing Smart Recommendations</h2>
          <p>Our AI-powered system understands your needs based on weather, location, activities, and time of day</p>
          <div className="feature-highlights">
            <div className="highlight">
              <i className="fas fa-cloud-sun"></i>
              <span>Weather-Responsive</span>
            </div>
            <div className="highlight">
              <i className="fas fa-map-marker-alt"></i>
              <span>Location-Aware</span>
            </div>
            <div className="highlight">
              <i className="fas fa-running"></i>
              <span>Activity-Based</span>
            </div>
            <div className="highlight">
              <i className="fas fa-clock"></i>
              <span>Time-Intelligent</span>
            </div>
          </div>
          <Link to="/recommendations" className="feature-cta">
            Try Smart Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;