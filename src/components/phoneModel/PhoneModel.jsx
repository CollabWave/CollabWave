'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import { Model } from '@/components/PhoneModel/Phone';

import styles from './PhoneModel.module.css';

export const PhoneModel = ({ setStartSphereFalling }) => {
  return (
    <div className={styles.model__container} id="phone-model">
      <Canvas>
        <ambientLight intensity={0.1} />
        <Model setStartSphereFalling={setStartSphereFalling} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};
