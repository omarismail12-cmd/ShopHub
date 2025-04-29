// components/FavoritesPage.jsx
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { useFavorite } from "../components/favoriteContext";
import { useCart } from "../components/CartContext";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites, isFavorited } = useFavorite();
  const { addToCart } = useCart();

  return (
    // 1) Full-screen flex container
    <div className="flex flex-col min-h-screen">
      {/* Header sits at the top */}
      <Header />

      {/* 2) Main content grows to fill available space */}
      <main className="flex-grow bg-white">
        {favorites.length === 0 ? (
          <div className="text-center flex flex-col items-center justify-center h-[30vh]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart mx-auto h-12 w-12 text-gray-400"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <h2 className="mt-2 text-lg font-medium text-gray-900">
              No favorites yet
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Start adding some items to your favorites!
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold  mb-10">Your Favorites</h2>
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
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                          {product.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">
                            ${product.price}
                          </span>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
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

      {/* Footer is pushed to the bottom when page is short */}
      <Footer />
    </div>
  );
}
