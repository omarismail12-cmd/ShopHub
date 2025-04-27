// -------- 7. FeaturedCategories.jsx --------
const categories = [
  {
    title: " Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    link: "/electronics"
  },
  {
    title: " Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    link: "/fashion"
  },
  {
    title: " Home & Living",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a", // Fixed filename (removed space)
    link: "/home-living"
  },
];

const FeaturedCategories = () => {
  return (
    <div className="py-14 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">Featured Categories</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {categories.map((cat, index) => (
          <a
            key={index}
            href={cat.link}
            className="relative  h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transform
              group-hover:scale-110 transition duration-300 brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;