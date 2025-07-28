import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to product detail page when search button is clicked
    navigate('/product');
  };

  const handleKeyPress = (e) => {
    // Also handle Enter key press in search input
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <nav className="amazon-nav">
      {/* Top Navigation Bar */}
      <div className="nav-belt">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <div className="amazon-logo-container">
              <span className="amazon-text">amazon</span>
              <span className="nav-domain">.in</span>
              <img src="/amazon_arrow.png" alt="Amazon Smile" className="amazon-arrow-img" />
            </div>
          </Link>
          
          <div className="nav-location">
            <i className="fas fa-map-marker-alt"></i>
            <div className="nav-location-text">
              <span className="nav-location-top">Deliver to Customer1</span>
              <span className="nav-location-bottom">Chennai 600096</span>
            </div>
          </div>
        </div>

        <div className="nav-fill">
          <form className="nav-search" onSubmit={handleSearch}>
            <select className="nav-search-dropdown">
              <option>All</option>
              <option>Electronics</option>
              <option>Books</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
              <option>Sports</option>
            </select>
            <input 
              type="text" 
              className="nav-search-input"
              placeholder="Search Amazon.in"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button type="submit" className="nav-search-button" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="nav-right">
          <div className="nav-item">
            <i className="fas fa-flag"></i>
            <span>EN</span>
            <i className="fas fa-caret-down"></i>
          </div>
          
          <div className="nav-item">
            <span className="nav-item-top">Hello, Customer1</span>
            <span className="nav-item-bottom">
              Account & Lists
              <i className="fas fa-caret-down"></i>
            </span>
          </div>
          
          <div className="nav-item">
            <span className="nav-item-top">Returns</span>
            <span className="nav-item-bottom">& Orders</span>
          </div>
          
          <div className="nav-cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="nav-cart-count">0</span>
            <span className="nav-cart-text">Cart</span>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="nav-main">
        <div className="nav-hamburger">
          <i className="fas fa-bars"></i>
          <span>All</span>
        </div>
        
        <div className="nav-main-links">
          <Link to="/">Fresh</Link>
          <span>Amazon Pay</span>
          <span>MX Player</span>
          <span>Sell</span>
          <span>Gift Cards</span>
          <span>Buy Again</span>
          <span>AmazonBasics</span>
          <span>Kindle eBooks</span>
          <span>Today's Deals</span>
          <Link to="/recommendations">Smart Wardrobe</Link>
          <span>Books</span>
          <span>Customer Service</span>
          <span>Home Improvement</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;