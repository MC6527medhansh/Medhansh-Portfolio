'use client';

export default function HTTPSServerProject() {
  return (
    <div className="h-[300px] bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between p-4">
      {/* Project Title */}
      <h3 className="text-xl font-bold tracking-tight text-white mb-4">
        HTTPS Server Implementation
      </h3>

      {/* Skills Section */}
      <div className="flex flex-wrap gap-2 mb-4">
        {['Node.js', 'Express', 'SSL/TLS', 'REST API'].map((skill) => (
          <span
            key={skill}
            className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Source Buttons */}
      <div className="flex gap-4">
        {/* <a
          href="https://your-live-project-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
        >
          Website
        </a> */}
        <a
          href="https://github.com/your-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
        >
          Source
        </a>
      </div>
    </div>
  );
}
