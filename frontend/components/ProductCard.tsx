'use client'

import React from 'react';
import { ProductProps, FeatureProps } from '@/types/base';
import { StrapiImage } from './custom/strapi-image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/currency';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from '@/components/ui/drawer';
import { BlocksRenderer } from '@/services/block-renderer';
import { useState, useCallback } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
// import ContactButton from './ContactButton';

interface ProductCardProps {
  pageSlug: string;
  product: ProductProps;
}

// Simple useMediaQuery hook
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
}

export const ProductCard = ({ pageSlug, product }: ProductCardProps) => {
  const { id, slug, name, images, features, price, discount } = product;
  const [selectedFeature, setSelectedFeature] = useState<null | typeof features[0]>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const handleBadgeClick = useCallback((feature: FeatureProps) => {
    setSelectedFeature(feature);
  }, []);
  const handleTabChange = useCallback((slug: string) => {
    const found = features.find(f => f.slug === slug);
    if (found) setSelectedFeature(found);
  }, [features]);
  const handleClose = useCallback(() => setSelectedFeature(null), []);

  return (
    <div
      key={id}
      className="bg-card rounded-lg overflow-hidden shadow-sm group flex flex-col border border-border h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <Link href={`/${pageSlug}/${slug}`}>
          <StrapiImage
            src={images[0].url || ''}
            alt={images[0].alternativeText}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
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

        <Link href={`/${pageSlug}/${slug}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-medium mb-1 line-clamp-1">{name}</h3>
        </Link>

        {<div className="flex flex-wrap gap-1 text-muted-foreground mb-3">
          {
            features.map(feature => (
              <Badge key={feature.slug} variant="outline" className='text-primary border-primary hover:text-primary-foreground hover:bg-primary cursor-pointer'
                onClick={() => handleBadgeClick(feature)}>
                {feature.name}
              </Badge>))
          }
        </div>}

        {/* Feature Description Modal/Drawer */}
        {selectedFeature && (
          isMobile ? (
            <Drawer open={!!selectedFeature} onOpenChange={open => !open && handleClose()}>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>{`${product.name} - Características`}</DrawerTitle>
                </DrawerHeader>
                <Tabs value={selectedFeature.slug} onValueChange={handleTabChange}>
                  <TabsList>
                    {features.map((feature) => (
                      <TabsTrigger key={feature.slug} value={feature.slug}>
                        {feature.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {features.map((feature) => (
                    <TabsContent key={feature.slug} value={feature.slug}>
                      <BlocksRenderer content={feature.description} />
                    </TabsContent>
                  ))}
                </Tabs>
                <DrawerClose asChild>
                  <button className="mt-4 w-full py-2 bg-gray-200 rounded">Cerrar</button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          ) : (
            <Dialog open={!!selectedFeature} onOpenChange={open => !open && handleClose()}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{`${name} - Características`}</DialogTitle>
                </DialogHeader>
                <Tabs value={selectedFeature.slug} onValueChange={handleTabChange}>
                  <TabsList>
                    {features.map((feature) => (
                      <TabsTrigger key={feature.slug} value={feature.slug}>
                        {feature.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {features.map((feature) => (
                    <TabsContent key={feature.slug} value={feature.slug}>
                      <BlocksRenderer content={feature.description} />
                    </TabsContent>
                  ))}
                </Tabs>
              </DialogContent>
            </Dialog>
          )
        )}

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

          {/* <ContactButton productName={name} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;