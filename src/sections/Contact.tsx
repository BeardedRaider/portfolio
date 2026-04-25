// src/sections/Contact.tsx

export default function Contact() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg">
        <p className="text-gray-700 text-lg mb-8 text-center">
          Whether you want to discuss a project, collaborate, or just say hello
          — I’d love to hear from you.
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
        <div className="mt-12 flex justify-center gap-6 text-gray-700">
          <a href="#" className="hover:text-purple-600 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
