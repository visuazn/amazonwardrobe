import React, { useState } from 'react';
import './RecommendationsPage.css';
import WhiteFormalShirtImg from '../assets/images/WhiteFormalShirt.jpg';
import FormalNavyBluePantsImg from '../assets/images/FormalNavyBluePants.jpg';
import BrownFormalShoesImg from '../assets/images/BrownFormalShoes.png';
import CasualPinkShirtImg from '../assets/images/CasualPinkShirt.jpg';
import BeigePantImg from '../assets/images/BeigePant.jpg';
import CasualSneakersImg from '../assets/images/CasualSneakers.jpg';
import BlackTshirtImg from '../assets/images/BlackTshirt.jpg';
import BlackWatchImg from '../assets/images/BlackWatch.jpg';
import BrownBeltImg from '../assets/images/BrownBelt.jpg';
import BrownMulesImg from '../assets/images/BrownMules.jpg';
import BrownShoulderBagImg from '../assets/images/BrownShoulderBag.jpg';
import FannyBagImg from '../assets/images/FannyBag.jpg';
import CrossbodyBagImg from '../assets/images/CrossbodyBag.jpg';
import PointedToeHeelsImg from '../assets/images/PointedToeHeels.jpg';
import BlackCamisoleImg from '../assets/images/BlackCamisole.jpg';
import HalterNeckSatinTopImg from '../assets/images/HalterNeckSatinTop.jpg';
import ClassicBrownWatchImg from '../assets/images/ClassicBrownWatch.jpg';
import BlackLoafersImg from '../assets/images/BlackLoafers.jpg';
import BlackBootsImg from '../assets/images/BlackBoots.jpg';
import CorduroyWideLegPantsImg from '../assets/images/CorduroyWideLegPants.jpg';
import BlackCasualHeelsImg from '../assets/images/BlackCasualHeels.jpg';
import WideLegFlareJeanImg from '../assets/images/WideLegFlareJean.png';
import BlackToteBagImg from '../assets/images/BlackToteBag.jpg';

