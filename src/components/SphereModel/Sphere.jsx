import { useGLTF } from '@react-three/drei';

import { DissolveMaterial } from './DissolveMaterial';

export function Sphere(props) {

  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null} scale={3}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.initialShadingGroup} rotation={[Math.PI / 2, 0, 0]} >
        <DissolveMaterial
        dissolve={props.dissolve}
          baseMaterial={materials.initialShadingGroup}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
          color="#7f532f"
        />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
