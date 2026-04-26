// src/components/Navbar.tsx
// A clean, minimal sticky navigation bar with smooth scrolling.

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div
          className="text-xl font-semibold cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          onClick={() => scrollTo("hero")}
        >
          Shane Crossman
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <button
            onClick={() => scrollTo("tech")}
            className="hover:text-purple-600 transition"
          >
            Tech
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-purple-600 transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-purple-600 transition"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-purple-600 transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-inner px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <button onClick={() => scrollTo("tech")}>Tech</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
}
