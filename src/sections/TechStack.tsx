// src/sections/TechStack.tsx
import { useEffect, useState, useRef } from "react";
import { Atom, Code2, Wind, Server, Boxes, Database } from "lucide-react";

const technologies = [
  { name: "React", icon: <Atom size={40} /> },
  { name: "TypeScript", icon: <Code2 size={40} /> },
  { name: "Tailwind CSS", icon: <Wind size={40} /> },
  { name: "Node.js", icon: <Server size={40} /> },
  { name: "Express", icon: <Boxes size={40} /> },
  { name: "MongoDB", icon: <Database size={40} /> },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [scrollingDownState, setScrollingDownState] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let lastTrigger = 0;

    function handleScroll() {
      const now = performance.now();
      if (now - lastTrigger < 80) return; // adjust speed here
      lastTrigger = now;

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.65;

      const scrollingDown = window.scrollY > lastScrollY.current;
      lastScrollY.current = window.scrollY;
      setScrollingDownState(scrollingDown);

      if (rect.top < triggerPoint && rect.bottom > 0) {
        if (scrollingDown) {
          setVisibleIndex((prev) =>
            prev < technologies.length ? prev + 1 : prev,
          );
        } else {
          setVisibleIndex((prev) => (prev > 0 ? prev - 1 : 0));
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="tech" className="py-24 px-6" ref={sectionRef}>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
        {technologies.map((tech, i) => {
          const delay = scrollingDownState
            ? 0.1 * (i + 1) // left → right
            : 0.1 * (technologies.length - i); // right → left

          return (
            <div
              key={tech.name}
              className={`${
                i < visibleIndex ? "tech-visible" : "tech-hidden"
              } flex flex-col items-center gap-2 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all`}
              style={{ transitionDelay: `${delay}s` }}
            >
              <div className="text-4xl text-purple-600">{tech.icon}</div>
              <p className="text-gray-700 font-medium">{tech.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
