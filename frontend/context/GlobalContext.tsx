'use client'

import { GlobalProps } from '@/types';
import { createContext, useContext } from 'react';

export const GlobalContext = createContext<GlobalProps | null>(null);

export const useGlobal = () => useContext(GlobalContext);

export function GlobalProvider({
    children,
    global,
  }: {
    children: React.ReactNode
    global: GlobalProps
  }) {
    return <GlobalContext.Provider value={global}>{children}</GlobalContext.Provider>
  }