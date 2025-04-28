/* eslint-disable no-unused-vars */
import React from "react";
const categories = [
    {
        title: " Electronics",
        image: "./src/assets/images/electronics.jpg",
        link:"/electronics"
    },
    {
        title: " Fashion",
        image: "./src/assets/images/fashion.jpg",
        link:"/fashion"
    },
    {
        title: " Home & Living",
        image: "./src/assets/images/home f.jpg",
        link:"/home-living"
    },

];
const FeaturedCategories = () => {
    return (
      <div className="py-14 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Featured Categories</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((cat, index) => (
            <a
              key={index}
              href={cat.link}
              className="relative w-105 h-70 overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full  object-cover transform 
                 group-hover:scale-115 transition duration-300 brightness-65"
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