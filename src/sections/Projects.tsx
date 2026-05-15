// src/sections/Projects.tsx

import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        <ProjectCard
          title="Campus Safety App"
          description="A mobile-first PWA designed to improve student safety with real-time tracking, check-ins, emergency contacts, and geolocation features."
          tags={[
            "React",
            "TypeScript",
            "Tailwind",
            "PWA",
            "Camera API",
            "Geolocation",
          ]}
          image="/src/assets/projects/campus/hero-desktop.jpg"
          link="https://campus-safety-project.vercel.app"
          github="https://github.com/BeardedRaider/Campus-Safety-Project.git"
        />

        <ProjectCard
          title="Paisley Highland Games Web App"
          description="A complete React + Tailwind web application designed to manage event information, competition registration, volunteer applications, and results for the fictional Paisley Highland Games.
          Features include dynamic routing, mock API data, responsive UI, and a clean, modern design inspired by Scottish cultural heritage."
          tags={["React", "Tailwind", "React Router", "UX/UI", "Mock APIs"]}
          image="/src/assets/projects/highland/hero.jpeg"
          link="https://paisleyhighlandgames.netlify.app" // optional
          github="https://github.com/BeardedRaider/paisley-highland-games.git" // optional
        />

        <ProjectCard
          title="CSS Framework Dissertation"
          description="A full research project comparing modern CSS frameworks with real-world testing."
          tags={["Research", "CSS", "UI/UX"]}
        />

        <ProjectCard
          title="SweetShop Laravel Web Application"
          description="A full-stack Laravel application featuring authentication, role-based access, CRUD operations, product management, order tracking, and AWS deployment."
          tags={["Laravel", "PHP", "MySQL", "Blade", "CRUD", "Auth", "AWS"]}
          image="/src/assets/projects/sweetshop/ComingSoon.jpg"
          link="https://your-sweetshop-demo-link.com" // optional
          github="https://github.com/BeardedRaider/Sweet-Shop.git" // optional
        />
      </div>
    </section>
  );
}
