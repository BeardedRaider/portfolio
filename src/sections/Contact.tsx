// src/sections/Contact.tsx
import { useState } from "react";

export default function Contact() {
  // --- Form state ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Controlled input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Reset form fields after successful send
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");

    // Reset hCaptcha widget
    if ((window as any).hcaptcha) {
      (window as any).hcaptcha.reset();
    }
  };

  // --- Handle form submission ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "93d71562-cac2-4e5f-a02c-f40ce2b6d115");

      // Required fields
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      // Web3Forms REQUIRED aliases
      formData.append("from_name", name);
      formData.append("from_email", email);

      // --- MANUAL hCaptcha token (required for free key mode) ---
      const token = (window as any).hcaptcha?.getResponse();
      if (!token) {
        alert("Please complete the captcha.");
        setIsSubmitting(false);
        return;
      }
      formData.append("h-captcha-response", token);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        resetForm();
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        alert("Something went wrong sending your message.");
      }
    } catch (err) {
      alert("Network error — please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
      </div>

      {/* Section heading */}
      <h2 className="relative z-10 text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent fade-slide-up">
        Get In Touch
      </h2>

      {/* Glowing border wrapper */}
      <div className="relative z-10 max-w-3xl mx-auto p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-borderGlow">
        {/* Inner card */}
        <div className="bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg">
          {/* Success message */}
          {isSuccess && (
            <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800 text-center animate-fadeIn">
              Message sent successfully — I’ll get back to you soon!
            </div>
          )}

          {/* Intro text */}
          <p className="text-gray-700 text-lg mb-8 text-center">
            Whether you want to discuss a project, collaborate, or you’re
            looking to hire a dedicated developer — I’d love to hear from you.
          </p>

          {/* Contact form */}
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>

            {/* --- MANUAL hCaptcha widget (free key mode) --- */}
            <div
              className="h-captcha"
              data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            ></div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 rounded-full shadow-lg font-medium transition-all 
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl hover:-translate-y-1"
                }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Social links */}
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
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/BeardedRaider"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-600 transition group"
            >
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
