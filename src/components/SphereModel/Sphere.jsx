import React, { useRef, useState, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei';

export function Sphere(props) {

  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null} scale={3}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.initialShadingGroup} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
