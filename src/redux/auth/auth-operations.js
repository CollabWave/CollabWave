import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '@/api/auth/register.service';

export const fetchRegistration = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      // Передаємо userData у метод registerUser
      const response = await authService.registerUser(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
