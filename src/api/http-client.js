import axios from 'axios';

export const httpCommon = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});
