import { useGLTF } from '@react-three/drei';
import { DissolveMaterial } from '@/components/SphereModel/DissolveMaterial';

export function BrandButton(props) {
  const { nodes, materials } = useGLTF('/brandButton-transformed.glb');
  return (
    <group {...props} dispose={null} scale={31} rotation={[1.6, 0, 0.01]}>
      <mesh geometry={nodes.Curve.geometry} material={materials.SVGMat} scale={4.676}>
        {' '}
        <DissolveMaterial
          baseMaterial={materials.SVGMat}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
          color="#7f532f"
        />
      </mesh>
      <mesh geometry={nodes.Curve002.geometry} material={materials['Material.002']} scale={4.963}>
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

useGLTF.preload('/brandButton-transformed.glb');
