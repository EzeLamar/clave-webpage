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

  const data = await strapiApi.get('/api/landing-page');
  const blocks = data.data.blocks;
  console.log(blocks);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;