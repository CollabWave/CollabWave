'use client';

import ReduxProvider from '@/redux/ReduxProvider';
import { store } from '@/redux/store';
import TitleSectionBlogger from './TitleSectionBlogger';

export default function TitleSectionWrapper() {
  return (
    <ReduxProvider>
      <TitleSectionBlogger />
    </ReduxProvider>
  );
}
