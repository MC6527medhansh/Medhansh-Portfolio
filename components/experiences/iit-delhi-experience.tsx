'use client';
import { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import ExperienceLogo from "../ui/ExperienceLogo";

// Extend all necessary Three.js elements
extend({
  AmbientLight: THREE.AmbientLight,
  DirectionalLight: THREE.DirectionalLight,
  Mesh: THREE.Mesh,
  SphereGeometry: THREE.SphereGeometry,
  MeshStandardMaterial: THREE.MeshStandardMaterial,
  BufferGeometry: THREE.BufferGeometry,
  LineBasicMaterial: THREE.LineBasicMaterial,
  Line: THREE.Line
});

export default function IITDelhiExperience() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-black">
      <ExperienceLogo
        src="/assets/logos/Indian Institute of Technology Delhi logo.jpeg"
        alt="IIT Delhi Logo"
        size={100}
      />
      
      <Canvas>
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Experience />
      </Canvas>
      
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

// Define type for the mesh properties
interface MeshProps {
  position: [number, number, number];
  color: string;
}

function Experience() {
  const graphRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (graphRef.current) {
      graphRef.current.rotation.y += delta * 0.2;
    }
  });

  // Create random positions once instead of every render
  const nodePositions = Array(10).fill(0).map(() => [
    Math.random() * 3 - 1.5,
    Math.random() * 3 - 1.5,
    Math.random() * 3 - 1.5
  ] as [number, number, number]);

  const connections = Array(15).fill(0).map(() => ({
    start: new THREE.Vector3(
      Math.random() * 3 - 1.5,
      Math.random() * 3 - 1.5,
      Math.random() * 3 - 1.5
    ),
    end: new THREE.Vector3(
      Math.random() * 3 - 1.5,
      Math.random() * 3 - 1.5,
      Math.random() * 3 - 1.5
    )
  }));

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        {/* @ts-ignore */}
      <group ref={graphRef}>
        {/* Graph nodes */}
        {nodePositions.map((position, i) => (
          // @ts-ignore
          <mesh key={i} position={position}>
            {/* @ts-ignore */}
            <sphereGeometry args={[0.15, 16, 16]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color={i % 2 === 0 ? "#FF5733" : "#C70039"} />
            {/* @ts-ignore */}
          </mesh>
        ))}
        
        {/* Connections */}
        {connections.map((connection, i) => (
          // @ts-ignore
          <line key={i}>
            {/* @ts-ignore */}
            <bufferGeometry attach="geometry">
              {/* @ts-ignore */}
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  ...connection.start.toArray(),
                  ...connection.end.toArray()
                ])}
                itemSize={3}
              />
              {/* @ts-ignore */}
            </bufferGeometry>
            {/* @ts-ignore */}
            <lineBasicMaterial attach="material" color="#FFC300" />
          </line>
        ))}
        {/* @ts-ignore */}
      </group>
    </Float>
  );
}