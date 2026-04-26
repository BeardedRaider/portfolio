// src/sections/Hero.tsx

// The Hero section is the first thing visitors see.
// It introduces your name, your role, and gives two clear actions.
// This component is intentionally simple and focused.

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient blob */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-br from-blue-300/40 via-purple-300/40 to-pink-300/40 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
          Shane Crossman
        </h1>

        <p className="text-3xl md:text-4xl text-gray-700 mb-12">
          Web & App Developer
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-gray-800 font-medium">
            View My Work
          </button>

          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 font-medium">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
