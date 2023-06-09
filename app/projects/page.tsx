import { Metadata } from "next";
import { projects } from "../../data/projects";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import ProjectCard from "../../components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects - Steven Whitfield",
  description: "A few of the projects I have worked on recently.",
};

const ProjectsPage = () => {
  return (
    <Container>
      <PageHeader mainHeader={"Projects"} />
      <div className="grid justify-items-center gap-8 mb-12 md:grid-cols-2 md:w-fit md:gap-16 md:mx-auto">
        {projects.map((project, i) => {
          const { imagePath, title, tags, description, codeUrl, demoUrl } =
            project;

          return (
            <ProjectCard
              key={i}
              imagePath={imagePath}
              title={title}
              tags={tags}
              description={description}
              codeUrl={codeUrl}
              demoUrl={demoUrl}
            />
          );
        })}
      </div>
      <p className="italic text-center">
        This website was made with Next.js, Tailwind CSS, and TypeScript.
      </p>
    </Container>
  );
};

export default ProjectsPage;
