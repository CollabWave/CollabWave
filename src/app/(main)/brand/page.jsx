'use client';

import { Container } from '@/components/Container/Container';
import TitleSectionBrandWrapper from './TitleSectionBrand/TitleSectionBrandWrapper';
import { BrandUsageSection } from './BrandUsageSection/BrandUsageSection';
import { BrandFeatureSection } from './BrandFeatureSection/BrandFeatureSection';
import { BrandFormSection } from './BrandFormSection/BrandFormSection';

export default function Brand() {
  return (
    <Container>
      <TitleSectionBrandWrapper />
      <BrandUsageSection />
      <BrandFeatureSection />
      <BrandFormSection />
    </Container>
  );
}
