import { Heart, ShoppingCart } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.30,
      description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing...',
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg',
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      description: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping...',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md p-4">
            <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold">${product.price}</span>
              <div className="flex space-x-3">
                <button className="text-gray-500 hover:text-red-500">
                  <Heart />
                </button>
                <button className="text-gray-500 hover:text-blue-500">
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  