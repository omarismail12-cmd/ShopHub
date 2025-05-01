import { useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { getAllProducts } from '../api/products';
import { useShop } from '../context/shopContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const {
    cart,
    favorites,
    addToCart,
    addToFavorites,
    removeFromCart,
    removeFromFavorites,
  } = useShop();

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch((err) => setError(`Failed to load products: ${err.message}`))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-8">Loading products...</p>;
  if (error)   return <p className="p-8 text-red-500">{error}</p>;

  const toggleFavorite = (product) =>
    favorites.some((i) => i.id === product.id)
      ? removeFromFavorites(product)
      : addToFavorites(product);

  const toggleCart = (product) =>
    cart.some((i) => i.id === product.id)
      ? removeFromCart(product)
      : addToCart(product);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const isFav = favorites.some((i) => i.id === product.id);
          const inCart = cart.some((i) => i.id === product.id);

          return (
            <div key={product.id} className="bg-white rounded-2xl shadow-md p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-semibold">${product.price}</span>
                <div className="flex space-x-3">
                  <button
                    onClick={() => toggleFavorite(product)}
                    className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                      isFav
                        ? 'bg-[#fee2e2] text-white'
                        : 'bg-gray-200 text-gray-500 '
                    }`}
                  >
                    <Heart className={`transition-colors ${isFav ? 'text-[#dc2626]' : 'text-gray-500'}`} />
                  </button>
                  <button
                    onClick={() => toggleCart(product)}
                    className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                      inCart
                        ? 'bg-[#dbeafe] text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    <ShoppingCart  className={`transition-colors ${inCart ? 'text-[#2563eb]' : 'text-gray-500'}`}  />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
