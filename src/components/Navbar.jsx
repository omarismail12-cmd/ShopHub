import { NavLink } from 'react-router-dom';
import { Home, CheckSquare, Package, Heart, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 shadow-md bg-white">
      <div className="flex space-x-6 text-sm">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}>
          <Home className="inline mr-1" size={16} /> Dashboard
        </NavLink>
        <NavLink to="/tasks" className="text-gray-600 hover:text-indigo-600">
          <CheckSquare className="inline mr-1" size={16} /> Tasks
        </NavLink>
        <NavLink to="/products" className="text-gray-600 hover:text-indigo-600">
          <Package className="inline mr-1" size={16} /> Products
        </NavLink>
        <NavLink to="/favorites" className="text-gray-600 hover:text-indigo-600">
          <Heart className="inline mr-1" size={16} /> Favorites
        </NavLink>
        <NavLink to="/cart" className="text-gray-600 hover:text-indigo-600">
          <ShoppingCart className="inline mr-1" size={16} /> Cart
        </NavLink>
      </div>
    </nav>
  );
}
