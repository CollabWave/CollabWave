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
export const fetchVerify = createAsyncThunk('auth/verify', async (userId, thunkAPI) => {
  try {
    const verificationResponse = await authService.verifyUser(userId, blogData);
    console.log('Verification successful', verificationResponse.data);
    return verificationResponse.data; // Якщо потрібно повернути дані для подальшої обробки в редюсері
  } catch (error) {
    console.error('Verification failed', error);
    throw error; // Якщо потрібно обробити помилку в редюсері
  }
});
