// import Image from "next/image";
'use client';

import { useEffect, useState } from 'react';

import { useSpring, animated } from 'react-spring';

import { Container } from '@/components/Container/Container';

import { Title } from './homepage/Title';

import { AboutSection } from '@/app/homepage/AboutSection';
import { PhoneModel } from '@/components/PhoneModel/PhoneModel';
import { SphereModel } from '@/components/SphereModel/SphereModel';
import { BloggerButtonModel } from '@/components/3D Buttons/BloggerButton/BloggerButtonModel';
import { BrandButtonModel } from '@/components/3D Buttons/BrandButton/BrandButtonModel';

import styles from './homepage/page.module.css';

export default function Home() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [startSphereFalling, setStartSphereFalling] = useState(false);
  const [isSphereTranslatedTo40Percent, setIsSphereTranslatedTo40Percent] = useState(false);
  const [itemDisplayed, setItemDisplayed] = useState('sphere');

  const [visibleItem, setVisibleItem] = useState(itemDisplayed);
  const onFadeOut = () => setVisibleItem(itemDisplayed);

  useEffect(() => {
    const animationDuration = 2000;

    const animationTimer = setTimeout(() => {
      setAnimationFinished(true);
    }, animationDuration);

    return () => {
      clearTimeout(animationTimer);
    };
  }, []);

  const phoneModelSpring = useSpring({
    opacity: animationFinished ? 1 : 0,
    config: { duration: 2000 },
  });

  const animationStyles = useSpring(
    startSphereFalling
      ? {
          from: { opacity: 0, transform: 'translateY(0%)' },
          to: [{ opacity: 1, transform: 'translateY(40%)' }],
          config: { duration: '1500' },
          onRest: () => {
            setIsSphereTranslatedTo40Percent(true);
            setItemDisplayed('buttons');
          },
        }
      : {
          from: { opacity: 1, transform: 'translateY(40%)' },
          to: [{ opacity: 0, transform: 'translateY(0%)' }],
          config: { duration: '1500' },
          onRest: () => {
            setIsSphereTranslatedTo40Percent(false);
            setItemDisplayed('sphere');
          },
        }
  );

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
        {startSphereFalling && visibleItem !== 'buttons' && (
          <animated.div className={styles.sphereContainer} style={animationStyles}>
            <SphereModel dissolve={isSphereTranslatedTo40Percent} dissolveVisible={itemDisplayed === 'sphere'} onFadeOut={onFadeOut} />
          </animated.div>
        )}
        {visibleItem === 'buttons' && (
          <div className={styles.buttonsContainer}

          >
            <div className={styles.buttonWrap} onClick={(e) => console.log('click')}>
              <BloggerButtonModel
                dissolveVisible={itemDisplayed === 'buttons'}
                onFadeOut={onFadeOut}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className={styles.buttonWrap}>
              <BrandButtonModel
                dissolveVisible={itemDisplayed === 'buttons'}
                onFadeOut={onFadeOut}
              />
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
