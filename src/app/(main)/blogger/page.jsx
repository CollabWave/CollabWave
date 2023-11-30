'use client';

import { Container } from '@/components/Container/Container';
import { TitleSection } from './TitleSection/TitleSection';
import { UsageSection } from './UsageSection/UsageSection';

export default function Blogger() {
  return (
    <Container>
      <TitleSection />
      <UsageSection />
    </Container>
  );
}
