'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import BoatModel from '../ui/BoatModel';
import ExperienceLogo from '../ui/ExperienceLogo';

export default function UBCSailbotExperience() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden bg-black">
      <ExperienceLogo 
        src="/assets/logos/Screenshot 2024-12-08 at 12.49.45 PM.png" 
        alt="UBC Sailbot Logo" 
      />
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <BoatModel />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          UBC Sailbot
        </h1>
        <p className="mt-2 text-lg text-gray-200 drop-shadow-lg">
          Pathfinding Software Developer
        </p>
        <p className="mt-2 text-sm text-gray-300 max-w-[300px] mx-auto drop-shadow-lg">
          Developed Polaris Heading Algorithm
        </p>
      </div>
    </div>
  );
}
