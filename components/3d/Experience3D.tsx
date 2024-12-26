import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Experience3DProps {
  position: [number, number, number]; // Array with 3 numbers
  title: string;
  role: string;
  description: string;
}

export default function Experience3D({ position, title, role, description }: Experience3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {/* Your 3D content here */}
    </mesh>
  );
}
