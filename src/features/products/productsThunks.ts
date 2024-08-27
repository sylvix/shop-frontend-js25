import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '@/axiosApi';
import { Product, ProductMutation } from '@/types';

export const fetchProducts = createAsyncThunk<Product[]>('products/fetchAll', async () => {
  const { data: products } = await axiosApi.get<Product[]>('/products');
  return products;
});

export const createProduct = createAsyncThunk<void, ProductMutation>('products/create', async (productMutation) => {
  const formData = new FormData();
  formData.append('title', productMutation.title);
  formData.append('description', productMutation.description);
  formData.append('price', productMutation.price);

  if (productMutation.category_id) {
    formData.append('category_id', productMutation.category_id.toString());
  }

  if (productMutation.image) {
    formData.append('image', productMutation.image);
  }

  await axiosApi.post('/products', formData);
});

export const fetchOneProduct = createAsyncThunk<Product, string>('products/fetchOne', async (id) => {
  const { data: product } = await axiosApi.get<Product>(`/products/${id}`);
  return product;
});
