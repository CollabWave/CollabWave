'use client';

import ReduxProvider from '@/redux/ReduxProvider';

import { PostBlogPage } from './PostBlogPage';

export default function BlogWrapper() {
  return (
    <ReduxProvider>
      <PostBlogPage />
    </ReduxProvider>
  );
}
