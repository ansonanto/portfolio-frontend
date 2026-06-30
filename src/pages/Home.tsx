import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Research } from "@/components/sections/Research";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Publications } from "@/components/sections/Publications";
import { Skills } from "@/components/sections/Skills";
import { Blog } from "@/components/sections/Blog";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Education />
        <Publications />
        <Skills />
        <Blog />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
