import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '@/features/products/productsSlice';
import { categoriesReducer } from '@/features/categories/categoriesSlice';
import { usersReducer } from '@/features/users/usersSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';

const usersPersistConfig = {
  key: 'shop:users',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  users: persistReducer(usersPersistConfig, usersReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
