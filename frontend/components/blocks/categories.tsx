"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CategoriesProps } from "@/types/blocks";
import { StrapiImage } from "../custom/strapi-image";
import { useCategories } from "@/context/CategoriesContext";

export const CategoriesSection = ({ title, description, anchorLink, productLink }: CategoriesProps) => {
  const router = useRouter();
  const categories = useCategories();

  return (
    <section id={anchorLink} className="py-16 md:py-16 bg-gradient-to-br bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {(title || description) && (<div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>)}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.filter(category => category.enabled).map((category) => {
            const productsQuantity = category.products.filter(product => product.enabled).length;
            return (
              <button
                key={category.id}
                onClick={() => router.push(`${productLink.href}?category=${category.slug}`)}
                className="cursor-pointer group bg-transparent rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col items-stretch text-left focus:outline-none"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-xl">
                  <StrapiImage 
                    src={category.image.url} 
                    alt={category.image.alternativeText}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg capitalize">{category.label}</h3>
                    <span className="text-white text-sm font-medium drop-shadow">{productsQuantity} Producto{(productsQuantity ?? 0) === 1 ? '' : 's'}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 