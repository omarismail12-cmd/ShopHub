// components/FavoriteContext.js
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Failed to parse favorites from localStorage:", error);
      return [];
    }
  });

  // Add item to favorites if not already present
  const addToFavorites = useCallback(
    (item) => {
      setFavorites((prev) =>
        prev.some((fav) => fav.id === item.id) ? prev : [...prev, item]
      );
    },
    [setFavorites]
  );

  const removeFromFavorites = useCallback(
    (id) => {
      setFavorites((prev) => prev.filter((item) => item.id !== id));
    },
    [setFavorites]
  );

 
  const isFavorited = useCallback(
    (id) => favorites.some((item) => item.id === id),
    [favorites]
  );

  // Persist favorites to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage:", error);
    }
  }, [favorites]);

  // Optional: Reset favorites (e.g. for sign-out)
  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  // Memoize context value to avoid unnecessary re-renders
  const value = useMemo(
    () => ({
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorited,
      clearFavorites,
    }),
    [favorites, addToFavorites, removeFromFavorites, isFavorited, clearFavorites]
  );

  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  );
};

FavoriteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook to use the Favorite context
export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context)
    throw new Error("useFavorite must be used within a FavoriteProvider");
  return context;
};
