// src/sections/TechStack.tsx

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "Node.js", icon: "🟩" },
  { name: "Express", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="text-4xl">{tech.icon}</div>
            <p className="text-gray-700 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
