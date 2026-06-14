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

      {/* Contact Card with animated glowing border */}
      <div
        className="
    relative z-10 max-w-3xl mx-auto p-[2px] rounded-2xl 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    animate-borderGlow
  "
      >
        {/* Inner content */}
        <div className="bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg">
          <p className="text-gray-700 text-lg mb-8 text-center">
            Whether you want to discuss a project, collaborate, or you’re
            looking to hire a dedicated developer — I’d love to hear from you.
          </p>

          {/* Your form stays unchanged */}
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

          {/* Social links (already upgraded earlier) */}
          <div
            className="mt-12 flex justify-center gap-8 text-gray-700 fade-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-600 transition group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 transition-transform group-hover:-translate-y-1"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.7 2.6 4.7 6V24h-4v-8.3c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8z" />
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/BeardedRaider"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-600 transition group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 transition-transform group-hover:-translate-y-1"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.65.23 2.87.11 3.17.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
