'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import { BloggerButton } from './BloggerButton';

import styles from '../../PhoneModel/PhoneModel.module.css';

export const BloggerButtonModel = props => {
  
  return (
    <div className={styles.button__container}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <BloggerButton dissolveVisible={props.dissolveVisible} onFadeOut={props.onFadeOut} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};
