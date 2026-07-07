import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import { LanguageProvider } from "@/components/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </LanguageProvider>
  );
}
