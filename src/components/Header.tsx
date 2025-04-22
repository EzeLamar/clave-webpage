import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Droplets className="h-8 w-8 text-blue-700" />
            <span className="ml-2 text-xl font-bold text-blue-800">Hidrolit</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#inicio" className="text-gray-800 hover:text-blue-700 font-medium transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-800 hover:text-blue-700 font-medium transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-800 hover:text-blue-700 font-medium transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-800 hover:text-blue-700 font-medium transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#inicio" 
                className="text-gray-800 hover:text-blue-700 font-medium block py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="#productos" 
                className="text-gray-800 hover:text-blue-700 font-medium block py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>
            </li>
            <li>
              <a 
                href="#nosotros" 
                className="text-gray-800 hover:text-blue-700 font-medium block py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="text-gray-800 hover:text-blue-700 font-medium block py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;