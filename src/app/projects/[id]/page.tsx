import PageHeader from "@/components/basic/PageHeader";
import { getAllProjectIds, getProjectData } from "@/lib/projects";

import Link from "next/link";

export const generateStaticParams = async () => {
  const projectPaths = await getAllProjectIds();

  return projectPaths.map((project) => ({
    id: project.params.id
  }));
};

const getData = async (id: string) => {
  const projectData = await getProjectData(id);
  return projectData;
};

const Project = async ({ params }: { params: { id: string } }) => {
  const { id, title, repo, live, date, contentHtml } = await getData(params.id);

  const parsedDate = new Date(date + "T12:00:00-04:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <>
      <section id={id} className="container mx-auto flex flex-col items-start mt-12 mb-6">
        <PageHeader text={title} />
        <p>
          Last updated: <time dateTime={date}>{parsedDate}</time>
        </p>
      </section>
      <div className="flex gap-x-4 mb-6">
        {repo ? (
          <Link href={repo} target="_blank" rel="noreferrer" className="hover:text-primary">
            View Code
          </Link>
        ) : (
          ""
        )}
        {live ? (
          <>
            <div>&middot;</div>
            <Link href={live} target="_blank" rel="noreferrer" className="hover:text-primary">
              See Live
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
      <section>
        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
    </>
  );
};

export default Project;
