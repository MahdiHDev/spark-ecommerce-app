import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item._id === newItem._id
            );

            if (existingItem) {
                toast.warn('This product is already added to the cart!');
            } else {
                // Add new item to cart
                state.items.push({
                    ...newItem,
                    quantity: newItem.quantity || 1,
                });
                // Toastify handling stuffs !!!
                toast.success('Product added successfully!');
            }
        },
    },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
