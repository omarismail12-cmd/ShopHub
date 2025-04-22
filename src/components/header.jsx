/* eslint-disable no-unused-vars */


import React from 'react';
import {  FaSearch } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-40 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
        <nav className="hidden md:flex gap-10 text-black font-medium text-ml mt-1">
          <a href="#" className="hover:text-gray-700  ">Home</a>
          <a href="#" className="hover:text-gray-700 ">Categories</a>
          <a href="#" className="hover:text-gray-700 ">Contact</a>
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
        <CiHeart className="text-4xl text-gray-700 bg-transparent hover:text-black cursor-pointer" />
<FiShoppingCart className="text-3xl text-gray-700 bg-transparent hover:text-black cursor-pointer" />
<FiUser className="text-3xl text-gray-700 bg-transparent hover:text-black cursor-pointer" />

      </div>
    </header>
  );
};

export default Header;
