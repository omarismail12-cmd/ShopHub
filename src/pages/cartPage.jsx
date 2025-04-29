// pages/CartPage.jsx
import { useCart } from '../components/CartContext';
// import CheckoutPage from './checkOut';
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineDelete
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    total
  } = useCart();

  return (
    <div className="flex flex-col min-h-80vh bg-white">

      <main className="flex-grow bg-gray-50 py-8">
        <div className={`max-w-7xl mx-auto px-4 grid gap-8 ${
          cartItems.length > 0 ? 'grid-cols-1 lg:grid-cols-3' : ''
        }`}>

          {/* Cart Items or Empty State */}
          <div className={`${cartItems.length > 0
              ? 'lg:col-span-2 space-y-6'
              : 'flex flex-col items-center justify-center min-h-[60vh] text-center'}`}>

            {cartItems.length === 0 ? (
              <>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-400 mb-4">
                  <span className="text-4xl">🛒</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Start adding some items to your cart!
                </p>
                <button
                  onClick={() => window.location.href = '/categories'}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Browse Products
                </button>
              </>
            ) : cartItems.map(item => (
              <div key={item.id} className="bg-white flex rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-32 h-32 object-cover"
                />
                <div className="flex-grow p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    {/* Decrease */}
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      aria-label="Decrease quantity"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <AiFillMinusCircle size={20} />
                    </button>

                    <span className="px-2">{item.quantity}</span>

                    {/* Increase */}
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      aria-label="Increase quantity"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <AiFillPlusCircle size={20} />
                    </button>

                    {/* Remove Completely */}
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
            ))}

          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
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
              <Link
                to="/checkout"
                className="w-full inline-block text-center py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>
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
