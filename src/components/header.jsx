/* eslint-disable no-unused-vars */
// Header.js
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsDone(false);
    navigate('/signin');
  };

  return (
    <header className="bg-white shadow-md px-40 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
        <nav className="hidden md:flex gap-10 text-black font-medium text-ml mt-1">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <Link to="/categories" className="hover:text-gray-700">Categories</Link>
          <Link to="/contact" className="hover:text-gray-700">Contact</Link>
        </nav>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center bg-white outline outline-gray-400 focus-within:outline-2 focus-within:outline-blue-500 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-l px-2 w-40 md:w-60"
          />
          <FaSearch className="text-gray-500" />
        </div>

        <Link to="/favorite">
  <CiHeart className="text-4xl text-gray-700 bg-transparent hover:text-black cursor-pointer" />
</Link>
<Link to="/cart">
        <FiShoppingCart className="text-2xl text-gray-700 hover:text-black" />
      </Link>

        {isDone ? (
          <button
            onClick={handleSignOut}
            className="text-lg text-black hover:text-black-600"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/signin">
            <FiUser className="text-3xl text-gray-700 bg-transparent hover:text-black cursor-pointer" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
