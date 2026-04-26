// src/sections/About.tsx

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 shadow-lg flex items-center justify-center text-gray-600 text-lg">
            Photo
          </div>
        </div>

        {/* Bio */}
        <div className="text-gray-700 leading-relaxed text-lg">
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
