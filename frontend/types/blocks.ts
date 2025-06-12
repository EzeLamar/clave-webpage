import { LinkProps, ImageProps, ItemProps } from "./base";

type ComponentType =
  | "blocks.hero"
  | "blocks.heading"
  | "blocks.card-carousel"


interface Base<T extends ComponentType, D extends object = Record<string, unknown>> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block =
  | HeroProps
  | HeadingProps
  | CardCarouselProps

export interface HeroProps extends Base<"blocks.hero"> {
  title: string;
  description: string;
  navLinks: LinkProps[];
  images: ImageProps[];
  anchorLink: string;
  items: ItemProps[];
}

export interface CardCarouselItem {
  id: number;
  heading: string;
  subHeading: string;
  text?: string;
  icon: string;
}

export interface CardCarouselProps extends Base<"blocks.card-carousel"> {
  cards: CardCarouselItem[];
}

export interface HeadingProps extends Base<"blocks.heading"> {
  heading: string;
  subHeading: string;
  text?: string;
  linkId?: string;
}
