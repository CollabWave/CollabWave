'use client';

import ReduxProvider from '@/redux/ReduxProvider';
import { store } from '@/redux/store';

import Registration from './RegMainPage';
export default function BlogWrapper() {
  return (
    <ReduxProvider>
      <Registration />
    </ReduxProvider>
  );
}
