/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';


const Favorite = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSignIn = () => {
    navigate('/signin');
  };

  if (!user) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <CiHeart className="text-7xl text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Sign in to view your favorites</h2>
          <p className="text-gray-500 mb-6">
            You need to be signed in to manage your favorite items.
          </p>
          <button
            onClick={handleSignIn}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          >
            Sign In
          </button>
        </div>
      </>
    );
  }
};

export default Favorite;
