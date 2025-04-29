// FavoritesPage.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { useFavorite } from "../components/FavoriteContext";
import { useCart } from "../components/CartContext";


export default function FavoritesPage() {
  const [user, setUser] = useState(null);
  const { favorites, removeFromFavorites, isFavorited } = useFavorite();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSignIn = () => {
    navigate("/signin");
  };

  if (!user) {
    // 👇 This is your old Favorite.jsx content, now merged here
    return (
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
    );
  }

  // 👇 Only show this if user IS logged in
  return (
    <div className="flex flex-col min-h-80vh">
      
      <main className="flex-grow bg-white">
        {favorites.length === 0 ? (
          <div className="text-center flex flex-col items-center justify-center h-[30vh]">
            <CiHeart className="h-12 w-12 text-gray-400" />
            <h2 className="mt-2 text-lg font-medium text-gray-900">No favorites yet</h2>
            <p className="mt-1 text-sm text-gray-500">
              Start adding some items to your favorites!
            </p>
            <Link
              to="/categories"
              className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-10">Your Favorites</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {favorites.map((product) => {
                  const fav = isFavorited(product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden relative group"
                    >
                      <div className="w-full aspect-[4/3] overflow-hidden rounded-t-md hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <button
                        onClick={() => removeFromFavorites(product.id)}
                        aria-label="Remove from favorites"
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                      >
                        {fav ? (
                          <AiFillHeart className="w-6 h-6 text-red-500" />
                        ) : (
                          <CiHeart className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>

                      <div className="mt-4 p-4">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">${product.price}</span>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
