import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// Async thunk to fetch products data
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(`https://ecommerce-7lqv.onrender.com/products`);
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const response = await axios.get(`https://ecommerce-7lqv.onrender.com/products/${productId}`);
    return response.data;
  }
)

const initialState = {
  data: [],
  loading: 'idle',
  error: null,
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
    
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = null;
        state.selectedProduct = action.payload;
    })
  },
});

export default productsSlice.reducer;
