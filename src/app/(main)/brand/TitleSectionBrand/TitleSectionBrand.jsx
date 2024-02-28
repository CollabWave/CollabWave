'use client';

import { Section } from '@/components/Section/Section';
import { BrandTitle } from './BrandTitle';
import { LogoCarouselBrand } from './LogoCarouselBrand';

import { roboto } from '@/utils/fonts';

export const TitleSectionBrand = () => {
  return (
    <Section>
      <BrandTitle />
      <LogoCarouselBrand />
      <button>Create a brand account</button>
    </Section>
  );
};
