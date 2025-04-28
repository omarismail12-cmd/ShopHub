
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import SignIn from "./pages/signIn";
import CartPage from './pages/cartPage';
import Contact from "./components/contact";
import Favorite from './pages/favorite';
import SignUp from './pages/signUp'
import CheckoutPage from "./pages/checkOut";

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />  
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="" element={<CheckoutPage />}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
  );
}
export default App;
