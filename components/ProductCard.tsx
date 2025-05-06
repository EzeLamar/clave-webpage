'use client'

import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import ContactButton from './ContactButton';
import { ProductType } from '@/types';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden h-48 sm:h-64">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 text-xs rounded-md">
          {product.category}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          {/* <div className="text-xl font-bold text-blue-700">{product.price}</div> */}
        </div>
        
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="space-y-2 mb-5">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-4 w-4 text-green-500" />
              </div>
              <p className="ml-2 text-sm text-gray-600">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-5">
          <ContactButton productName={product.name} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;