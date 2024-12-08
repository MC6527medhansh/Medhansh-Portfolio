"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  colors?: string[]; // Multiple colors
  vx?: number;
  vy?: number;
}

const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  colors = ["#FF5733", "#C70039", "#FFC300", "#4285F4"], // Default to 4 colors
  vx = 0,
  vy = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const rafID = useRef<number | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();

    window.addEventListener("resize", initCanvas);

    return () => {
      if (rafID.current != null) {
        window.cancelAnimationFrame(rafID.current);
      }
      window.removeEventListener("resize", initCanvas);
    };
  }, [refresh]);

  const initCanvas = () => {
    if (canvasRef.current && context.current) {
      circles.current.length = 0;
      canvasSize.current.w = canvasRef.current.offsetWidth;
      canvasSize.current.h = canvasRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      context.current.scale(dpr, dpr);
      createParticles();
    }
  };

  const createParticles = () => {
    for (let i = 0; i < quantity; i++) {
      const x = Math.random() * canvasSize.current.w;
      const y = Math.random() * canvasSize.current.h;
      const dx = (Math.random() - 0.5) * 0.5; // Lower speed
      const dy = (Math.random() - 0.5) * 0.5;
      const radius = size + Math.random() * size;
      const color = colors[Math.floor(Math.random() * colors.length)]; // Randomly pick a color
      circles.current.push({ x, y, dx, dy, radius, color });
    }
  };

  const drawParticles = () => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
      circles.current.forEach((particle) => {
        context.current.beginPath();
        context.current.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        context.current.fillStyle = particle.color;
        context.current.fill();
      });
    }
  };

  const animate = () => {
    drawParticles();
    circles.current.forEach((particle) => {
      particle.x += particle.dx + vx;
      particle.y += particle.dy + vy;

      // Bounce particles off the canvas edges
      if (
        particle.x + particle.radius > canvasSize.current.w ||
        particle.x - particle.radius < 0
      ) {
        particle.dx = -particle.dx;
      }
      if (
        particle.y + particle.radius > canvasSize.current.h ||
        particle.y - particle.radius < 0
      ) {
        particle.dy = -particle.dy;
      }
    });

    rafID.current = window.requestAnimationFrame(animate);
  };

  return (
    <div className={cn("pointer-events-none", className)} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default Particles;
