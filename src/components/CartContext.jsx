import { createContext, useState, useContext, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Check if there's already data in localStorage
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : []; // If there's data, parse and use it, otherwise default to empty array
  });

  // Always save cartItems to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems)); // Save cartItems to localStorage
    }
  }, [cartItems]); // Re-run this effect whenever cartItems changes

  // Add item to the cart, ensuring unique ID handling
  const addToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const idx = prev.findIndex(item => item.id === product.id);
      if (idx === -1) {
        return [...prev, { ...product, quantity: qty }];
      } else {
        const next = [...prev];
        next[idx].quantity += qty;
        return next;
      }
    });
  };

  // Remove item or decrease quantity
  const removeFromCart = (id) => {
    setCartItems(prev => {
      const idx = prev.findIndex(item => item.id === id);
      if (idx === -1) return prev;
      const next = [...prev];
      if (next[idx].quantity > 1) {
        next[idx].quantity -= 1;
      } else {
        next.splice(idx, 1);
      }
      return next;
    });
  };

  // Clear cart
  const clearCart = () => setCartItems([]);

  // Calculate total price
  const total = useMemo(() =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  [cartItems]);

  // Provide value to the context
  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    total,
  }), [cartItems, total]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
