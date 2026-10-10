import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import ScrollFx from "@/components/ScrollFx";
import { LanguageProvider } from "@/components/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="grain" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Marquee />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      <ScrollFx />
    </LanguageProvider>
  );
}
