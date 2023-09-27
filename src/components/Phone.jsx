import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import * as THREE from 'three';

export function Model(props) {
  const { nodes, materials } = useGLTF("/phone-transformed.glb");

  // Find the phone screen mesh (you may need to adjust this depending on your model structure)
  const phoneScreenMesh = nodes.Cube001; // Assuming Cube001 is the phone screen

  // Load the texture for the phone screen
  const screenTexture = useLoader(
    TextureLoader,
    "/4e30b4e4-df96-4d17-9330-f8fa1a34932b.jpg"
  );

  

  // Create a material for the phone screen
  const screenMaterial = new THREE.MeshBasicMaterial({ map: screenTexture });

  // Assign the material to the phone screen mesh
  phoneScreenMesh.material = screenMaterial;

  phoneScreenMesh.geometry.attributes.uv.array.forEach((uv, index) => {
    if (index % 2 === 1) {
      // Invert the V (vertical) coordinate to flip the texture vertically
      phoneScreenMesh.geometry.attributes.uv.array[index] = 1 - uv;
    }})

  return (
    <group {...props} dispose={null} scale={0.4}>
      <mesh
        geometry={nodes.LENSE_1002.geometry}
        material={materials.PaletteMaterial004}
        position={[1.914, 5.185, -0.435]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <primitive object={phoneScreenMesh} />
      <mesh
        geometry={nodes.Cube001_1.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.Cube001_2.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        geometry={nodes.Cube001_3.geometry}
        material={materials.PaletteMaterial003}
      />
    </group>
  );
}
