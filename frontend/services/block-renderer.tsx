import type { Block } from "@/types";

import { AboutUs, Hero } from "@/components/blocks";

export function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero":
      return <Hero {...block} key={index} />;
    case "blocks.about-us":
      return <AboutUs {...block} key={index} />;
    default:
      return null;
  }
}