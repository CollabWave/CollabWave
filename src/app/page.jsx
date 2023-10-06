// import Image from "next/image";
'use client';

import { useEffect, useState } from 'react';

import { useSpring, animated } from 'react-spring';

import { Container } from '@/components/Container/Container';

import { Title } from './homepage/Title';
import { PhoneModel } from '@/components/PhoneModel/PhoneModel';
//import { FallingSphere } from '@/components/SphereModel/FallingSphere';
import { AboutSection } from '@/app/homepage/AboutSection';
import { SphereModel } from '@/components/SphereModel/FallingSphere';

import styles from './homepage/page.module.css';

export default function Home() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [startSphereFalling, setStartSphereFalling] = useState(false);
  const [positionY, setPositionY] = useState(-5);

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

  const springProps = useSpring({
    from: { positionY: -5 },
    to: { positionY: startSphereFalling ? 0 : -5 },
    config: {
      duration: 3000,
      easing: 'easeInOutCubic',
    },
    onRest: () => {
      if (!startSphereFalling) {
        setPositionY(-5);
      }
    },
  });

  useEffect(() => {
    if (startSphereFalling) {
      setPositionY(0);
    }
  }, [startSphereFalling]);

  return (
    <main className={styles.justBackgr}>
      <Container>
        <Title />
        <animated.div style={phoneModelSpring}>
          <PhoneModel
            startSphereFalling={startSphereFalling}
            setStartSphereFalling={setStartSphereFalling}
          />
        </animated.div>
        <AboutSection />
        <div style={{ height: '300px' }}></div>
        {startSphereFalling && (
          <animated.div position-y={springProps.positionY}>
            <SphereModel />
          </animated.div>
        )}
        {/*  {animationFinished && <FallingSphere />} */} {/* Render the FallingSphere component */}
      </Container>
    </main>
  );
}
