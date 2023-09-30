import ProjectLink from "@/components/advanced/ProjectLink";
import Section from "@/components/basic/Section";
import SectionHeader from "@/components/basic/SectionHeader";
import { getSortedProjectsData } from "@/lib/projects";

const getData = async () => {
  const projects = await getSortedProjectsData();

  return projects;
};

const Projects = async () => {
  const projects = await getData();

  return (
    <Section id={"Projects"}>
      <SectionHeader text={"Recent Projects"} />
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:max-w-3xl md:grid-cols-2">
        {projects.map(({ id, title, tags }) => (
          <ProjectLink key={id} title={title} tags={tags} href={`/projects/${id}`} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
