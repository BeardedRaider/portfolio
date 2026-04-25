// src/sections/Projects.tsx

import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        <ProjectCard
          title="Campus Safety App"
          description="A full PWA with geolocation, camera API, admin dashboard, and real-time reporting."
          tags={["React", "Tailwind", "Vite", "PWA"]}
        />

        <ProjectCard
          title="Paisley Highland Games Website"
          description="A modern responsive website built for a real client with clean UI and fast performance."
          tags={["React", "Tailwind", "UI/UX"]}
        />

        <ProjectCard
          title="CSS Framework Dissertation"
          description="A full research project comparing modern CSS frameworks with real-world testing."
          tags={["Research", "CSS", "UI/UX"]}
        />

        <ProjectCard
          title="Authentication System"
          description="A complete login/register system with admin roles, protected routes, and CRUD operations."
          tags={["React", "Node", "Auth"]}
        />
      </div>
    </section>
  );
}
