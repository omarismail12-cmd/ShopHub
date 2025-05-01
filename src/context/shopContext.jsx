import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  // Sync to localStorage when favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Sync to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToFavorites = (product) => {
    setFavorites((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromFavorites = (product) => {
    setFavorites((prev) => prev.filter((item) => item.id !== product.id));
  };

  const addToCart = (product) => {
    setCart((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const value = {
    favorites,
    cart,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
    setCart,
    setFavorites,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useShop() {
  return useContext(ShopContext);
}
