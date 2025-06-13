'use client'

import React from 'react';
import { AboutUsProps } from '@/types/blocks';
import Icon from '@/components/custom/icon';
import { StrapiImage } from '../custom/strapi-image';

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
          <div>
            <div className="relative">
              <StrapiImage src={image.url} alt={image.alternativeText} width={1260} height={750} className="rounded-lg shadow-lg w-full" />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-gray-700 mb-6">
              {description}
            </p>

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