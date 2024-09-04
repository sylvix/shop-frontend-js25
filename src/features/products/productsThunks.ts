import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '@/axiosApi';
import { Product, ProductMutation } from '@/types';

export const fetchProducts = createAsyncThunk<Product[], string | undefined>(
  'products/fetchAll',
  async (categoryId) => {
    const { data: products } = await axiosApi.get<Product[]>(`/products`, { params: { category: categoryId } });
    return products;
  },
);

export const createProduct = createAsyncThunk<void, ProductMutation>('products/create', async (productMutation) => {
  const formData = new FormData();

  const keys = Object.keys(productMutation) as (keyof ProductMutation)[];
  keys.forEach((key) => {
    const value = productMutation[key];
    if (value !== null) {
      formData.append(key, value);
    }
  });

  await axiosApi.post('/products', formData);
});

export const fetchOneProduct = createAsyncThunk<Product, string>('products/fetchOne', async (id) => {
  const { data: product } = await axiosApi.get<Product>(`/products/${id}`);
  return product;
});
