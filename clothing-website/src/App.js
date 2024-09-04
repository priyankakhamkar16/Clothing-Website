import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider, useAuth } from './components/AuthContext'; // Import the AuthProvider and useAuth hooks

import './App.css';
import './index.css'; // Ensure global styles are applied

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => 
      prevItems.filter(item => item.id !== product.id)
    );
  };

  const handleOrderNow = () => {
    if (cartItems.length > 0) {
      console.log("Order placed for:", cartItems);
      setCartItems([]);
      alert('Your order has been placed successfully!');
    } else {
      alert('Your cart is empty.');
    }
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromWishlist = (product) => {
    setWishlistItems((prevItems) => 
      prevItems.filter(item => item.id !== product.id)
    );
  };

  // Protected Route component using AuthContext
  const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth(); // Get authentication status from context
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product"
              element={
                <ProtectedRoute
                  element={
                    <Product 
                      onAddToCart={handleAddToCart} 
                      onAddToWishlist={handleAddToWishlist} 
                    />
                  }
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute
                  element={
                    <Cart 
                      cartItems={cartItems} 
                      onRemoveFromCart={handleRemoveFromCart} 
                      onOrderNow={handleOrderNow}
                    />
                  }
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute
                  element={
                    <Wishlist 
                      wishlistItems={wishlistItems} 
                      onRemoveFromWishlist={handleRemoveFromWishlist} 
                    />
                  }
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
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
