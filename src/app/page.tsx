import Bio from "@/components/sections/Bio";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <Bio />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
