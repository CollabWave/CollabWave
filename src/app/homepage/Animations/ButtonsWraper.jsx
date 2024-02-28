'use client';

import ReduxProvider from '@/redux/ReduxProvider';
import { store } from '@/redux/store';

import { ButtonsSection } from './ButtonsSection';

export default function ButtonsWrapper({ itemDisplayed, visibleItem, onFadeOut }) {
  return (
    <ReduxProvider>
      <ButtonsSection
        itemDisplayed={itemDisplayed}
        visibleItem={visibleItem}
        onFadeOut={onFadeOut}
      />
    </ReduxProvider>
  );
}
