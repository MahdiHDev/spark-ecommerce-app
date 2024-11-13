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
        updateQuantity: (state, action) => {
            const { _id, quantity, subtotal } = action.payload;
            const item = state.items.find((item) => item._id === _id);

            if (item) {
                item.quantity = quantity;
                item.subtotal = subtotal;

                // Remove item if quantity is 0
                if (item.quantity <= 0) {
                    state.items = state.items.filter(
                        (item) => item._id !== _id
                    );
                }
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item._id !== itemId);
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
