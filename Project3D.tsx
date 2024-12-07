import { Text, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Project3D({ position, title, description }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1
    meshRef.current.rotation.y += delta * 0.15
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#34A853" />
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          {title}
        </Text>
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          {description}
        </Text>
      </mesh>
    </Float>
  )
}

