export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface ProductMutation {
  title: string;
  description: string;
  price: string;
}

export type ProductWithoutId = Omit<Product, 'id'>;