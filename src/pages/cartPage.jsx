/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const CartPage = () => {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate('/products'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <FiShoppingCart className="text-4xl text-gray-500 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-6">Start adding some items to your cart!</p>
      <button
        onClick={handleBrowse}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
      >
        Browse Products
      </button>
    </div>
  );
};

export default CartPage;
