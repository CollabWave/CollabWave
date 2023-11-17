import { useRef } from 'react';

import { useSpring, animated } from 'react-spring';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';
import BlogWrapper from './BlogWrapper';

import styles from './blogSection.module.css';

export const BlogSection = () => {
  const blogTriggerRef = useRef();
  const dataRef = useIntersectionObserver(blogTriggerRef, {
    freezeOnceVisible: true,
  });

  const carouselStyle = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, bottom: '-500px' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      bottom: dataRef?.isIntersecting ? '0px' : '-500px',
    },
  });

  return (
    <Section>
      <SectionTitle title={'BLOG'} color={'#FFD439'} animate={false} animateFromLeft={true} />
      <div ref={blogTriggerRef} />
      <animated.div style={carouselStyle} className={styles.relativeWrap}>
        <BlogWrapper />
      </animated.div>
    </Section>
  );
};
