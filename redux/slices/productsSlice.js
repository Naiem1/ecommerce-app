import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// Async thunk to fetch products data
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(`http://localhost:5000/products`);
    return response.data;
  }
);

const initialState = {
  data: [],
  loading: 'idle',
  error: null,
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
      });
  },
});

export default productsSlice.reducer;
