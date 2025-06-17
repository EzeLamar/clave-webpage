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

  export interface ItemProps {
    id: number;
    title: string;
    icon: string;
    description: string;
  }

  export interface ProductProps {
    id: number;
    sku: string;
    name: string;
    description: string;
    images: ImageProps[];
    price: number;
    discount: number;
    stock: number;
    features: ItemProps[];
    categories: CategoryProps[];
  }

  export interface CategoryProps {
    id: number;
    name: string;
    description: string;
    label: string;
    image?: ImageProps;
    products?: ProductProps[];
  }

  export interface CompanyProps {
    id: number;
    phone: string;
    email: string;
    address: string;
  }