import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'

export default function EmployeeAttritionProject() {
  const chartRef = useRef()

  useFrame((state, delta) => {
    chartRef.current.rotation.y += delta * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={chartRef}>
        {/* Simple bar chart representation */}
        <mesh position={[-1, 0.5, 0]}>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial color="#EA4335" />
        </mesh>
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.5, 1.5, 0.5]} />
          <meshStandardMaterial color="#FBBC05" />
        </mesh>
        <mesh position={[1, 1, 0]}>
          <boxGeometry args={[0.5, 2, 0.5]} />
          <meshStandardMaterial color="#34A853" />
        </mesh>
        <Text position={[0, 2, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
          Employee Attrition Prediction
        </Text>
        <Text position={[0, -2, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle" maxWidth={2.5}>
          KNN model with 82.11% accuracy
        </Text>
      </group>
    </Float>
  )
}

