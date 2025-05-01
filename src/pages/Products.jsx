import { useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { getAllProducts } from '../api/products';
import { useShop } from '../context/shopContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { addToCart, addToFavorites } = useShop();

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(`Failed to load products: ${err.message}`))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-8">Loading products...</p>;
  if (error) return <p className="p-8 text-red-500">{error}</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
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
                  onClick={() => addToFavorites(product)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <Heart />
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="text-gray-500 hover:text-blue-500"
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
