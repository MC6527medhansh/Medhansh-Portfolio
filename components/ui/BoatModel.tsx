"use client";

import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function BoatModel() {
  const boatRef = useRef<THREE.Group>(null);
  const gltf = useLoader(GLTFLoader, '/assets/models/cloud_pirates_-_flying_boat_sdc.glb');

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.color = new THREE.Color('#2E86C1');
        }
      });
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (boatRef.current) {
      boatRef.current.rotation.y += delta * 0.2;
      boatRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <primitive 
        ref={boatRef} 
        object={gltf.scene} 
        scale={0.7} 
        position={[0, 12, -11]} 
      />
    </Float>
  );
}
