import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education"; // Import komponen baru
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-w-[1024px] bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Education /> {/* Tampilkan di sini */}
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}