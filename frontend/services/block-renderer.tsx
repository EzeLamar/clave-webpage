import type { Block } from "@/types";

import { Hero } from "@/components/blocks";

export function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero":
      return <Hero {...block} key={index} />;
    default:
      return null;
  }
}