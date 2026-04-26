// src/components/ProjectCard.tsx
// Reusable project card with screenshot, tags, and links.

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
      {/* Screenshot */}
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="opacity-60">No Image</span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              className="px-6 py-2 bg-white rounded-full shadow hover:shadow-md transition-all text-gray-800 font-medium"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              className="px-6 py-2 bg-white rounded-full shadow hover:shadow-md transition-all text-gray-800 font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
