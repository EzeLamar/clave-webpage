'use client'

import { DynamicPageProps } from '@/types/base';
import { createContext, useContext } from 'react';

export const DynamicPageContext = createContext<DynamicPageProps | null>(null);

export const useDynamicPage = () => useContext(DynamicPageContext);

export function DynamicPageProvider({
    children,
    dynamicPage,
  }: {
    children: React.ReactNode
    dynamicPage: DynamicPageProps
  }) {
    return <DynamicPageContext.Provider value={dynamicPage}>{children}</DynamicPageContext.Provider>
  }