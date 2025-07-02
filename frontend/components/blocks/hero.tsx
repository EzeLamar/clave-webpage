'use client'

import React from 'react';
import { HeroProps } from '@/types/blocks';
import { StrapiImage } from '../custom/strapi-image';
import Icon from '@/components/custom/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BlocksRenderer } from '@/services/block-renderer';

export const Hero = ({
  title,
  description,
  navLinks,
  images,
  anchorLink,
  items,
}: Readonly<HeroProps>) => {
  const segmentedTitle = title.split("**");
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section
      id={anchorLink}
      className="pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center">
          <div className="order-2 md:order-1 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4" >
              {segmentedTitle.length > 2 ? (
                <>
                  {segmentedTitle[0]}
                  <span className="text-blue-700">{segmentedTitle[1]}</span>
                  {segmentedTitle[2]}
                </>
              ) : (
                title
              )}
            </h1>
            <div className="text-lg text-gray-700 mb-8">
              <BlocksRenderer content={description}/>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {navLinks.map((link) => {
                if (link.isButtonLink) {
                  if (link.type === "PRIMARY") {
                    return (
                      <a
                        href={link.href}
                        key={link.id}
                      className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
                      >
                        {link.label}
                      </a>
                    )
                  }

                  if (link.type === "SECONDARY") {
                    return (
                      <a
                        href={link.href}
                        key={link.id}
                        className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
                      >
                        {link.label}
                      </a>
                    )
                  }
                }

                return (
                  <a
                    href={link.href}
                    key={link.id}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {items.map((item) => {
                return (
                  <div key={item.id} className="flex items-center">
                    <Icon icon={item.icon} />
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                )
              }
              )}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            {images && images.length > 0 && (
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-lg mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {images.map((image) => (
                    <CarouselItem key={image.id}>
                      <div className="p-1">
                        <div className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-80">
                          <StrapiImage
                            src={image.url}
                            alt={image.alternativeText}
                            // className="object-cover"
                            fill
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;