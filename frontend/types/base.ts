import { IconNames } from "@/components/custom/icon";

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

  export interface ProductProps {
    id: number;
    enabled: boolean;
    slug: string;
    sku: string;
    name: string;
    description: string;
    images: ImageProps[];
    price: number;
    discount: number;
    stock: number;
    features: ItemProps[];
    categories: CategoryProps[];
    brand: BrandProps;
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