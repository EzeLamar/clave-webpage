'use client'

import React from 'react';
import { AboutUsProps } from '@/types/blocks';
import Icon from '@/components/custom/icon';
import { StrapiImage } from '../custom/strapi-image';
import { BlocksRenderer } from '@/services/block-renderer';

export const AboutUs = ({
  title,
  description,
  image,
  items,
  anchorLink,
}: Readonly<AboutUsProps>) => {
  return (
    <section id={anchorLink} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-80 max-w-xl">
            <StrapiImage
              src={image.url}
              alt={image.alternativeText}
              // className="object-cover"
              fill
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="text-gray-700 mb-6">
              <BlocksRenderer content={description}/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Icon icon={item.icon} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;