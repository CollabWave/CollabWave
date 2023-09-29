'use client';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Model } from '@/components/phoneModel/Phone';

import styles from './PhoneModel.module.css';

export const PhoneModel = () => {
  return (
    <div className={styles.model__container} id="phone-model">
      <Canvas style={{pointerEvents: "none"}} >
        <ambientLight intensity={0.1} />
        <Model />
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
