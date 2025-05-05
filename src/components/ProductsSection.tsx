import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { ProductType } from '../types';

export const ProductsSection = () => {
  const products: ProductType[] = [
    {
      name: "Clorine Off Classic",
      description: "Purificador de agua para cloro y plomo",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Clorine Off",
      price: "Consultar",
      features: [
        "Elimina cloro",
        "Elimina plomo",
        "Mejora el sabor del agua"
      ]
    },
    {
      name: "Clorine Off Bajomesada",
      description: "Purificador de agua bajo mesada para cloro y plomo",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Clorine Off",
      price: "Consultar",
      features: [
        "Elimina cloro",
        "Elimina plomo",
        "Instalación bajo mesada"
      ]
    },
    {
      name: "Clorine Off Elite",
      description: "Purificador de agua de alta gama para cloro y plomo",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Clorine Off",
      price: "Consultar",
      features: [
        "Elimina cloro",
        "Elimina plomo",
        "Tecnología avanzada"
      ]
    },
    {
      name: "Senic Out Classic",
      description: "Purificador de agua para arsénico, cloro y metales pesados",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Senic Out",
      price: "Consultar",
      features: [
        "Elimina arsénico",
        "Elimina cloro",
        "Elimina metales pesados"
      ]
    },
    {
      name: "Senic Out Bajomesada",
      description: "Purificador de agua bajo mesada para arsénico, cloro y metales pesados",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Senic Out",
      price: "Consultar",
      features: [
        "Elimina arsénico",
        "Elimina cloro",
        "Instalación bajo mesada"
      ]
    },
    {
      name: "Senic Out Elite",
      description: "Purificador de agua de alta gama para arsénico, cloro y metales pesados",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Senic Out",
      price: "Consultar",
      features: [
        "Elimina arsénico",
        "Elimina cloro",
        "Tecnología avanzada"
      ]
    },
    {
      name: "Abland Home Small",
      description: "Suavizador de agua para hogares pequeños",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Abland",
      price: "Consultar",
      features: [
        "Suaviza el agua",
        "Ideal para hogares pequeños",
        "Fácil mantenimiento"
      ]
    },
    {
      name: "Ai PLUS 1000",
      description: "Purificador de agua con tecnología avanzada",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Ai PLUS",
      price: "Consultar",
      features: [
        "Tecnología avanzada",
        "Alta capacidad",
        "Múltiples etapas de filtración"
      ]
    },
    {
      name: "Osmosis Inversa Romi Plus",
      description: "Sistema de ósmosis inversa de alta eficiencia",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Osmosis",
      price: "Consultar",
      features: [
        "Ósmosis inversa",
        "Alta eficiencia",
        "Agua purificada"
      ]
    },
    {
      name: "Osmosis Inversa Romi 400",
      description: "Sistema de ósmosis inversa compacto",
      imageUrl: "/assets/images/hidrolit_bajomesada.webp",
      category: "Osmosis",
      price: "Consultar",
      features: [
        "Ósmosis inversa",
        "Diseño compacto",
        "Fácil instalación"
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="productos" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Purificadores Hidrolit</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra línea completa de sistemas de purificación Hidrolit, 
            diseñados para ofrecerte el agua más pura para ti y tu familia.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === 'all'
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveCategory('Clorine Off')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === 'Clorine Off'
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Clorine Off
          </button>
          <button
            onClick={() => setActiveCategory('Senic Out')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === 'Senic Out'
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Senic Out
          </button>
          <button
            onClick={() => setActiveCategory('Osmosis')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === 'Osmosis'
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Ósmosis
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${(index % filteredProducts.length) * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;