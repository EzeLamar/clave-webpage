import React from 'react';
import Header from '@/components/Header';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { strapiApi } from '@/services/api';
import { blockRenderer } from '@/services/block-renderer';
import { Block } from '@/types/blocks';

async function App() {

  const landingPage = await strapiApi.get('/api/landing-page');

  const blocks = landingPage.data.blocks;
  console.log(blocks);

  return (
    <div className="overflow-x-hidden">
      <main>
        {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;