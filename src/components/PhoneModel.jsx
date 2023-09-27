"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/Phone";

export const PhoneModel = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        backgroundColor: "transparent",
        zIndex: "1",
      }}
    >
        <Canvas>
            <ambientLight intensity={0.75}/>
            <Model />
            <OrbitControls />
        </Canvas>
    </div>
  );
};
