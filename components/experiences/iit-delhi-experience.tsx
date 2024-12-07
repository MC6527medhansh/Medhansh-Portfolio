import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function IITDelhiExperience() {
  return (
    <Experience />
  )
}

function Experience() {
  const graphRef = useRef()

  useFrame((state, delta) => {
    graphRef.current.rotation.y += delta * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={graphRef}>
        {/* Create a simple graph structure */}
        {[...Array(10)].map((_, i) => (
          <mesh key={i} position={[Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#4285F4" />
          </mesh>
        ))}
        {/* Add lines to connect the nodes */}
        {[...Array(15)].map((_, i) => {
          const start = new THREE.Vector3(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2)
          const end = new THREE.Vector3(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2)
          return (
            <line key={i}>
              <bufferGeometry attach="geometry">
                <bufferAttribute
                  attachObject={['attributes', 'position']}
                  count={2}
                  array={new Float32Array([...start.toArray(), ...end.toArray()])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial attach="material" color="#4285F4" linewidth={1} />
            </line>
          )
        })}
        <Text position={[0, 2, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
          IIT Delhi
        </Text>
        <Text position={[0, 1.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
          Research Intern
        </Text>
        <Text position={[0, -2, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle" maxWidth={2.5}>
          Graph Neural Network for Material Property Prediction
        </Text>
      </group>
    </Float>
  )
}

