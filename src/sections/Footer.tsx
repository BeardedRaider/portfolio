// src/sections/Footer.tsx

export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-600 text-sm">
      <div className="max-w-4xl mx-auto px-6">
        {/* Gradient divider line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 opacity-60"></div>

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Shane Crossman</span>. All rights
          reserved.
        </p>

        <p className="mt-2 opacity-70">
          Built with React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
