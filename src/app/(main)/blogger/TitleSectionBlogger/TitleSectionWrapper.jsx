'use client';

import ReduxProvider from '@/redux/ReduxProvider';
import TitleSectionBlogger from './TitleSectionBlogger';

export default function TitleSectionWrapper() {
  return (
    <ReduxProvider>
      <TitleSectionBlogger />
    </ReduxProvider>
  );
}
