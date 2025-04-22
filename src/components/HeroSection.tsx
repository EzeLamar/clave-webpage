import React from 'react';
import { Droplet, CheckCircle, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Agua pura para tu <span className="text-blue-700">bienestar</span> y el de tu familia
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Los purificadores Hidrolit ofrecen la mejor tecnología para garantizar agua limpia, 
              saludable y con mejor sabor en cada gota.
            </p>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a 
                href="#productos" 
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Ver productos
              </a>
              <a 
                href="#contacto" 
                className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Contactar
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="flex items-center">
                <Droplet className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Agua más pura</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Fácil instalación</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">2 años de garantía</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6973895/pexels-photo-6973895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Purificador Hidrolit" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-medium">Agua cristalina, vida saludable</p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-cyan-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;