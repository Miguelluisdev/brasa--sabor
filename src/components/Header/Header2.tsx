import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-Vermelhoescuro p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight font-PermanentMarker">Loja</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white" onClick={toggleMenu}>
            <FaBars className="h-6 w-6" />
          </button>
        </div>
        <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-end">
            <Link to="/" className="mr-4 text-gray-300 hover:text-white">Home</Link>
            <Link to="/barbecuemeter" className="mr-4 text-gray-300 hover:text-white">Churrascometro</Link>
            <Link to="/login" className="mr-4 text-gray-300 hover:text-white">Login</Link>
            <Link to="/register" className="mr-4 text-gray-300 hover:text-white">Registro</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header2;
