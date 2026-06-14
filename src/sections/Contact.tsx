// src/sections/Contact.tsx

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
      </div>

      <h2 className="relative z-10 text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent fade-slide-up">
        Get In Touch
      </h2>

      <div
        className="relative z-10 max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg fade-slide-up"
        style={{ animationDelay: "0.15s" }}
      >
        <p className="text-gray-700 text-lg mb-8 text-center">
          Whether you want to discuss a project, explore a collaboration, or
          you’re looking to hire a dedicated developer — I’d love to hear from
          you.
        </p>

        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Social links */}
        <div
          className="mt-12 flex justify-center gap-8 text-gray-700 fade-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="https://linkedin.com"
            className="hover:text-purple-600 transition flex items-center gap-2"
          >
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/BeardedRaider"
            className="hover:text-purple-600 transition flex items-center gap-2"
          >
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
