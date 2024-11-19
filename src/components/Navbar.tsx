import { Car, Search, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AutoElite</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-700 hover:text-blue-600">Inventory</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <button 
              onClick={() => navigate('/search')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/search" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Inventory</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}