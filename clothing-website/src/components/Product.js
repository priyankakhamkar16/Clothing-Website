import React, { useState } from 'react';
import './Product.css';

import dressImg from '../assets/images/dress.avif';
import skirtImg from '../assets/images/skirt.avif';
import blouseImg from '../assets/images/blouse1.jpg';
import jeansImg from '../assets/images/jeans.jpeg';
import jacketImg from '../assets/images/jacket.avif';
import lehengaImg from '../assets/images/lehenga.avif';
import eveningGownImg from '../assets/images/evening-gown.avif';
import pencilSkirtImg from '../assets/images/pencil-skirt.avif';
import cropTopImg from '../assets/images/crop-top.webp';
import rippedJeansImg from '../assets/images/ripped-jeans.jpeg';
import bomberJacketImg from '../assets/images/bomber-jacket.jpeg';
import sareeImg from '../assets/images/saree.webp';

const Products = ({ onAddToCart, onAddToWishlist }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [popupMessage, setPopupMessage] = useState(''); // Popup message state

  const categories = ['All', 'Dresses', 'Skirts', 'Tops', 'Jeans', 'Ethnic Wear'];

  const products = [
    { id: 1, name: 'Elegant Dress', category: 'Dresses', price: '$50', image: dressImg },
    { id: 2, name: 'Chic Skirt', category: 'Skirts', price: '$35', image: skirtImg },
    { id: 3, name: 'Stylish Top', category: 'Tops', price: '$25', image: blouseImg },
    { id: 4, name: 'Slim-fit Jeans', category: 'Jeans', price: '$40', image: jeansImg },
    { id: 5, name: 'Classic Jacket', category: 'Tops', price: '$60', image: jacketImg },
    { id: 6, name: 'Ethnic Lehenga', category: 'Ethnic Wear', price: '$100', image: lehengaImg },
    { id: 7, name: 'Evening Gown', category: 'Dresses', price: '$80', image: eveningGownImg },
    { id: 8, name: 'Pencil Skirt', category: 'Skirts', price: '$45', image: pencilSkirtImg },
    { id: 9, name: 'Crop Top', category: 'Tops', price: '$30', image: cropTopImg },
    { id: 10, name: 'Ripped Jeans', category: 'Jeans', price: '$45', image: rippedJeansImg },
    { id: 11, name: 'Bomber Jacket', category: 'Tops', price: '$70', image: bomberJacketImg },
    { id: 12, name: 'Designer Saree', category: 'Ethnic Wear', price: '$120', image: sareeImg },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    onAddToCart(product); // Add to cart
    showPopup(`${product.name} has been added to your cart!`);
  };

  const handleAddToWishlist = (product) => {
    onAddToWishlist(product); // Add to wishlist
    showPopup(`${product.name} has been added to your wishlist!`);
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(''), 3000); // Hide popup after 3 seconds
  };

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Popup notification */}
      {popupMessage && <div className="popup">{popupMessage}</div>}

      <div className="products-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="product-options">
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <button onClick={() => handleAddToWishlist(product)}>Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
