'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HeaderProps } from '@/types';
import { StrapiImage } from '../custom/strapi-image';
import Link from 'next/link';

const Header = ({ logo, navItems }: Readonly<HeaderProps>) => {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href={logo.href}>
              <StrapiImage src={logo.image.url} alt={logo.image.alternativeText} width={100} height={100} />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-gray-800 hover:text-blue-700 font-medium transition-colors capitalize">
                    {item.label}
                  </Link>
                </li>
              ))}
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
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-gray-800 hover:text-blue-700 font-medium block py-2 transition-colors capitalize"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;