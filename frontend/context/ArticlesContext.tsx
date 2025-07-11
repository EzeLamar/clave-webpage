'use client'

import { ArticleProps } from '@/types/base';
import { createContext, useContext } from 'react';

export const ArticlesContext = createContext<ArticleProps[]>([]);

export const useArticles = () => useContext(ArticlesContext);

export function ArticlesProvider({
    children,
    articles,
  }: {
    children: React.ReactNode,
    articles: ArticleProps[]
  }) {
    return <ArticlesContext.Provider value={articles}>{children}</ArticlesContext.Provider>
  }