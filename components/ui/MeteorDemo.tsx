'use client';

import Meteors from "@/components/ui/meteors";

export default function MeteorDemo() {
  return (
    <div className="relative h-[500px] w-full flex flex-col items-center justify-center overflow-hidden bg-[#003366]">
      {/* Meteors Background */}
      <Meteors number={50} />
      {/* Hero Content */}
      <div className="absolute z-10 text-center">
        <h1 className="text-5xl font-bold text-white-900 text-white sm:text-6xl">
          Medhansh Choubey
        </h1>
        <p className="mt-4 text-lg text-white text-white-300 sm:text-xl">
          Statistics Student | Data Science Enthusiast | Software Developer
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-black border hover:bg-grey">
            <a href="#contact">Contact Me</a>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black border bg-black rounded hover:bg-grey">
            <a href="#projects">View Projects</a>
          </button>
        </div>
      </div>
    </div>
  );
}