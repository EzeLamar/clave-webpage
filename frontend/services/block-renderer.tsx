import type { Block } from "@/types";

import { AboutUs, Hero, ProductsSection, ContactSection, CategoriesSection, Opinions } from "@/components/blocks";
import { CategoryProps, ProductProps } from "@/types/base";
import strapiApi from "./api";

export async function blockRenderer(block: Block, index: number, products: ProductProps[]) {
  if (!block.show) return null;

  switch (block.__component) {
    case "blocks.hero":
      return <Hero {...block} key={index} />;
    case "blocks.about-us":
      return <AboutUs {...block} key={index} />;
    case "blocks.opinions":
      return <Opinions {...block} key={index} />;
    case "blocks.products":
      return <ProductsSection {...block} key={index} products={products} />;
    case "blocks.contact":
      return <ContactSection {...block} key={index} />;
    case "blocks.categories": {
      // @ts-expect-error - Strapi API response type is not properly typed
      const { data: categories } = await strapiApi.get<CategoryProps[]>("/api/categories");
      console.log(categories);

      return <CategoriesSection {...block} key={index} categories={categories} />;
    }
    default:
      return null;
  }
}