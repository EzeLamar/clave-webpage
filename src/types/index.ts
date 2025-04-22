export interface ProductType {
  id: number;
  name: string;
  description: string;
  features: string[];
  price: string;
  imageUrl: string;
  category: string;
}

export interface CategoryType {
  id: string;
  name: string;
}