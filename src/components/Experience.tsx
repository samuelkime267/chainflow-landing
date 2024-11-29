/* eslint-disable */

import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import fragmentShader from "../shader/fragment.glsl";
import vertexShader from "../shader/vertex.glsl";
import { ShaderMaterial } from "three";
import { useControls } from "leva";

const Experience = () => {
  const width = 2;
  const height = 1;
  const shaderMaterialRef = useRef<ShaderMaterial>(null);
  useFrame(() => {
    if (!shaderMaterialRef.current) return;
    shaderMaterialRef.current.uniforms.uTime.value += 0.01;
  });

  const {
    uDistortion,
    uSpeed,
    uRep,
    uPriColor,
    uSecColor,
    uTerColor,
    uBgColor,
  }: any = useControls("shader", {
    uDistortion: {
      value: 5,
      min: 0,
      max: 10,
      step: 0.01,
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uDistortion.value = value;
      },
    },
    uSpeed: {
      value: 0.25,
      min: 0,
      max: 10,
      step: 0.01,
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uSpeed.value = value;
      },
    },
    uRep: {
      value: 5,
      min: 0,
      max: 10,
      step: 0.01,
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uRep.value = value;
      },
    },
    uPriColor: {
      value: "#dfeaff",
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uPriColor.value = new THREE.Color(
          value
        );
      },
    },
    uSecColor: {
      value: "#236cff",
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uSecColor.value = new THREE.Color(
          value
        );
      },
    },
    uTerColor: {
      value: "#002462",
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uTerColor.value = new THREE.Color(
          value
        );
      },
    },
    uBgColor: {
      value: "#000216",
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uBgColor.value = new THREE.Color(
          value
        );
      },
    },
  });

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uDisplacement: { value: 0 },
      uDistortion: { value: uDistortion },
      uSpeed: { value: uSpeed },
      uRep: { value: uRep },
      uPriColor: { value: new THREE.Color(uPriColor) },
      uSecColor: { value: new THREE.Color(uSecColor) },
      uTerColor: { value: new THREE.Color(uTerColor) },
      uBgColor: { value: new THREE.Color(uBgColor) },
    };
  }, []);

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
        />
        <planeGeometry args={[width, height, 30, 30]} />
      </mesh>
    </>
  );
};

export default Experience;
