import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
});

// export const { todoAdded, todoToggled } = productSlice.actions;
export default productSlice.reducer;
