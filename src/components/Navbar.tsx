import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Activity, LayoutDashboard } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'bg-green-700' : '';
  };

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <PawPrint size={24} />
            <span>ZooManager</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors ${isActive('/')}`}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/animais"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors ${isActive('/animais')}`}
            >
              <PawPrint size={18} />
              <span>Animais</span>
            </Link>
            
            <Link
              to="/cuidados"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors ${isActive('/cuidados')}`}
            >
              <Activity size={18} />
              <span>Cuidados</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;