'use client'

import { GlobalProps } from '@/types';
import { createContext, useContext, useState } from 'react';

interface GlobalContextType extends GlobalProps {
  setBannerEnabled: (enabled: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};

export function GlobalProvider({
    children,
    global,
  }: {
    children: React.ReactNode
    global: GlobalProps
  }) {
    const [bannerEnabled, setBannerEnabled] = useState(global.banner?.enabled ?? false);
    
    const contextValue: GlobalContextType = {
      ...global,
      banner: global.banner ? { ...global.banner, enabled: bannerEnabled } : undefined,
      setBannerEnabled,
    };

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
  }