import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



const URL_2000 = 'http://192.168.0.105:2000'
const URL_5000 = 'http://localhost:5000'

export const postCartItems = createAsyncThunk(
  'cart/postCartItems',
  async (data) => {
    console.log('post-data', data);
    try {
      const response = await axios.post(`https://ecommerce-7lqv.onrender.com/place-order`, data)
      return response.data;
    } catch (err) {
      
   }
  }
)



const initialState = {
  item: [],
  status: 'idle'
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
      }
    },

    clearCart: (state) => {
      if (state.item.length > 0) {
        state.item = [];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCartItems.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(postCartItems.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        console.log(action.payload)
      })

      .addCase(postCartItems.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
  
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
