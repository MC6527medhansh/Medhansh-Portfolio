"use client";

import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function BrainModel() {
  const brainRef = useRef<THREE.Group>(null);
  const gltf = useLoader(GLTFLoader, '/assets/models/brain_in_a_jar.glb');

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.color = new THREE.Color('#EA4335');
        }
      });
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (brainRef.current) {
      brainRef.current.rotation.y += delta * 0.2;
      brainRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <primitive 
        ref={brainRef} 
        object={gltf.scene} 
        scale={0.3} 
        position={[0, 0, -3]} 
      />
    </Float>
  );
} 