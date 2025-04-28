/* eslint-disable no-unused-vars */
import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
       
        <div className="lg:col-span-2 space-y-8">
        
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2 rounded" />
              <input type="text" placeholder="Last Name" className="border p-2 rounded" />
              <input type="email" placeholder="Email" className="border p-2 rounded md:col-span-2" />
              <input type="text" placeholder="Address" className="border p-2 rounded md:col-span-2" />
              <input type="text" placeholder="City" className="border p-2 rounded" />
              <input type="text" placeholder="Postal Code" className="border p-2 rounded" />
              <input type="text" placeholder="Country" className="border p-2 rounded md:col-span-2" />
            </div>
          </div>

        
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Card Number" className="border p-2 rounded md:col-span-2" />
              <input type="text" placeholder="Expiry Date (MM/YY)" className="border p-2 rounded" />
              <input type="text" placeholder="CVV" className="border p-2 rounded" />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            Place Order
          </button>
        </div>

        
        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Wireless Headphones x 2</span>
              <span>$399.98</span>
            </div>
            <div className="flex justify-between">
              <span>Running Shoes x 2</span>
              <span>$179.98</span>
            </div>
            <div className="flex justify-between">
              <span>Coffee Maker x 1</span>
              <span>$49.99</span>
            </div>
            <div className="flex justify-between">
              <span>Modern Laptop x 1</span>
              <span>$999.99</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$1629.94</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
