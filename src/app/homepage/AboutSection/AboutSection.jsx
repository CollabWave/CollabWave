import Image from 'next/image';

import { useRef } from 'react';

import { useSpring, animated } from 'react-spring';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';

import computer from '../../../assets/images/mainPage/computer.webp';
import xl from '../../../assets/images/mainPage/xl.webp';

import styles from './aboutSection.module.css';
import { roboto } from '../../../utils/fonts';

export const AboutSection = () => {
  const aboutTriggerRef = useRef();
  const dataRef = useIntersectionObserver(aboutTriggerRef, {
    freezeOnceVisible: true,
  });
  const aboutStyle = useSpring({
    config: { duration: 5000 },
    from: { opacity: 0 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
  });

  return (
    <Section>
      <SectionTitle
        animate={true}
        color={'#FFD439'}
        title={`"BRIDGING INFLUENCERS, BRANDS VISIONS"`}
      />
      <animated.ul style={aboutStyle} className={styles.about__cards}>
        <li className={styles.about__card}>
          <Image src={computer} alt="A notebook and a cup of coffee" />
          <div className={styles.about__cardBottomWrap}>
            <h3 className={styles.about__cardTitle}>Work with influencers</h3>
            <div ref={aboutTriggerRef} />
            <p className={`${styles.about__cardText} ${roboto.variable}`}>
              This is where your creativity finds its place! <br /> Thanks to this platform, YOU can
              not only share your ideas, but also collaborate with amazing brands. <br /> Ahead of
              the sea of inspiration and new opportunities!
            </p>
          </div>
        </li>
        <li className={styles.about__card}>
          <Image src={xl} alt="Louis Vuitton store" />
          <div className={styles.about__cardBottomWrap}>
            <h3 className={styles.about__cardTitle}>Work with brands</h3>
            <p className={`${styles.about__cardText} ${roboto.variable}`}>
              Professional bloggers - inspiration for your brand! <br /> On the platform, YOU will
              find talented people ready to embody your values in creative content. <br /> Let&#39;s
              make the world brighter together!
            </p>
          </div>
        </li>
      </animated.ul>
    </Section>
  );
};
