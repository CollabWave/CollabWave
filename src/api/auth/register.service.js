import { httpCommon } from '../http-client';
import { REG_BLOG_ROUTE } from '../api-routes';
const registerUser = userData => httpCommon.post(`${REG_BLOG_ROUTE}/register`, userData);

const checkSubscribers = (userId, userData) =>
  httpCommon.post(`${REG_BLOG_ROUTE}/check-followers/${userId}`, userData);

const verifyUser = (userId, userData) =>
  httpCommon.post(`${REG_BLOG_ROUTE}/verify/${userId}`, userData);

const loginUser = userData => httpCommon.post(`${REG_BLOG_ROUTE}/login`, userData);

export const authService = {
  registerUser,
  verifyUser,
  loginUser,
  checkSubscribers,
};
