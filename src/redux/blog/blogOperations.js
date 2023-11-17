import { createAsyncThunk } from '@reduxjs/toolkit';

import { blogService } from '@/api/blog/blog.service';

export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await blogService.findAllPosts();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
