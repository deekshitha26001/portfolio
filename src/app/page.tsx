import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
import ThreeCanvas from "@/components/ThreeCanvas";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* 3D WebGL Background Canvas */}
      <ThreeCanvas />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />

      {/* Footer & Bottom Dock */}
      <Footer />
      <FloatingDock />
    </main>
  );
}
