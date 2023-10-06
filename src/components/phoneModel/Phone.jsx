'use client';
import { useLayoutEffect } from 'react';

import * as THREE from 'three';
import gsap from 'gsap';

import { useGLTF } from '@react-three/drei';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Model(props) {
  const { nodes, materials } = useGLTF('/phone-transformed.glb');

  const phoneScreenMesh = nodes.Cube001;

  const screenTexture = useLoader(TextureLoader, '/4e30b4e4-df96-4d17-9330-f8fa1a34932b.jpg');

  const screenMaterial = new THREE.MeshBasicMaterial({ map: screenTexture, color: 0x999999 });

  phoneScreenMesh.material = screenMaterial;

  phoneScreenMesh.geometry.attributes.uv.array.forEach((uv, index) => {
    if (index % 2 === 1) {
      phoneScreenMesh.geometry.attributes.uv.array[index] = 1 - uv;
    }
  });

  gsap.registerPlugin(ScrollTrigger);

  let camera = useThree(state => state.camera);
  let scene = useThree(state => state.scene);

  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#phone-model',
        start: 'top top',
        endTrigger: '#about',
        end: 'top top',
        scrub: true,
        pin: true,
        onLeave: () => {
          props.setStartSphereFalling(true);
        },
        onEnterBack: () => {
          props.setStartSphereFalling(false);
        },
      },
    });

    t1.to(camera.position, { x: 2.7, z: 5 }, 'key1').to(scene.rotation, {
      x: 2.1,
      y: 0.45,
      z: 0,
    }); /* to(scene.rotation, {
      y: 0.72,
      x: 0.75,
      z: -0.1,
    }); */
    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <group {...props} dispose={null} scale={0.4} rotation={[-0.55, -0.4, -0.48]}>
      <mesh
        geometry={nodes.LENSE_1002.geometry}
        material={materials.PaletteMaterial004}
        position={[1.914, 5.185, -0.435]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <primitive object={phoneScreenMesh} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Cube001_2.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Cube001_3.geometry} material={materials.PaletteMaterial003} />
    </group>
  );
}
