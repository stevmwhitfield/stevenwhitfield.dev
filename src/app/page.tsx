import Bio from "@/components/sections/Bio";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

const Home = () => {
  return (
    <>
      <div className="mt-20 mb-24 2xl:mb-36">
        <Hero />
      </div>
      <div className="mb-24 2xl:mb-36">
        <Bio />
      </div>
      <div className="mb-24 2xl:mb-36">
        <Projects />
      </div>
      <div className="mb-24 2xl:mb-36">
        <Skills />
      </div>
      <div className="mb-24 2xl:mb-36">
        <Contact />
      </div>
    </>
  );
};

export default Home;
