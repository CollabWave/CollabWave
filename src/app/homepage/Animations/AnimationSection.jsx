'use client';
import { useEffect, useState } from 'react';

import { useSpring, animated } from 'react-spring';

import { PhoneModel } from '@/components/PhoneModel/PhoneModel';
import { SphereModel } from '@/components/SphereModel/SphereModel';

import styles from './animations.module.css';

export const AnimationSection = ({
  startSphereFalling,
  setStartSphereFalling,
  visibleItem,
  itemDisplayed,
  setItemDisplayed,
  onFadeOut,
}) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [isSphereTranslatedTo40Percent, setIsSphereTranslatedTo40Percent] = useState(false);

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
    <>
      <animated.div style={phoneModelSpring}>
        <PhoneModel
          startSphereFalling={startSphereFalling}
          setStartSphereFalling={setStartSphereFalling}
        />
      </animated.div>
      <div style={{ height: '100px' }} id="mobileStop"></div>
      <div style={{ height: '300px' }}></div>
      {startSphereFalling && visibleItem !== 'buttons' && (
        <animated.div className={styles.sphereContainer} style={animationStyles}>
          <SphereModel
            dissolve={isSphereTranslatedTo40Percent}
            dissolveVisible={itemDisplayed === 'sphere'}
            onFadeOut={onFadeOut}
          />
        </animated.div>
      )}
    </>
  );
};
