// src/sections/About.tsx
import ShanePhoto from "../assets/about/me.png";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow (matches Hero) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
      </div>

      <h2 className="relative z-10 text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent fade-slide-up">
        About Me
      </h2>

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div
          className="flex justify-center fade-slide-up"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 shadow-lg p-1">
            <img
              src={ShanePhoto}
              alt="Shane Crossman"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div
          className="text-gray-700 leading-relaxed text-lg fade-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="mb-6">
            I’m <span className="font-semibold">Shane Crossman</span>, a web and
            mobile developer based in Scotland. I specialise in building clean,
            modern, responsive applications with a strong focus on user
            experience.
          </p>

          <p className="mb-6">
            I enjoy creating real-world, practical solutions — from full PWAs
            with geolocation and camera APIs, to modern client websites and
            polished UI components. My work blends technical skill with
            thoughtful design.
          </p>

          <p>
            I’m always learning, always improving, and always looking for new
            challenges that push my skills further.
          </p>
        </div>
      </div>
    </section>
  );
}
