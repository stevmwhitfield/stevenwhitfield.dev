import Bio from "@/components/advanced/sections/Bio";
import Contact from "@/components/advanced/sections/Contact";
import Hero from "@/components/advanced/sections/Hero";
import Projects from "@/components/advanced/sections/Projects";
import Skills from "@/components/advanced/sections/Skills";

const Home = () => {
  return (
    <div className="mt-20 flex flex-col gap-y-24 2xl:gap-y-36">
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
