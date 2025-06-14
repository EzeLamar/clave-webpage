import React from 'react';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';
import { strapiApi } from '@/services/api';
import { blockRenderer } from '@/services/block-renderer';
import { Block } from '@/types/blocks';
import { ProductProps } from '@/types/base';

async function App() {

  const landingPage = await strapiApi.get('/api/landing-page');
  const { data: products } = await strapiApi.get('/api/products');
  console.log('products', products);

  const blocks = landingPage.data.blocks;
  console.log(blocks);

  return (
    <div className="overflow-x-hidden">
      <main>
        {blocks.map((block: Block, index: number) => blockRenderer(block, index, products))}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;