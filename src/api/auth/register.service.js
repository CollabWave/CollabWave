import { httpCommon } from '../http-client';
import { REG_BLOG_ROUTE } from '../api-routes';
const registerUser = userData => httpCommon.post(`${REG_BLOG_ROUTE}/register`, userData);
const verifyUser = (userId, userData) =>
  httpCommon.post(`${REG_BLOG_ROUTE}/verify/${userId}`, userData);
export const authService = {
  registerUser,
  verifyUser,
};
