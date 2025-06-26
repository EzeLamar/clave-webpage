'use client'

import { CategoryProps } from '@/types/base';
import { createContext, useContext } from 'react';

export const CategoriesContext = createContext<CategoryProps[]>([]);

export const useCategories = () => useContext(CategoriesContext);

export function CategoriesProvider({
    children,
    categories,
  }: {
    children: React.ReactNode,
    categories: CategoryProps[]
  }) {
    return <CategoriesContext.Provider value={categories}>{children}</CategoriesContext.Provider>
  }