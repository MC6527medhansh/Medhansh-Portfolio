'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import BrainModel from '../ui/BrainModel';
import ExperienceLogo from '../ui/ExperienceLogo';

export default function VisualCognitionLabExperience() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden bg-black">
      <ExperienceLogo 
        src="/assets/logos/Screenshot 2024-12-08 at 12.51.37 PM.png" 
        alt="UBC Visual Cognition Lab Logo" 
      />
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <BrainModel />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          UBC Visual Cognition Lab
        </h1>
        <p className="mt-2 text-lg text-gray-200 drop-shadow-lg">
          Data Science Co-Pilot
        </p>
        <p className="mt-2 text-sm text-gray-300 max-w-[300px] mx-auto drop-shadow-lg">
          Analyzed experimental datasets for cognitive research
        </p>
      </div>
    </div>
  );
}

