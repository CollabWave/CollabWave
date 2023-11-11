import React, { useLayoutEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Model(props) {
  const { nodes, materials } = useGLTF('/phone-transformed.glb');
  const phoneScreenMesh = nodes.Cube001;

  const screenTexture = new TextureLoader().load(
    '/4e30b4e4-df96-4d17-9330-f8fa1a34932b.jpg',
    (loadedTexture) => {
      loadedTexture.flipY = false; 
      const screenMaterial = new THREE.MeshBasicMaterial({
        map: loadedTexture,
        color: 0x999999,
        flipY: false,
      });
  
      phoneScreenMesh.material = screenMaterial;
  
      phoneScreenMesh.geometry = phoneScreenMesh.geometry.clone();

      phoneScreenMesh.geometry.attributes.uv.array = phoneScreenMesh.geometry.attributes.uv.array.map(
        (uv, index) => (index % 2 === 1 ? 1 - uv : uv)
      );
      phoneScreenMesh.geometry.attributes.uv.needsUpdate = true;
    }
  );

  gsap.registerPlugin(ScrollTrigger);

  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#phone-model',
        start: 'top top',
        endTrigger: '#mobileStop',
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
    });

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
