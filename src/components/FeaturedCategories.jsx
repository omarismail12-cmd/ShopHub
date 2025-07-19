import { Link } from "react-router-dom";
const categories = [
  {
    title: " Electronics",
    image: "/src/assets/images/electronics.jpg",
   
  },
  {
    title: " Fashion",
    image: "/src/assets/images/fashion.jpg",
    
  },
  {
    title: " Home & Living",
    image: "/src/assets/images/home f.jpg",
   
  },
];
const FeaturedCategories = () => {
  return (
    <Link to="/categories">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <a
              key={index}
              href={cat.link}
              className="relative h-64 overflow-hidden rounded-lg cursor-pointer  group"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full  object-cover transform 
                 group-hover:scale-115 transition duration-300 brightness-65"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
     </Link>
  );
};

export default FeaturedCategories;
