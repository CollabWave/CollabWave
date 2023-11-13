import { httpCommon } from "../http-client";
import { BLOG_ROUTE } from "../api-routes";

const findAllPosts = () => httpCommon.get(`${BLOG_ROUTE}`);

export const blogService = {
  findAllPosts,
};