const RecommendationsPage = () => {
  const [activeTab, setActiveTab] = useState('smart-shop');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('work');
  const [selectedWeather, setSelectedWeather] = useState('mild');

  // Add Item Form State
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Tops',
    color: '',
    occasion: 'Casual',
    season: 'All',
    tags: '',
    price: '',
    rating: 4.0,
    reviews: 0,
    image: null,
    imagePreview: null
  });

  // Mock wardrobe items (My Closet) - now with state for adding new items
  const [wardrobeItems, setWardrobeItems] = useState([
    {
      id: 1,
      name: "Black T-shirt",
      category: "Tops",
      color: "Black",
      occasion: "Work",
      season: "All",
      image: BlackTshirtImg,
      tags: ["Casual", "Versatile", "Classic"],
      price: "₹2,999",
      rating: 4.5,
      reviews: 1234
    },
    {
      id: 2,
      name: "White Formal Shirt",
      category: "Tops",
      color: "White",
      occasion: "Work",
      season: "All",
      image: WhiteFormalShirtImg,
      tags: ["Essential", "Classic", "Formal"],
      price: "₹1,299",
      rating: 4.3,
      reviews: 987
    },
    {
      id: 3,
      name: "Casual Pink Shirt",
      category: "Tops",
      color: "Pink",
      occasion: "Casual",
      season: "All",
      image: CasualPinkShirtImg,
      tags: ["Casual", "Comfortable", "Versatile"],
      price: "₹1,899",
      rating: 4.2,
      reviews: 756
    },
    {
      id: 4,
      name: "Brown Formal Shoes",
      category: "Footwear",
      color: "Brown",
      occasion: "Evening",
      season: "All",
      image: BrownFormalShoesImg,
      tags: ["Elegant", "Statement", "Feminine"],
      price: "₹2,199",
      rating: 4.6,
      reviews: 543
    },
    {
      id: 5,
      name: "Formal Navy Blue Pants",
      category: "Bottoms",
      color: "Navy",
      occasion: "Work",
      season: "All",
      image: FormalNavyBluePantsImg,
      tags: ["Professional", "Sleek", "Essential"],
      price: "₹1,799",
      rating: 4.4,
      reviews: 432
    },
    {
      id: 6,
      name: "Beige Pant",
      category: "Bottoms",
      color: "Beige",
      occasion: "Work",
      season: "All",
      image: BeigePantImg,
      tags: ["Casual", "Warm", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 7,
      name: "Casual Sneakers",
      category: "Footwear",
      color: "Black",
      occasion: "Casual",
      season: "all",
      image: CasualSneakersImg,
      tags: ["Casual", "Comfort", "Evening"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 8,
      name: "Black Watch",
      category: "Accessories",
      color: "Black",
      occasion: "Casual",
      season: "all",
      image: BlackWatchImg,
      tags: ["Casual", "Daily", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 9,
      name: "Brown Belt",
      category: "Accessories",
      color: "Brown",
      occasion: "Casual",
      season: "all",
      image: BrownBeltImg,
      tags: ["Casual", "Daily", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 10,
      name: "Brown Mules",
      category: "Footwear",
      color: "Brown",
      occasion: "Casual",
      season: "all",
      image: BrownMulesImg,
      tags: ["Casual", "Classic", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 11,
      name: "Brown Shoulder Bag",
      category: "Accessories",
      color: "Brown",
      occasion: "Casual",
      season: "all",
      image: BrownShoulderBagImg,
      tags: ["Casual", "Daily", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 12,
      name: "Fanny Bag",
      category: "Accessories",
      color: "White",
      occasion: "Casual",
      season: "all",
      image: FannyBagImg,
      tags: ["Casual", "Travel", "Daily"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 13,
      name: "Crossbody Bag",
      category: "Accessories",
      color: "Biege",
      occasion: "Casual",
      season: "all",
      image: CrossbodyBagImg,
      tags: ["Casual", "Daily", "Travel"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 14,
      name: "Pointed Toe Heels",
      category: "Footwear",
      color: "Brown",
      occasion: "Casual",
      season: "all",
      image: PointedToeHeelsImg,
      tags: ["Casual", "Daily", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 15,
      name: "Black Camisole",
      category: "Tops",
      color: "Brown",
      occasion: "Casual",
      season: "all",
      image: BlackCamisoleImg,
      tags: ["Casual", "Daily", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 16,
      name: "Halter Neck Satin Top",
      category: "Tops",
      color: "Brown",
      occasion: "Casual",
      season: "all",
      image: HalterNeckSatinTopImg,
      tags: ["Casual", "Daily", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 17,
      name: "Classic Brown Watch",
      category: "Accessories",
      color: "Brown",
      occasion: "Casual",
      season: "all",
      image: ClassicBrownWatchImg,
      tags: ["Casual", "Classic", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 18,
      name: "Black Loafers",
      category: "Footwear",
      color: "Black",
      occasion: "Casual",
      season: "all",
      image: BlackLoafersImg,
      tags: ["Casual", "Work", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    },
    {
      id: 19,
      name: "Navy Blazer",
      category: "Outerwear",
      color: "Black",
      occasion: "Professional",
      season: "all",
      image: "https://frenchcrown.in/cdn/shop/files/BL695_2.jpg?v=1737976063&width=1600",
      tags: ["Professional", "Work", "Timeless"],
      price: "₹4,999",
      rating: 4.7,
      reviews: 321
    }
  ]);

  // Mock capsule wardrobe data
  const capsuleWardrobe = {
    name: "Work Capsule Collection",
    description: "7 pieces that create 15+ professional outfits",
    pieces: [
      { name: "Black Blazer", owned: true, priority: "high" },
      { name: "White Formal Shirt", owned: true, priority: "high" },
      { name: "Black Trousers", owned: true, priority: "high" },
      { name: "Navy Pencil Skirt", owned: false, priority: "medium" },
      { name: "Cream Blouse", owned: false, priority: "medium" },
      { name: "Gray Cardigan", owned: false, priority: "low" },
      { name: "Black Pumps", owned: false, priority: "high" },
    ],
    outfitCount: 15,
    completeness: 43,
  };

  // Mock outfit combinations
  const outfitCombinations = [
    {
      id: 1,
      name: "Professional Power Look",
      occasion: "Work Meeting",
      items: [
        { name: "Navy Blazer", image: "https://m.media-amazon.com/images/I/71YPlyjzMKL._AC_SY879_.jpg" },
        { name: "White Formal Shirt", image: WhiteFormalShirtImg },
        { name: "Navy Trousers", image: FormalNavyBluePantsImg },
        { name: "Brown Formal Shoes", image: BrownFormalShoesImg },
      ],
      confidence: 95,
      weather: "Cool",
      tags: ["Professional", "Confident", "Classic"],
    },
    {
      id: 2,
      name: "Smart Casual Friday",
      occasion: "Casual Work",
      items: [
        { name: "Crop Top", image: "https://m.media-amazon.com/images/I/516KlhuazTL._AC_SY879_.jpg" },
        { name: "Black Tote Bag", image: BlackToteBagImg },
        { name: "Corduroy Wide-Leg Pants", image: CorduroyWideLegPantsImg },
        { name: "Black Casual Heels", image: BlackCasualHeelsImg },
      ],
      confidence: 88,
      weather: "Mild",
      tags: ["Stylish", "Comfortable", "Versatile"],
    },
    {
      id: 3,
      name: "Weekend Chic",
      occasion: "Casual Outing",
      items: [
        { name: "Crop Top", image: "https://m.media-amazon.com/images/I/516KlhuazTL._AC_SY879_.jpg" },
        { name: "Brown Shoulder Bag", image: BrownShoulderBagImg },
        { name: "Wide-Leg Flare Jean", image: WideLegFlareJeanImg },
        { name: "Black Boots", image: BlackBootsImg },
      ],
      confidence: 92,
      weather: "Cool",
      tags: ["Relaxed", "Chic", "Effortless"],
    },
  ];

  // Smart shopping recommendations
  const smartShoppingItems = [
    {
      id: 1,
      name: "Avanova Women Polo Collared Crop Tops",
      price: "₹1,899",
      originalPrice: "₹2,999",
      brand: "Avanova",
      image: "https://m.media-amazon.com/images/I/516KlhuazTL._AC_SY879_.jpg",
      analysis: {
        type: "gap_filler",
        newOutfits: 8,
        existingMatches: ["Flaired Bottom", "Ankle Boots", "Brown Mules"],
        recommendation: "high",
        reason: "This shirt fills a major gap in your work wardrobe and creates 8 new professional outfits with your existing pieces.",
      },
      sustainability: {
        score: 85,
        factors: ["Versatile", "Classic Style", "Quality Material"],
      },
      rating: 4.4,
      reviews: 1234,
      category: "Bottoms",
      recommendationType: "Gap Filler"
    },
    {
      id: 2,
      name: "FindThy Women's Waistcoat",
      price: "₹1,599",
      originalPrice: "₹2,299",
      brand: "FindThy",
      image: "https://m.media-amazon.com/images/I/51rZElrEeML._AC_SX679_.jpg",
      analysis: {
        type: "color_gap",
        newOutfits: 6,
        existingMatches: ["Wide Leg Jeans", "White Shirt", "Open heel shoes"],
        recommendation: "medium",
        reason: "This adds a beautiful color to your wardrobe and pairs well with your neutral pieces.",
      },
      sustainability: {
        score: 72,
        factors: ["Color Diversity", "Good Quality", "Multiple Pairings"],
      },
      rating: 4.2,
      reviews: 876,
      category: "Tops",
      recommendationType: "Color Enhancement"
    },
    {
      id: 3,
      name: "J.Ver Men's Short-Sleeved Shirt",
      price: "₹1,299",
      originalPrice: "₹1,899",
      brand: "J.Ver",
      image: "https://m.media-amazon.com/images/I/61LGEA9319L._AC_SX679_.jpg",
      analysis: {
        type: "versatility_boost",
        newOutfits: 12,
        existingMatches: ["Formal Black Pant", "Round Dial Brown Watch", "Formal Brown Shoes"],
        recommendation: "high",
        reason: "This cardigan can be layered with most of your existing pieces for different occasions.",
      },
      sustainability: {
        score: 88,
        factors: ["Extremely Versatile", "Layering Piece", "Season Extending"],
      },
      rating: 4.5,
      reviews: 2134,
      category: "Outerwear",
      recommendationType: "Versatility Booster"
    }
  ];

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewItem(prev => ({
          ...prev,
          image: file,
          imagePreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setNewItem(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle adding new item
  const handleAddItem = () => {
    if (!newItem.name || !newItem.color || !newItem.imagePreview) {
      alert('Please fill in all required fields and upload an image');
      return;
    }

    const newWardrobeItem = {
      id: wardrobeItems.length + 1,
      name: newItem.name,
      category: newItem.category,
      color: newItem.color,
      occasion: newItem.occasion,
      season: newItem.season,
      image: newItem.imagePreview,
      tags: newItem.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      price: newItem.price || "₹0",
      rating: newItem.rating,
      reviews: newItem.reviews
    };

    setWardrobeItems(prev => [...prev, newWardrobeItem]);
    
    // Reset form
    setNewItem({
      name: '',
      category: 'Tops',
      color: '',
      occasion: 'Casual',
      season: 'All',
      tags: '',
      price: '',
      rating: 4.0,
      reviews: 0,
      image: null,
      imagePreview: null
    });

    setShowAddItemModal(false);
  };

  const getWardrobeStats = () => {
    const totalItems = wardrobeItems.length;
    const categories = new Set(wardrobeItems.map(item => item.category)).size;
    const colors = new Set(wardrobeItems.map(item => item.color)).size;
    const versatileItems = wardrobeItems.filter(item => item.tags.includes("Versatile")).length;
    return { totalItems, categories, colors, versatileItems };
  };

  const getFilteredWardrobeItems = () => {
    return wardrobeItems.filter(item => {
      if (selectedCategory !== 'all' && item.category.toLowerCase() !== selectedCategory) {
        return false;
      }
      return true;
    });
  };

  const getFilteredSmartShoppingItems = () => {
    return smartShoppingItems.filter(item => {
      // Category filter
      if (categoryFilter !== 'all' && item.category !== categoryFilter) {
        return false;
      }

      // Price filter
      const price = parseInt(item.price.replace('₹', '').replace(',', ''));
      if (priceFilter === 'under-1000' && price >= 1000) return false;
      if (priceFilter === '1000-2000' && (price < 1000 || price >= 2000)) return false;
      if (priceFilter === '2000-5000' && (price < 2000 || price >= 5000)) return false;
      if (priceFilter === 'above-5000' && price < 5000) return false;

      // Rating filter
      if (ratingFilter === '4-above' && item.rating < 4) return false;
      if (ratingFilter === '3-4' && (item.rating < 3 || item.rating >= 4)) return false;

      return true;
    });
  };

  const getFilteredOutfits = () => {
    return outfitCombinations.filter(outfit => {
      if (selectedOccasion !== 'all' && outfit.occasion.toLowerCase().includes(selectedOccasion) === false) {
        return false;
      }
      if (selectedWeather !== 'all' && outfit.weather.toLowerCase() !== selectedWeather) {
        return false;
      }
      return true;
    });
  };

  const resetFilters = () => {
    setPriceFilter('all');
    setRatingFilter('all');
    setCategoryFilter('all');
    setSelectedCategory('all');
    setSelectedOccasion('all');
    setSelectedWeather('all');
  };

  const generateNewOutfits = () => {
    // In a real app, this would call an AI service to generate new combinations
    console.log('Generating new outfit combinations...');
  };

  const stats = getWardrobeStats();

  return (
    <div className="recommendations-page">
      {/* Header Section */}
      <div className="recommendations-header">
        <div className="header-content">
          <div className="header-logo">
            <div className="logo-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div>
              <h1>Smart Wardrobe</h1>
              <p>Your AI-Powered Style Planner</p>
            </div>
          </div>
          <div className="header-badges">
            <div className="badge sustainable">
              <i className="fas fa-leaf"></i>
              Sustainable Shopping
            </div>
            <button className="quick-scan-btn" onClick={() => setShowActivityModal(true)}>
              <i className="fas fa-camera"></i>
              Quick Scan
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tab-navigation">
        <div className="tab-container">
          <button
            className={`tab-btn ${activeTab === 'smart-shop' ? 'active' : ''}`}
            onClick={() => setActiveTab('smart-shop')}
          >
            <i className="fas fa-shopping-bag"></i>
            <span>Smart Shop</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'outfits' ? 'active' : ''}`}
            onClick={() => setActiveTab('outfits')}
          >
            <i className="fas fa-sparkles"></i>
            <span>Outfits</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'my-closet' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-closet')}
          >
            <i className="fas fa-tshirt"></i>
            <span>My Closet</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* MY CLOSET TAB */}
        {activeTab === 'my-closet' && (
          <div className="tab-content">
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-tshirt"></i>
                </div>
                <div className="stat-info">
                  <div className="stat-number">{stats.totalItems}</div>
                  <div className="stat-label">Total Items</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-tags"></i>
                </div>
                <div className="stat-info">
                  <div className="stat-number">{stats.categories}</div>
                  <div className="stat-label">Categories</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <div className="stat-info">
                  <div className="stat-number">{stats.colors}</div>
                  <div className="stat-label">Colors</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="stat-info">
                  <div className="stat-number">{stats.versatileItems}</div>
                  <div className="stat-label">Versatile</div>
                </div>
              </div>
            </div>

            {/* Add Item Section */}
            <div className="add-item-section">
              <div className="section-header">
                <div>
                  <h2>Your Digital Closet</h2>
                  <p>AI-powered wardrobe organization and analysis</p>
                </div>
                <button className="add-item-btn" onClick={() => setShowAddItemModal(true)}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>
              </div>
            </div>

            {/* Category Filter for Wardrobe */}
            <div className="category-filter">
              <div className="filter-container">
                {['all', 'tops', 'bottoms', 'outerwear', 'footwear', 'accessories'].map(category => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Wardrobe Items Grid */}
            <div className="products-grid">
              {getFilteredWardrobeItems().map(item => (
                <div key={item.id} className="wardrobe-item-card">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <div className="item-badges">
                      <span className="badge category">{item.category}</span>
                      <span className="badge color">{item.color}</span>
                    </div>
                    <div className="item-tags">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OUTFITS TAB */}
        {activeTab === 'outfits' && (
          <div className="tab-content">
            {/* Capsule Wardrobe Planner */}
            <div className="capsule-wardrobe-section">
              <div className="capsule-wardrobe-card">
                <div className="capsule-header">
                  <div className="capsule-icon">
                    <i className="fas fa-door-open"></i>
                  </div>
                  <div>
                    <h2>Capsule Wardrobe Planner</h2>
                    <p>Build a versatile wardrobe with fewer, smarter pieces</p>
                  </div>
                </div>
                
                <div className="capsule-content">
                  <div className="capsule-info">
                    <div>
                      <h3>{capsuleWardrobe.name}</h3>
                      <p className="capsule-description">{capsuleWardrobe.description}</p>
                      <div className="capsule-stats">
                        <div className="stat-item">
                          <div className="stat-value">{capsuleWardrobe.outfitCount}+</div>
                          <div className="stat-label">Outfit Combos</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-value">{capsuleWardrobe.completeness}%</div>
                          <div className="stat-label">Complete</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="capsule-pieces">
                    {capsuleWardrobe.pieces.map((piece, index) => (
                      <div key={index} className="capsule-piece">
                        <span className={`piece-name ${piece.owned ? 'owned' : 'missing'}`}>
                          {piece.name}
                        </span>
                        <div className="piece-badges">
                          <span className={`priority-badge ${piece.priority}`}>
                            {piece.priority}
                          </span>
                          <span className={`status-badge ${piece.owned ? 'owned' : 'missing'}`}>
                            {piece.owned ? 'Owned' : 'Missing'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outfit Generator Controls */}
            <div className="outfit-controls">
              <h2>AI Outfit Generator</h2>
              <p>Get personalized outfit suggestions based on your wardrobe</p>
              
              <div className="controls-grid">
                <div className="control-group">
                  <label>Occasion</label>
                  <select value={selectedOccasion} onChange={(e) => setSelectedOccasion(e.target.value)}>
                    <option value="all">All Occasions</option>
                    <option value="work">Work</option>
                    <option value="casual">Casual</option>
                    <option value="evening">Evening</option>
                    <option value="travel">Travel</option>
                  </select>
                </div>
                <div className="control-group">
                  <label>Weather</label>
                  <select value={selectedWeather} onChange={(e) => setSelectedWeather(e.target.value)}>
                    <option value="all">All Weather</option>
                    <option value="hot">Hot (75°F+)</option>
                    <option value="mild">Mild (60-75°F)</option>
                    <option value="cool">Cool (45-60°F)</option>
                    <option value="cold">Cold (Below 45°F)</option>
                  </select>
                </div>
                <div className="control-group">
                  <button className="generate-btn" onClick={generateNewOutfits}>
                    <i className="fas fa-sync-alt"></i>
                    Generate Outfits
                  </button>
                </div>
              </div>
            </div>

            {/* Generated Outfits Grid */}
            <div className="outfits-grid">
              {getFilteredOutfits().map(outfit => (
                <div key={outfit.id} className="outfit-card">
                  <div className="outfit-header">
                    <h3>{outfit.name}</h3>
                    <span className="confidence-badge">{outfit.confidence}% match</span>
                  </div>
                  <div className="outfit-meta">
                    <span><i className="fas fa-calendar"></i> {outfit.occasion}</span>
                    <span><i className="fas fa-thermometer-half"></i> {outfit.weather}</span>
                  </div>
                  <div className="outfit-items">
                    {outfit.items.map((item, index) => (
                      <div key={index} className="outfit-item">
                        <img src={item.image} alt={item.name} />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="outfit-tags">
                    {outfit.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SMART SHOP TAB */}
        {activeTab === 'smart-shop' && (
          <div className="tab-content">
            {/* Smart Shopping Header */}
            <div className="smart-shop-header">
              <h2>Smart Shopping Recommendations</h2>
              <p>AI-powered analysis of how new items integrate with your existing wardrobe</p>
            </div>

            {/* Filter Sidebar */}
            <div className="content-with-sidebar">
              <div className="filter-sidebar">
                <div className="sidebar-header">
                  <h3>Filters</h3>
                  <button className="reset-filters" onClick={resetFilters}>
                    Clear All
                  </button>
                </div>

                {/* Category Filter */}
                <div className="filter-section">
                  <h4>Category</h4>
                  <div className="filter-options">
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="all"
                        checked={categoryFilter === 'all'}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                      />
                      All Categories
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="Tops"
                        checked={categoryFilter === 'Tops'}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                      />
                      Tops
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="Bottoms"
                        checked={categoryFilter === 'Bottoms'}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                      />
                      Bottoms
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="Outerwear"
                        checked={categoryFilter === 'Outerwear'}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                      />
                      Outerwear
                    </label>
                  </div>
                </div>

                {/* Price Filter */}
                <div className="filter-section">
                  <h4>Price Range</h4>
                  <div className="filter-options">
                    <label>
                      <input
                        type="radio"
                        name="price"
                        value="all"
                        checked={priceFilter === 'all'}
                        onChange={(e) => setPriceFilter(e.target.value)}
                      />
                      All Prices
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        value="under-1000"
                        checked={priceFilter === 'under-1000'}
                        onChange={(e) => setPriceFilter(e.target.value)}
                      />
                      Under ₹1,000
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        value="1000-2000"
                        checked={priceFilter === '1000-2000'}
                        onChange={(e) => setPriceFilter(e.target.value)}
                      />
                      ₹1,000 - ₹2,000
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        value="2000-5000"
                        checked={priceFilter === '2000-5000'}
                        onChange={(e) => setPriceFilter(e.target.value)}
                      />
                      ₹2,000 - ₹5,000
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="price"
                        value="above-5000"
                        checked={priceFilter === 'above-5000'}
                        onChange={(e) => setPriceFilter(e.target.value)}
                      />
                      Above ₹5,000
                    </label>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="filter-section">
                  <h4>Customer Rating</h4>
                  <div className="filter-options">
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value="all"
                        checked={ratingFilter === 'all'}
                        onChange={(e) => setRatingFilter(e.target.value)}
                      />
                      All Ratings
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value="4-above"
                        checked={ratingFilter === '4-above'}
                        onChange={(e) => setRatingFilter(e.target.value)}
                      />
                      4★ & Above
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value="3-4"
                        checked={ratingFilter === '3-4'}
                        onChange={(e) => setRatingFilter(e.target.value)}
                      />
                      3★ - 4★
                    </label>
                  </div>
                </div>
              </div>

              {/* Smart Shopping Products */}
              <div className="products-container">
                <div className="products-header">
                  <h3>Showing {getFilteredSmartShoppingItems().length} recommendations</h3>
                </div>
                <div className="products-grid smart-shopping-grid">
                  {getFilteredSmartShoppingItems().map(item => (
                    <div key={item.id} className="smart-shopping-card">
                      <div className="product-image">
                        <img src={item.image} alt={item.name} />
                        <div className={`recommendation-badge ${item.analysis.recommendation}`}>
                          {item.analysis.recommendation === 'high' && <i className="fas fa-check-circle"></i>}
                          {item.analysis.recommendation === 'medium' && <i className="fas fa-star"></i>}
                          {item.analysis.recommendation === 'low' && <i className="fas fa-exclamation-triangle"></i>}
                          <span>{item.analysis.recommendation}</span>
                        </div>
                      </div>
                      <div className="product-details">
                        <h3>{item.name}</h3>
                        <p className="brand">{item.brand}</p>
                        <div className="price-info">
                          <span className="current-price">{item.price}</span>
                          {item.originalPrice && (
                            <span className="original-price">{item.originalPrice}</span>
                          )}
                        </div>
                        <div className="analysis-info">
                          <p className="reason">{item.analysis.reason}</p>
                          <div className="new-outfits">
                            <strong>New Outfits: +{item.analysis.newOutfits}</strong>
                          </div>
                          <div className="matches">
                            <p>Pairs with:</p>
                            <div className="match-tags">
                              {item.analysis.existingMatches.map(match => (
                                <span key={match} className="match-tag">{match}</span>
                              ))}
                            </div>
                          </div>
                          <div className="sustainability">
                            <div className="sustainability-score">
                              <span>Sustainability Score: {item.sustainability.score}/100</span>
                              <div className="score-bar">
                                <div 
                                  className="score-fill" 
                                  style={{width: `${item.sustainability.score}%`}}
                                ></div>
                              </div>
                            </div>
                            <div className="sustainability-factors">
                              {item.sustainability.factors.map(factor => (
                                <span key={factor} className="factor-tag">{factor}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="action-buttons">
                          <button className={`add-to-cart ${item.analysis.recommendation === 'high' ? 'primary' : 'secondary'}`}>
                            Add to Cart
                          </button>
                          <button className="wishlist-btn">
                            <i className="fas fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Item Modal */}
      {showAddItemModal && (
        <div className="modal-overlay" onClick={() => setShowAddItemModal(false)}>
          <div className="add-item-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Item to Wardrobe</h3>
              <button className="close-btn" onClick={() => setShowAddItemModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-grid">
                {/* Image Upload Section */}
                <div className="image-upload-section">
                  <label className="upload-label">
                    <div className="upload-area">
                      {newItem.imagePreview ? (
                        <img src={newItem.imagePreview} alt="Preview" className="image-preview" />
                      ) : (
                        <div className="upload-placeholder">
                          <i className="fas fa-camera"></i>
                          <p>Click to upload image</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>

                {/* Form Fields */}
                <div className="form-fields">
                  <div className="form-group">
                    <label>Item Name *</label>
                    <input
                      type="text"
                      value={newItem.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="e.g., Blue Denim Jacket"
                    />
                  </div>

                  <div className="form-group">
                    <label>Category *</label>
                    <select
                      value={newItem.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                    >
                      <option value="Tops">Tops</option>
                      <option value="Bottoms">Bottoms</option>
                      <option value="Outerwear">Outerwear</option>
                      <option value="Footwear">Footwear</option>
                      <option value="Accessories">Accessories</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Color *</label>
                    <input
                      type="text"
                      value={newItem.color}
                      onChange={(e) => handleInputChange('color', e.target.value)}
                      placeholder="e.g., Navy Blue"
                    />
                  </div>

                  <div className="form-group">
                    <label>Occasion</label>
                    <select
                      value={newItem.occasion}
                      onChange={(e) => handleInputChange('occasion', e.target.value)}
                    >
                      <option value="Casual">Casual</option>
                      <option value="Work">Work</option>
                      <option value="Evening">Evening</option>
                      <option value="Professional">Professional</option>
                      <option value="Travel">Travel</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Season</label>
                    <select
                      value={newItem.season}
                      onChange={(e) => handleInputChange('season', e.target.value)}
                    >
                      <option value="All">All Seasons</option>
                      <option value="Spring">Spring</option>
                      <option value="Summer">Summer</option>
                      <option value="Fall">Fall</option>
                      <option value="Winter">Winter</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Tags</label>
                    <input
                      type="text"
                      value={newItem.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                      placeholder="e.g., Casual, Versatile, Classic (comma separated)"
                    />
                  </div>

                  <div className="form-group">
                    <label>Price (Optional)</label>
                    <input
                      type="text"
                      value={newItem.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      placeholder="e.g., ₹2,999"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setShowAddItemModal(false)}>
                Cancel
              </button>
              <button className="add-btn" onClick={handleAddItem}>
                Add to Wardrobe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Activity Modal */}
      {showActivityModal && (
        <div className="modal-overlay" onClick={() => setShowActivityModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Activity Scanner</h3>
              <button className="close-btn" onClick={() => setShowActivityModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>Camera feature coming soon!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationsPage;