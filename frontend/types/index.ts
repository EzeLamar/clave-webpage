import type { LinkProps, ImageProps, ItemProps } from "./base";
import type { CardCarouselProps, HeroProps, HeadingProps, Block } from "./blocks";

export type { LinkProps, ImageProps, ItemProps, CardCarouselProps, HeroProps, HeadingProps, Block };
export interface ProductType {
  id?: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  price: string;
  features: string[];
}

export interface CategoryType {
  id: string;
  name: string;
}
