'use client'

import React from 'react';
import { BannerProps } from '@/types/global';
import Link from 'next/link';
import { useGlobal } from '@/context/GlobalContext';
import { X } from 'lucide-react';

const Banner = ({ description, link }: Readonly<BannerProps>) => {
  const { banner, setBannerEnabled } = useGlobal();

  // Si el banner no está habilitado, no renderizar nada
  if (!banner?.enabled) {
    return null;
  }

  const handleClose = () => {
    setBannerEnabled(false);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-[100] bg-primary text-primary-foreground h-10 flex items-center shadow animate-fadeIn">
      <div className="w-full relative flex justify-center items-center">
        <Link href={link.href} target={link.isExternal ? "_blank" : "_self"} className="inline-block px-4 hover:underline">
          {description}
        </Link>
        <button
          onClick={handleClose}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-primary-foreground/20 rounded transition-colors"
          aria-label="Cerrar banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Banner;