'use client'

import { ProductProps } from '@/types/base';
import { createContext, useContext } from 'react';

export const ProductsContext = createContext<ProductProps[]>([]);

export const useProducts = () => useContext(ProductsContext);

export function ProductsProvider({
    children,
    products,
  }: {
    children: React.ReactNode
    products: ProductProps[]
  }) {
    return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
  }