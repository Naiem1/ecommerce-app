import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({...newItem, quantity: 1});
      }
    },

    incrementQuantity: (state, { payload }) => {
      const productId = payload;
      const productToUpdate = state.item.find((item) => item.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity += 1;
      }
    },

    decrementQuantity: (state, { payload }) => {
      const productId = payload;
      const productToUpdate = state.item.find(item => item.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity -= 1;
      }
    },

    removeItemFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      const removedItem = state.item.find(
        (item) => item.id === productIdToRemove
      );

      if (removedItem) {
        state.item = state.item.filter((item) => item.id !== productIdToRemove);
        state.totalPrice -= removedItem.price;
      }
    },

    clearCart: (state) => {
      if (state.item.length > 0) {
        state.item = [];
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;
