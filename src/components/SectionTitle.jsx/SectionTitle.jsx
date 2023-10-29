import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import styles from './SectionTitle.module.css';
import { cinzel } from '../../utils/fonts';

export const SectionTitle = ({ title, color, animate }) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });
  const headerStyle = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, right: '-500px' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      right: dataRef?.isIntersecting ? '0px' : '-500px',
      color: color,
    },
  });

  return animate ? (
    <>
      <animated.h2 style={headerStyle} className={`${styles.title} ${cinzel.variable}`}>{title}</animated.h2>
      <div ref={triggerRef} />
    </>
  ) : (
    <h2 style={{ color: color }} className={`${styles.title} ${cinzel.variable}`}>
      {title}
    </h2>
  );
};
