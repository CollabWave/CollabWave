'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import { Sphere } from './Sphere';

import styles from '../PhoneModel/PhoneModel.module.css';

export const SphereModel = (props) => {
  return (
    <div className={styles.sphere__container}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <Sphere dissolve={props.dissolve} dissolveVisible={props.dissolveVisible} onFadeOut={props.onFadeOut} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};
