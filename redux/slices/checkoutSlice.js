// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import build from "next/dist/build";


// const URL_2000 = 'http://192.168.0.105:2000'
// const URL_5000 = 'http://localhost:5000'

// export const postCheckoutItem = createAsyncThunk(
//   'checkout/postCheckoutItem',
//   async (data) => {
//     console.log('post-data', data);
//     try {
//       const response = await axios.post(`http://192.168.0.105:2000/place-order`, data)
//       return response.data;
//     } catch (err) {
      
//    }
//   }
// )

// const checkoutSlice = createSlice({
//   name: 'checkout',
//   initialState: {status: 'idle', error: null},
//   reducers: {
  
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(postCheckoutItem.pending, (state) => {
//         state.loading = 'pending';
//       })
//       .addCase(postCheckoutItem.fulfilled, (state, action) => {
//         state.loading = 'fulfilled';
//       })

//       .addCase(postCheckoutItem.rejected, (state, action) => {
//         state.loading = 'rejected';
//         state.error = action.payload;
//       })
//   }
// })


// export default checkoutSlice.reducer;

function name(params) {
  
}
