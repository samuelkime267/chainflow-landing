/* eslint-disable */

import * as THREE from "three";
import React, { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

export default function useControl(
  shaderMaterialRef: React.RefObject<THREE.ShaderMaterial>
) {
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
      // value: "#e855ff",
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uPriColor.value = new THREE.Color(
          value
        );
      },
    },
    uSecColor: {
      value: "#236cff",
      // value: "#e855ff",
      onChange: (value) => {
        if (!shaderMaterialRef.current) return;
        shaderMaterialRef.current.uniforms.uSecColor.value = new THREE.Color(
          value
        );
      },
    },
    uTerColor: {
      value: "#002462",
      // value: "#6e0bf8",
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

  return uniforms;
}
