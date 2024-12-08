'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'

export default function UBCSailbotExperience() {
  return (
    <Experience />
  )
}
function Experience() {
  const boatRef = useRef<import("three").Group>(null)
  useFrame((state, delta) => {
    if (boatRef.current) {
      boatRef.current.rotation.y += delta * 0.2
      boatRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={boatRef}>
        {/* Simple sailboat model */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[2, 0.5, 1]} />
          <meshStandardMaterial color="#34A853" />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[0.5, 2, 32]} />
          <meshStandardMaterial color="#FBBC05" />
        </mesh>
        <Text position={[0, 2, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
          UBC Sailbot
        </Text>
        <Text position={[0, 1.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
          Pathfinding Software
        </Text>
        <Text position={[0, -2, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle" maxWidth={2.5}>
          Developed algorithm for Polaris sailboat
        </Text>
      </group>
    </Float>
  )
}

