'use client'

import { siInstagram } from 'simple-icons';
import { FooterProps } from '@/types';
import { StrapiImage } from '../custom/strapi-image';
import Link from 'next/link';
import { useGlobal } from '@/context/GlobalContext';

const Footer = ({ logo, text, socialLinks, copyright }: Readonly<FooterProps>) => {
  const global = useGlobal();
  const company = global?.company;
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
                <Link key={item.id} href={item.href} target={item.isExternal ? "_blank" : "_self"} rel="noopener noreferrer">
                  <svg role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d={siInstagram.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Productos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Purificadores Residenciales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sistemas Comerciales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Filtros de Repuesto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instalación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Asesoría Técnica
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Garantía
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contacto</h3>
            {company && <ul className="space-y-3 text-gray-400">
              {(company.city && company.postalCode) && <li>{`${company.city}, CP ${company.postalCode}`}</li>}
              {company.phone && <li>{company.phone}</li>}
              {company.email && <li>{company.email}</li>}
            </ul>}
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