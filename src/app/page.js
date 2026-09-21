import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import TerminalTabs from "@/components/TerminalTabs/TerminalTabs";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TerminalTabs />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
