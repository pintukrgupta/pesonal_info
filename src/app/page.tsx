import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { AIProductivity } from "@/components/sections/AIProductivity";
import { Blog } from "@/components/sections/Blog";
import { Certifications } from "@/components/sections/Certifications";
import { Freelancing } from "@/components/sections/Freelancing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Experience />
      <Skills />
      <Projects />
      <AIProductivity />
      <Blog />
      <Certifications />
      <Freelancing />
      <Contact />
    </>
  );
}
