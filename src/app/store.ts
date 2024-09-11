import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '@/features/products/productsSlice';
import { categoriesReducer } from '@/features/categories/categoriesSlice';
import { usersReducer } from '@/features/users/usersSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
