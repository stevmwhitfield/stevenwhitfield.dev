import ProjectLink from "@/components/advanced/ProjectLink";
import Section from "@/components/basic/Section";
import SectionHeader from "@/components/basic/SectionHeader";

const Projects = () => {
  return (
    <Section id={"Projects"}>
      <SectionHeader text={"Recent Projects"} />
      <p className="text-sm italic mb-3 xl:text-base">
        Unique pages for each project coming soon! For now, take a peek at their source code on GitHub.
      </p>
      <p className="text-sm italic mb-6 xl:text-base">* - Unfortunately, these projects are private.</p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:max-w-3xl md:grid-cols-2">
        <ProjectLink
          title={"Portfolio"}
          tags={["Next.js", "TypeScript", "Tailwind CSS", "ESLint"]}
          href={"https://github.com/stevmwhitfield/stevenwhitfield.dev"}
        />
        <ProjectLink title={"Landfill AR*"} tags={["C#", "Unity", "APIs", "Agile"]} />
        <ProjectLink
          title={"Jump Racer"}
          tags={["C#", "Unity", "OOP", "Network"]}
          href={"https://github.com/stevmwhitfield/cap4056-final-project"}
        />
        <ProjectLink
          title={"Phoenix Tech Online Shop"}
          tags={["React", "SCSS", "Node.js", "Express", "MongoDB"]}
          href={"https://github.com/calvinhariprasad/E-Commerce-Solution"}
        />
        <ProjectLink
          title={"Chawla Media"}
          tags={["Gatsby", "SCSS", "CMS", "GraphQL"]}
          href={"https://github.com/stevmwhitfield/chawla-media-2"}
        />
      </div>
    </Section>
  );
};

export default Projects;
