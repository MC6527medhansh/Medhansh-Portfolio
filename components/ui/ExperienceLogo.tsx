'use client';

import Image from 'next/image';

interface ExperienceLogoProps {
  src: string;
  alt: string;
  size?: number;
}

export default function ExperienceLogo({ src, alt, size = 50 }: ExperienceLogoProps) {
  return (
    <div className="absolute top-4 right-4 z-20">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full bg-white p-1"
        priority 
      />
    </div>
  );
}
