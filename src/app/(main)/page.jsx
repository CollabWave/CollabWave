// import Image from "next/image";
'use client';

import { useState } from 'react';

import { Container } from '@/components/Container/Container';

import { Title } from '../homepage/MainTitle/Title';

import { ButtonsSection } from '../homepage/Animations/ButtonsSection';
import { AnimationSection } from '../homepage/Animations/AnimationSection';
import { AboutSection } from '../homepage/AboutSection/AboutSection';
import { FeaturesSection } from '../homepage/FeaturesSection/FeaturesSection';
import { BlogSection } from '../homepage/BlogSection/BlogSection';

export default function Home() {
  const [startSphereFalling, setStartSphereFalling] = useState(false);
  const [itemDisplayed, setItemDisplayed] = useState('sphere');

  const [visibleItem, setVisibleItem] = useState(itemDisplayed);
  const onFadeOut = () => setVisibleItem(itemDisplayed);

  return (
    <main>
      <Container>
        <Title />
        <AnimationSection
          startSphereFalling={startSphereFalling}
          setStartSphereFalling={setStartSphereFalling}
          visibleItem={visibleItem}
          itemDisplayed={itemDisplayed}
          setItemDisplayed={setItemDisplayed}
          onFadeOut={onFadeOut}
        />

        <ButtonsSection
          itemDisplayed={itemDisplayed}
          visibleItem={visibleItem}
          onFadeOut={onFadeOut}
        />

        <AboutSection />
        <FeaturesSection />
        <BlogSection />
      </Container>
    </main>
  );
}
