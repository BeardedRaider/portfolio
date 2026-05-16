// src/sections/TechStack.tsx
import { Atom, Code2, Wind, Server, Boxes, Database } from "lucide-react";
import { useInView } from "../hooks/useInView";

const technologies = [
  { name: "React", icon: <Atom size={40} /> },
  { name: "TypeScript", icon: <Code2 size={40} /> },
  { name: "Tailwind CSS", icon: <Wind size={40} /> },
  { name: "Node.js", icon: <Server size={40} /> },
  { name: "Express", icon: <Boxes size={40} /> },
  { name: "MongoDB", icon: <Database size={40} /> },
];

export default function TechStack() {
  const t1 = useInView();
  const t2 = useInView();
  const t3 = useInView();
  const t4 = useInView();
  const t5 = useInView();
  const t6 = useInView();

  const triggers = [t1, t2, t3, t4, t5, t6];

  return (
    <section id="tech" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
        {technologies.map((tech, i) => (
          <div
            key={tech.name}
            ref={triggers[i].ref}
            className={`${
              triggers[i].isVisible ? "tech-visible" : "tech-hidden"
            } flex flex-col items-center gap-2 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}
            style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
          >
            <div className="text-4xl text-purple-600">{tech.icon}</div>
            <p className="text-gray-700 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
