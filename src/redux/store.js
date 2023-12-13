import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blog/blogSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    auth: authReducer,
  },
  devTools: true,
});
