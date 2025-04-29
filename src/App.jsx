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
import Footer from "./components/footer"; // Add Footer import here

function App() {
  return (
    <FavoriteProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/categories" element={<AllProductsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<h2 className="text-center mt-20 text-xl text-gray-600">404 - Page Not Found</h2>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </FavoriteProvider>
  );
}

export default App;
