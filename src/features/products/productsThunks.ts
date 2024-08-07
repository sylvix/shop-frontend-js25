import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { Product, ProductMutation, ProductWithoutId } from '../../types.ts';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchAll',
  async () => {
    const {data: products} = await axiosApi.get<Product[]>('/products');
    return products;
  }
);

export const createProduct = createAsyncThunk<void, ProductMutation>(
  'products/create',
  async (productMutation) => {
    const productWithoutId: ProductWithoutId = {
      ...productMutation,
      price: parseFloat(productMutation.price),
    };
    await axiosApi.post('/products', productWithoutId);
  }
);

export const fetchOneProduct = createAsyncThunk<Product, string>(
  'products/fetchOne',
  async (id) => {
    const {data: product} = await axiosApi.get<Product>(`/products/${id}`);
    return product;
  }
);