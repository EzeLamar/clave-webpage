import type { LinkProps, ImageProps, ItemProps } from "./base";
import type { CardCarouselProps, HeroProps, HeadingProps, Block, AboutUsProps, ProductsProps, ContactProps, ProductDetailsProps, ArticlesProps } from "./blocks";
import type { GlobalProps, HeaderProps, FooterProps } from "./global";

export type {
  LinkProps,
  ImageProps,
  ItemProps,
  CardCarouselProps,
  HeroProps,
  HeadingProps,
  Block,
  GlobalProps,
  HeaderProps,
  FooterProps,
  AboutUsProps,
  ProductsProps,
  ContactProps,
  ProductDetailsProps,
  ArticlesProps
};
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
