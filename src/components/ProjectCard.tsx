// src/components/ProjectCard.tsx

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string; // optional for now
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
      {/* Image placeholder */}
      <div className="h-40 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center text-gray-600">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="opacity-70">Project Screenshot</span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Tags */}
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

        {/* Button */}
        <button className="px-6 py-2 bg-white rounded-full shadow hover:shadow-md transition-all text-gray-800 font-medium">
          View Project
        </button>
      </div>
    </div>
  );
}
