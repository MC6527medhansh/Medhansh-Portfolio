'use client';
import ExperienceLogo from '../ui/ExperienceLogo';

export default function CataractAIProject() {
  return (
    <div
      className="h-[300px] rounded-lg shadow-lg flex flex-col justify-between p-4 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/cataract_detection_image.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay to reduce brightness */}
      <div
        className="absolute inset-0 bg-black opacity-30 rounded-lg"
        style={{ zIndex: 1 }}
      ></div>

      {/* Project Content */}
      <div className="relative z-10">
        {/* Project Title */}
        <h3
          className="text-xl font-bold tracking-tight text-black mb-4 px-2 py-1 rounded-md"
          style={{
            backgroundColor: 'white',
            display: 'inline-block',
          }}
        >
          Cataract Detection AI
        </h3>

        {/* Skills Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {['Python', 'Flask', 'Next.js', 'Docker', 'PyTorch'].map((skill) => (
            <span
              key={skill}
              className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Source Buttons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/MC6527medhansh/Cataract-Detection-System"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
