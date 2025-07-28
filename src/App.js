import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import RecommendationsPage from './pages/RecommendationsPage';
import ProductDetailPage from './pages/ProductDetailPage'; // Import the ProductDetailPage
import ProductDetailPage2 from './pages/ProductDetailPage2'; // Import the ProductDetailPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/product" element={<ProductDetailPage />} /> {/* Add this line */}
          <Route path="/product2" element={<ProductDetailPage2 />} /> {/* Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
