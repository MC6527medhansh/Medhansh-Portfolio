import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'

export default function VisualCognitionLabExperience() {
  const labRef = useRef()

  useFrame((state, delta) => {
    labRef.current.rotation.y += delta * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={labRef}>
        {/* Simple lab equipment representation */}
        <mesh position={[-1, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
          <meshStandardMaterial color="#EA4335" />
        </mesh>
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#4285F4" />
        </mesh>
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#FBBC05" />
        </mesh>
        <Text position={[0, 2, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
          UBC Visual Cognition Lab
        </Text>
        <Text position={[0, 1.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
          Data Science Co-Pilot
        </Text>
        <Text position={[0, -2, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle" maxWidth={2.5}>
          Analyzed experimental datasets for cognitive research
        </Text>
      </group>
    </Float>
  )
}

