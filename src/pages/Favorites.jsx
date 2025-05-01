import { useShop } from '../context/shopContext';

export default function Favorites() {
  const { favorites } = useShop();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md p-4">
              <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <span className="text-lg font-semibold">${product.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
