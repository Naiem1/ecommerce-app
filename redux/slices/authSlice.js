const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await axios.post('https://ecommerce-7lqv.onrender.com/register', { ...userData });
  return response.data;
});

export const loginUser = createAsyncThunk('auth/loginUser', async (loginData) => {
  const response = await axios.post('https://ecommerce-7lqv.onrender.com/login', {...loginData});
  return response.data;
});

const initialState = {
  user: null,
  status: 'idle',
  error: null,
  message: '',
  isAuthenticated: false,
  redirectAfterLogin: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRedirectAfterLogin: (state, action) => {
      state.redirectAfterLogin = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.redirectAfterLogin = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const {setRedirectAfterLogin, logoutUser} = authSlice.actions
