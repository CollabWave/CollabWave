'use client';

import ReduxProvider from '@/redux/ReduxProvider';
import { store } from '@/redux/store';

import { ButtonsSection } from './ButtonsSection';

export default function ButtonsWrapper() {
  return (
    <ReduxProvider>
      <ButtonsSection />
    </ReduxProvider>
  );
}
