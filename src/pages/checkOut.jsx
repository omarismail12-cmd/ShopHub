/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useCart } from '../components/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, total } = useCart();
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    setIsDone(!!userData);
  }, []);

  if (!isDone) {
    return (
      <>
        <Header />
        <div className="min-h-[75vh] bg-white px-6 md:px-40 py-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-8">Please sign in to checkout</h1>
          <button
            onClick={() => navigate('/signin')}
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 font-semibold transition"
          >
            Sign in
          </button>
          <p className="mt-4 text-gray-600">
            Do not have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
        <Footer />
      </>
    );
  }

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white px-6 md:px-40 py-8">
        <h1 className="text-4xl font-bold mb-8 mt-8">Checkout</h1>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-8">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-m font-medium mb-1 text-gray-700">First Name</label>
                    <input type="text" required className="w-full border border-transparent rounded-md p-2 shadow-sm" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-m font-medium mb-1 text-gray-700">Last Name</label>
                    <input type="text" required className="w-full border border-transparent rounded-md p-2 shadow-sm" />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-m font-medium mb-1 text-gray-700">Email</label>
                    <input 
                      type="email" 
                      required 
                      defaultValue={user?.email || ''}
                      className="w-full border border-transparent rounded-md p-2 shadow-sm" 
                    />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-m font-medium mb-1 text-gray-700">Address</label>
                    <input type="text" required className="w-full border border-transparent rounded-md p-2 shadow-sm" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-m font-medium mb-1 text-gray-700">City</label>
                    <input type="text" required className="w-full border border-transparent rounded-md p-2 shadow-sm" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-m font-medium mb-1 text-gray-700">Postal Code</label>
                    <input type="text" required className="w-full border border-transparent rounded-md p-2 shadow-sm" />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-m font-medium mb-1 text-gray-700">Country</label>
                    <input type="text" required className="w-full border border-transparent rounded-md p-2 shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-medium mb-1">Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      className="w-full border border-gray-300 rounded-md p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Expiry Date (MM/YY)</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      className="w-full border border-transparent rounded-md p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">CVV</label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      className="w-full border border-transparent rounded-md p-2 shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold transition">
                Place Order
              </button>
            </div>

            <div className="p-6 h-fit border border-transparent rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex justify-between">
                    <div>
                      <p className="font-medium">
                        {item.name} <span className="text-gray-500">×{item.quantity}</span>
                      </p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;