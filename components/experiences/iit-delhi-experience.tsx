'use client';
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";
import ExperienceLogo from "../ui/ExperienceLogo";

export default function IITDelhiExperience() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-black">
      {/* Logo - removed wrapper div and simplified */}
      <ExperienceLogo
        src="/assets/logos/Indian Institute of Technology Delhi logo.jpeg"
        alt="IIT Delhi Logo"
        size={100}
      />
      
      {/* Canvas */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Experience />
      </Canvas>
      
      {/* Text overlay - moved from Experience component */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          IIT Delhi
        </h1>
        <p className="mt-2 text-lg text-gray-200 drop-shadow-lg">
          Research Intern
        </p>
        <p className="mt-2 text-sm text-gray-300 max-w-[300px] mx-auto drop-shadow-lg">
          GNN for Material Property Prediction
        </p>
      </div>
    </div>
  );
}

function Experience() {
  const graphRef = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (graphRef.current) {
      graphRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={graphRef}>
        {/* Graph nodes and connections remain the same */}
        {[...Array(10)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.random() * 3 - 1.5,
              Math.random() * 3 - 1.5,
              Math.random() * 3 - 1.5,
            ]}
          >
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#FF5733" : "#C70039"} />
          </mesh>
        ))}
        {/* Connections remain the same */}
        {[...Array(15)].map((_, i) => {
          const start = new THREE.Vector3(
            Math.random() * 3 - 1.5,
            Math.random() * 3 - 1.5,
            Math.random() * 3 - 1.5
          );
          const end = new THREE.Vector3(
            Math.random() * 3 - 1.5,
            Math.random() * 3 - 1.5,
            Math.random() * 3 - 1.5
          );
          return (
            <line key={i}>
              <bufferGeometry attach="geometry">
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([...start.toArray(), ...end.toArray()])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial attach="material" color="#FFC300" />
            </line>
          );
        })}
      </group>
    </Float>
  );
}