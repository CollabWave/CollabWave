import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blog/blogSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  devTools: true,
});
