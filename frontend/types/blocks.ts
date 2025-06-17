import { LinkProps, ImageProps, ItemProps, ProductProps, CompanyProps } from "./base";

type ComponentType =
  | "blocks.hero"
  | "blocks.heading"
  | "blocks.card-carousel"
  | "blocks.about-us"
  | "blocks.products"
  | "blocks.contact"

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
  | AboutUsProps
  | ProductsProps
  | ContactProps
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

export interface AboutUsProps extends Base<"blocks.about-us"> {
  title: string;
  description: string;
  image: ImageProps;
  items: ItemProps[];
  anchorLink: string;
}

export interface ProductsProps extends Base<"blocks.products"> {
  title: string;
  description: string;
  anchorLink: string;
  products: ProductProps[];
}

export interface ContactProps extends Base<"blocks.contact"> {
  title: string;
  anchorLink: string;
  description: string;
  whatsappMessage: string;
  attentionText: string;
  showPhone: boolean;
  showEmail: boolean;
  showAddress: boolean;
  company: CompanyProps;
}