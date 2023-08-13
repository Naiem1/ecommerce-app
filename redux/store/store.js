import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from '../slices/productsSlice';
import cartReducer from "@redux/slices/cartSlice";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  
}

const rootReducer  = combineReducers({
  products: productsReducer,
  cart: cartReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
})


const persistor = persistStore(store);

export { store, persistor };