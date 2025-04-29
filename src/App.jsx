import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import FavoritesPage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
import Contact from "./components/contact";
import { FavoriteProvider } from "./components/favoriteContext";
import { CartProvider } from "./components/CartContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CheckoutPage from "./pages/checkOut";


function App() {
  
  return (
    <FavoriteProvider>
      <CartProvider>
        <Router>
          {/* <Navigation /> */}
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </FavoriteProvider>
  );
}

export default App;
