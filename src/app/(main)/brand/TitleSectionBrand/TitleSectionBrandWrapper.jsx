'use client';

import ReduxProvider from '@/redux/ReduxProvider';
import { TitleSectionBrand } from './TitleSectionBrand';

export default function TitleSectionBrandWrapper() {
  return (
    <ReduxProvider>
      <TitleSectionBrand />
    </ReduxProvider>
  );
}
