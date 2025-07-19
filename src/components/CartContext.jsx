import { createContext, useState, useContext, useMemo, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist cart to localStorage on any change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product or increase quantity if already in cart
  const addToCart = useCallback((product, qty = 1) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id);
      if (idx === -1) {
        return [...prev, { ...product, quantity: qty }];
      } else {
        // Increase quantity of existing product
        return prev.map((item, i) =>
          i === idx ? { ...item, quantity: item.quantity + qty } : item
        );
      }
    });
  }, []);

  // Increase quantity by 1 for given product id
  const increaseQuantity = useCallback((id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  // Decrease quantity by 1 or remove if quantity becomes zero
  const decreaseQuantity = useCallback((id) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
          // else omit item (quantity was 1)
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  }, []);

  // Remove product completely from cart
  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Calculate total price, memoized for performance
  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  // Memoize context value to avoid unnecessary rerenders
  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      total,
    }),
    [
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      total,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
export default CartContext;