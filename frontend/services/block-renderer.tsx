import type { Block } from "@/types";

import { AboutUs, Hero, ProductsSection, ContactSection, CategoriesSection, Opinions, ProductDetails } from "@/components/blocks";

export async function blockRenderer(block: Block, index: number) {
  if (!block.show) return null;

  switch (block.__component) {
    case "blocks.hero":
      return <Hero {...block} key={index} />;
    case "blocks.about-us":
      return <AboutUs {...block} key={index} />;
    case "blocks.opinions":
      return <Opinions {...block} key={index} />;
    case "blocks.products":
      return <ProductsSection {...block} key={index} />;
    case "blocks.contact":
      return <ContactSection {...block} key={index} />;
    case "blocks.categories":
      return <CategoriesSection {...block} key={index} />;
    case "blocks.product-details":
      return <ProductDetails  {...block} key={index} />
    default:
      return null;
  }
}