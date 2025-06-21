'use client'

import { GlobalProps } from '@/types';
import { createContext, useContext } from 'react';

export const GlobalContext = createContext<GlobalProps | null>(null);

export const useGlobal = () => useContext(GlobalContext);