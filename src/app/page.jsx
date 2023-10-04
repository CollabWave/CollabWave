// import Image from "next/image";
'use client';

import { useEffect, useState } from 'react';

import { useSpring, animated } from 'react-spring';

import { Container } from '@/components/Container/Container';

import { Title } from './homepage/Title';
import { PhoneModel } from '@/components/phoneModel/PhoneModel';
import { AboutSection } from '@/app/homepage/AboutSection';

import styles from './homepage/page.module.css';


export default function Home() {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const animationDuration = 2000;

    const animationTimer = setTimeout(() => {
      setAnimationFinished(true);
    }, animationDuration);

    return () => clearTimeout(animationTimer);
  }, []);

  const phoneModelSpring = useSpring({
    opacity: animationFinished ? 1 : 0,
    config: { duration: 2000 },
  });

  return (
    <main className={styles.justBackgr}>
      <Container>
        <Title />
        <animated.div style={phoneModelSpring}>
          <PhoneModel />
        </animated.div>
        <AboutSection />
      </Container>
    </main>
  );
}
