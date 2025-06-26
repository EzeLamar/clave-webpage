'use client'

import React from 'react';
import { ProductProps } from '@/types/base';
import { StrapiImage } from './custom/strapi-image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/currency';
import { Badge } from '@/components/ui/badge';
import ContactButton from './ContactButton';

export const ProductCard = ({ id, slug, name, images, features, price, discount }: ProductProps) => {
  console.log("slug", slug);
  return (
    <div
      key={id}
      className="bg-card rounded-lg overflow-hidden shadow-sm group flex flex-col border border-border h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <Link href={`/products/${slug}`}>
          <StrapiImage
            src={images[0].url || ''}
            alt={images[0].alternativeText}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        {discount > 0 && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            {discount}% OFF
          </Badge>
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        {/* <div className="flex items-center mb-2">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={cn(
                            "h-4 w-4",
                            i < product.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                        )}
                    />
                ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
                ({product.reviewCount})
            </span>
        </div> */}

        <Link href={`/products/${slug}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-medium mb-1 line-clamp-1">{name}</h3>
        </Link>
       
        {<div className="flex flex-wrap gap-1 text-muted-foreground mb-3">
          {
            features.map(feature => (<Badge key={feature.id} variant="outline" className='text-blue-700 border-blue-700'>
              #{feature.title}
            </Badge>))
          }
        </div>}
        

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col text-center">
            <span className="font-bold text-lg">
              {formatCurrency(((100 - discount) * price) / 100)}
            </span>
            {discount > 0 && (
              <span className="text-muted-foreground line-through text-sm">
                {formatCurrency(price)}
              </span>
            )}
          </div>

          <ContactButton productName={name} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;