import { useState, useMemo, useEffect } from "react";
import { initialProducts } from "../lib/data";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import Header from "../components/header";
import debounce from "lodash.debounce";
import { useCart } from "../components/CartContext";
import { useFavorite } from "../components/FavoriteContext";

export default function AllProductsPage() {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const { addToCart, increaseQuantity, cartItems } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorited } = useFavorite();

  useEffect(() => {
    const handler = debounce(() => setSearch(searchInput), 300);
    handler();
    return () => handler.cancel();
  }, [searchInput]);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  const filteredProducts = useMemo(() =>
    initialProducts.filter(product => {
      const matchesCategory = !category || product.category === category;
      const matchesMin = !minPrice || product.price >= +minPrice;
      const matchesMax = !maxPrice || product.price <= +maxPrice;
      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesMin && matchesMax && matchesSearch;
    }),
  [category, minPrice, maxPrice, search]);

  return (
    <>
      <Header />
      <section className="bg-white py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              >
                <option value="">All</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="minPrice">
                  Min Price
                </label>
                <input
                  id="minPrice"
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  min="0"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="maxPrice">
                  Max Price
                </label>
                <input
                  id="maxPrice"
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  min="0"
                />
              </div>
            </div>

            {/* Search Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="search">
                Search
              </label>
              <input
                id="search"
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => {
              const fav = isFavorited(product.id);
              const inCart = isInCart(product.id);

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
                      : <CiHeart className="w-6 h-6 text-gray-400 hover:text-gray-600" />}
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
                        className={
                          inCart
                            ? "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                            : "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        }
                      >
                        {inCart ? "Add One More" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
