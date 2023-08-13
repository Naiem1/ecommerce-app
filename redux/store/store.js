import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../slices/productsSlice';
import cartReducer from "@redux/slices/cartSlice";


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  }
})

export default store;