import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsReducer from '../slices/productsSlice';
import cartReducer from "@redux/slices/cartSlice";
import checkoutReducer from '@redux/slices/checkoutSlice';
import authReducer from "@redux/slices/authSlice";
import dashboardReducer from "@redux/slices/dashboardSlice";
import storage from 'redux-persist/lib/storage';
// import createWebStorage from "redux-persist/es/storage/createWebStorage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


// const storage = typeof window !== 'undefined' ? createWebStorage('local') : createnoopstorage(); 


const persistConfig = {
  key: 'root',
  storage
  
}

const rootReducer  = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})


const persistor = persistStore(store);

export { store, persistor };