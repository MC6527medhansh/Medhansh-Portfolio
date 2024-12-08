'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function FruitNinjaProject() {
  const fruitRef = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if (fruitRef.current) {
      (fruitRef.current as any).rotation.x += delta * 0.5;
      (fruitRef.current as any).rotation.y += delta * 0.2;
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={fruitRef}>
        {/* Fruit representations */}
        <mesh position={[-1, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#EA4335" />
        </mesh>
        <mesh position={[1, 0, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#FBBC05" />
        </mesh>
        {/* Sword representation */}
        <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.1, 2, 0.1]} />
          <meshStandardMaterial color="#4285F4" />
        </mesh>
        <Text position={[0, 2, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
          Gesture-Controlled Fruit Ninja
        </Text>
        <Text position={[0, -2, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle" maxWidth={2.5}>
          Using Mediapipe and Pygame
        </Text>
      </group>
    </Float>
  )
}

