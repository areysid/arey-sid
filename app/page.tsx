import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import StorySection from "@/components/story/StorySection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StorySection />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
