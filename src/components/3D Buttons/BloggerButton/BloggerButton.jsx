import { useGLTF } from '@react-three/drei';
import { DissolveMaterial } from '@/components/SphereModel/DissolveMaterial';

export function BloggerButton(props) {
  const { nodes, materials } = useGLTF('/bloggerButton-transformed.glb');

  return (
    <group {...props} dispose={null} scale={15} rotation={[1.6, 0, 0.01]}>
      <mesh geometry={nodes.Curve.geometry} material={materials.SVGMat} scale={8.753}>
        <DissolveMaterial
          baseMaterial={materials.SVGMat}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
          color="#7f532f"
        />
      </mesh>
      <mesh geometry={nodes.Curve002.geometry} material={materials['Material.002']} scale={10.249}>
        <DissolveMaterial
          baseMaterial={materials['Material.002']}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
          color="#7f532f"
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/bloggerButton-transformed.glb');
