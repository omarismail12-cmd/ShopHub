import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const addToCart = (product) => {
    setCart((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const value = {
    favorites,
    cart,
    addToFavorites,
    addToCart,
    setCart
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useShop() {
  return useContext(ShopContext);
}
