import { createSlice } from '@reduxjs/toolkit';

import { fetchBlogPosts } from './blogOperations';

const initialState = {
  blogPosts: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBlogPosts.fulfilled, (state, { payload }) => {
      state.blogPosts = payload;
    });
  },
});

export const selectBlogState = state => state.blog.blogPosts;

export default blogSlice.reducer;
