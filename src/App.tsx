import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ValueProps from "./components/LandingValueProps/ValueProps";

export default function App() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <TechStack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
