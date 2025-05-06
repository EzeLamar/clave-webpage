'use client'

import React from 'react';
import { Award, Shield, Clock, ThumbsUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Equipo Hidrolit"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre Clave Bahía</h2>
            <p className="text-gray-700 mb-6">
              En Clave Bahía nos dedicamos a proporcionar soluciones de purificación de agua de alta calidad para 
              hogares y empresas. Con más de 10 años de experiencia en el mercado, nuestros productos están 
              diseñados con la más avanzada tecnología para garantizar agua limpia y saludable.
            </p>
            <p className="text-gray-700 mb-8">
              Nuestro compromiso es mejorar la calidad de vida de nuestros clientes a través de productos 
              confiables, duraderos y amigables con el medio ambiente.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Calidad certificada</h3>
                  <p className="text-gray-600 text-sm">Productos con certificaciones internacionales</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Garantía extendida</h3>
                  <p className="text-gray-600 text-sm">2 años de garantía en todos nuestros productos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Soporte técnico</h3>
                  <p className="text-gray-600 text-sm">Asistencia disponible en horario extendido</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <ThumbsUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Instalación profesional</h3>
                  <p className="text-gray-600 text-sm">Servicio de instalación por técnicos capacitados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;