import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

import './App.css';
import './index.css'; // Ensure global styles are applied

function App() {
  // State to manage cart and wishlist
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add products to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to remove products from the cart
  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => 
      prevItems.filter(item => item.id !== product.id)
    );
  };

  // Function to place an order (you can define your order logic here)
  const handleOrderNow = () => {
    if (cartItems.length > 0) {
      // Placeholder for order placement logic
      console.log("Order placed for:", cartItems);
      // Optionally clear the cart after order
      setCartItems([]);
      alert('Your order has been placed successfully!');
    } else {
      alert('Your cart is empty.');
    }
  };

  // Function to add products to the wishlist
  const handleAddToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };

  // Function to remove products from the wishlist
  const handleRemoveFromWishlist = (product) => {
    setWishlistItems((prevItems) => 
      prevItems.filter(item => item.id !== product.id)
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={
              <Product 
                onAddToCart={handleAddToCart} 
                onAddToWishlist={handleAddToWishlist} 
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart 
                cartItems={cartItems} 
                onRemoveFromCart={handleRemoveFromCart} 
                onOrderNow={handleOrderNow}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist 
                wishlistItems={wishlistItems} 
                onRemoveFromWishlist={handleRemoveFromWishlist} 
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      {/* Additional sections can be added here */}
    </>
  );
}

function Contact() {
  return <ContactUs />;
}

export default App;
