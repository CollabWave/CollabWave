'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import { BrandButton } from './BrandButton';

import styles from '../../PhoneModel/PhoneModel.module.css';

export const BrandButtonModel = props => {
  return (
    <div className={styles.button__container}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <BrandButton dissolveVisible={props.dissolveVisible} onFadeOut={props.onFadeOut} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};
