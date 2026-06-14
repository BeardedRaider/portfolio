// src/sections/Projects.tsx

import ProjectCard from "../components/ProjectCard";
import { useInView } from "../hooks/useInView";
import campusHero from "../assets/projects/campus/hero-desktop.jpg";
import highlandHero from "../assets/projects/highland/hero.jpeg";
import growthHero from "../assets/projects/growth/cropped2.jpg";
import sweetshopHero from "../assets/projects/sweetshop/ComingSoon.jpg";

export default function Projects() {
  const grid = useInView();

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div
        ref={grid.ref}
        className={`grid gap-10 md:grid-cols-2 max-w-6xl mx-auto transition-opacity duration-[1200ms] ${
          grid.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
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
          image={campusHero}
          link="https://campus-safety-project.vercel.app"
          github="https://github.com/BeardedRaider/Campus-Safety-Project.git"
        />

        <ProjectCard
          title="Paisley Highland Games Web App"
          description="A complete React + Tailwind web application designed to manage event information, competition registration, volunteer applications, and results for the fictional Paisley Highland Games.
          Features include dynamic routing, mock API data, responsive UI, and a clean, modern design inspired by Scottish cultural heritage."
          tags={["React", "Tailwind", "React Router", "UX/UI", "Mock APIs"]}
          image={highlandHero}
          link="https://paisleyhighlandgames.netlify.app"
          github="https://github.com/BeardedRaider/paisley-highland-games.git"
        />

        <ProjectCard
          title="My Development Journey — 2022 to 2026"
          description="A side-by-side comparison of my first ever website and one of my modern React builds, showing how my skills have evolved across design, development, and UX."
          tags={[
            "Growth",
            "Before/After",
            "Web Development",
            "Learning Journey",
          ]}
          image={growthHero}
          imageClassName="object-center"
          extraLinks={[
            {
              label: "Bike King Borders",
              url: "https://bikekingboarders.netlify.app/",
            },
            {
              label: "Paisley Highland Games",
              url: "https://paisleyhighlandgames.netlify.app",
            },
          ]}
        />

        <ProjectCard
          title="Next Project Launching Soon"
          description="I’m currently designing and developing my next major portfolio project. This slot will be updated once the build reaches its first milestone."
          tags={["In Progress", "Full‑Stack", "Coming Soon"]}
          image={sweetshopHero}
          link={undefined}
          github={undefined}
        />
      </div>
    </section>
  );
}
