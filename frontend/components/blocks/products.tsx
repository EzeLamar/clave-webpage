'use client'

import React, { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { ProductsProps } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useProducts } from '@/context/ProductsContext';
import { useCategories } from '@/context/CategoriesContext';
import { CategoryProps } from '@/types/base';
import { useDynamicPage } from '@/context/DynamicPageContext';

export const ProductsSection = ({ title, description, anchorLink }: ProductsProps) => {
  const products = useProducts();
  const categories = useCategories();
  const page = useDynamicPage();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<CategoryProps | null>(
    categories.find(category => category.slug === categoryParam) || null
  );

  const filteredProducts = !activeCategory
    ? products
    : products.filter(product => product.categories.some(category => category.slug === activeCategory.slug));

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
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-md transition-colors ${activeCategory === null
              ? 'bg-blue-700 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
          >
            Todos
          </button>
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${activeCategory?.slug === category.slug
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category.label}
            </button>))}
        </div>

        {filteredProducts.length === 0 ?
          <div className='flex justify-center h-100'>
            No se encontraron productos
          </div> :
          !page?.detailSlug ?
            <p className='flex justify-center font-bold h-100 text-red-500'>Detail Slug not Found</p> :
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
                  <ProductCard pageSlug={page.detailSlug ?? "slug-not-found"} product={product} />
                </div>
              ))}
            </div>
        }
      </div>
    </section>
  );
};

export default ProductsSection;