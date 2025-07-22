'use client'

import React, { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { ProductsProps } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useProducts } from '@/context/ProductsContext';
import { useCategories } from '@/context/CategoriesContext';
import { CategoryProps } from '@/types/base';
import { useDynamicPage } from '@/context/DynamicPageContext';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProductsSection = ({ title, description, anchorLink }: ProductsProps) => {
  const products = useProducts();
  const categories = useCategories();
  const page = useDynamicPage();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<CategoryProps | null>(
    categories.find(category => category.slug === categoryParam) || null
  );
  const [search, setSearch] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Filtrado por categoría y nombre
  const filteredProducts = products.filter(product => {
    const matchesCategory = !activeCategory || product.categories.some(category => category.slug === activeCategory.slug);
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id={anchorLink} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Filtros: mobile (Drawer) y desktop (sidebar) */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
          {/* Botón Filtrar solo en mobile */}
          <div className="md:hidden mb-4">
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <Button className="flex gap-2 justify-center px-4 py-2 w-full" onClick={() => setDrawerOpen(true)}>
                  Filtrar
                  <SlidersHorizontal className="h-5 w-5 text-white mr-2" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-4">
                <DrawerHeader>
                  <DrawerTitle>Filtrar productos</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col gap-4">
                  <Input
                    placeholder="Buscar productos..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <div>
                    <div className="font-semibold mb-2">Categorías</div>
                    <Button
                      onClick={() => setActiveCategory(null)}
                      variant={activeCategory === null ? 'default' : 'ghost'}
                      className={`block w-full text-left px-3 py-2 rounded-md mb-1 transition-colors ${activeCategory === null ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                      Todas
                    </Button>
                    {categories.map(category => (
                      <Button
                        key={category.slug}
                        onClick={() => setActiveCategory(category)}
                        variant={activeCategory?.slug === category.slug ? 'default' : 'ghost'}
                        className={`block w-full text-left px-3 py-2 rounded-md mb-1 transition-colors ${activeCategory?.slug === category.slug ? 'bg-primary text-primary-foreground' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <DrawerClose asChild>
                  <Button variant='outline' className="mt-6 w-full">Cerrar</Button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Filtros en desktop */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/6">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <Input
                placeholder="Buscar productos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="mb-4"
              />
              <div>
                <div className="font-semibold mb-2">Categorías</div>
                <Button
                  onClick={() => setActiveCategory(null)}
                  variant={activeCategory === null ? 'default' : 'ghost'}
                  className={`block w-full text-left px-3 py-2 rounded-md mb-1 transition-colors ${activeCategory === null ? 'bg-primary text-primary-foreground' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  Todas
                </Button>
                {categories.map(category => (
                  <Button
                    key={category.slug}
                    onClick={() => setActiveCategory(category)}
                    variant={activeCategory?.slug === category.slug ? 'default' : 'ghost'}
                    className={`block w-full text-left px-3 py-2 rounded-md mb-1 transition-colors ${activeCategory?.slug === category.slug ? 'bg-primary text-primary-foreground' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Productos */}
          <div className="flex-1">
            {filteredProducts.length === 0 ?
              <div className='flex justify-center h-100'>
                No se encontraron productos
              </div> :
              !page?.detailSlug ?
                <p className='flex justify-center font-bold h-100 text-red-500'>Detail Slug not Found</p> :
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;