'use client';

import { cloneElement, isValidElement, Children } from 'react';

import { useSpring, animated } from 'react-spring';

import styles from '../homepage/page.module.css';
import { cinzel } from '../../utils/fonts';

const animateJSX = (element, delay) => {
  return Children.map(element, (child, index) => {
    if (typeof child === 'string') {
      const characters = child.split('').map((char, charIndex) => (
        <animated.span
          key={charIndex}
          style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: charIndex * 150 + delay })}
        >
          {char}
        </animated.span>
      ));
      return characters;
    } else if (isValidElement(child)) {
      return cloneElement(child, {
        children: animateJSX(child.props.children, delay),
      });
    }
    return child;
  });
};

export const AnimatedTitle = ({ children }) => {
  const animatedChildren = animateJSX(children, 0);

  return <div className={`${styles.title} ${cinzel.variable}`}>{animatedChildren}</div>;
};
