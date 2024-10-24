import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/productsApi'; // Import your API slice

// Configure the Redux store
export const store = configureStore({
    reducer: {
        // Add the RTK Query reducer to the store
        [api.reducerPath]: api.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
