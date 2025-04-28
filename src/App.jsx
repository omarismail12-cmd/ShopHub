import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import FavoritesPage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
import Contact from "./components/contact";
import { FavoriteProvider } from "./components/favoriteContext";
import { CartProvider } from "./components/CartContext";


function App() {
  return (
    <FavoriteProvider>
      <CartProvider>
        <Router>
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </Router>
      </CartProvider>
    </FavoriteProvider>
  );
}

export default App;
