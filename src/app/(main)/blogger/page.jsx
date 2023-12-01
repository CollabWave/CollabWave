'use client';

import { Container } from '@/components/Container/Container';
import { TitleSection } from './TitleSection/TitleSection';
import { UsageSection } from './UsageSection/UsageSection';
import { FeatureSection } from './FeatureSection/FeatureSection';
import { FormSection } from './FormSection/FormSection';

export default function Blogger() {
  return (
    <Container>
      <TitleSection />
      <UsageSection />
      <FeatureSection />
      <FormSection />
    </Container>
  );
}
