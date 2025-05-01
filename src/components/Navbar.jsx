import { NavLink } from 'react-router-dom';
import { Home, CheckSquare, Package, Heart, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const baseClasses =
    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition';
  const inactiveClasses =
    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';
  const activeClasses = 'border-indigo-500 text-gray-900';

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              <Home className="w-5 h-5 mr-1" />
              Dashboard
            </NavLink>

            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              <CheckSquare className="w-5 h-5 mr-1" />
              Tasks
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              <Package className="w-5 h-5 mr-1" />
              Products
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              <Heart className="w-5 h-5 mr-1" />
              Favorites
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
