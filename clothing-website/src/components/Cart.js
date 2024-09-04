import React from 'react';
import { Navigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart, onOrderNow }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button className="order-button" onClick={onOrderNow}>Order Now</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
