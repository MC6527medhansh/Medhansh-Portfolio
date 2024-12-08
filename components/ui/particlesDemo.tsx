"use client";

import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-black">
      <div className="z-10 text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          IIT Delhi
        </h1>
        <p className="mt-2 text-lg text-gray-200 drop-shadow-lg">
          Research Intern
        </p>
        <p className="mt-2 text-sm text-gray-300 max-w-[300px] mx-auto drop-shadow-lg">
          Worked on Graph Neural Networks (GNNs) for material property
          prediction.
        </p>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={1000} // Number of particles
        staticity={10}
        ease={0.1}
        size={1}
        colors={["#FF5733", "#C70039", "#FFC300", "#4285F4"]} // Four colors
        vx={0.1}
        vy={0.1}
      />
    </div>
  );
}
