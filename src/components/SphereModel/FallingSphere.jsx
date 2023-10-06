'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useSpring, animated } from 'react-spring';

import { Sphere } from './Sphere';

import styles from '../PhoneModel/PhoneModel.module.css';

export const SphereModel = () => {
  return (
    <div /* className={styles.sphere__container} */>
      <Canvas>
        <ambientLight intensity={0.1} />
        <Sphere />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

/* import React from 'react';

import { useSpring, animated } from 'react-spring';
import { Sphere } from './Sphere';

export function AnimatedSphere(props) {
  const springProps = useSpring({
    from: { position: [0, -5, 0] }, // Starting position
    to: { position: [0, 0, 0] }, // Ending position
    config: {
      duration: 3000, // Adjust the fall duration
      easing: 'easeInOutCubic', // Adjust the easing function
    },
  });

  return (
    <animated.div style={springProps}>
      <div>
        <Sphere />
      </div>
    </animated.div>
  );
} */

/* import React, { useRef, useLayoutEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const FallingSphere = () => {
  const sphereRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const { nodes, materials } = useGLTF('/scene.gltf'); // Replace with the actual path to your sphere model

  const sphereMaterial = materials && materials[0]; // Assuming materials is an array

  useLayoutEffect(() => {
    // Animate the sphere falling
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(sphereRef.current.position, {
      y: -5, // Adjust the fall distance
      duration: 3, // Adjust the fall duration
      ease: 'power2.in', // Adjust the easing function
      scrollTrigger: {
        trigger: '#phone-model', // Replace with the trigger element ID (where the sphere falls from)
        start: 'center center', // Adjust the scroll trigger start position
        end: '+=500', // Adjust when the animation ends
        scrub: 1, // Adjust the scrubbing speed
        onToggle: (self) => {
          if (self.isActive) {
            // This code block runs when the sphere animation starts
            setIsVisible(true);
          } else {
            // This code block runs when the sphere animation ends
            setIsVisible(false);
          }
        },
      },
    });
  }, []); // Empty dependency array to run the effect once

  return (
    <group visible={isVisible}>
      <mesh ref={sphereRef} material={sphereMaterial}>
        <bufferGeometry attach="geometry" {...nodes.geometry} />
      </mesh>
    </group>
  );
}; */
