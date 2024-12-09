"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";
import ExperienceLogo from "../ui/ExperienceLogo";

export default function IITDelhiExperience() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="absolute top-4">
        <ExperienceLogo
          src="/assets/logos/Screenshot 2024-12-08 at 12.51.07 PM.png"
          alt="IIT Delhi Logo"
        />
      </div>

      {/* 3D Canvas */}
      <div className="w-full h-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Experience />
        </Canvas>
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
        {/* Dynamic graph nodes */}
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
            <meshStandardMaterial
              color={i % 2 === 0 ? "#FF5733" : "#C70039"}
            />
          </mesh>
        ))}
        {/* Connections */}
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
        {/* Labels */}
        <Text
          position={[0, 2, 0]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          IIT Delhi
        </Text>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Research Intern
        </Text>
        <Text
          position={[0, -2, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          GNN for Material Property Prediction
        </Text>
      </group>
    </Float>
  );
}
