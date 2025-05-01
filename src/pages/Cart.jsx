import { Trash2, Send } from 'lucide-react';
import { useShop } from '../context/shopContext';
import { useState } from 'react';

export default function Cart() {
  const { cart, setCart } = useShop();
  const [name, setName] = useState('');

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const generateWhatsAppLink = () => {
    const message = `Hello, my name is ${name}.\n\nI'd like to order:\n\n${cart
      .map((item) => `• ${item.title} - $${item.price}`)
      .join('\n')}\n\nTotal: $${total}`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/?text=${encoded}`;
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">
              <Trash2 />
            </button>
          </div>
        ))}

        <div className="text-lg font-semibold border-t pt-4">
          Total: <span className="text-black">${total}</span>
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded px-3 py-2 mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white w-full flex items-center justify-center py-2 rounded text-lg"
          >
            <Send className="mr-2" size={18} />
            Checkout via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
