/* eslint-disable */

import { useRef } from "react";
import fragmentShader from "../shader/fragment.glsl";
import vertexShader from "../shader/vertex.glsl";
import useControl from "../hooks/useControl";
import { ShaderMaterial } from "three";
import { OrthographicCamera } from "@react-three/drei";

const Experience = () => {
  const width = 2;
  const height = 1;
  const shaderMaterialRef = useRef<ShaderMaterial>(null);
  const uniforms = useControl(shaderMaterialRef);

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 1]}
        top={height / 2}
        bottom={-height / 2}
        left={-width / 2}
        right={width / 2}
        near={0.1}
        far={1}
      />

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
