import { LinkProps, ImageProps, ItemProps, ProductProps, RootNode } from "./base";

type ComponentType =
  | "blocks.hero"
  | "blocks.heading"
  | "blocks.card-carousel"
  | "blocks.about-us"
  | "blocks.products"
  | "blocks.contact"
  | "blocks.categories"
  | "blocks.opinions"
  | "blocks.product-details"
  | "blocks.articles"
  | "blocks.article-details"

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
  | CategoriesProps
  | OpinionsProps
  | ProductDetailsProps
  | ArticlesProps
  | ArticleDetailsProps
export interface HeroProps extends Base<"blocks.hero"> {
  show: boolean;
  title: string;
  description: RootNode[];
  navLinks: LinkProps[];
  images: ImageProps[];
  anchorLink: string;
  items: ItemProps[];
}

export interface CardCarouselItem {
  show: boolean;
  id: number;
  heading: string;
  subHeading: string;
  text?: string;
  icon: string;
}

export interface CardCarouselProps extends Base<"blocks.card-carousel"> {
  show: boolean;
  cards: CardCarouselItem[];
}

export interface HeadingProps extends Base<"blocks.heading"> {
  show: boolean;
  heading: string;
  subHeading: string;
  text?: string;
  linkId?: string;
}

export interface AboutUsProps extends Base<"blocks.about-us"> {
  show: boolean;
  title: string;
  description: RootNode[];
  image: ImageProps;
  items: ItemProps[];
  anchorLink: string;
}

export interface ProductsProps extends Base<"blocks.products"> {
  show: boolean;
  title: string;
  description: string;
  anchorLink: string;
  products: ProductProps[];
}

export interface ContactProps extends Base<"blocks.contact"> {
  show: boolean;
  title: string;
  anchorLink: string;
  description: RootNode[];
  whatsappMessage: string;
  attentionText: string;
  showPhone: boolean;
  showEmail: boolean;
  showAddress: boolean;
}

export interface CategoriesProps extends Base<"blocks.categories"> {
  show: boolean;
  title: string;
  description: RootNode[];
  anchorLink: string;
  productLink: LinkProps;
  products: Pick<ProductProps, 'id' | 'enabled' | 'sku' | 'name' | 'stock'>[];
}

export interface ArticlesProps extends Base<"blocks.articles"> {
  show: boolean;
  title: string;
  description: RootNode[];
  anchorLink: string;
}

export interface OpinionsProps extends Base<"blocks.opinions"> {
  show: boolean;
  title: string;
  anchorLink: string;
}

export interface ProductDetailsProps extends Base<"blocks.product-details"> {
  show: boolean;
  title: string;
  anchorLink: string;
}

export interface ArticleDetailsProps extends Base<"blocks.article-details"> {
  show: boolean;
  slug: string;
  title?: string;
  anchorLink?: string;
}