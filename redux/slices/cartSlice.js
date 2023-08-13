import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      return {
        ...state,
        item: [...state.item, newItem],
        totalPrice: state.totalPrice + newItem.price
      }
    },
    removeItemFromCart: (state, action) => {
      
    },
    clearCart: (state) => {

    }
  }
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;