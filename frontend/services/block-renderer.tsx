import type { Block } from "@/types";

import { AboutUs, Hero, ProductsSection, ContactSection } from "@/components/blocks";
import { ProductProps } from "@/types/base";

export function blockRenderer(block: Block, index: number, products: ProductProps[]) {
  switch (block.__component) {
    case "blocks.hero":
      return <Hero {...block} key={index} />;
    case "blocks.about-us":
      return <AboutUs {...block} key={index} />;
    case "blocks.products":
      return <ProductsSection {...block} key={index} products={products} />;
    case "blocks.contact":
      return <ContactSection {...block} key={index} />;
    default:
      return null;
  }
}