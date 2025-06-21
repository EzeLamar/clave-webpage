import type { Block } from "@/types";

import { AboutUs, Hero, ProductsSection, ContactSection, CategoriesSection, Opinions } from "@/components/blocks";
import { CategoryProps } from "@/types/base";
import strapiApi from "./api";

export async function blockRenderer(block: Block, index: number) {
  if (!block.show) return null;

  switch (block.__component) {
    case "blocks.hero":
      return <Hero {...block} key={index} />;
    case "blocks.about-us":
      return <AboutUs {...block} key={index} />;
    case "blocks.opinions":
      return <Opinions {...block} key={index} />;
    case "blocks.products": {
      // @ts-expect-error - Strapi API response type is not properly typed
      const { data: products } = await strapiApi.get('/api/products');
      // @ts-expect-error - Strapi API response type is not properly typed
      const { data: categories } = await strapiApi.get('/api/categories');

      // @ts-expect-error - Strapi API response type is not properly typed
      return <ProductsSection {...block} key={index} products={products} categoryNames={categories.map(category => category.label)} />;
    }
    
    case "blocks.contact":
      return <ContactSection {...block} key={index} />;
    case "blocks.categories": {
      // @ts-expect-error - Strapi API response type is not properly typed
      const { data: categories } = await strapiApi.get<CategoryProps[]>("/api/categories");
      console.log('categories',categories);

      return <CategoriesSection {...block} key={index} categories={categories} />;
    }
    default:
      return null;
  }
}