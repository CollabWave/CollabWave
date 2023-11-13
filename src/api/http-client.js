import axios from 'axios';

export const httpCommon = axios.create({
  baseURL: 'http://localhost:3030/api',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});
