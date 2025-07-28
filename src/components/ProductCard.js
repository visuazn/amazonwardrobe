import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const getTagColor = (type) => {
    switch (type) {
      case 'Weather-Based':
        return '#4a90e2';
      case 'Location-Aware':
        return '#50c878';
      case 'Regional Commerce':
        return '#ff6b35';
      case 'Activity-Based':
        return '#9b59b6';
      case 'Temporal Intelligence':
        return '#e67e22';
      default:
        return '#666';
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-tags">
          <div className="recommendation-tag" style={{ backgroundColor: getTagColor(product.recommendationType) }}>
            {product.recommendationType}
          </div>
          
          <div className="category-tag">
            {product.category}
          </div>

          {product.salesIncrease && (
            <div className="sales-increase-tag">
              <i className="fas fa-trending-up"></i>
              <span>{product.salesIncrease} in Chennai</span>
            </div>
          )}
        </div>
        
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>
        
        <div className="product-price">
          <span className="current-price">{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">{product.originalPrice}</span>
          )}
        </div>
        
        <div className="recommendation-reason">
          <i className="fas fa-lightbulb"></i>
          <span>{product.recommendationReason}</span>
        </div>
        
        <div className="product-actions">
          <button className="add-to-cart-btn">
            <i className="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button className="wishlist-btn">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 