import { useState } from "react";
import { useCart } from "../components/CartContext";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    total,
  } = useCart();

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    address: "",
    card: "",
  });

  const handleCheckoutInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutSuccess(true);
    clearCart(); 
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50 py-12">
        <div
          className={`max-w-7xl mx-auto px-4 grid gap-8 ${
            cartItems.length > 0 ? "grid-cols-1 lg:grid-cols-3" : ""
          }`}
        >
          <div
            className={`${
              cartItems.length > 0 || showCheckoutForm || checkoutSuccess
                ? "lg:col-span-2 space-y-6"
                : "flex flex-col items-center justify-center min-h-[60vh] text-center"
            }`}
          >
            {checkoutSuccess ? (
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-500 mb-4">
                  ✅
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Payment successful!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Thank you for your purchase.
                </p>
              </div>
            ) : showCheckoutForm ? (
              <form
                onSubmit={handleCheckoutSubmit}
                className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
              >
                <h2 className="text-xl font-bold mb-2">Checkout</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={checkoutData.name}
                    onChange={handleCheckoutInputChange}
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={checkoutData.address}
                    onChange={handleCheckoutInputChange}
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="card"
                    value={checkoutData.card}
                    onChange={handleCheckoutInputChange}
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
                >
                  Pay ${total.toFixed(2)}
                </button>
              </form>
            ) : cartItems.length === 0 ? (
              <>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-400 mb-4">
                  <span className="text-4xl">🛒</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your cart is empty
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Start adding some items to your cart!
                </p>
                <Link
                  to="/categories"
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-block"
                >
                  Browse Products
                </Link>
              </>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white flex rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex-grow p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label="Decrease quantity"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <AiFillMinusCircle size={20} />
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        aria-label="Increase quantity"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <AiFillPlusCircle size={20} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        className="ml-auto text-red-500 hover:text-red-700"
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex items-center">
                    <span className="text-lg font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && !showCheckoutForm && !checkoutSuccess && (
            <aside className="bg-white rounded-lg shadow-md p-6 h-max sticky top-28">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setShowCheckoutForm(true)}
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-4 text-red-600 hover:underline"
              >
                Clear Cart
              </button>
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}
