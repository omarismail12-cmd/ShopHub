import { Heart, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/shopContext';

export default function Favorites() {
  const { favorites, addToCart, setFavorites } = useShop();

  const handleRemoveFavorite = (product) => {
    // Remove the product from favorites
    const updatedFavorites = favorites.filter((item) => item.id !== product.id);

    // Update favorites state and localStorage
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Update localStorage
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Favorites</h2>
      {favorites.length === 0 ? (
        <div className="flex justify-center items-center">
          <Heart className="text-gray-400" />
          <p>No favorites yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product) => (
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
                    onClick={() => handleRemoveFavorite(product)}
                    className="text-red-500 hover:text-red-700"
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
      )}
    </div>
  );
}
