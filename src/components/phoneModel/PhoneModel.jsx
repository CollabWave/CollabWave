'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useSpring, animated } from 'react-spring';
import { Model } from '@/components/PhoneModel/Phone';
import { Sphere } from '../SphereModel/Sphere';
//import { FallingSphere } from '../SphereModel/FallingSphere';
//import { AnimatedSphere } from '../SphereModel/FallingSphere';

import styles from './PhoneModel.module.css';

export const PhoneModel = ({ startSphereFalling, setStartSphereFalling }) => {
  /* const [startSphereFalling, setStartSphereFalling] = useState(false); */

  /* const { positionY } = useSpring({
    positionY: startSphereFalling ? -5 : 0, // Adjust the fall distance
    config: { duration: 3000 }, // Adjust the fall duration
  }); */

  return (
    <div className={styles.model__container} id="phone-model">
      <Canvas style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={0.1} />
        <Model setStartSphereFalling={setStartSphereFalling} />
        {/* {startSphereFalling && (
          <animated.div position={[0, positionY, 0]}>
            <Sphere />
          </animated.div>
        )} */}

        <Environment preset="night" />
        {/* <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
        /> */}
      </Canvas>
    </div>
  );
};
