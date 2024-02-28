'use client';

import { Container } from '@/components/Container/Container';
import TitleSectionWrapper from './TitleSectionBlogger/TitleSectionWrapper';
import { UsageSection } from './UsageSection/UsageSection';
import { FeatureSection } from './FeatureSection/FeatureSection';
import { FormSection } from './FormSection/FormSection';

export default function Blogger() {
  return (
    <Container>
      <TitleSectionWrapper />
      <UsageSection />
      <FeatureSection />
      <FormSection />
    </Container>
  );
}
