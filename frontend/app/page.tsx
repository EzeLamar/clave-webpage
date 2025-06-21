import React from 'react';
import { strapiApi } from '@/services/api';
import { blockRenderer } from '@/services/block-renderer';
import { Block } from '@/types/blocks';

async function App() {

  const landingPage = await strapiApi.get('/api/landing-page');
  // @ts-expect-error - Strapi API response type is not properly typed
  const blocks = landingPage.data.blocks;
  console.log(blocks);

  
  return (
    <div className="overflow-x-hidden">
      <main>
        {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
      </main>
    </div>
  );
}

export default App;