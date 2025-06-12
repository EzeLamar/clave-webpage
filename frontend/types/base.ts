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