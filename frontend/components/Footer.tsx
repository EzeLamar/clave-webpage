import React from 'react';
import { Droplets } from 'lucide-react';
import { siFacebook, siInstagram, siX } from 'simple-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-5">
              <Droplets className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">Clave Bahía</span>
            </div>
            <p className="text-gray-400 mb-6">
              Mejorando la calidad del agua y la vida de nuestros clientes con la más 
              avanzada tecnología en purificación.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d={siFacebook.path} />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d={siInstagram.path} />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d={siX.path} />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Productos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Purificadores Residenciales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sistemas Comerciales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Filtros de Repuesto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instalación
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mantenimiento
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Asesoría Técnica
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Garantía
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Av. Principal #123</li>
              <li>Ciudad México, CP 12345</li>
              <li>+52 (123) 456-7890</li>
              <li>info@hidrolit.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Hidrolit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;