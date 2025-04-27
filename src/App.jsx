import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import FavoritesPage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
import Contact from "./components/contact";
import { FavoriteProvider } from "./components/favoriteContext";
import { CartProvider } from "./components/CartContext";

// const Navigation = () => {
//   return (
//     <nav className="p-4 bg-gray-800 text-white">
//       <div className="flex items-center justify-between">
//         <h1 className="text-xl font-semibold">ShopHub</h1>
//         <div className="md:flex">
//           <NavLink to="/" className={({isActive}) => isActive ? "text-blue-500 p-2" : "hover:text-gray-400 p-2"}>Home</NavLink>
//           <NavLink to="/products" className={({isActive}) => isActive ? "text-blue-500 p-2" : "hover:text-gray-400 p-2"}>Products</NavLink>
//           <NavLink to="/favorites" className={({isActive}) => isActive ? "text-blue-500 p-2" : "hover:text-gray-400 p-2"}>Favorites</NavLink>
//           <NavLink to="/cart" className={({isActive}) => isActive ? "text-blue-500 p-2" : "hover:text-gray-400 p-2"}>Cart</NavLink>
//           <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-500 p-2" : "hover:text-gray-400 p-2"}>Contact</NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

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
