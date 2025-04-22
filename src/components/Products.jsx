import { CiHeart } from "react-icons/ci";
import { initialProducts } from "../lib/data";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const featured = initialProducts.slice(0, 4); // only 4 products

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4 relative group"
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100 ">
                <CiHeart />
              </button>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Link instead of button */}
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="text-blue-600 font-semibold hover:underline"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
