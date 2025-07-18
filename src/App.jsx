import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import FavoritesPage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
import Contact from "./components/contact";
import { FavoriteProvider } from "./components/FavoriteContext";
import { CartProvider } from "./components/CartContext";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import CheckoutPage from "./pages/CheckOut";
import Footer from "./components/footer";
import Header from "./components/header";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <FavoriteProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
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
                <Route path="*" element={<NotFound />} />
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
