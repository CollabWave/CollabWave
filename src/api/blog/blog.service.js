import { httpCommon } from '../http-client';
import { BLOG_ROUTE } from '../api-routes';

const findAllPosts = () => httpCommon.get(`${BLOG_ROUTE}`);

const findPostsByCategory = category => httpCommon.get(`${BLOG_ROUTE}/search?category=${category}`);

export const blogService = {
  findAllPosts,
  findPostsByCategory,
};
