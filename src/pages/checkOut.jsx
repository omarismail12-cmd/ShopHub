/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const CheckoutPage = () => {
  const { cartItems, total } = useCart();
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setIsDone(!!userData);
  }, []);

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Order Submitted", formData);
  };

  if (!isDone) {
    return (
      <div className="min-h-[75vh] bg-white px-6 md:px-40 py-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Please sign in to checkout</h1>
        <button
          onClick={() => navigate("/signin")}
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 font-semibold transition"
        >
          Sign in
        </button>
        <p className="mt-4 text-gray-600">
          Do not have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 md:px-40 py-8">
      <h1 className="text-4xl font-bold mb-8 mt-8">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-8">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-m font-medium mb-1 text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-m font-medium mb-1 text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-m font-medium mb-1 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || user.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-m font-medium mb-1 text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-m font-medium mb-1 text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-m font-medium mb-1 text-gray-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-m font-medium mb-1 text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Payment Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-medium mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-gray-300 rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Expiry Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    placeholder="MM/YY"
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    placeholder="123"
                    className="w-full border border-transparent rounded-md p-2 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold transition"
            >
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
                      {item.name}{" "}
                      <span className="text-gray-500">×{item.quantity}</span>
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
  );
};

export default CheckoutPage;
