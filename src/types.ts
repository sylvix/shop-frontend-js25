export interface Product {
  id: number;
  category_id: number;
  title: string;
  description: string;
  price: number;
  image: string | null;
  created_at: string;
}

export interface ProductMutation {
  category_id: number | null;
  title: string;
  description: string;
  price: string;
  image: File | null;
}

export interface Category {
  id: number;
  title: string;
  description: string | null;
}
