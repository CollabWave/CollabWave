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
export const fetchVerify = createAsyncThunk('auth/verify', async userId => {
  try {
    const verificationResponse = await authService.verifyUser(userId, blogData);
    console.log('Verification successful', verificationResponse.data);
    return verificationResponse.data; // Якщо потрібно повернути дані для подальшої обробки в редюсері
  } catch (error) {
    console.error('Verification failed', error);
    throw error; // Якщо потрібно обробити помилку в редюсері
  }
});
export const fetchLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Pass email and password to the loginUser method
      const loginResponse = await authService.loginUser({ email, password });
      console.log('Login successful', loginResponse.data);
      return loginResponse.data; // If you need to return data for further processing in the reducer
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
