'use client';

import ReduxProvider from '@/redux/ReduxProvider';

import { BlogMainPage } from './BlogMainPage';

export default function BlogWrapper() {
  return (
    <ReduxProvider>
      <BlogMainPage />
    </ReduxProvider>
  );
}
