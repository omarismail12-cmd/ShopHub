// components/FeaturedProducts.jsx
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useFavorite } from "./FavoriteContext";
import { initialProducts } from "../lib/data";

export default function FeaturedProducts() {
  const featured = initialProducts.slice(0, 4);
  const { addToCart, increaseQuantity, cartItems } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorited } = useFavorite();

  // helper to know if item is already in cart
  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => {
            const fav = isFavorited(product.id);
            const inCart = isInCart(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group relative"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-md hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  onClick={() =>
                    fav
                      ? removeFromFavorites(product.id)
                      : addToFavorites(product)
                  }
                  aria-label={fav ? "Remove from favorites" : "Add to favorites"}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  {fav
                    ? <AiFillHeart className="w-6 h-6 text-red-500" />
                    : <CiHeart className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                  }
                </button>

                <div className="mt-4 p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-lg font-bold">${product.price}</span>
                    <button
                      onClick={() =>
                        inCart
                          ? increaseQuantity(product.id)
                          : addToCart(product, 1)
                      }
                      className={`px-4 py-2 rounded-md text-white transition ${
                        inCart
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      {inCart ? "Add One More" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
