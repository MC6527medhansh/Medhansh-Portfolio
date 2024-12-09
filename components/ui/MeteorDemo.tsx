'use client';

import Meteors from "@/components/ui/meteors";
import {DockDemo} from "@/components/ui/dockDemo";

export default function MeteorDemo() {
  return (
    <div className="relative h-[500px] w-full flex flex-col items-center justify-center overflow-hidden bg-[#003366]">
      {/* Meteors Background */}
      <Meteors number={50} />

      {/* Hero Content */}
      <div className="absolute z-10 text-center">
        <h1 className="text-5xl font-bold text-white sm:text-6xl">
          Medhansh Choubey
        </h1>
        <p className="mt-4 text-lg text-white sm:text-xl">
          Statistics Student | Data Science Enthusiast | Software Developer
        </p>

        {/* Replace Buttons with DockDemo */}
        <div className="mt-8">
          <DockDemo />
        </div>
      </div>
    </div>
  );
}
