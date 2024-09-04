import React from 'react';
import { Navigate } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = ({ wishlistItems, onRemoveFromWishlist }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <ul>
          {wishlistItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => onRemoveFromWishlist(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
