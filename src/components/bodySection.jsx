import { Link } from "react-router-dom";

const BodySection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[64vh] flex items-center justify-start text-white px-4 md:px-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')`,
      }}
    >
      <div className="bg-opacity-50 p-2 rounded-lg text-left pl-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ShopHub</h1>
        <p className="text-xl md:text-2xl mb-8">Discover amazing products at great prices</p>
        <Link to='./products' className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center w-60 justify-center">
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
            className="lucide lucide-shopping-bag mr-2"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default BodySection;