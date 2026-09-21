import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubContribution from "@/components/GithubContribution";
import Journey from "@/components/Journey";
import Passions from "@/components/Passions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CosmicBackground from "@/components/CosmicBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07070c] text-gray-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <CosmicBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubContribution />
      <Journey />
      <Passions />
      <Contact />
      <Footer />
    </main>
  );
}
