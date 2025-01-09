import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';  // Your auth slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
