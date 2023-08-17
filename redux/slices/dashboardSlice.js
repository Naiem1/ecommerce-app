import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_2000 = 'http://192.168.0.105:2000';
const URL_5000 = 'http://localhost:5000';

export const fetchOrders = createAsyncThunk(
  'dashboard/fetchOrders',
  async () => {
    try {
      const response = await axios.get(`https://ecommerce-7lqv.onrender.com/orders`);
      return response.data;
    } catch (err) {}
  }
);

export const fetchCustomerList = createAsyncThunk(
  'dashboard/fetchCustomerList',
  async () => {
    try {
      const response = await axios.get(`https://ecommerce-7lqv.onrender.com/users`);
      return response.data;
    } catch (err) {}
  }
);

export const fetchProductList = createAsyncThunk(
  'dashboard/fetchProductList',
  async () => {
    try {
      const response = await axios.get(`https://ecommerce-7lqv.onrender.com/products`);
      return response.data;
    } catch (err) {}
  }
);

export const fetchSelectedCustomer = createAsyncThunk(
  'dashboard/fetchSelectedUser',
  async (userId) => {
    console.log('userID', userId);
    try {
      const response = await axios.get(
        `https://ecommerce-7lqv.onrender.com/users/${userId}`
      );
      return response.data;
    } catch (err) {}
  }
);

export const fetchSelectedOrder = createAsyncThunk(
  'dashboard/fetchSelectedOrder',
  async (userId) => {
    console.log('fetchSelectedOrder', userId);
    const response = await axios.get(
      `https://ecommerce-7lqv.onrender.com/orders/${userId}`
    );
    return response.data;
  }
);

const initialState = {
  salesData: [],
  orderList: [],
  customerList: [],
  productsList: [],
  selectedCustomer: null,
  selectedOrder: null,
  status: 'idle',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.orderList = action.payload;
        console.log(action.payload);
      })

      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchCustomerList.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.customerList = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.productsList = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchSelectedCustomer.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.selectedCustomer = action.payload;
        console.log('action-payload', action.payload);
      })
      .addCase(fetchSelectedOrder.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.selectedOrder = action.payload;
        console.log(action.payload);
      });
  },
});

export default dashboardSlice.reducer;
// export const {} = cartSlice.actions;
