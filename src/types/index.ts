export interface ProductType {
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