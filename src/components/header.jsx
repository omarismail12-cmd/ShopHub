// components/Header.jsx
import  { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useCart } from '../components/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    setIsDone(!!userData);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsDone(false);
    navigate('/signin');
  };

  return (
    <header className="bg-white shadow-md px-6 md:px-20 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold text-gray-900">
          <Link to="/">ShopHub</Link>
        </h1>
        <nav className="hidden md:flex gap-8 text-black hover:text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/products">Categories</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-40 md:w-64 border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <Link to="/favorites" className="relative text-gray-700 hover:text-black">
          <CiHeart size={24} />
        </Link>

        <Link to="/cart" className="relative text-gray-700 hover:text-black">
          <FiShoppingCart size={24} />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </Link>

        {isDone ? (
          <button
            onClick={handleSignOut}
            className="text-sm text-black hover:text-gray-600"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/signin" className="text-gray-700 hover:text-black">
            <FiUser size={24} />
          </Link>
        )}
      </div>
    </header>
  );
}
