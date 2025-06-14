import React from 'react';
import { siFacebook, siInstagram, siX } from 'simple-icons';
import { FooterProps } from '@/types';
import { StrapiImage } from '../custom/strapi-image';

const Footer = ({ logo, text, navItems, socialLinks, copyright, address, phone, email }: Readonly<FooterProps>) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-5">
              <StrapiImage src={logo.image.url} alt={logo.image.alternativeText} width={100} height={100} />
            </div>
            <p className="text-gray-400 mb-6">
              {text}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a key={item.id} href={item.href} target={item.isExternal ? "_blank" : "_self"} rel="noopener noreferrer">
                  <svg role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d={siInstagram.path} />
                  </svg>
                </a>
              ))}
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
              {address && <li>{address}</li>}
              <li>Ciudad México, CP 12345</li>
              {phone && <li>{phone}</li>}
              {email && <li>{email}</li>}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {copyright}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;