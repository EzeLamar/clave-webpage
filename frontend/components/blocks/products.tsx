'use client'

import React, { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { ProductsProps } from '@/types';
import { useSearchParams } from 'next/navigation';

export const ProductsSection = ({ title, description, anchorLink, products, categoryNames }: ProductsProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(category ? category : 'all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.categories.some(category => category.label === activeCategory));

  return (
    <section id={anchorLink} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'all'
              ? 'bg-blue-700 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
          >
            Todos
          </button>
          {categoryNames.map(categoryName => (
            <button
              key={categoryName}
              onClick={() => setActiveCategory(categoryName)}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory === categoryName
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {categoryName}
            </button>))}
        </div>

        {filteredProducts.length === 0 ?
          <div className='flex justify-center h-100'>
            No se encontraron productos
          </div> :
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${(index % filteredProducts.length) * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <ProductCard {...product}  />
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  );
};

export default ProductsSection;