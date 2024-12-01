/* eslint-disable */

import { useRef } from "react";
import fragmentShader from "../shader/fragment.glsl";
import vertexShader from "../shader/vertex.glsl";
import useControl from "../hooks/useControl";
import { ShaderMaterial } from "three";
// import { OrbitControls } from "@react-three/drei";

type experienceProps = {
  width: number;
  height: number;
};

const Experience = ({ width, height }: experienceProps) => {
  const shaderMaterialRef = useRef<ShaderMaterial>(null);
  const uniforms = useControl(shaderMaterialRef);

  return (
    <>
      {/* <OrbitControls /> */}
      <color attach="background" args={["#000216"]} />
      <mesh>
        <shaderMaterial
          ref={shaderMaterialRef}
          uniforms={uniforms}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          side={2}
        />
        <planeGeometry args={[width, height, 50, 50]} />
      </mesh>
    </>
  );
};

export default Experience;
