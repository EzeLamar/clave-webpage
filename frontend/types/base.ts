import { IconNames } from "@/components/custom/icon";
import { Block } from "./blocks";

// Local copy of RootNode and its dependencies from @strapi/blocks-react-renderer
type TextInlineNode = {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string;
};

type LinkInlineNode = {
  type: 'link';
  url: string;
  children: TextInlineNode[];
};

type ListItemInlineNode = {
  type: 'list-item';
  children: (TextInlineNode | LinkInlineNode)[];
};

type DefaultInlineNode = TextInlineNode | LinkInlineNode;

type ParagraphBlockNode = {
  type: 'paragraph';
  children: DefaultInlineNode[];
};

type QuoteBlockNode = {
  type: 'quote';
  children: DefaultInlineNode[];
};

type CodeBlockNode = {
  type: 'code';
  children: DefaultInlineNode[];
};

type HeadingBlockNode = {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: DefaultInlineNode[];
};

type ListBlockNode = {
  type: 'list';
  format: 'ordered' | 'unordered';
  children: (ListItemInlineNode | ListBlockNode)[];
};

type ImageBlockNode = {
  type: 'image';
  image: {
    name: string;
    alternativeText?: string | null;
    url: string;
    caption?: string | null;
    width: number;
    height: number;
    formats?: Record<string, unknown>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: unknown | null;
    createdAt: string;
    updatedAt: string;
  };
  children: [{
    type: 'text';
    text: '';
  }];
};

export type RootNode = ParagraphBlockNode | QuoteBlockNode | CodeBlockNode | HeadingBlockNode | ListBlockNode | ImageBlockNode;

export interface LinkProps {
    id: number;
    label: string;
    href: string;
    isExternal: boolean;
    isButtonLink: boolean;
    type: "PRIMARY" | "SECONDARY";
  }
  
  export interface ImageProps {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string | null;
  }

  export interface IconProp {
    id: number;
    name: IconNames;
  }

  export interface ItemProps {
    id: number;
    title: string;
    icon: IconProp;
    description: string;
  }

  export interface BrandProps {
    id: number;
    name: string;
  }

  export interface FeatureProps {
    name: string;
    slug: string;
    description: RootNode[];
    products: ProductProps[];
  }

  export interface ProductProps {
    id: number;
    enabled: boolean;
    slug: string;
    sku: string;
    name: string;
    description: RootNode[];
    images: ImageProps[];
    price: number;
    discount: number;
    stock: number;
    features: FeatureProps[];
    categories: CategoryProps[];
    brand: BrandProps;
    shipmentDescription?: RootNode[];
  }

  export interface CategoryProps {
    id: number;
    enabled: boolean;
    slug: string;
    name: string;
    description: string;
    label: string;
    image: ImageProps;
    products: ProductProps[];
  }

  export interface CompanyProps {
    id: number;
    phone: string;
    email: string;
    city: string;
    postalCode: string;
  }

  export interface DynamicPageProps {
    id: number;
    enabled: boolean;
    slug: string;
    detailSlug?: string;
    title: string;
    description: string;
    blocks: Block[];
  }