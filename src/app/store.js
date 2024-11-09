import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/products/cartSlice';
import { api } from '../services/productsApi'; // Import your API slice

// Configure the Redux store
export const store = configureStore({
    reducer: {
        // Add the RTK Query reducer to the store
        [api.reducerPath]: api.reducer,
        cart: cartReducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
